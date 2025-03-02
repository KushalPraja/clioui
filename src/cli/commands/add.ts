import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getProjectRoot } from '../utils/project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COMPONENTS = {
  button: {
    files: ['button.tsx', 'button.stories.tsx', 'button.md'],
    dependencies: ['clsx', 'tailwind-merge'],
  },
  dialog: {
    files: ['dialog.tsx', 'dialog.stories.tsx', 'dialog.md'],
    dependencies: ['@radix-ui/react-dialog'],
  },
  select: {
    files: ['select.tsx', 'select.stories.tsx', 'select.md'],
    dependencies: ['@radix-ui/react-select'],
  },
  tabs: {
    files: ['tabs.tsx', 'tabs.stories.tsx', 'tabs.md'],
    dependencies: ['@radix-ui/react-tabs'],
  },
  tooltip: {
    files: ['tooltip.tsx', 'tooltip.stories.tsx', 'tooltip.md'],
    dependencies: ['@radix-ui/react-tooltip'],
  },
  card: {
    files: ['card.tsx', 'card.stories.tsx', 'card.md'],
    dependencies: ['clsx', 'tailwind-merge'],
  },
  accordion: {
    files: ['accordion.tsx', 'accordion.stories.tsx', 'accordion.md'],
    dependencies: ['@radix-ui/react-accordion'],
  },
  alert: {
    files: ['alert.tsx', 'alert.stories.tsx', 'alert.md'],
    dependencies: ['clsx', 'tailwind-merge'],
  },
  toggle: {
    files: ['toggle.tsx', 'toggle.stories.tsx', 'toggle.md'],
    dependencies: ['@radix-ui/react-toggle'],
  },
} as const;

export async function add(name: string, options: { yes?: boolean }) {
  const root = getProjectRoot();
  const component = COMPONENTS[name as keyof typeof COMPONENTS];

  if (!component) {
    console.error(`Component "${name}" not found in registry`);
    console.log('Available components:', Object.keys(COMPONENTS).join(', '));
    return;
  }

  // Create component directory
  const componentDir = join(root, 'components/ui', name);
  mkdirSync(componentDir, { recursive: true });

  // Copy component files
  component.files.forEach(file => {
    const sourcePath = join(__dirname, '../../../components/ui', name, file);
    const targetPath = join(componentDir, file);

    if (existsSync(targetPath) && !options.yes) {
      console.log(`⚠️ ${file} already exists. Use -y to overwrite.`);
      return;
    }

    try {
      copyFileSync(sourcePath, targetPath);
      console.log(`✓ Added ${file}`);
    } catch (error) {
      console.error(`Failed to copy ${file}:`, error);
    }
  });

  // Suggest dependencies
  if (component.dependencies.length > 0) {
    console.log('\nRequired dependencies:');
    console.log(`npm install ${component.dependencies.join(' ')}`);
  }
}

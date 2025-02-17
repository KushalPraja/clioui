import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getProjectRoot } from '../utils/project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const REGISTRY: Record<string, string> = {
  button: 'components/ui/button.tsx',
  dialog: 'components/ui/dialog.tsx',
  'dropdown-menu': 'components/ui/dropdown-menu.tsx',
  select: 'components/ui/select.tsx',
  tabs: 'components/ui/tabs.tsx',
  tooltip: 'components/ui/tooltip.tsx',
};

export async function add(name: string) {
  const root = getProjectRoot();
  
  if (!REGISTRY[name]) {
    console.error(`Component "${name}" not found in registry`);
    return;
  }

  // Navigate from dist/cli/commands to src/components/ui
  const componentPath = join(__dirname, '../../../src', REGISTRY[name]);
  const targetPath = join(root, REGISTRY[name]);

  try {
    copyFileSync(componentPath, targetPath);
    console.log(`✓ Added ${name} component`);
    console.log(`  -> ${targetPath}`);
  } catch (error) {
    console.error('Failed to add component:', error);
  }
}

import { mkdirSync, copyFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import ora from 'ora';
import { getProjectRoot } from '../utils/project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function init(options: { yes?: boolean }) {
  const spinner = ora('Initializing ClioUI project').start();

  try {
    const root = getProjectRoot();
    
    // Create directory structure
    const dirs = [
      'components',
      'components/ui',
      'styles',
    ];

    dirs.forEach(dir => {
      mkdirSync(join(root, dir), { recursive: true });
    });

    // Copy template files
    const templates = [
      ['styles/globals.css', 'styles/globals.css'],
      ['tsconfig.json', 'tsconfig.json'],
      ['components/ui/index.ts', 'components/ui/index.ts'],
    ];

    templates.forEach(([src, dest]) => {
      const sourcePath = join(__dirname, '../../../templates', src);
      const targetPath = join(root, dest);
      copyFileSync(sourcePath, targetPath);
    });

    // Update or create package.json
    const packageJson = {
      dependencies: {
        "react": "^18.0.0",
        "react-dom": "^18.0.0",
        "clsx": "^2.0.0",
        "tailwind-merge": "^1.14.0"
      },
      devDependencies: {
        "typescript": "^5.0.0",
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0"
      }
    };

    writeFileSync(join(root, 'package.json'), JSON.stringify(packageJson, null, 2));

    spinner.succeed(chalk.green('ClioUI project initialized successfully!'));
    console.log('\nNext steps:');
    console.log('1. Run: npm install');
    console.log('2. Add components: npx clioui add <component-name>');

  } catch (error) {
    spinner.fail(chalk.red('Failed to initialize project'));
    console.error(error);
    process.exit(1);
  }
}

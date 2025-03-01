import { join } from 'path';
import ora from 'ora';
import chalk from 'chalk';
import { getProjectRoot } from '../utils/project.js';
import { organizeAssets } from '../utils/organize.js';

export async function organize(source: string, options: { dest?: string }) {
  const spinner = ora('Organizing assets').start();
  
  try {
    const root = getProjectRoot();
    const sourcePath = join(root, source);
    const targetRoot = options.dest ? join(root, options.dest) : root;
    
    const success = organizeAssets(sourcePath, targetRoot);
    
    if (success) {
      spinner.succeed(chalk.green('Assets organized successfully'));
      console.log('\nOrganized into:');
      console.log('- assets/images: Image files (.png, .jpg, .svg, etc.)');
      console.log('- assets/icons: Icon files (.ico, .svg)');
      console.log('- assets/fonts: Font files (.ttf, .woff, etc.)');
      console.log('- styles: Style files (.css, .scss, .less)');
      console.log('- assets/other: Other asset files');
    } else {
      spinner.fail(chalk.red('Failed to organize assets'));
    }
  } catch (error) {
    spinner.fail(chalk.red('Error organizing assets'));
    console.error(error);
  }
}

import { mkdirSync, existsSync, readdirSync, statSync, copyFileSync } from 'fs';
import { join, extname, basename } from 'path';
import chalk from 'chalk';

type AssetType = 'image' | 'icon' | 'font' | 'style' | 'other';

const ASSET_EXTENSIONS: Record<AssetType, string[]> = {
  image: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'],
  icon: ['.ico', '.svg'],
  font: ['.ttf', '.woff', '.woff2', '.eot', '.otf'],
  style: ['.css', '.scss', '.less'],
  other: ['.json', '.md', '.txt']
};

/**
 * Organizes assets into appropriate directories based on their types
 */
export function organizeAssets(sourcePath: string, targetRoot: string) {
  if (!existsSync(sourcePath)) {
    console.error(chalk.red(`Source path ${sourcePath} does not exist`));
    return false;
  }

  // Create target directories
  const targetDirs = {
    image: join(targetRoot, 'assets/images'),
    icon: join(targetRoot, 'assets/icons'),
    font: join(targetRoot, 'assets/fonts'),
    style: join(targetRoot, 'styles'),
    other: join(targetRoot, 'assets/other')
  };

  Object.values(targetDirs).forEach(dir => {
    mkdirSync(dir, { recursive: true });
  });

  // Get all files from source directory
  const processDirectory = (dir: string) => {
    const files = readdirSync(dir);
    
    files.forEach(file => {
      const filePath = join(dir, file);
      const stat = statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else {
        const fileExt = extname(file).toLowerCase();
        let assetType: AssetType = 'other';
        
        // Determine asset type based on extension
        for (const [type, extensions] of Object.entries(ASSET_EXTENSIONS)) {
          if (extensions.includes(fileExt)) {
            assetType = type as AssetType;
            break;
          }
        }
        
        // Copy file to appropriate directory
        const targetPath = join(targetDirs[assetType], basename(file));
        copyFileSync(filePath, targetPath);
        console.log(chalk.green(`✓ Organized: ${file} -> ${targetPath}`));
      }
    });
  };

  try {
    processDirectory(sourcePath);
    return true;
  } catch (error) {
    console.error(chalk.red('Failed to organize assets:'), error);
    return false;
  }
}

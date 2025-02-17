import { copyFileSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { getProjectRoot } from '../utils/project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function init() {
  const root = getProjectRoot();
  
  // Create directories
  mkdirSync(join(root, 'components/ui'), { recursive: true });
  mkdirSync(join(root, 'lib'), { recursive: true });

  // Copy utils
  writeFileSync(
    join(root, 'lib/utils.ts'),
    `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`
  );

  console.log('✓ Created lib/utils.ts');
  console.log('✓ Created components/ui directory');
  console.log('\nMojoUI is ready! You can now add components using:');
  console.log('\n  npx mojoui add <component>');
}

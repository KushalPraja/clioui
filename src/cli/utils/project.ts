import { existsSync } from 'fs';
import { join } from 'path';

export function getProjectRoot(): string {
  const cwd = process.cwd();
  
  // Check for package.json to verify we're in a Node project
  if (!existsSync(join(cwd, 'package.json'))) {
    throw new Error('Could not find package.json in current directory');
  }

  return cwd;
}

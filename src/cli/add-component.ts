import { join } from 'path';
import { copyFileSync, mkdirSync } from 'fs';

export const addComponent = (componentName: string) => {
  const componentPath = join(__dirname, '../components/ui', `${componentName}.tsx`);
  const targetPath = join(process.cwd(), 'components', componentName);
  
  try {
    mkdirSync(join(process.cwd(), 'components'), { recursive: true });
    copyFileSync(componentPath, targetPath);
    console.log(`Added ${componentName} to your project`);
  } catch (error) {
    console.error(`Failed to add component: ${error.message}`);
  }
};

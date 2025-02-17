#!/usr/bin/env node
import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';

const program = new Command();

program
  .name('clioui')
  .description('ClioUI CLI - React Component Library Builder')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize a new MojoUI project')
  .option('-y, --yes', 'Skip confirmation prompt')
  .action(init);

program
  .command('add <component>')
  .description('Add a component to your project')
  .option('-y, --yes', 'Skip confirmation prompt')
  .action((component, options) => add(component, options));

program.parse();

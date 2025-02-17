#!/usr/bin/env node
import { Command } from 'commander';
import { add } from './commands/add.js';
import { init } from './commands/init.js';

const program = new Command();

program
  .name('mojoui')
  .description('CLI for adding MojoUI components to your project')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize MojoUI in your project')
  .action(init);

program
  .command('add')
  .description('Add a component to your project')
  .argument('<component>', 'component to add')
  .option('-y, --yes', 'Skip confirmation prompt', false)
  .action(add);

program.parse();

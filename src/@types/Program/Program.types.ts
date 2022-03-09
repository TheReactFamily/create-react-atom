import type { Command } from 'commander';

export interface IProgram extends Command {
  typescript?: boolean;
  yes?: boolean;
}

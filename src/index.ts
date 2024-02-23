import { Command } from 'commander';

export type Json = Record<string, string | null | boolean>;

export type CommandType = typeof Command;

export abstract class RenderCommand {
  options: Json;

  cmd: CommandType;

  strs: string;

  constructor(strs = '', options: Json = {}, cmd: CommandType) {
    this.strs = strs;
    this.options = options;
    this.cmd = cmd;
  }
  abstract init(): void;
  abstract exec(): void;
}

export const RenderCommander = Command;

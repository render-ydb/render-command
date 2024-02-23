# render-command

<p>
<a href="https://www.npmjs.com/package/@x.render/render-command" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-command" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-command" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-command" alt="NPM Downloads" /></a>

</p>

<br/>

## Introduce

An abstract base class for scaffold commands.

A specification for node scaffolding command development, init and exec methods must be implemented

## Usage

```sh
npm i @x.render/render-command -S
```

```javascript
import { RenderCommand, CommandType } from "@x.render/render-command";

class InitCommand extends RenderCommand {
  constructor(strs: string, options: Record<string, any>, cmd: CommandType) {
    super(strs, options, cmd);
    console.log(this.strs, this.options, this.cmd);
  }

  init() {}

  exec() {}
}
```

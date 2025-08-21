import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    let out = this.renderer.renderHeader(this.level, this.title);
    for (const child of this.children) {
      out += child.render();
    }
    return out;
  }
}

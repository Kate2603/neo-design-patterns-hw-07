import { BaseRenderer } from "./BaseRenderer";

export class MarkdownRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const l = Math.max(1, Math.min(6, level));
    return `${"#".repeat(l)} ${text}\n\n`;
  }
  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }
  renderList(items: string[]): string {
    const body = items.map((i) => `- ${i}`).join("\n");
    return `${body}\n\n`;
  }
}

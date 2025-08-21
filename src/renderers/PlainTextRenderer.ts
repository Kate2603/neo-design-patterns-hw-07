import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    // Простий текст: заголовок як є + порожній рядок
    return `${text}\n\n`;
  }
  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }
  renderList(items: string[]): string {
    const body = items.map((i) => `- ${i}`).join("\n");
    return `${body}\n\n`;
  }
}

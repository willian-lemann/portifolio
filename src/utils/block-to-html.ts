import { toHTML } from "@portabletext/to-html";

export function getHTMLFromBlocks(blocks: any) {
  return toHTML(blocks);
}

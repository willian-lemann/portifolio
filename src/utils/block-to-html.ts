import { toHTML, uriLooksSafe } from "@portabletext/to-html";

export function getHTMLFromBlocks(blocks: any) {
  return toHTML(blocks, {
    components: {
      listItem: (props) => {
        return `<li class="list-disc">${props?.children}</li>`;
      },
    },
  });
}

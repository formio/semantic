import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const node = ctx.node as { isRoot?: boolean };
  const content = ctx.content as string | undefined;
  const childNodes = ctx.childNodes as string[] | undefined;
  let html = "";
  if (node.isRoot) {
    html += `<div class="ui relaxed list">
      <div class="item" ref="root" role="listitem">`;
  } else {
    html += `<div ref="node" class="item tree__level" role="listitem">`;
  }
  if (content) {
    html += `<div ref="content" class="tree__node-content content">
      ${content}
    </div>`;
  }
  if (childNodes && childNodes.length) {
    html += `<div ref="childNodes" class="tree__node-children list" role="list">
      ${childNodes.join("")}
    </div>`;
  }
  if (node.isRoot) {
    html += `</div></div>`;
  } else {
    html += `</div>`;
  }
  return html;
};

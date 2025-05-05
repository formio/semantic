import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  return `<div id="${ctx.id}" class="field ${ctx.classes}"${ctx.styles ? ` style="${ctx.styles}"` : ""} ref="component">
    ${
      ctx.visible
        ? `
    ${ctx.children}
    <div ref="messageContainer"></div>
    `
        : ""
    }
  </div>`;
};

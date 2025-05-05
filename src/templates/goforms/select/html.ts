import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const self = ctx.self as { itemValueForHTMLMode: (v: unknown) => string };
  const value = ctx.value ? self.itemValueForHTMLMode(ctx.value) : "-";
  return `<div ref="value">${value}</div>`;
};

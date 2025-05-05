export interface AlertTemplateContext {
  attrs: Record<string, string>;
  message: string;
}

export default (ctx: AlertTemplateContext) => {
  let attrs = "";
  for (const attr in ctx.attrs) {
    if (attr === "class") {
      attrs += `${attr}="ui message ${ctx.attrs[attr]}" `;
    } else {
      attrs += `${attr}="${ctx.attrs[attr]}" `;
    }
  }
  return `<div ${attrs.trim()}>${ctx.message}</div>`;
};

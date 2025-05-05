import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  // Type assertions for known structure
  const input = ctx.input as {
    type: string;
    attr?: Record<string, string>;
    content?: string;
    labelClass?: string;
    label?: string;
  };
  const component = ctx.component as { tooltip?: string };
  const self = ctx.self as { labelIsHidden: () => boolean };
  const iconClass = ctx.iconClass as (icon: string) => string;

  const attrs = Object.entries(input.attr || {})
    .map(([attr, value]) => `${attr}="${value}"`)
    .join(" ");
  return `<div class="ui checkbox">
    <${input.type}
      ref="input"
      id="${ctx.id}"
      ${attrs}
      ${ctx.checked ? "checked=true" : ""}
    >
    </${input.type}>
    <label class="${input.labelClass || ""}" for="${ctx.id}">
      ${input.content || ""}
      ${!self.labelIsHidden() ? `<span>${input.label || ""}</span>` : ""}
    </label>
    ${component.tooltip ? `<i ref="tooltip" class="${iconClass("question-sign")} text-muted" data-tooltip="${component.tooltip}"></i>` : ""}
  </div>`;
};

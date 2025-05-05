import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  // Type assertions for known structure
  const input = ctx.input as {
    type: string;
    attr?: Record<string, string>;
    content?: string;
    labelClass?: string;
  };
  const component = ctx.component as {
    theme?: string;
    customClass?: string;
    leftIcon?: string;
    rightIcon?: string;
    tooltip?: string;
  };
  const transform = ctx.transform as (type: string, value: unknown) => string;
  const iconClass = ctx.iconClass as (icon: string) => string;

  const attrs = Object.entries(input.attr || {})
    .map(([attr, value]) => `${attr}="${value}"`)
    .join(" ");
  return `<${input.type}
    ref="button"
    class="ui button ${transform("theme", component.theme)} ${component.customClass || ""}"
    ${attrs}
  >
  ${component.leftIcon ? `<i class="${component.leftIcon}"></i>&nbsp;` : ""}
  ${input.content || ""}
  ${component.tooltip ? `<i ref="tooltip" class="${iconClass("question-sign")}" text-muted" data-tooltip="${component.tooltip}"></i>` : ""}
  ${component.rightIcon ? `&nbsp;<i class="${component.rightIcon}"></i>` : ""}
  </${input.type}>
  <div ref="buttonMessageContainer">
    <span class="help-block" ref="buttonMessage"></span>
  </div>`;
};

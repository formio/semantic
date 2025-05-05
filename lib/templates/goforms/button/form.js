export default (ctx) => {
    // Type assertions for known structure
    const input = ctx.input;
    const component = ctx.component;
    const transform = ctx.transform;
    const iconClass = ctx.iconClass;
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

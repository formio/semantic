export default (ctx) => {
    // Type assertions for known structure
    const input = ctx.input;
    const component = ctx.component;
    const self = ctx.self;
    const iconClass = ctx.iconClass;
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

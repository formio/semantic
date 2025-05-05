export default (ctx) => {
    const input = ctx.input;
    const instance = ctx.instance;
    return `<div class="fields ${ctx.inline ? "inline" : "grouped"}">
    ${Array.isArray(ctx.values)
        ? ctx.values
            .map((item) => `
      <div class="field">
        <div class="ui ${input?.attr?.type === "radio" ? "radio" : ""} checkbox" ref="wrapper">
          <${input?.type}
            ref="input"
            ${Object.entries(input?.attr || {})
            .map(([attr, val]) => `${attr}="${val}"`)
            .join(" ")}
            value="${item.value}"
            ${ctx.value === item.value || (typeof ctx.value === "object" && ctx.value && Object.prototype.hasOwnProperty.call(ctx.value, item.value) && ctx.value[item.value]) ? "checked" : ""}
            ${item.disabled ? "disabled" : ""}
            id="${instance?.root?.id}-${ctx.id}-${ctx.row}-${item.value}"
          >
          <label class="" for="${instance?.root?.id}-${ctx.id}-${ctx.row}-${item.value}">
            <span>${ctx.t ? ctx.t(item.label) : item.label}</span>
          </label>
        </div>
      </div>
    `)
            .join("")
        : ""}
  </div>`;
};

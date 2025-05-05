export default (ctx) => {
    const attrs = ctx.attrs;
    const option = ctx.option;
    const attrString = Object.entries(attrs || {})
        .map(([attr, val]) => `${attr}="${val}"`)
        .join(" ");
    const selected = ctx.selected ? 'selected="selected"' : "";
    return `<option ${selected} value='${option.value}' ${attrString}>
    ${ctx.t ? ctx.t(option.label) : option.label}
  </option>`;
};

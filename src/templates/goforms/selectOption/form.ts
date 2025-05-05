import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const attrs = ctx.attrs as Record<string, string>;
  const option = ctx.option as { value: string; label: string };
  const attrString = Object.entries(attrs || {})
    .map(([attr, val]) => `${attr}="${val}"`)
    .join(" ");
  const selected = ctx.selected ? 'selected="selected"' : "";
  return `<option ${selected} value='${option.value}' ${attrString}>
    ${ctx.t ? (ctx.t as (s: string) => string)(option.label) : option.label}
  </option>`;
};

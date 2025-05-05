import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const option = ctx.option as { label: string };
  const label = ctx.selected
    ? ctx.t
      ? (ctx.t as (s: string) => string)(option.label)
      : option.label
    : "";
  return `${label}`;
};

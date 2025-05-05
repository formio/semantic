import { TemplateContext } from "../types";

type RadioItem = {
  value: string;
  label: string;
};

export default (ctx: TemplateContext) => {
  const filtered = Array.isArray(ctx.values)
    ? ctx.values
        .filter(
          (item: RadioItem) =>
            ctx.value === item.value ||
            (typeof ctx.value === "object" &&
              ctx.value &&
              Object.prototype.hasOwnProperty.call(ctx.value, item.value) &&
              ctx.value[item.value]),
        )
        .map((item: RadioItem) =>
          ctx.t ? (ctx.t as (s: string) => string)(item.label) : item.label,
        )
        .join(", ")
    : "";
  return `<div ref="value">
    ${filtered}
  </div>`;
};

import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const icon = ctx.icon as string;
  const iconClass = ctx.iconClass as (icon: string) => string;
  return `<i class="${iconClass(icon)}"></i>`;
};

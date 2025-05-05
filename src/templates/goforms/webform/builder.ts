import { TemplateContext } from "../types";

export default (
  ctx: TemplateContext,
) => `<div class="ui visible message"><p>${ctx.t ? (ctx.t as (s: string) => string)(ctx.component && (ctx.component as { title: string }).title) : ctx.component && (ctx.component as { title: string }).title}</p></div>
`;

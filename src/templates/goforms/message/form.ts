import { TemplateContext } from "../types";

export default (
  ctx: TemplateContext,
) => `<div class="ui pointing red basic label ${ctx.level}">
  ${ctx.message}
</div>
`;

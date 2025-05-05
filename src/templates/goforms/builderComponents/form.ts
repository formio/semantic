import { TemplateContext } from "../types";

export default (
  ctx: TemplateContext,
) => `<div class="builder-components drag-container ${ctx.type}" ref="${ctx.key}-container">
  ${ctx.html}
</div>
`;

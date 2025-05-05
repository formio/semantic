import { TemplateContext } from "../types";

export default (
  ctx: TemplateContext,
) => `<div class="${ctx.classes} ui form" ref="webform" novalidate>${ctx.children}</div>
`;

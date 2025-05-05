import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => `<div class="ui secondary segment">
  <div class="content" ref="${ctx.nestedKey}">
    ${ctx.children}
  </div>
</div>
`;

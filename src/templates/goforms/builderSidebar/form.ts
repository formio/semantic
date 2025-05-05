import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const groups = ctx.groups as string[];
  return `
    <div class="builder-sidebar">
      ${groups.map((group: string) => `${group}`).join("")}
    </div>
  `;
};

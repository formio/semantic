import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const component = ctx.component as { columns: { width: string }[] };
  const transform = ctx.transform as (type: string, width: string) => string;
  return `
    <div class="columns-row">
      ${component.columns
        .map(
          (column) =>
            `<div class="${transform("columns", column.width)} wide column" ref="${ctx.columnKey}">${ctx.children}</div>`,
        )
        .join("")}
    </div>
  `;
};

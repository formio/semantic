import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const component = ctx.component as {
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;
    header?: string[];
  };
  const t = ctx.t as (s: string) => string;
  const tableComponents = ctx.tableComponents as unknown[][];
  const cellClassName = ctx.cellClassName as string | undefined;
  const tableKey = ctx.tableKey as string | undefined;
  const rowIndex = ctx.rowIndex as number | undefined;
  const id = ctx.id as string | undefined;

  const headerHtml =
    component.header && component.header.length > 0
      ? `<thead><tr>${component.header.map((header) => `<th>${t(header)}</th>`).join("")}</tr></thead>`
      : "";

  const bodyHtml = tableComponents
    .map(
      (row, _rowIdx) =>
        `<tr ref="row-${id}">
        ${row
          .map(
            (column, _colIdx) =>
              `<td ref="${tableKey}-${rowIndex}"${cellClassName ? ` class="${cellClassName}"` : ""}>${column}</td>`,
          )
          .join("")}
      </tr>`,
    )
    .join("");

  return `<table class="ui table
    ${component.striped ? "striped" : ""}
    ${component.bordered ? "celled" : ""}
    ${component.hover ? "selectable" : ""}
    ${component.condensed ? "compact" : "padded"}
  ">
  ${headerHtml}
  <tbody>
    ${bodyHtml}
  </tbody>
</table>`;
};

import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  // Type assertions for known structure
  const component = ctx.component as {
    layoutFixed?: boolean;
    reorder?: boolean;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;
    addAnother?: string;
  };
  const columns = ctx.columns as Array<{
    validate?: { required?: boolean };
    hideLabel?: boolean;
    label?: string;
    title?: string;
    tooltip?: string;
  }>;
  const rows = ctx.rows as unknown[];
  const t = ctx.t as (s: string) => string;
  const iconClass = ctx.iconClass as (icon: string) => string;
  const datagridKey = ctx.datagridKey as string;
  const hasAddButton = !!ctx.hasAddButton;
  const hasBottomSubmit = !!ctx.hasBottomSubmit;
  const hasHeader = !!ctx.hasHeader;
  const hasExtraColumn = !!ctx.hasExtraColumn;
  const addButtonLocation = ctx.addButtonLocation as string;
  const addButton = ctx.addButton as string;
  const numColumns = Number(ctx.numColumns);

  const tableStyle = component.layoutFixed
    ? 'style="table-layout: fixed;"'
    : "";
  const header = hasHeader
    ? `
    <thead>
      <tr>
        ${component.reorder ? "<th></th>" : ""}
        ${columns
          .map(
            (col) => `
          <th class="${col.validate && col.validate.required ? "field-required" : ""}">
            ${col.hideLabel ? "" : t(col.label || col.title || "")}
            ${col.tooltip ? ` <i ref="tooltip" data-title="${col.tooltip}" class="${iconClass("question-sign")} text-muted" data-tooltip="${col.tooltip}"></i>` : ""}
          </th>
        `,
          )
          .join("")}
        ${
          hasExtraColumn
            ? `<th>
          ${hasAddButton && addButtonLocation === "header" ? addButton : ""}
        </th>`
            : ""
        }
      </tr>
    </thead>
  `
    : "";

  const body = rows
    .map(
      (row) => `
    <tr>${row}</tr>
  `,
    )
    .join("");

  const footer =
    hasAddButton && hasBottomSubmit
      ? `
    <tfoot>
      <tr>
        <td colspan="${numColumns + 1}">
          <button class="ui button primary" ref="${datagridKey}-addRow">
            <i class="${iconClass("plus")}"></i> ${t(component.addAnother || "Add Another")}
          </button>
        </td>
      </tr>
    </tfoot>
  `
      : "";

  return `<table class="ui table datagrid-table
    ${component.striped ? "striped" : ""}
    ${component.bordered ? "celled" : ""}
    ${component.hover ? "selectable" : ""}
    ${component.condensed ? "compact" : "padded"}
    " ${tableStyle}>
    ${header}
    <tbody ref="${datagridKey}-tbody">
      ${body}
    </tbody>
    ${footer}
  </table>`;
};

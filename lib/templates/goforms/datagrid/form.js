export default (ctx) => {
    // Type assertions for known structure
    const component = ctx.component;
    const columns = ctx.columns;
    const rows = ctx.rows;
    const t = ctx.t;
    const iconClass = ctx.iconClass;
    const datagridKey = ctx.datagridKey;
    const hasAddButton = !!ctx.hasAddButton;
    const hasBottomSubmit = !!ctx.hasBottomSubmit;
    const hasHeader = !!ctx.hasHeader;
    const hasExtraColumn = !!ctx.hasExtraColumn;
    const addButtonLocation = ctx.addButtonLocation;
    const addButton = ctx.addButton;
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
            .map((col) => `
          <th class="${col.validate && col.validate.required ? "field-required" : ""}">
            ${col.hideLabel ? "" : t(col.label || col.title || "")}
            ${col.tooltip ? ` <i ref="tooltip" data-title="${col.tooltip}" class="${iconClass("question-sign")} text-muted" data-tooltip="${col.tooltip}"></i>` : ""}
          </th>
        `)
            .join("")}
        ${hasExtraColumn
            ? `<th>
          ${hasAddButton && addButtonLocation === "header" ? addButton : ""}
        </th>`
            : ""}
      </tr>
    </thead>
  `
        : "";
    const body = rows
        .map((row) => `
    <tr>${row}</tr>
  `)
        .join("");
    const footer = hasAddButton && hasBottomSubmit
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

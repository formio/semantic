export default (ctx) => {
    const component = ctx.component;
    const t = ctx.t;
    const tableComponents = ctx.tableComponents;
    const cellClassName = ctx.cellClassName;
    const tableKey = ctx.tableKey;
    const rowIndex = ctx.rowIndex;
    const id = ctx.id;
    const headerHtml = component.header && component.header.length > 0
        ? `<thead><tr>${component.header.map((header) => `<th>${t(header)}</th>`).join("")}</tr></thead>`
        : "";
    const bodyHtml = tableComponents
        .map((row, _rowIdx) => `<tr ref="row-${id}">
        ${row
        .map((column, _colIdx) => `<td ref="${tableKey}-${rowIndex}"${cellClassName ? ` class="${cellClassName}"` : ""}>${column}</td>`)
        .join("")}
      </tr>`)
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

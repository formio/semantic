export default (ctx) => {
    const t = ctx.t;
    const ref = ctx.ref;
    const openRows = ctx.openRows;
    const readOnly = !!ctx.readOnly;
    const component = ctx.component;
    const rows = ctx.rows;
    const header = ctx.header;
    const preview = ctx.preview;
    const iconClass = ctx.iconClass;
    const addAnother = ctx.addAnother;
    const rowsHtml = rows
        .map((row, rowIndex) => `
    <div class="item" ref="${ref.row}">
      ${row}
      ${openRows[rowIndex] && !readOnly
        ? `
        <div class="editgrid-actions">
          <button class="ui button primary" ref="${ref.saveRow}">${t(component.saveRow || "Save")}</button>
          ${component.removeRow ? `<button class="ui button secondary" ref="${ref.cancelRow}">${t(component.removeRow || "Cancel")}</button>` : ""}
        </div>
      `
        : ""}
      <div class="has-error">
        <div class="editgrid-row-error help-block">
          ${ctx.errors[rowIndex]}
        </div>
      </div>
    </div>
  `)
        .join("");
    const footer = ctx.footer
        ? `
    <div class="item list-group-footer">
      ${ctx.footer}
    </div>
  `
        : "";
    const addButton = !readOnly && ctx.hasAddButton
        ? `
    <button class="ui button primary" ref="${ref.addRow}">
      <i class="${iconClass("plus")}"></i> ${addAnother || t("Add Another")}
    </button>
  `
        : "";
    return `<div class="editgrid-listgroup ui celled list">
    ${header ? `<div class="item list-group-header">${header}</div>` : ""}
    ${rowsHtml}
    ${footer}
  </div>
  ${addButton}
  ${preview ? `<div class="ui segment" ref="preview">${preview}</div>` : ""}`;
};

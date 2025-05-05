import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const t = ctx.t as (s: string) => string;
  const ref = ctx.ref as {
    row: string;
    saveRow: string;
    cancelRow: string;
    addRow: string;
  };
  const openRows = ctx.openRows as boolean[];
  const readOnly = !!ctx.readOnly;
  const component = ctx.component as { saveRow?: string; removeRow?: string };
  const rows = ctx.rows as string[];
  const header = ctx.header as string;
  const preview = ctx.preview as string;
  const iconClass = ctx.iconClass as (icon: string) => string;
  const addAnother = ctx.addAnother as string;

  const rowsHtml = rows
    .map(
      (row, rowIndex) => `
    <div class="item" ref="${ref.row}">
      ${row}
      ${
        openRows[rowIndex] && !readOnly
          ? `
        <div class="editgrid-actions">
          <button class="ui button primary" ref="${ref.saveRow}">${t(component.saveRow || "Save")}</button>
          ${component.removeRow ? `<button class="ui button secondary" ref="${ref.cancelRow}">${t(component.removeRow || "Cancel")}</button>` : ""}
        </div>
      `
          : ""
      }
      <div class="has-error">
        <div class="editgrid-row-error help-block">
          ${ctx.errors[rowIndex]}
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  const footer = ctx.footer
    ? `
    <div class="item list-group-footer">
      ${ctx.footer}
    </div>
  `
    : "";

  const addButton =
    !readOnly && ctx.hasAddButton
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

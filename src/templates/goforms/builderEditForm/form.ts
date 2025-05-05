import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const t = ctx.t as (s: string) => string;
  const iconClass = ctx.iconClass as (s: string) => string;
  const componentInfo = ctx.componentInfo as {
    title: string;
    documentation?: string;
    help?: string;
  };
  const colWidth = ctx.preview ? "eight" : "sixteen";
  return `<div class="ui grid">
    <div class="eight wide column">
      <h3 class="lead">${t(componentInfo.title)} ${t("Component")}</h3>
    </div>
    <div class="eight wide column">
      <div class="right floated" style="margin-right: 20px; margin-top: 10px">
        <a href="${componentInfo.documentation}" target="_blank">
          <i class="${iconClass("new-window")}"> ${t("Help")}</i>
        </a>
      </div>
    </div>
  </div>
  <div class="ui grid">
    <div class="${colWidth} wide column">
      <div ref="editForm">
        ${ctx.editForm}
      </div>
      ${
        !ctx.preview
          ? `
      <div style="margin-top: 10px;">
        <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${t("Save")}</button>
        <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${t("Cancel")}</button>
        <button class="ui button negative" ref="removeButton">${t("Remove")}</button>
      </div>
      `
          : ""
      }
    </div>
    ${
      ctx.preview
        ? `
    <div class="eight wide column">
      <div class="ui top attached block header">
        ${t("Preview")}
      </div>
      <div class="ui bottom attached segment" ref="preview">
        ${ctx.preview}
      </div>
      ${
        componentInfo.help
          ? `
      <div class="ui secondary segment formio-settings-help">
        ${componentInfo.help}
      </div>
      `
          : ""
      }
      <div style="margin-top: 10px;">
        <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${t("Save")}</button>
        <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${t("Cancel")}</button>
        <button class="ui button negative" ref="removeButton">${t("Remove")}</button>
      </div>
    </div>
    `
        : ""
    }
  </div>`;
};

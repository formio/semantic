import { TemplateContext } from "../../types";

export default (ctx: TemplateContext) => {
  const t = ctx.t as (s: string) => string;
  const children = ctx.children as string | undefined;
  const readOnly = ctx.readOnly as boolean | undefined;
  const actions = !readOnly
    ? `<div class="node-actions">
        <button ref="saveNode" class="ui mini primary button saveNode">${t("Save")}</button>
        <button ref="cancelNode" class="ui mini negative button cancelNode">${t("Cancel")}</button>
      </div>`
    : "";
  return `<div class="node-edit">
    <div ref="nodeEdit">${children}</div>
    ${actions}
  </div>`;
};

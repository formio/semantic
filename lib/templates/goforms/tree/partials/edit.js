export default (ctx) => {
    const t = ctx.t;
    const children = ctx.children;
    const readOnly = ctx.readOnly;
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

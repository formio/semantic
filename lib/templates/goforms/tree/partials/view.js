export default (ctx) => {
    const t = ctx.t;
    const values = ctx.values;
    const node = ctx.node;
    const readOnly = ctx.readOnly;
    let buttons = "";
    if (node.hasChildren) {
        buttons += `<button ref="toggleNode" class="ui button toggleNode">${t(node.collapsed ? "Expand" : "Collapse")}</button><div class="or"></div>`;
    }
    if (!readOnly) {
        buttons += `<button ref="addChild" class="ui button primary addChild">${t("Add")}</button><div class="or"></div>`;
        buttons += `<button ref="editNode" class="ui button editNode">${t("Edit")}</button><div class="or"></div>`;
        buttons += `<button ref="removeNode" class="ui button negative removeNode">${t("Delete")}</button>`;
        if (node.revertAvailable) {
            buttons += `<div class="or"></div><button ref="revertNode" class="ui button negative revertNode">${t("Revert")}</button>`;
        }
    }
    return `<div class="ui grid">
    <div class="row">
      ${values.map((value) => `<div class="two wide column">${value}</div>`).join("")}
      <div class="five wide column">
        <div class="ui mini right floated buttons">
          ${buttons}
        </div>
      </div>
    </div>
  </div>`;
};

export default (ctx) => {
    // Type assertions for known structure
    const group = ctx.group;
    const t = ctx.t;
    const iconClass = ctx.iconClass;
    const subgroups = ctx.subgroups;
    const components = group.componentOrder
        .map((componentKey) => {
        const component = group.components[componentKey];
        return `<span
      data-group="${ctx.groupKey}"
      data-key="${component.key}"
      data-type="${component.schema.type}"
      class="ui button mini primary fluid formcomponent drag-copy"
    >
      ${component.icon ? `<i class="${iconClass(component.icon)}" style="margin-right: 5px;"></i>` : ""}
      ${t(component.title)}
    </span>`;
    })
        .join("");
    return `<div class="ui segment secondary form-builder-panel" style="padding: 0" ref="group-panel-${ctx.groupKey}">
    <div class="form-builder-group-header">
      <h5 class="panel-title">
        <button
          class="ui button basic fluid builder-group-button"
          type="button"
          data-toggle="collapse"
          data-target="#group-${ctx.groupKey}"
          data-parent="${ctx.groupId}"
          ref="sidebar-anchor"
        >
          ${t(group.title)}
        </button>
      </h5>
    </div>
  </div>
  <div class="ui segment" style="padding: 0">
    <div
      class="panel-collapse collapse ${group.default ? " in" : ""}"
      data-parent="#${ctx.groupId}"
      data-default="${group.default}"
      id="group-${ctx.groupKey}"
      ref="sidebar-group"
    >
      <div id="group-container-${ctx.groupKey}" class="card-body panel-body no-drop" ref="sidebar-container">
        ${components}
        ${subgroups.join("")}
      </div>
    </div>
  </div>`;
};

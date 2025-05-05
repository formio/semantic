export default (ctx) => {
    const component = ctx.component;
    const t = ctx.t;
    const tabLinks = component.components
        .map((tab, index) => `<a class="item${ctx.currentTab === index ? " active" : ""}" role="presentation" ref="${ctx.tabLinkKey}">${t(tab.label)}</a>`)
        .join("");
    const tabPanels = component.components
        .map((tab, index) => `<div role="tabpanel" class="ui bottom attached tab segment${ctx.currentTab === index ? " active" : ""}" ref="${ctx.tabKey}">${ctx.tabComponents[index]}</div>`)
        .join("");
    return `<div class="tab-container${component.verticalLayout ? " card-vertical" : ""}">
    <div class="ui top attached tabular menu${component.verticalLayout ? " nav-tabs-vertical" : ""}">
      ${tabLinks}
    </div>
    ${tabPanels}
  </div>`;
};

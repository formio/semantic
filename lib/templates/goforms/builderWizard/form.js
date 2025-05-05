export default (ctx) => {
    // Type assertions for known structure
    const pages = ctx.pages;
    const self = ctx.self;
    const t = ctx.t;
    const iconClass = ctx.iconClass;
    const sidebar = ctx.sidebar;
    const form = ctx.form;
    const pageBreadcrumbs = pages
        .map((page, pageIndex) => `
        <div title="${page.title}" class="${pageIndex === self.page ? "active section" : "section"} wizard-page-label" ref="gotoPage">${page.title}</div>
        <div class="divider">/</div>
      `)
        .join("");
    return `<div class="formio builder ui grid formbuilder">
    <div class="four wide column formcomponents">
      ${sidebar}
    </div>
    <div class="twelve wide column formarea">
      <div class="ui breadcrumb" style="margin-bottom: 0.5em">
        ${pageBreadcrumbs}
        <div title="${t("Create Page")}" class="section wizard-page-label" ref="addPage"><i class="${iconClass("plus")}"></i> ${t("Page")}</div>
      </div>
      <div ref="form">
        ${form}
      </div>
    </div>
  </div>`;
};

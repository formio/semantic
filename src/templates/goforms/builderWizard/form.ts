import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  // Type assertions for known structure
  const pages = ctx.pages as Array<{ title: string }>;
  const self = ctx.self as { page: number };
  const t = ctx.t as (s: string) => string;
  const iconClass = ctx.iconClass as (icon: string) => string;
  const sidebar = ctx.sidebar as string;
  const form = ctx.form as string;

  const pageBreadcrumbs = pages
    .map(
      (page, pageIndex: number) => `
        <div title="${page.title}" class="${pageIndex === self.page ? "active section" : "section"} wizard-page-label" ref="gotoPage">${page.title}</div>
        <div class="divider">/</div>
      `,
    )
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

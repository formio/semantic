import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const wizardKey = ctx.wizardKey as string;
  const panels = ctx.panels as { title: string }[];
  const currentPage = ctx.currentPage as number;
  const t = ctx.t as (s: string, opts?: Record<string, unknown>) => string;
  const panelHtml = panels
    .map((panel, index) => {
      const progress =
        panels.length > 1
          ? `<div class="classic-pagination-progress" style="border-radius: 0;"><div class="classic-pagination-progress-bar"></div></div>`
          : "";
      return `<div class="classic-pagination-page four wide computer eight wide tablet sixteen wide mobile column
          ${currentPage < index ? " disabled" : ""}
          ${currentPage === index ? " active" : ""}
          ${currentPage > index ? " complete" : ""}" style="padding: 0;">
        <div class="ui center aligned header classic-pagination-title">${t(panel.title, { _userInput: true })}</div>
        ${progress}
        <span ref="${wizardKey}-link" class="classic-pagination-dot" style="top: 45px;"></span>
      </div>`;
    })
    .join("");
  return `<nav aria-label="navigation" id="${wizardKey}-header">
    <div class=" ui stackable grid" style="border-bottom:0;">
      ${panelHtml}
    </div>
  </nav>`;
};

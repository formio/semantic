import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const wizardKey = ctx.wizardKey as string;
  const panels = ctx.panels as { title: string; tooltip?: boolean }[];
  const currentPage = ctx.currentPage as number;
  const wizardPageTooltip = ctx.wizardPageTooltip as string;
  const iconClass = ctx.iconClass as (icon: string) => string;
  const steps = panels
    .map((panel, index) => {
      const tooltip =
        panel.tooltip && currentPage === index
          ? `<span data-tooltip="${wizardPageTooltip}" data-position="right center">
            <i class="${iconClass("question-sign")}"></i>
          </span>`
          : "";
      return `<a class="${currentPage === index ? " active" : ""} step" ref="${wizardKey}-link">
        <div class="content">
          <div class="title">
            ${panel.title}
            ${tooltip}
          </div>
        </div>
      </a>`;
    })
    .join("");
  return `<nav aria-label="navigation" id="${wizardKey}-header" ref="${wizardKey}-header">
    <div class="ui steps">
      ${steps}
    </div>
  </nav>`;
};

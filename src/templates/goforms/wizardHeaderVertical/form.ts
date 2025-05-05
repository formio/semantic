import { TemplateContext } from "../types";

type Panel = { title: string; tooltip?: string };

export default (ctx: TemplateContext) => {
  const panels = (ctx.panels as Panel[]).map(
    (panel, index: number) => `
    <li class="item page-item${ctx.currentPage === index ? " active" : ""}" style="cursor: pointer;">
      <span class="page-link" ref="${ctx.wizardKey}-link" style="margin-left: 0px;">
        ${(ctx.t as (s: string, opts?: Record<string, unknown>) => string)(panel.title, { _userInput: true })}
        ${
          panel.tooltip && ctx.currentPage === index
            ? `<i ref="${ctx.wizardKey}-tooltip" class="${(ctx.iconClass as (icon: string) => string)("question-sign")} text-muted" data-tooltip="${panel.tooltip}"></i>`
            : ""
        }
      </span>
    </li>
  `,
  );
  return `<nav aria-label="navigation" id="${ctx.wizardKey}-header">
  <ul class="ui vertical fluid tabular menu">
    ${panels.join("")}
  </ul>
</nav>`;
};

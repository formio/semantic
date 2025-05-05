import { TemplateContext } from "../types";

type TabComponent = { label: string };

export default (ctx: TemplateContext) => {
  const component = ctx.component as { components: TabComponent[] };
  const t = ctx.t as (s: string) => string;
  return component.components
    .map(
      (tab, index) => `
        <h4 class="ui top attached block header">${t(tab.label)}</h4>
        <div class="ui bottom attached segment">
          ${ctx.tabComponents[index]}
        </div>
      `,
    )
    .join("");
};

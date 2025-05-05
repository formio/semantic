import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const component = ctx.component as { key: string };
  const t = ctx.t as (s: string) => string;
  return `<div class="ui grid">
    ${
      ctx.dayFirst && ctx.showDay
        ? `
      <div class="four wide column">
        <label for="${component.key}-day" class="">${t("Day")}</label>
        ${ctx.day}
      </div>
    `
        : ""
    }
    ${
      ctx.showMonth
        ? `
      <div class="five wide column">
        <label for="${component.key}-month" class="">${t("Month")}</label>
        ${ctx.month}
      </div>
    `
        : ""
    }
    ${
      !ctx.dayFirst && ctx.showDay
        ? `
      <div class="four wide column">
        <label for="${component.key}-day" class="">${t("Day")}</label>
        ${ctx.day}
      </div>
    `
        : ""
    }
    ${
      ctx.showYear
        ? `
      <div class="seven wide column">
        <label for="${component.key}-year" class="">${t("Year")}</label>
        ${ctx.year}
      </div>
    `
        : ""
    }
  </div>`;
};

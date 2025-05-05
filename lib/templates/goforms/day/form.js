export default (ctx) => {
    const component = ctx.component;
    const t = ctx.t;
    return `<div class="ui grid">
    ${ctx.dayFirst && ctx.showDay
        ? `
      <div class="four wide column">
        <label for="${component.key}-day" class="">${t("Day")}</label>
        ${ctx.day}
      </div>
    `
        : ""}
    ${ctx.showMonth
        ? `
      <div class="five wide column">
        <label for="${component.key}-month" class="">${t("Month")}</label>
        ${ctx.month}
      </div>
    `
        : ""}
    ${!ctx.dayFirst && ctx.showDay
        ? `
      <div class="four wide column">
        <label for="${component.key}-day" class="">${t("Day")}</label>
        ${ctx.day}
      </div>
    `
        : ""}
    ${ctx.showYear
        ? `
      <div class="seven wide column">
        <label for="${component.key}-year" class="">${t("Year")}</label>
        ${ctx.year}
      </div>
    `
        : ""}
  </div>`;
};

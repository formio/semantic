import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const buttons = ctx.buttons as {
    cancel?: boolean;
    previous?: boolean;
    next?: boolean;
    submit?: boolean;
  };
  const wizardKey = ctx.wizardKey as string;
  const t = ctx.t as (s: string) => string;
  const cancelButton = buttons.cancel
    ? `<div class="item">
    <button class="ui button secondary btn-wizard-nav-cancel" ref="${wizardKey}-cancel">${t("cancel")}</button>
  </div>`
    : "";
  const previousButton = buttons.previous
    ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-previous" ref="${wizardKey}-previous">${t("previous")}</button>
  </div>`
    : "";
  const nextButton = buttons.next
    ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-next" ref="${wizardKey}-next">${t("next")}</button>
  </div>`
    : "";
  const submitButton = buttons.submit
    ? `<div class="item">
    <button class="ui button primary btn-wizard-nav-submit" ref="${wizardKey}-submit">${t("submit")}</button>
  </div>`
    : "";
  return `<div class="ui horizontal list" id="${wizardKey}-nav">
  ${cancelButton}
  ${previousButton}
  ${nextButton}
  ${submitButton}
  </div>`;
};

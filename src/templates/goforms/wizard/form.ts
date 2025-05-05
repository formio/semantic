import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const className = ctx.className as string;
  const wizardHeaderType = ctx.wizardHeaderType as string;
  const wizardHeader = ctx.wizardHeader as string;
  const wizardKey = ctx.wizardKey as string;
  const components = ctx.components as string;
  const wizardNav = ctx.wizardNav as string;
  let content = "";
  if (wizardHeaderType === "wizardHeaderVertical") {
    content = `
      <div class="ui stackable grid">
        <div class="three wide computer sixteen wide tablet sixteen wide mobile column">
          ${wizardHeader}
        </div>
        <div class="one wide computer one wide mobile one wide tablet column"></div>
        <div class="wizard-page ten wide computer fourteen wide tablet fourteen wide mobiles column" ref="${wizardKey}">
          ${components}
        </div>
      </div>
      <div class="ui grid" style="margin-top: 10px;">
        <div class="four wide column"></div>
        <div class="twelve wide column">
          ${wizardNav}
        </div>
      </div>
    `;
  } else {
    content = `
      ${wizardHeader}
      <div class="wizard-page" ref="${wizardKey}">
        ${components}
      </div>
      ${wizardNav}
    `;
  }
  return `<div class="${className}">
    <div style="position: relative;">
      ${content}
    </div>
  </div>`;
};

export default (ctx) => {
    const wizardKey = ctx.wizardKey;
    const panels = ctx.panels;
    const currentPage = ctx.currentPage;
    const wizardPageTooltip = ctx.wizardPageTooltip;
    const iconClass = ctx.iconClass;
    const steps = panels
        .map((panel, index) => {
        const tooltip = panel.tooltip && currentPage === index
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

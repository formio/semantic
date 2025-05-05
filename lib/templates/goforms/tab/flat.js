export default (ctx) => {
    const component = ctx.component;
    const t = ctx.t;
    return component.components
        .map((tab, index) => `
        <h4 class="ui top attached block header">${t(tab.label)}</h4>
        <div class="ui bottom attached segment">
          ${ctx.tabComponents[index]}
        </div>
      `)
        .join("");
};

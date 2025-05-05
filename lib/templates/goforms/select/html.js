export default (ctx) => {
    const self = ctx.self;
    const value = ctx.value ? self.itemValueForHTMLMode(ctx.value) : "-";
    return `<div ref="value">${value}</div>`;
};

export default (ctx) => {
    const icon = ctx.icon;
    const iconClass = ctx.iconClass;
    return `<i class="${iconClass(icon)}"></i>`;
};

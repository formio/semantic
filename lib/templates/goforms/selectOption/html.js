export default (ctx) => {
    const option = ctx.option;
    const label = ctx.selected
        ? ctx.t
            ? ctx.t(option.label)
            : option.label
        : "";
    return `${label}`;
};

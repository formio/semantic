export default (ctx) => {
    const filtered = Array.isArray(ctx.values)
        ? ctx.values
            .filter((item) => ctx.value === item.value ||
            (typeof ctx.value === "object" &&
                ctx.value &&
                Object.prototype.hasOwnProperty.call(ctx.value, item.value) &&
                ctx.value[item.value]))
            .map((item) => ctx.t ? ctx.t(item.label) : item.label)
            .join(", ")
        : "";
    return `<div ref="value">
    ${filtered}
  </div>`;
};

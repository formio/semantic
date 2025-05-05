export default (ctx) => {
    let attrs = "";
    for (const attr in ctx.attrs) {
        if (attr === "class") {
            attrs += `${attr}="ui message ${ctx.attrs[attr]}" `;
        }
        else {
            attrs += `${attr}="${ctx.attrs[attr]}" `;
        }
    }
    return `<div ${attrs.trim()}>${ctx.message}</div>`;
};

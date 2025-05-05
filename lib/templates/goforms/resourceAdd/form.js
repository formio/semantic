export default function (ctx) {
    const t = ctx.t;
    const iconClass = ctx.iconClass;
    const component = ctx.component;
    return `<table class="ui table celled">
    <tbody>
      <tr>
        <td>
          ${ctx.element}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button class="ui button primary" ref="addResource">
            <i class="${iconClass("plus")}"></i>
            ${t(component.addResourceLabel || "Add Resource")}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  `;
}

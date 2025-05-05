import { TemplateContext } from "../types";

export default function (ctx: TemplateContext) {
  const t = ctx.t as (s: string) => string;
  const iconClass = ctx.iconClass as (s: string) => string;
  const component = ctx.component as { addResourceLabel?: string };
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

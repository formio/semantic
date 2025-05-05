import { TemplateContext } from "../types";

export default function (_ctx: TemplateContext) {
  return `<div class="formio-loader">
    <div class="loader-wrapper">
      <div class="ui active centered inline loader"></div>
    </div>
  </div>
  `;
}

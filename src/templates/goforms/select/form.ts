import { TemplateContext } from "../types";

export default (ctx: TemplateContext) => {
  const input = ctx.input as {
    ref?: string;
    multiple?: boolean;
    attr?: Record<string, string>;
  };
  const instance = ctx.instance as { id?: string };
  const component = ctx.component as { key?: string };
  const selectAttrs = input?.attr || {};
  const selectId =
    !selectAttrs.id && instance?.id && component?.key
      ? `id="${instance.id}-${component.key}"`
      : "";
  const selectAttrString = Object.entries(selectAttrs)
    .map(([attr, val]) => `${attr}="${val}"`)
    .join(" ");
  const autocomplete = selectAttrs.autocomplete
    ? `autocomplete="${selectAttrs.autocomplete}"`
    : "";
  return `<select
    ref="${input?.ref ? input.ref : "selectContainer"}"
    class="ui search dropdown"
    ${input?.multiple ? "multiple" : ""}
    ${selectAttrString}
    ${selectId}
  >${ctx.selectOptions}</select>
  <input type="text"
         class="formio-select-autocomplete-input"
         ref="autocompleteInput"
         ${autocomplete}
         tabindex="-1"
  />`;
};

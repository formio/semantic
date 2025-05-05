import { TemplateContext } from "../types";

type SurveyValue = { value: string; label: string };
type SurveyQuestion = { value: string; label: string };

export default (ctx: TemplateContext) => {
  const component = ctx.component as {
    values: SurveyValue[];
    questions: SurveyQuestion[];
  };
  const t = ctx.t as (s: string) => string;
  const self = ctx.self as { getInputName: (q: SurveyQuestion) => string };
  return `<table class="ui table striped celled">
    <thead>
      <tr>
        <th></th>
        ${component.values.map((value) => `<th style="text-align: center;">${t(value.label)}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${component.questions
        .map(
          (question) => `
        <tr>
          <td>${t(question.label)}</td>
          ${component.values
            .map(
              (value) => `
            <td style="text-align: center;">
              <input type="radio" name="${self.getInputName(question)}" value="${value.value}" id="${ctx.key}-${question.value}-${value.value}" ref="input">
            </td>
          `,
            )
            .join("")}
        </tr>
      `,
        )
        .join("")}
    </tbody>
  </table>`;
};

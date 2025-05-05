import { TemplateContext } from "../types";

type SurveyValue = { value: string; label: string };
type SurveyQuestion = { value: string; label: string };

export default (ctx: TemplateContext) => {
  const component = ctx.component as {
    values: SurveyValue[];
    questions: SurveyQuestion[];
  };
  const t = ctx.t as (s: string) => string;
  const value = ctx.value as Record<string, string>;
  return `<table class="ui table striped celled">
    <tbody>
      ${component.questions
        .map(
          (question) => `
        <tr>
          <th>${t(question.label)}</th>
          <td>
            ${component.values
              .map((item) =>
                value &&
                Object.prototype.hasOwnProperty.call(value, question.value) &&
                value[question.value] === item.value
                  ? t(item.label)
                  : "",
              )
              .join("")}
          </td>
        </tr>
      `,
        )
        .join("")}
    </tbody>
  </table>`;
};

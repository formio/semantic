export default (ctx) => {
    const component = ctx.component;
    const t = ctx.t;
    const self = ctx.self;
    return `<table class="ui table striped celled">
    <thead>
      <tr>
        <th></th>
        ${component.values.map((value) => `<th style="text-align: center;">${t(value.label)}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${component.questions
        .map((question) => `
        <tr>
          <td>${t(question.label)}</td>
          ${component.values
        .map((value) => `
            <td style="text-align: center;">
              <input type="radio" name="${self.getInputName(question)}" value="${value.value}" id="${ctx.key}-${question.value}-${value.value}" ref="input">
            </td>
          `)
        .join("")}
        </tr>
      `)
        .join("")}
    </tbody>
  </table>`;
};

export default (ctx) => {
    const component = ctx.component;
    const t = ctx.t;
    const value = ctx.value;
    return `<table class="ui table striped celled">
    <tbody>
      ${component.questions
        .map((question) => `
        <tr>
          <th>${t(question.label)}</th>
          <td>
            ${component.values
        .map((item) => value &&
        Object.prototype.hasOwnProperty.call(value, question.value) &&
        value[question.value] === item.value
        ? t(item.label)
        : "")
        .join("")}
          </td>
        </tr>
      `)
        .join("")}
    </tbody>
  </table>`;
};

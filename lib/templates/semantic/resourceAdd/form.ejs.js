Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<table class="ui table celled">\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan="2">\r\n        <button class="ui button primary" ref="addResource">\r\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\r\n          ' +
((__t = (ctx.t(ctx.component.addResourceLabel || 'Add Resource'))) == null ? '' : __t) +
'\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n';
return __p
}
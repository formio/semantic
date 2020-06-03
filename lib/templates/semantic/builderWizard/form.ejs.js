Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio builder ui grid formbuilder">\r\n  <div class="four wide column formcomponents">\r\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\r\n  </div>\r\n  <div class="twelve wide column formarea">\r\n    <div class="ui breadcrumb" style="margin-bottom: 0.5em">\r\n      ';
 ctx.pages.forEach(function(page, pageIndex) { ;
__p += '\r\n        <div title="' +
((__t = (page.title)) == null ? '' : __t) +
'" class="';
 if (pageIndex === ctx.self.page) { ;
__p += ' active section ';
 } else { ;
__p += ' section ';
 } ;
__p += ' wizard-page-label" ref="gotoPage">' +
((__t = (page.title)) == null ? '' : __t) +
'</div>\r\n        <div class="divider">/</div>\r\n      ';
 }) ;
__p += '\r\n      <div title="' +
((__t = (ctx.t('Create Page'))) == null ? '' : __t) +
'" class="section wizard-page-label" ref="addPage"><i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Page'))) == null ? '' : __t) +
'</div>\r\n    </div>\r\n    <div ref="form">\r\n      ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}
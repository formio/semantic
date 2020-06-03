Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="editgrid-listgroup ui celled list">\r\n  ';
 if (ctx.header) { ;
__p += '\r\n  <div class="item list-group-header">\r\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\r\n  <div class="item" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (row)) == null ? '' : __t) +
'\r\n    ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\r\n    <div class="editgrid-actions">\r\n      <button class="ui button primary" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'Save'))) == null ? '' : __t) +
'</button>\r\n      ';
 if (ctx.component.removeRow) { ;
__p += '\r\n      <button class="ui button secondary" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'Cancel'))) == null ? '' : __t) +
'</button>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    <div class="has-error">\r\n      <div class="editgrid-row-error help-block">\r\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ';
 }) ;
__p += '\r\n  ';
 if (ctx.footer) { ;
__p += '\r\n  <div class="item list-group-footer">\r\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
 if (!ctx.readOnly && ctx.hasAddButton) { ;
__p += '\r\n<button class="ui button primary" ref="' +
((__t = (ctx.ref.addRow)) == null ? '' : __t) +
'">\r\n  <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\r\n</button>\r\n';
 } ;
__p += '\r\n';
return __p
}
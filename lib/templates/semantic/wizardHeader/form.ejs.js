Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\r\n  <div class="ui steps">\r\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\r\n    <a class="' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
' step" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">\r\n      <div class="content">\r\n        <div class="title">' +
((__t = (panel.title)) == null ? '' : __t) +
'</div>\r\n      </div>\r\n    </a>\r\n    ';
 }) ;
__p += '\r\n  </div>\r\n</nav>\r\n';
return __p
}
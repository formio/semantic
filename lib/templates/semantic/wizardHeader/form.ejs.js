Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-header">\n  <div class="ui steps">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <a class="' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
' step" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">\n      <div class="content">\n        <div class="title">\n        ' +
((__t = (panel.title)) == null ? '' : __t) +
'\n        ';
 if (panel.tooltip && ctx.currentPage === index) { ;
__p += '\n        <span data-tooltip="' +
((__t = (ctx.wizardPageTooltip)) == null ? '' : __t) +
'" data-position="right center">\n        <i class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
'"></i>\n        </span>\n        ';
 } ;
__p += '\n        </div>\n      </div>\n    </a>\n    ';
 }) ;
__p += '\n  </div>\n</nav>\n';
return __p
}
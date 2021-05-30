Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\n  <div class=" ui stackable grid" style="border-bottom:0;">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n      <div class="classic-pagination-page four wide computer eight wide tablet sixteen wide mobile column\n          ' +
((__t = (ctx.currentPage < index ? ' disabled' : '')) == null ? '' : __t) +
'\n          ' +
((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
'\n          ' +
((__t = (ctx.currentPage > index ? ' complete' : '')) == null ? '' : __t) +
'" style="padding: 0;">\n        <div class="ui center aligned header classic-pagination-title">' +
((__t = (ctx.t(panel.title, { _userInput: true }))) == null ? '' : __t) +
'</div>\n        ';
 if (ctx.panels.length > 1) { ;
__p += '\n          <div class="classic-pagination-progress" style="border-radius: 0;"><div class="classic-pagination-progress-bar"></div></div>\n        ';
 } ;
__p += ' \n        <span ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link" class="classic-pagination-dot" style="top: 45px;"></span>\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n</nav>\n';
return __p
}
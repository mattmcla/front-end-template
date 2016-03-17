import jade from './lib/jade'
export default {
'mac-filter': function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"mac-filter\"><label>From<input id=\"from-date\" type=\"date\"/></label><label>To<input id=\"to-date\" type=\"date\"/></label></div>");;return buf.join("");
},

'other': function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (avar) {
buf.push("<h1>Hi</h1><p>" + (jade.escape(null == (jade_interp = avar) ? "" : jade_interp)) + "</p>");
if ( avar)
{
buf.push("<p>hi</p>");
}}.call(this,"avar" in locals_for_with?locals_for_with.avar:typeof avar!=="undefined"?avar:undefined));;return buf.join("");
},

}
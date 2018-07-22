/* */ 
"format cjs";
(function(mod) {
  if (typeof exports == "object" && typeof module == "object")
    mod(require('../../lib/codemirror'), require('../clike/clike'));
  else if (typeof define == "function" && define.amd)
    define(["../../lib/codemirror", "../clike/clike"], mod);
  else
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";
  var keywords = ("this super static final const abstract class extends external factory " + "implements get native operator set typedef with enum throw rethrow " + "assert break case continue default in return new deferred async await " + "try catch finally do else for if switch while import library export " + "part of show hide is").split(" ");
  var blockKeywords = "try catch finally do else for if switch while".split(" ");
  var atoms = "true false null".split(" ");
  var builtins = "void bool num int double dynamic var String".split(" ");
  function set(words) {
    var obj = {};
    for (var i = 0; i < words.length; ++i)
      obj[words[i]] = true;
    return obj;
  }
  CodeMirror.defineMIME("application/dart", {
    name: "clike",
    keywords: set(keywords),
    multiLineStrings: true,
    blockKeywords: set(blockKeywords),
    builtin: set(builtins),
    atoms: set(atoms),
    hooks: {"@": function(stream) {
        stream.eatWhile(/[\w\$_]/);
        return "meta";
      }}
  });
  CodeMirror.registerHelper("hintWords", "application/dart", keywords.concat(atoms).concat(builtins));
  CodeMirror.defineMode("dart", function(conf) {
    return CodeMirror.getMode(conf, "application/dart");
  }, "clike");
});

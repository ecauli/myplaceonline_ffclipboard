// FF >= 34
var pageMod = require("sdk/page-mod");
var clipboard = require("sdk/clipboard");

pageMod.PageMod({
  include: "*",
  contentScriptFile: "./ffclipboard.js",
  onAttach: function(worker) {
    worker.port.on("setText", function(str) {
      clipboard.set(str);
    });
  }
});

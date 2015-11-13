var ffclipboard_debug = false;

if (ffclipboard_debug) {
  console.log("ffclipboard (main.js): loading");
}

const pageMod = require("sdk/page-mod");
const clipboard = require("sdk/clipboard");
const data = require('sdk/self').data;

if (ffclipboard_debug) {
  console.log("ffclipboard (main.js): imported dependencies");
}

pageMod.PageMod({
  include: ['*', 'file:*', 'about:blank'],
  contentScriptWhen: "start",
  contentScriptFile: data.url("ffclipboard.js"),
  onAttach: function(worker) {
    
    if (ffclipboard_debug) {
      console.log("ffclipboard (main.js): onAttach called");
    }
    
    worker.port.on("setText", function(str) {

      if (ffclipboard_debug) {
        console.log("ffclipboard (main.js): setText called, setting clipboard");
      }
    
      clipboard.set(str,"html");

      if (ffclipboard_debug) {
        console.log("ffclipboard (main.js): clipboard set returned");
      }
    
    });
  }
});

if (ffclipboard_debug) {
  console.log("ffclipboard (main.js): finished loading");
}

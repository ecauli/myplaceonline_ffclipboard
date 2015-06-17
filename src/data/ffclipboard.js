var ffclipboard_debug = false;

if (ffclipboard_debug) {
  console.log("ffclipboard (fflipboard.js): loading");
}

var ffclipboard = createObjectIn(unsafeWindow, {defineAs: "ffclipboard"});

exportFunction(function(str) {
  
  if (ffclipboard_debug) {
    console.log("ffclipboard (fflipboard.js): setText called, emiting...");
  }

  self.port.emit("setText", str);
  
  if (ffclipboard_debug) {
    console.log("ffclipboard (fflipboard.js): emit returned");
  }
  
}, ffclipboard, {defineAs: "setText"});

if (ffclipboard_debug) {
  console.log("ffclipboard (fflipboard.js): finished loading");
}

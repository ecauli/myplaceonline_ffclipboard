function setText(str) {
  self.port.emit("setText", str);
}
 
var ffclipboard = createObjectIn(unsafeWindow, {defineAs: "ffclipboard"});
exportFunction(setText, ffclipboard, {defineAs: "setText"});

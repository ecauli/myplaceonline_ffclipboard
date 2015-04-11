# myplaceonline_ffclipboard

Originally created to workaround ZeroClipboard's [limitation](https://github.com/zeroclipboard/zeroclipboard/issues/80) of only working on mouse clicks.

Once this Add-On is installed into Firefox >= 34, every page has an additional `window.ffclipboard` object which allow access to the Firefox Add-On SDK's [clipboard](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/clipboard).

## Simple Example

    if (window.ffclipboard) {
      window.ffclipboard.setText("clipboard text");
    }

## Example: Set clipboard text when a link is clicked

    if (window.ffclipboard) {
      $("#somelink").keypress(function(e) {
        if (e.which == 13) {
          window.ffclipboard.setText("clipboard text");
        }
      });
    }

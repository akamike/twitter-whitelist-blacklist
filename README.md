# Twitter Whitelist/Blacklist UserScript

Checks tweet content and either highlights or hides based on a whitelist and blacklist (respectively).

## Requirements

* Fluid.app with a Twitter SSB, or
* Google Chrome, or
* Firefox with Greasemonkey installed

## Installation

### Fluid

1. Place the file into your Twitter SSB's Userscript folder located at ~/Library/Application Support/Fluid/SSB/<your-ssb-name>/Userscripts. You can also access this from your Twitter SSB using Userscripts > Open Userscripts Folder.
2. In your Twitter SSB, Userscripts > Reload All Userscripts, and then Userscripts > Twitter Whitelist/Blacklist
3. Reload the page or restart your SSB to ensure it has been installed correctly.

### Google Chrome / Firefox with Greasemoneky

1. Open the UserScript file directly in your browser and you will be prompted to install the UserScript. Click continue (in Chrome) or install (in Firefox).
2. Reload your Twitter tab to see the changes.

## Configuration

Open the UserScript in a text editor and look for the two variables `whitelist` and `blacklist`. Within the RegExp there is an array of terms which you can modify to add/remove/edit filtered words. Save the file and reload your Twitter page to enable the changes. The script checks every 2 seconds so there may be a delay between tweets showing and hiding. Try adding your twitter username to the whitelist, or a nasty swear to the blacklist!
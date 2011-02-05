# Twitter Whitelist/Blacklist Userscript

Checks tweet content and either highlights or hides based on a whitelist and blacklist (respectively).

## Installation

### Fluid

1. Place the file into your Twitter SSB's Userscript folder located at ~/Library/Application Support/Fluid/SSB/<your-ssb-name>/Userscripts. You can also access this from your Twitter SSB using Userscripts > Open Userscripts Folder.
2. In your Twitter SSB, Userscripts > Reload All Userscripts, and then Userscripts > Twitter Whitelist/Blacklist
3. Reload the page or restart your SSB to ensure it has been installed correctly.

## Configuration

Open the UserScript in a text editor and look for the two variables `whitelist` and `blacklist`. Within the RegExp there is an array of terms which you can modify to add/remove/edit filtered words. Save the file and reload your Twitter page to enable the changes. The script checks every 2 seconds so there may be a delay between tweets showing and hiding.
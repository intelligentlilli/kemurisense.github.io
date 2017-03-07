# Kemuri Fonts

The k-icons was generated at http://fontello.com/ and is a small set of glyphs that we use on the website

If we need to update and add new icons, regenerate the entire thing at fontello, then replace the /fonts/k-icons.*
files in the website.

This can be done from the config.json file that is in this folder.

1 - install node.js if it's not already installed
2 - install the fontello CLI with the command
		npm install fontello-cli -g
3 - download the fonts in this directory with the command
		fontello-cli --config ./fontello-config.json install
4 - this will create a new subdirectory.
5 - copy the .ttf, .woff and .woff2 files into this directory
6 - delete the subdirectory
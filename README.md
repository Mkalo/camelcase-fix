# Camelcase Fix

This module will change all your modules to use the normalized name for opcodes instead of the camelcase version.

You can remove this module from your modules folder after you run proxy one time with it, since the modules only have to be fixed once.

Note that if the module using camelcase has auto update, you should remove the manifest.json from that module until that module gets updated.

## :heavy_exclamation_mark: BACKUP YOUR MODULES FOLDER :heavy_exclamation_mark:

This module will edit every module in your folder and it may break some module, you should backup your bin/node_modules folder to be safe.
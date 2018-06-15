"use strict"

const fs = require("fs");
const path = require("path");
const names = require("./names.json");

function fixJsFile(file) {
	console.log(`Fixing file ${file}`);

	let data = fs.readFileSync(file, 'utf8');
	for (const [key, value] of Object.entries(names)) {
		data = data.replace(new RegExp(key, 'g'), value);
	}
	
	fs.writeFileSync(file, data);
}

function fixModule(module) {
	if (path.extname(module) == ".js") {
		fixJsFile(module);
	} else {
		fs.readdirSync(module)
			.map(name => path.join(module, name))
			.filter(file => fs.lstatSync(file).isDirectory() || path.extname(file) == ".js")
			.forEach(fixModule);
	}
}

fs.readdirSync(path.join(__dirname, ".."))
	.map(name => path.join(__dirname, "..", name))
	.filter(file => fs.lstatSync(file).isDirectory() || path.extname(file) == ".js")
	.forEach(fixModule);

var fs = require("fs");
var path = require("path");

fs.readdir("./lib", (err, files) => {

	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
		
		fs.readFile(file, "UTF-8", function(err, contents) {
			console.log(contents);
		});
	});
});
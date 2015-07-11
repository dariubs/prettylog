"use strict";

var colorList = {
	white: "\x1b[37m",
	red: "\x1b[31m",
	blue: "\x1b[34m",
	green: "\x1b[32m"
};

var prettylog = module.exports = function(txt, color){
	console.log(getFormatedText(txt,color));
};

function getFormatedText(txt, color){
	return getColor(color) + txt;
}

function getColor(color){
	return colorList[color];
}

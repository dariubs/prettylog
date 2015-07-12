"use strict";

var regularColorList = {
	black: '\e[0;30m',
	red: '\e[0;31m',
	green: '\e[0;32m',
	yellow: '\e[0;33m',
	blue: '\e[0;34m',
	purple: '\e[0;35m',
	cyan: '\e[0;36m',
	white: '\e[0;37m'
};


var boldColorList = {
	black: '\e[1;30m',
	red: '\e[1;31m',
	green: '\e[1;32m',
	yellow: '\e[1;33m',
	blue: '\e[1;34m',
	purple: '\e[1;35m',
	cyan: '\e[1;36m',
	white: '\e[1;37m'
};

var underlineColorList = {
	black: '\e[4;30m',
	red: '\e[4;31m',
	green: '\e[4;32m',
	yellow: '\e[4;33m',
	blue: '\e[4;34m',
	purple: '\e[4;35m',
	cyan: '\e[4;36m',
	white: '\e[4;37m'
};



var prettylog = module.exports = function(txt, color, opt){
	console.log(getFormatedText(txt,color, opt));
};

function getFormatedText(txt, color, opt){
	return getColor(color, opt) + txt;
}

function getColor(color, opt){
	var colors;
	if(opt === "bold"){
		colors = boldColorList;
	}else if( opt === "underline"){
		colors = underlineColorList;
	} else{
		colors = regularColorList;
	}
	return colors[color];
}

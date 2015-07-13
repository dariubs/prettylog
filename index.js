//     PrettyLog 0.1.0
//     (c) 2015 Dariush Abbasi
//     PrettyLog may be freely distributed under the MIT license.

"use strict";

var prettylog = module.exports = {
		log: function(txt, color, opt){
			console.log(getFormatedText(txt,color, opt));
		},
		error: function(txt, color, opt){
			console.error(getFormatedText(txt,color, opt));
		},
		warn: function(txt, color, opt){
			console.warn(getFormatedText(txt,color, opt));
		},
		info: function(txt, color, opt){
			console.info(getFormatedText(txt,color, opt));
		},
		trace: function(txt, color, opt){
			console.info(getFormatedText(txt,color, opt));
		}
};

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




function getFormatedText(txt, color, opt){
	return getColor(color.toLowerCase, opt.toLowerCase) + txt;
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

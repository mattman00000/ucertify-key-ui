// ==UserScript==
// @name         ucertify Practice Exam Keyboard UI
// @namespace    https://github.com/mattman00000/ucertify-key-ui
// @version      0.0.3
// @description  adds left/right key for next/previous
// @author       mattman00000
// @match        https://www.ucertify.me/*
// @grant        GM_log
// ==/UserScript==

(function() {
	'use strict';
	// Your code here...
	GM_log("adding event listener");
	window.addEventListener("keydown",function(a)
	{
		GM_log(a);
		
		var keyMap = 
		{
			"Right" : "next",
			"Left" : "previous"
		};
		if (a.key in keyMap)
		{
			document.getElementById(keyMap[a.key]).click();
			a.cancelBubble();
			a.stopImmediatePropagation();
			a.stopPropagation();
		}
	});
})();

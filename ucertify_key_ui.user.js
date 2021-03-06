// ==UserScript==
// @name         ucertify Practice Exam Keyboard UI
// @namespace    https://github.com/mattman00000
// @version      0.1.3
// @description  adds left/right key for next/previous
// @author       mattman00000
// @match        https://www.ucertify.me/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	// Your code here...
	var myOpacity = "1";
	document.body.insertAdjacentHTML("afterBegin","\
	<div id=\"key-ui-hud\" style=\" border: 1px solid black; background-color: none; color: black; font-size: 16px; width: auto; height: auto; margin: 0px; padding: 0px; position: fixed; left: 0px; bottom: 0px; opacity: "+myOpacity+"; z-index: 9223372036854775807; \" class=\"col-md-12 npl\">\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"col-md-6 col-lg-6 col-sm-6\">\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Help : </b><span class=\"key\">/</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Dashboard : </b><span class=\"key\">&lt;Esc&gt; then H</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Prior : </b><span class=\"key\">P</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Next : </b><span class=\"key\">N</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Bookmark : </b><span class=\"key\">M then B</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Confidence : </b><span class=\"key\">M then C</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Notes : </b><span class=\"key\">M then N</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Print : </b><span class=\"key\">CTRL + P</span></div>\
	</div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"col-md-6 col-lg-6 col-sm-6\">\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Answer Options : </b><span class=\"key\">1-9 or A-H</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Increase Time : </b><span class=\"key\">T</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Exhibit : </b><span class=\"key\">X</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Learn/Test : </b><span class=\"key\">&lt;Space&gt;</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Pause Test : </b><span class=\"key\">W</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>Items List : </b><span class=\"key\">R</span></div>\
	<div style=\" border: 1px solid black; width: auto; height: auto; margin: 0px; padding: 0px;\" class=\"mb-md\"><b>End Test/Close : </b><span class=\"key\">Z</span></div>\
	</div>\
	</div>\
	");
	document.getElementById("key-ui-hud").addEventListener("mouseleave",function(a){ document.getElementById("key-ui-hud").style.opacity=myOpacity;}); // document.getElementById("key-ui-hud").style.zIndex = 9223372036854775807; });
	document.getElementById("key-ui-hud").addEventListener("mouseenter",function(a){ document.getElementById("key-ui-hud").style.opacity="0"; }); //document.getElementById("key-ui-hud").style.zIndex = -9223372036854775807; });
})();

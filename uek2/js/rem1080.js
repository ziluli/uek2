/*
* @Author: dell
* @Date:   2017-04-06 11:03:17
* @Last Modified by:   dell
* @Last Modified time: 2017-04-06 11:04:16
*/

'use strict';
window.onload = function(){
	var designWidth = 1080;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}
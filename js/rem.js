/*
* @Author: dell
* @Date:   2017-04-05 20:12:35
* @Last Modified by:   dell
* @Last Modified time: 2017-04-05 20:13:31
*/

'use strict';
window.onload = function(){
	var designWidth = 320;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}
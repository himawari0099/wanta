//JavaScript Document
var btnOpen = document . getElementById('btn-open');
btnOpen . onclick = function(event){

	if( btnOpen . innerHTML == "閉じる"){
	   document . getElementById('search-inner') . style . position = "relative";
	   document . getElementById('search-inner') . style . top = "-330px";
	   document . getElementsByClassName('movie01')[0] . style . top = "-246px";
	   btnOpen . innerHTML = "詳細検索";
	   }
	 	else{
	   document . getElementById('search-inner') . style . position = "relative";
	   document . getElementById('search-inner') . style . top = "0px";
	   document . getElementsByClassName('movie01')[0] . style . top = "55px";
	   btnOpen . innerHTML = "閉じる";
	   }
}

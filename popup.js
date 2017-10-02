// document.getElementById('button').addEventListener('click', function(){
// 	console.log("hello");
// });


var button = document.getElementById('button');

var openNewTab = new function(){

	var url = document.getElementById("urls").value;

	for (var i = 0; i<txt.length; i++)
	{
		chrome.tabs.create({url: txt[i]});
	}
}


button.addEventListener('click', openNewTab);
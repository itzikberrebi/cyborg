jQuery(document).ready(function() {

	// $.fn.bringDivName = function(this_item){
	// 	var temp = jQuery(this_item).parents();
	// 	for (var i = 0; i < temp.length; i++) {
	// 		if (temp[i].id == 'quick-reports'){
	// 			return 'quick-reports';	
	// 		}
	// 		if (temp[i].id == 'my-team-folders'){
	// 			return 'my-team-folders';	
	// 		}
	// 	};
	// }

	jQuery('.expand').on('click', function(e)  {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange=function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				console.log(xhttp.responseText);
			}
		}
		xhttp.open("GET", "https://sb-ssl.google.com/safebrowsing/api/lookup?client=python&key=AIzaSyAfEUBOJApws1UJysmsJNwYMy8RKwiJKfY&appver=1.5.2&pver=3.1&safe=''&url=" + 'www.walla.co.il', true);
		xhttp.send();
	});

});
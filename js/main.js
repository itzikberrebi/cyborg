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

		               $.get( 
                  "https://sb-ssl.google.com/safebrowsing/api/lookup",
                  { client: "Zara",
                  	key: "AIzaSyAfEUBOJApws1UJysmsJNwYMy8RKwiJKfY",
                  	appver: "1.5.2",
                  	pver: "3.1",
                  	safe:'',
                  	url: 'www.walla.co.il'
                   },
                  function(data) {
                     console.log(data);
                  }
               );

	});

});
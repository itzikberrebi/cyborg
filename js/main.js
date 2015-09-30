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
                  "http://checkurl.phishtank.com/checkurl/index.php?format=xml&app_key=c30f2407e6a0e74e234ff502558335686786570ae2de338547e396ef736c7c78&url=http://www.torec.co.il",
                  {},
                  function(data) {
                     console.log(data);
                  }
               );

	});

});
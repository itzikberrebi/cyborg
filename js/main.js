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

	var site = 'http://checkurl.phishtank.com/checkurl/index.php?format=xml&app_key=c30f2407e6a0e74e234ff502558335686786570ae2de338547e396ef736c7c78&url=http://www.torec.co.il';
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml&callback=cbFunc';

	$.getJSON( yql, cbFunc );
     
    function cbFunc(data) {
    // If we have something to work with...
    if ( data.results[0] ) {
        // Strip out all script tags, for security reasons.
        // BE VERY CAREFUL. This helps, but we should do more. 
        data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
         
        // If the user passed a callback, and it
        // is a function, call it, and send through the data var.
        if ( typeof callback === 'function') {
            callback(data);
        }
    }
    // Else, Maybe we requested a site that doesn't exist, and nothing returned.
    else throw new Error('Nothing returned from getJSON.');
    }
		// $.ajax({
		// 	xhrFields: {
		// 		withCredentials: true
		// 	},
		// 	url: "&callback=?",
		// 	// data: myData,
		// 	type: 'GET',
		// 	crossDomain: true, // enable this
		// 	dataType: 'xml',
		// 	// jsonpCallback: 'phishtank',
  //       	// jsonp: false,
		// 	success: function(result) { alert(result); },
		// 	error: function (jqXHR, textStatus, errorThrown) {
		// 		console.log(jqXHR.responseText);
		// 	}
		// 	// beforeSend: setHeader
		// });
	});

	// function phishtank (data) {

 //    alert(data);
 //    console.log(data);
	// };

});
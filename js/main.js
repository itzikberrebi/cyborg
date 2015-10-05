jQuery(document).ready(function() {

	jQuery('.expand').on('click', function(e)  {
		// var site = 'http://checkurl.phishtank.com/checkurl/index.php?format=xml&app_key=c30f2407e6a0e74e234ff502558335686786570ae2de338547e396ef736c7c78&url=http://www.torec.co.il';
		var site = 'https://virusscan.jotti.org/en-US/search/hash/8e3510a39ff4928f6b665f91f9d2b0c8';
		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml';
		$.ajax({
			url: yql,
			type: 'GET',
			crossDomain: true,
			dataType: 'xml',
			success: function(result) { console.log(result);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR.responseText);
			}
		});
	});
});
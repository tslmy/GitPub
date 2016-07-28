var domainArray = window.location.host.split('.');
var pathArray = window.location.pathname.split('/');
(function() { 
	if (domainArray.length == 3 && domainArray[1].toLowerCase() == 'github' && domainArray[2].toLowerCase() == 'io') {
		sUser = domainArray[0];
		sRepo = pathArray[1];
	} else {
		sUser = 'tslmy';
		sRepo = 'GitPub';
	};
	marked.setOptions({
	  renderer: new marked.Renderer(),
	  gfm: true,
	  tables: true,
	  breaks: true,
	  pedantic: false,
	  sanitize: false,
	  smartLists: true,
	  smartypants: true
	});
	var sBaseUrl = 'https://raw.githubusercontent.com/' + sUser + '/' + sRepo + '/master/';
		var sFilePath = window.location.search.replace("?", "");
		var sTitle = sFilePath.substr(0, sFilePath.lastIndexOf("."));
		var sImagePath = sTitle + ".jpg";
		$(document).ready( function() { 
		 $('title').text(decodeURI(sTitle));
		 $('article').load(sBaseUrl + sFilePath, function(content) {
		 	marked(content, function (err, content) {
			  if (err) throw err;
			  $('article').html(content);
			});
		 	//$('body').append('<script src="strapdown.js"></script>');
		})});
	// Disqus
	var d = document, s = d.createElement('script');
	s.src = '//gitpub.disqus.com/embed.js'; //USERS OF GITPUB: CHANGE THIS "GITPUB"!
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
	// bigfoot, fore readable footnotes
	$.bigfoot();
})();
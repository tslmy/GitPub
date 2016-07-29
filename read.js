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
	var sBaseUrl = 'https://rawgit.com/' + sUser + '/' + sRepo + '/master/';
	var sFilePath = window.location.search.replace("?", "");
	var sFileName = sFilePath.substr(0, sFilePath.lastIndexOf("."));
	var sTitle = sFileName.substr(sFileName.lastIndexOf("/")+1, sFileName.length);
	$('title').text(decodeURI(sTitle));
	$('header > h1').text(decodeURI(sTitle));
	$('article').load(sBaseUrl + sFilePath, function(content) {
		marked(content, function (err, content) {
			if (err) throw err;
			$('article').html(content);
		});
	}).css("display", "block");
	//load header
	var sImagePath = sFileName + ".jpg";
	var sImageUrl = sBaseUrl + sImagePath;
	$("header").css({
		"background-image": "url("+sImageUrl+")",
		"display":"block"});
	var sAvatarUrl = "https://avatars.githubusercontent.com/" + sUser;
	$("header > img").prop("src", sAvatarUrl);
	$("header > a").text(sUser);
	$("header > a").prop("href", '//'+sUser+'.github.io/'+sRepo+'/');
	getImageBrightness(sImageUrl, function(brightness) {
		var color = 255 - brightness;
		$('header > a, header > h1').css('color','rgb('+color+', '+color+', '+color+')');
	});
	// Disqus
	var d = document, s = d.createElement('script');
	s.src = '//gitpub.disqus.com/embed.js'; //USERS OF GITPUB: CHANGE THIS "GITPUB"!
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
	// bigfoot, fore readable footnotes
	$.bigfoot();
})();
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
	var sBaseUrl = 'https://rawgit.com/' + sUser + '/' + sRepo + '/master/';
	var sFilePath = window.location.search.replace("?", "");
	var sFileName = sFilePath.substr(0, sFilePath.lastIndexOf("."));
	var sTitle = sFileName.substr(sFileName.lastIndexOf("/")+1, sFileName.length);
	$('title').text(decodeURI(sTitle));
	$('header > h1').text(decodeURI(sTitle));
	$('article').load(sBaseUrl + sFilePath, function(content) {
		var md = new Remarkable('full', {
		  html:         true,        // Enable HTML tags in source
		  xhtmlOut:     true,        // Use '/' to close single tags (<br />)
		  breaks:       true,        // Convert '\n' in paragraphs into <br>
		  langPrefix:   'language-',  // CSS language prefix for fenced blocks
		  linkify:      true,         // autoconvert URL-like texts to links
		  linkTarget:   '',           // set target to open link in

		  // Enable some language-neutral replacements + quotes beautification
		  typographer:  true,

		  // Double + single quotes replacement pairs, when typographer enabled,
		  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
		  quotes: '“”‘’',

		  // Highlighter function. Should return escaped HTML,
		  // or '' if input not changed
		  highlight: function (str, lang) {
		    if (lang && hljs.getLanguage(lang)) {
		      try {
		        return hljs.highlight(lang, str).value;
		      } catch (__) {}
		    }

		    try {
		      return hljs.highlightAuto(str).value;
		    } catch (__) {}

		    return ''; // use external default escaping
		  }
		});

		$('article').html(md.render(content));
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
		$('header > a, header > h1, header > h2').css('color','rgb('+color+', '+color+', '+color+')');
	});
	// Disqus
	var d = document, s = d.createElement('script');
	s.src = '//gitpub.disqus.com/embed.js'; //USERS OF GITPUB: CHANGE THIS "GITPUB"!
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
	// bigfoot, fore readable footnotes
	$.bigfoot();
})();
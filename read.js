var domainArray = window.location.host.split('.');
var pathArray = window.location.pathname.split('/');

//https://jsfiddle.net/s7Wx2/
 function getImageBrightness(imageSrc,callback) {
        var img = document.createElement("img");
        img.crossOrigin="anonymous";
        img.src = imageSrc;
        img.style.display = "none";
        document.body.appendChild(img);

        var colorSum = 0;

        img.onload = function() {
            // create canvas
            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this,0,0);

            var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
            var data = imageData.data;
            var r,g,b,avg;

              for(var x = 0, len = data.length; x < len; x+=4) {
                r = data[x];
                g = data[x+1];
                b = data[x+2];

                avg = Math.floor((r+g+b)/3);
                colorSum += avg;
            }

            var brightness = Math.floor(colorSum / (this.width*this.height));
            callback(brightness);
        }
    }


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
	var sTitle = sFilePath.substr(0, sFilePath.lastIndexOf("."));
	$('title').text(decodeURI(sTitle));
	$('header > h1').text(decodeURI(sTitle));
	$('article').load(sBaseUrl + sFilePath, function(content) {
		marked(content, function (err, content) {
			if (err) throw err;
			$('article').html(content);
		});
	});
	//load header
	var sImagePath = sTitle + ".jpg";
	var sImageUrl = sBaseUrl + sImagePath;
	$("header").css("background-image", "url("+sImageUrl+")");
	var sAvatarUrl = "https://avatars.githubusercontent.com/" + sUser;
	$("header > img").prop("src", sAvatarUrl);
	$("header > a").text(sUser);
	$("header > a").prop("href", "https://github.com/"+sUser);
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
(function($) {
    var domainArray = window.location.host.split('.');
    var pathArray = window.location.pathname.split('/');
    if (domainArray.length == 3 && domainArray[1].toLowerCase() == 'github' && domainArray[2].toLowerCase() == 'io') {
        sUser = domainArray[0];
        sRepo = pathArray[0];
    } else {
        sUser = 'tslmy';
        sRepo = 'GitPub';
    };
    var sRootUrl = 'http://github.com/' + sUser + '/' + sRepo + '/';
    $('#blogName').text(sRepo);
    $('title').text(sRepo+ ' - Index');
    var $List;
    $List = $('#list');
    /* Polyfill for IE<9 for handling negative a index in `substr`
     *
     * Only run when the substr function is broken
     */
    if ('ab'.substr(-1) != 'b') {
        /**
         *  Get the substring of a string
         *  @param  {integer}  start   where to start the substring
         *  @param  {integer}  length  how many characters to return
         *
         *  @return {string}
         */
        String.prototype.substr = function(substr) {
            return function(start, length) {
                // did we get a negative start, calculate how much it is
                // from the beginning of the string
                if (start < 0) start = this.length + start;
                // call the original function
                return substr.call(this, start, length);
            }
        }(String.prototype.substr);
    }

    function addFilesToList(p_sPath, p_$List, p_sRootUrl, p_sUser, p_sRepo, p_sToken) {
        var sUrl = 'https://api.github.com/repos/' + p_sUser + '/' + p_sRepo + '/contents/' + p_sPath + (p_sToken ? '?access_token=' + p_sToken : '');
        $.ajax({
            dataType: "json",
            url: sUrl,
            success: function(p_oData) {
                $.each(p_oData, function(p_i, p_oFile) {
                    var $SubList, sFileType,
                        sExtension;
                    if (typeof p_oFile === 'undefined' || typeof p_oFile.name === 'undefined') {
                        return false;
                    }
                    if (p_oFile.size === null || p_oFile.size === 0) {
                        // Directory
                        $SubList = $('<ul></ul>');
                        addFilesToList(p_oFile.path, $SubList, p_sRootUrl, p_sUser, p_sRepo, p_sToken);
                        p_$List.append('<li class="entry folder">' + p_oFile.name + '</li>').append($SubList);
                    } else { // File
                        sFileType = 'file';
                        sExtension = p_oFile.name.substr(-3);
                        sFileName = p_oFile.name.substr(0, p_oFile.name.length - 3)
                        if (sExtension == '.md' && p_oFile.name.substr(0, 1) != '.') p_$List.append('<li class="entry file">' + ' <a href="read.html?' + p_sPath + '/' + p_oFile.name + '">' + sFileName + '</a></li>');
                    }
                });
            },
            error: function(p_oJqXHR, p_sStatus, p_sError) {
                p_$List.append('<li class="entry error">' + p_sStatus + ': ' + p_sError + '</li>');
            }
        });
    }
    var sToken = '';
    addFilesToList('', $List, sRootUrl, sUser, sRepo, sToken);
}(jQuery));
/*EOF*/
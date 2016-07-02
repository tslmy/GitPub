$(function (){
   var k33g = new Gh3.User("tslmy")
      ,	repoTitle = $("h1")
      ,	branchTitle = $("h2")
      ,	branchContents = $("ul");

    var k33gBlog = new Gh3.Repository("k33g.github.com", k33g);

    k33gBlog.fetch(function (err, res) {
      if(err) { throw "outch ..." }

      repoTitle.html(k33gBlog.full_name);

      k33gBlog.fetchBranches(function (err, res) {
        if(err) { throw "outch ..." }

        var master = k33gBlog.getBranchByName("master");
        branchTitle.html(master.name + " (" + master.sha + ") :");

        master.fetchContents(function (err, res) {
          if(err) { throw "outch ..." }

          master.eachContent(function (content) {
            branchContents.append('<li>'+content.name+" : "+content.type);

          });

          //var myfile = master.getContents()[8];

          var myfile = master.getFileByName("index.html");

          console.log("index.html", myfile);

          myfile.fetchContent(function (err, res) {
            if(err) { throw "outch ..." }

            rawContent.text(myfile.getRawContent());
          });

          myfile.fetchCommits(function (err, res) {
            if(err) { throw "outch ..." }

            console.log(myfile.getCommits());

            myfile.eachCommit(function (commit) {
              console.log(commit.author.login, commit.message, commit.date);
            });
          });

        });

      })
    });
  });
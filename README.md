

# GitPub

Transform a GitHub git into a blog/doc site. No static-site generator required.

To **your readers**, it's a view-only GitHub frontend designed only for reading.

To **yourself**, it's a verstile writing platform that allows opting out at anytime.

[TOC]



## Feature

Spotlight: publishings are done via git pushes.

### Posts are **published/edited** via git pushes

#### Great version control

Backed up by `git`, GitPub gives you unlimited **time machine to early versions** of your writings.

#### No web-based admin page included

Different from WordPress, HuePress, Medium and Ghost, GitPub does not offer you a webpage where you get to type and save your content. Instead, GitPub encourages you to **write in your favorite text editor** and then push it to the repo. 

No worries if you happen to have to use a web admin interface at times (e.g. on a public computer in your local library): simply log onto GitHub and manage files there. GitHub serves as a quite decent backend **in emergency**, though not designed for article writing.

### Posts are **stored** on your GitHub and/or local machine

Not exactly <u>cloud-hosting</u> or <u>self-hosting</u>.

- Like <u>cloud-hosting</u>, you can do everything in your browser if you want.
  - No need to install anything on your machine or keep it up 24/7.
- Like <u>self-hosting</u>, you can **keep** a **primary** repo **local** if you desire. 
  - Push to cloud only when you <u>feel like publishing an aritcle</u> / <u>finish editing one</u>. 
  - You get total control over your files (it's a GitHub repo, after all). 
    - I mean, even if your hosting service cracks down this time (which is unlikely for a reputable provider like GitHub), you will still have your files around (and readable! See next section).

### Posts are **saved** as piles of Markdown files

In case you haven't heard of it, Markdown is a simple markup language that provides **rich stylings** within plain text files.

By saving your posts as individual posts, you can easily migrate your posts to anywhere you want and read them with a text editor. 

#### No database or weird data strcture

Do you hate it when you try to export all your entries from Evernote, OneNote, WordPress, Ghost, etc. only to found out that they all have their own packaging formats?

I mean, half of the time when you try to export from a platform, you intend to switch to another product, right? It is really a pain to discover that you cannot easily import the oddly-shaped backup file to your new platform due to file format problems.

I wish to solve this problem by keeping all files as purely-structured as possible. That means, every post is saved in an individual markdown file, so that you can do whatever you want with them.

## Downsides / When NOT to use

Let me be honest: there's better blogging platforms than this. A lot.

### GitPub does not provide previews/abstracts of posts on the index page

If you really want it, tell me, I can consider adding that functionality. Bear in mind that it would be really network-comsuming for your visitors.

### GitPub rely on client browser to do its job

GitPub requires Javascript (like [tiddlywiki](http://tiddlywiki.com/)). If you are targeting readers who might be using a internet terminal from the 80s, this might not work for you. GitPub provides no fallback.

### If you are okay with potentially cluttered folder structure

Then please allow me to ask: _which do you hate more, **having to submit** your posts **via a web backend**, or **serving** your files **outside of GitHub**_?

#### If you are okay with having to submit your posts via a web interface

[HubPress](hubpress.io) would be a great choice. It also sits in a github repo and works on a project page (it really amazed me that it could behave dynamically while github actually only allows static hosting on project pages) . 

#### If you sit in the middle...

I'd suggest trying [Jekyll](http://jekyllrb.com/). You have to generate the whole site via terminal commands yourself everytime you wish to make some change (i.e. post/modify/delete an entry), but, on the brightside, you have total control of the tool and files!

#### If you don't care about having to use an external service to manage your content

Give [TinyPress](https://tinypress.co/) a try. It runs [Jekyll](http://jekyllrb.com/) as backend, requires to conquer your personal GitHub pages, and has a large user base.

### If you are cool with hosting your files somewhere other than GitHub, but don't like cluttering up your MD file folder

I have an old project [t.t.t](https://github.com/tslmy/t.t.t/) for you. It's based on PHP, also works by indexing a folder of pure `md` files and doesn't require too much JavaScript support on the client side.



## Install

Clone this repo, or copy all files under `gh-pages` branch to that under your repo. 

## Manage Content

Save/edit your posts as `.md` files under `master`branch.

## Licence

Haven't decided. Consider it free.
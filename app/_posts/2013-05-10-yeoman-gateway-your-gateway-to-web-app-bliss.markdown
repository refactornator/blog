---
layout: post
title: Yeoman-Gateway Your Gateway to Web App Bliss
tags: yeoman-gateway
---

I love well structured code. Code with clear delineation of responsibilities. Code that follows the DRY principle. Code that actually feels satisfying to maintain and will help you sleep at night. That's probably why I still code in python. It's also why I was so excited when I first heard about MV* for web apps. After building a jQuery spaghetti code mess for Apartments Near Metro, I knew this was not how it should be done. Fortunately, this also occurred to much smarter and more experienced programmers and spurred the creation of Angular, Ember, Backbone, and many others.

Why was this so exciting? Because there should be a clear delineation between backend and frontend responsibilities. The backend should handle data. Data crunching, data access, data format. It really shouldn't care if you are requesting that data from a web browser, or an iPad app or cURL.

That brings me to Yeoman-Gateway. I wanted to create a starting point for new web apps. I had experience with Backbone.js, so I chose Backbone.js + Marionette.js as the MV* framework. I've been happy using Require.js, so I chose to use it for modularizing and assembling code. Lastly, I chose Yeoman because it provides easy dependency handling using Bower, automated Grunt.js configuration and useful scaffolding. Lastly, I used Bootstrap-sass to provide simple styling. This is by no means a statement of superiority of these frameworks to any others, but happened to be what made the most sense to me and seemed to blend well together for my desired workflow. I want this project to serve as an easy and complete starting point as well as an example of best practices for these tools. I found plenty of code snippets for doing separate best practices, but not a complete example in code. Hopefully this project will serve as that and will help more people get started creating web applications.

Get started with the [github repo](https://github.com/wlindner/Yeoman-Gateway) and [demo](http://williamlindner.com/Yeoman-Gateway)
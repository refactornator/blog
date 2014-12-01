---
layout: post
title: Better D3.js Transitions
---

At [Zoomdata](http://zoomdata.com) we’re all about Big Data Visualizations, and that means our visualizations have to be lightweight and fast.

All of our visualizations are web based, which means we rely on the technologies built into browsers to do our rendering. SVG, Canvas, WebGL and of course HTML all come in handy for showing off what’s really going on in your data.

Naturally, we’ve been using [D3.js](http://d3js.org/) for our visualizations since day 1. It’s powerful API built for SVG and HTML manipulation is perfect for streaming data that continuously updates in realtime. The old days were static images built from one time batch queries.

What we found though was that to truly pull out all of the performance of modern web browsers, you really have to be smart about how you use D3. Especially when it comes to performance with those constantly updating visualizations. Any seasoned web developer will know that the biggest hit to performance is repaint and reflow of the [DOM](http://en.wikipedia.org/wiki/Document_Object_Model). What does that mean? Well, your website is really just a big HTML document represented in memory in what’s called the [DOM](http://en.wikipedia.org/wiki/Document_Object_Model) (document object model). That’s great and everything if your document doesn’t change, but what happens if I move something at the top of the page? Well, the rest of the document has to make sure it’s in the right place, this is called reflowing the DOM.

That’s great and everything, but what does it mean for me? Well, turns out these repaints and reflows are extremely costly. Even for very fast browsers like Chrome on powerful laptops. There’s just no getting around the fact that it is computationally heavy. And in fact it doesn’t take much for it to look really, really bad! When a website or animation looks bad, it’s usually due to what’s called Jank. You can go a lot deeper at this wonderful website [Jank Free](http://jankfree.org/). But, the gist of it is that you just need to trick the browser into not repainting or reflowing the DOM.



If you want to work on interesting problems like these at Zoomdata, we’re hiring! Contact me by email at william (at) zoomdata (dot) com or @wlindner on github and twitter.

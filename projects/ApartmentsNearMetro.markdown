---
layout: project
comments: true
title: ApartmentsNearMetro.com
---

##ApartmentsNearMetro.com
This was a project I started to solve a problem that I personally experienced.  During the summer of 2011 I had the unfortunate experience of needing to find a place to live in Northern Virginia.  My roommate and I agreed that our main requirements were 2 bedrooms, within our price range, and it had to be close to the metro.  Every day I would open up Craigslist.org, run a search, open all the listings that looked interesting and check them on Google Maps.  I knew there had to be a simpler way.


I wrote a simple python script in a few hours that scraped Craigslist's Washington DC apartment listings.  After that, it checked if it had a Google Maps link.  If it did, it would then passed it through the [Google Maps Distance Matrix API](https://developers.google.com/maps/documentation/distancematrix/).  Then, Google told me how many minutes it would take to walk from that apartment listing to any of the metro stations I was interested in.  If the apartment fit my criteria, I would get an email within a couple minutes of the listing being posted.  It was a success and inevitably lead to my roommate and I finding a great apartment.


Once I proved it worked, I knew it could help other people as well.  I originally wrote the script in [Python](http://python.org) so I decided to try to build a web application using [Google App Engine](https://developers.google.com/appengine/).  I was very happy with the power of GAE and was able to get a functioning application running hosted in GAE.  Unfortunately, at the time, I had no idea just how little I knew about UI/UX or creative design.  Fortunately, my good friend [Alex Sailer](http://alexsailer.com/), agreed to help design the application.  Alex's skills brought the site to a completely new level and helped to make the site attractive and usable.


I kept the site running for about a year after that.  We got picked up by [FamousDC](http://famousdc.com/).  Had around 1,500 unique visitors with an average time spent on the site of about 7 and a half minutes.  I kept it on the back burner though and didn't devote my primary attention to it, because I always had a sneaking suspicion that either Google or Craigslist would try to block me.  Unfortunately, that is exactly what happened.  [Padmapper](http://padmapper.com), a service very similar to Apartments Near Metro, was [blocked by Craigslist](http://arstechnica.com/tech-policy/2012/07/craigslist-sues-padmapper-for-copyright-infringement/).  Right around the same time Craigslist also blocked Apartments Near Metro from scraping apartments listings.  Padmapper received a cease and desist and later a lawsuit; I was simply blocked.  Yes, I could probably find a way around the block, and try to fight it further, but it does not seem worth it.  It is most certainly Craigslist's prerogative to do what they want with their own data.  My intention was to always augment Craigslist data and simply provide an easy to use interface on top of it, and always link back to Craigslist.  Unfortunately, this does not fit in with Craigslist's plans.


I learned a great deal from this project and I am very glad that I created the site.  It was important experience that helped me on a much more ambitious project: [Courier](http://trycourier.com)
---
layout: post
title: Instagram is Swapping Foursquare for Facebook Places
---

[Alex Sailer](https://twitter.com/alexsailer) and [I](https://twitter.com/wlindner) created [Spotsy](https://itunes.apple.com/us/app/spotsy/id714622289?mt=8) to solve a shortcoming of the official Instagram app. That shortcoming was location based search. Whether it's nearby, major cities or anywhere you want to see. Shouldn't you be able to see what's being posted there RIGHT NOW? Of course you should, so we built [Spotsy](https://itunes.apple.com/us/app/spotsy/id714622289?mt=8). In the past, Instagram has relied on Foursquare for this location information, but not anymore.

After doing a little bit of investigation, it seems to me, Instagram will no longer tags photos at Foursquare Locations, but at Facebook Places instead. This increases the amount of data gathered by Facebook and improves their directory of locations and decreases the amount of data gathered by Foursquare.

Here's what I found.

The most obvious change is that the Instagram app no longer gives attribution to Foursquare. This attribution is required if you use their service according to the [Foursquare Developer Documentation](https://developer.foursquare.com/overview/attribution). This is not definitive proof on it's own, but is still a pretty clear sign.

![No Foursquare Location attribution](/img/instagram-powered-by-foursquare.png)
<br />
*Exhibit A: No more Facebook Location Attribution*

What I found much more interesting was the fact that Instagram now provides an API call for mapping a Facebook Place to an Instagram Location. Check out the /locations/search endoint at the end of [this page](http://instagram.com/developer/endpoints/locations/#get_locations_search). It now includes a parameter for linking Facebook Place IDs to Instagram IDs.

![New API Options for Mapping Facebook Places to Instagram, just like Foursquare](/img/instagram-developer-endpoint.png)
<br />
*Exhibit B: New API Options for Mapping Facebook Places to Instagram, just like Foursquare*

I went ahead and tested this new endpoint in [Instagram's API Console](https://apigee.com/console/instagram) and it checks out! Search for locations in the Facebook Graph API, map that ID to an Instagram location, then get the recent media shared there. Just like you could do with Foursquare. To me, it doesn't sound like Instagram is just "testing out" Facebook Places, it sounds like they're going all in to make Foursquare less relevant. Will it work? We shall see.

So, in the grand scheme of things, this is by no means earth shattering news. I mean really... very few people will notice. But after reading fluff piece after fluff piece about how Instagram [may](http://www.nbcnews.com/tech/social-media/instagram-replacing-foursquare-facebook-places-n61856), [sort of](http://www.cnet.com/news/instagram-removing-foursquare-in-places-test/), [possibly](http://readwrite.com/2014/03/25/facebook-places-instagram-test-foursquare#awesm=~oEb93BJ7K1HXS5), [could be](http://www.techradar.com/us/news/software/applications/instagram-tests-filtering-out-foursquare-in-favour-of-facebook-places-1237086) switching to Facebook Places instead of Foursquare Locations I thought it would be good to get a more concrete answer.

Let me know what you think in the comments.
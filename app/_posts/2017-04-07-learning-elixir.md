---
layout: post
title: Learning Elixir
tags: life
---

I have a project at Pivotal Labs next week that will require me to know Elixir. I'm starting from ground zero. Elixir is a totally new language for me. I've decided to chronologue my adventures in learning Elixir for the first time. This isn't an Elixir tutorial as much as a meta-tutorial. This is the process I used to learn Elixir.

The first place I started when I was learning Elixir was… YouTube! YouTube is a great place to start when learning a new skill or concept. It's basically free. There's tons of content. For programming, there are tons of conference talks. Sometimes those talks are given by the creator of that language or framework itself. There is usually a wide array of skill levels to learn from too. It also gives you a confidence boost, because it's easier to watch a video and follow along than read an article (IMO).

<iframe width="560" height="315" src="https://www.youtube.com/embed/naNN_gJas2A" frameborder="0" allowfullscreen></iframe>

I watched a couple of videos, but the first one I liked was this one by David Schmitz. He's a funny presenter, and is passionate about Elixir. He makes it easy to pay attention. David has a very organized, beginner-friendly presentation about a lot of complex concepts and I felt like it gave me a great overview to get started. You'll need to have elixir installed, so follow the instructions on the main elixir site [here](http://elixir-lang.org/install.html). It introduced the language and its background, the tools like `mix` and gave me a lot of confidence to start using the language. The syntax is a lot like Ruby, but the language is functional, immutable and concurrent by default. Here's a link to my [repo](https://github.com/wlindner/pizzademo) that I created following along in the video.

After sifting through a few more videos I came across a channel called [DailyDrip](https://www.youtube.com/channel/UC5bb9M3QwGUerJEr8ilIzIA). These provided small, but excellent short videos giving more details about Elixir. The only thing I don't like about them is how quickly the author speeds through writing code. I dug a little deeper and discovered the YouTube channel is just a sample of content to lead you to DailyDrip.com. Check out [their website](https://www.dailydrip.com/topics/elixir) for all of the tutorials. Videos aren't available for all of the lessons, but the content is still good. You'll have to sign up for a subscription, but you don't actually have to pay anything, just create an account and when it prompts you for a credit card, just go back to the tutorials and you'll be able to work through them for free. I spent a lot of time slowly going through each tutorial. Actually typing out the code for each lesson, and creating sample repos from the lessons. It's important to get your fingers typing the syntax, not just read the code.

My repos from the tutorials are below: <br />
[[001.3] - HelloWorld](https://github.com/wlindner/hello_world) <br />
[[001.4] - PingPong](https://github.com/wlindner/ping_pong) <br />
[[001.5] - StringUpcaser](https://github.com/wlindner/string_upcaser)

After that, I had a little more confidence about what I was doing, so I decided to learn more about [Phoenix](http://www.phoenixframework.org/). Phoenix is a web framework, which is positioned as the successor to [Rails](http://rubyonrails.org/). The project I'm preparing for is a web app, and will depend heavily on Phoenix. In order to get started learning this new framework, I started by watching this recording of a talk by Sonny Scroggin.

<iframe width="560" height="315" src="https://www.youtube.com/embed/F-7MX_Az6_4" frameborder="0" allowfullscreen></iframe>

This video gets complicated quickly. The video has to gloss over a lot of details. I spent a few hours pausing the video and researching concepts as I went. If this video had been my first exposure to Elixir, I would have been overwhelmed, but by building up knowledge and confidence by learning the simplest concepts first, I was able to succeed.

After that, I dove into finally building an app. I've been working on a little app called [thoughts](https://github.com/wlindner/thoughts) just for fun. But I wrote that with a Java Spring Boot backend. So, I began creating an elixir version [here](https://github.com/wlindner/elixir-thoughts). The app is just a REST api for a React app. It's very simple (CRUD for a 'thought' resource). This practice allowed me to implement (and test!) the most basic concepts of a web app and was quite satisfying.

That's an overview of my first week with Elixir. I had a lot of fun learning about it and I'm looking forward to learning more in the future!
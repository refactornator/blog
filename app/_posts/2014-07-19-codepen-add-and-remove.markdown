---
layout: post
title: Codepen - Add and Remove
---

I was browsing Dribbble the other day and ran across this cool animation created by Dribbble user [Toxinboy](https://dribbble.com/Toxinboy).

![Add & Remove by Toxinboy](/img/posts/add_remove_small.gif)

I really like it, but because it's a gif, you can't really do anything with it in a website. Change the background color, mouse over effect, click events, etc. Simple things aren't doable unless it's created from code.

So, I created this.

<p data-height="268" data-theme-id="0" data-slug-hash="IKGJi" data-default-tab="result" data-user="wlindner" class='codepen'> See the Pen <a href='http://codepen.io/wlindner/pen/IKGJi/'> Add & Remove (in code) </a> by William Lindner ( <a href='http://codepen.io/wlindner'> @wlindner </a> ) on <a href='http://codepen.io'>CodePen</a> . </p>
<script type="text/javascript" src="//assets.codepen.io/assets/embed/ei.js"> </script>

The button is a combination of SVG shapes. A few different animations. The most complex is a line animation. Read more about it [here](http://css-tricks.com/svg-line-animation-works/). I used [D3.js](http://d3js.org/) to create and animate the shapes, but that is definitely not a requirement. Just a library I'm very comfortable using.

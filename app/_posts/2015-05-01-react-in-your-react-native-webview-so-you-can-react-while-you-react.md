---
layout: post
title: Putting React in your React Native Webview So You Can React While You React
---

React Native is great. Or, at least, it promises to be great. It was just released, so time will tell how well it works out. But, for a project that's only been out for a few months, it's already made a huge splash. If you haven't heard of it, [check it out](https://facebook.github.io/react-native/). It could be a good solution for building your next cross platform native app. It allows you to write your app in React's Component structure, but instead of rendering DOM elements, it renders iOS (and eventually Android) native elements. Instead of ```<div>```'s and ```<span>```'s, you're writing ```<View>``` and ```<Text>``` elements. But, that's not really what this article is about. For getting started with React Native, I suggest React Native's [Getting Started Guide](http://facebook.github.io/react-native/docs/getting-started.html#content).

This article is about using DOM based React components within a React Native app. It's kind of a funky idea, but it's not all that hard to pull off. So, I hope it helps generate some new ideas.

If you want to skip to the code, check out the complete repo [here](https://github.com/wlindner/ReactNativeReactWebview).

This is what it will look like when we're done.
<br />
![React Native React Webview End Goal](/img/react-native-react-webview-end-goal.png)
<br />
*Not exactly mind blowing stuff right here, but it's a start.*

1. Set up your React Native project using the [Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started.html). This will mostly consist of installing react-native-cli: ```npm install -g react-native-cli```. Then, initializing your project: ```react-native init AwesomeProject```

2. Copy [this folder called 'web'](https://github.com/wlindner/ReactNativeReactWebview/tree/master/web) of an HTML file and two Javascript files into your Xcode project. It's just a React Hello World that I got from React's [Getting Started Guide](https://facebook.github.io/react/docs/getting-started.html).
<br />
<br />
![Copy the web folder into your project](/img/react-native-react-webview-copy-web-folder.gif)
<br />
<br />

3. Modify your index.ios.js file to look like [this](https://github.com/wlindner/ReactNativeReactWebview/blob/master/index.ios.js). One of the most important bits is this: ```<WebView url='web/helloworld.html' />```. It tells React Native's ```<WebView>``` component to load the HTML file you moved into the project in step 2.  React Native's webview loads the file using iOS native code without any additional work. It even knows how to load the javascript files included into the page's ```<head>```.

4. Now, if you start up your application by running it in XCode, you'll see a web view running your React Hello World application.

But, wait, you're asking... "Why are we doing this? I thought I was using React Native instead of React". And, that's true. But, the reality is that if you're using React Native, you're probably a web developer, and you probably are already familiar with React and you may even have some great React components you want to reuse. Now you have even more flexibility because you can pick between reusing what you've already created or using native components.

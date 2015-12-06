/* global $ */
/* jshint ignore:start */

var width = $('header').width(),
    height = $('header').height(),
    margin = Math.min(width, height) * .2,
    $svg = $('header svg'),
    minCircleR = 10,
    maxCircleR = 25,
    middleR = ((maxCircleR - minCircleR) / 2) + minCircleR,
    duration = 3000,
    blockSize = 240,
    blocks = Math.round(width / blockSize),
    easeInOutQuart = 'cubic-bezier(0.770, 0.000, 0.175, 1.000)';
    
for(var i = 0; i < blocks; i++) {
  var blockXStart = blockSize * i,
      blockXEnd = blockSize * (i + 1),
      circleR = randomIntFromInterval(8, 14),
      crossSize = randomIntFromInterval(14, 20),
      squigglyWidth = randomIntFromInterval(40, 80),
      squigglyHeight = randomIntFromInterval(5, 10);
  
  var x = randomIntFromInterval(blockXStart, blockXStart + blockSize / 4);
  generateSteps(x);
  
  var topX = randomIntFromInterval(x + margin * 3, blockXEnd - squigglyWidth - margin),
      topY = randomIntFromInterval(margin, height / 3 - margin);
  
  var bottomX = randomIntFromInterval(blockXStart, x),
      bottomY = randomIntFromInterval(margin + height / 2, height);
  
  if(i % 2 == 0) {    
    generateCircle(circleR, topX, topY);
    generateCross(crossSize, bottomX, bottomY - crossSize);
    generateSquiggly(blockXEnd - squigglyWidth, height / 2, squigglyWidth, squigglyHeight);
  } else {
    generateCross(crossSize, topX, topY);
    generateSquiggly(blockXEnd - squigglyWidth, height / 2, squigglyWidth, squigglyHeight);
    generateCircle(circleR, bottomX, bottomY - circleR);
  }
}

function generateCircle(r, cx, cy) {
  var $circle = $(SVG('circle'))
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('min-r', r)
    .attr('r', r);
  
  var circle = $circle[0],
      circleAnimationName = 'growShrink',
      circleDuration = randomIntFromInterval(duration / 1.2, duration * 1.2) + 'ms';
  circle.style['animation'] = circleAnimationName + ' ' + circleDuration + ' ' + easeInOutQuart + ' infinite';
  circle.style['transformOrigin'] = cx + 'px ' + cy + 'px';
  
  $circle.appendTo($svg);
}

function generateCross(size, x, y) {
  var $g = $(SVG('g'))
    .attr('class', 'cross')
    .attr('transform', 'translate(' + x + ' ' + y + ')');
  
  var $line1 = $(SVG('line'))
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', size)
    .attr('y2', size);

  var $line2 = $(SVG('line'))
    .attr('x1', 0)
    .attr('y1', size)
    .attr('x2', size)
    .attr('y2', 0);
  
  var g = $g[0],
      line1 = $line1[0],
      line2 = $line2[0],
      crossAnimationName = 'spin',
      crossDuration = randomIntFromInterval(duration / 1.2, duration * 1.2) + 'ms',
      crossAnimation = crossAnimationName + ' ' + crossDuration + ' ease-in-out infinite';
  
  line1.style['animation'] = crossAnimation;
  line2.style['animation'] = crossAnimation;
  line1.style['transformOrigin'] = size / 2 + 'px ' + size / 2 + 'px';
  line2.style['transformOrigin'] = size / 2 + 'px ' + size / 2 + 'px';
  
  $line1.appendTo(g);
  $line2.appendTo(g);
  $g.appendTo($svg);
}

function generateSquiggly(xOffset, yOffset, wide, tall) {
  var curveWidth = 20;

  // Create path instructions
  var path = [];
  for (var i = 0; i <= wide; i++) {
      var angle = (i / curveWidth) * Math.PI * 2;  // angle = 0 -> 2π
      var x = angle * curveWidth / (Math.PI * 2);
      var y = Math.sin(angle) * (tall / 2) + (tall / 2);
      x += xOffset;
      y += yOffset;
      // M = move to, L = line to
      path.push((i == 0 ? 'M' : 'L') + x + ',' + y);
  }
  
  var $squiggly = $(SVG('path'))
    .attr('class', 'squiggly')
    .attr('d', path.join(' '))
    .css('stroke-dasharray', 80);
  
  var squiggly = $squiggly[0],
      squigglyAnimationName = 'lineDisappear',
      squigglyDuration = randomIntFromInterval(duration * 2, duration * 2.5) + 'ms';
  squiggly.style['animation'] = squigglyAnimationName + ' ' + squigglyDuration + ' ' + easeInOutQuart + ' infinite';
  
  $squiggly.appendTo($svg)
}

function generateSteps(xOffset) {
  var stepSize = 15,
      numberOfSteps = height / stepSize;

  // Create path instructions
  var path = [];
  for (var i = 0; i < numberOfSteps; i++) {
      var x = xOffset + i * stepSize;
      var y = i * stepSize;
      path.push((i == 0 ? 'M' : 'L') + x + ',' + y);
      
      x = xOffset + i * stepSize;
      y = (i + 1) * stepSize;
      path.push('L' + x + ',' + y);
  }
  
  var dashArray = randomIntFromInterval(numberOfSteps * .5, numberOfSteps) * stepSize * 2;
  
  var $steps = $(SVG('path'))
    .attr('class', 'steps')
    .attr('d', path.join(' '))
    .css('stroke-dasharray',  dashArray)
    .css('stroke-dashoffset', dashArray / 2 * -1);
  
  var steps = $steps[0],
      stepsAnimationName = 'lineCrawl',
      stepsDuration = randomIntFromInterval(duration * 2, duration * 2.5) + 'ms';
  steps.style['animation'] = stepsAnimationName + ' ' + stepsDuration + ' linear infinite';
  
  $steps.appendTo($svg);
}

function startAnimation() {
  $('circle').attr("class", "playing");
  $('.cross line').attr("class", "playing");
  $('.squiggly').attr("class", "squiggly playing");
  $('.steps').attr("class", "steps playing");
}

function stopAnimation() {
  $('circle').attr("class", null);
  $('.cross line').attr("class", null);
  $('.squiggly').attr("class", "squiggly");
  $('.steps').attr("class", "steps");
}

function SVG(tag) {
   return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

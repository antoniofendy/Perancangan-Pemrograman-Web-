Reveal on Scroll
================

This is a JQuery plugin that applies a class 'js-reveal--hidden' to elements when it 
determines that they should be hidden, and removes it when it determines that they
shouldn't. 

The Javascript doesn't actually affect the visibility of any elements, it leaves that up to 
the CSS. This way, if a user lacks Javascript, nothing is hidden.

What determines if an element should be hidden?
-----------------------------------------------

The plugin determines what the viewport is and wont hide anything thats already in view. Anything that has
the class 'js-reveal' is evaluated. Anything with the class that isn't in the viewport is hidden.

Example Usage
-------------

See a demo of this in use on [codepen.io](http://codepen.io/robcopeland/pen/bNgOzw).

You just have to include it and do

`$.fn.scrollReveal();`
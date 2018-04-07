
$(document).ready(function() {
  'use strict';
  
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool = new Tool();

  tool.onMouseDown = function(event) {
    // var c = Shape.Circle(event.point.x, event.point.y, 20);
    var c = Shape.Circle(event.point, 20); // event.point has x and y together
    c.fillColor = 'green';
  };

  paper.view.draw();
});

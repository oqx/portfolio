module.exports = function($document) {
  return {
    restrict: 'A',
    scope: {
      dragIsActive: '=',
    },
    replace: false,

    link: function(scope, element, attr) {
      // scope.$watch('dragActive', function(newValue, oldValue) {
      //   if (newValue)
      //     console.log("I see a data change!");
      // }, true);
      var startX = 0,
        startY = 0,
        x = 0,
        y = 0;
        console.log(attr);
      attr.$observe('dragisactive', function(val) {
        attr.dragisActive(val === true ? 'true' : 'false');
      });

      function isDragging() {
        element.on('mousedown', function(event) {
          // Prevent default dragging of selected content
          event.preventDefault();
          startX = event.screenX - x;
          startY = event.screenY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });
      };


    function mousemove(event) {
      y = event.screenY - startY;
      x = event.screenX - startX;
      element.css({
        top: y + 'px',
        left: x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  }
}
};

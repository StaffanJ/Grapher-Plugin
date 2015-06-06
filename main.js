$(document).ready(function(){
  'use strict';

  	/*------------------------------
		Drawing the bar graph
  	-------------------------------*/

    $('body').drawBar({
    	element: $("#chart")
    });

     $('body').drawBar({
    	element: $("#newChart"),
        height: '300px',
        width: '400px',
        padding: 5
    });

  	/*------------------------------
		Drawing the overhead graph
  	-------------------------------

    $('body').drawOverhead({
    	element: $("#chart")
    });*/

});
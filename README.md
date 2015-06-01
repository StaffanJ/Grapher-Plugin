# Grapher-Plugin

A plugin that handles two basic graphs by simply adding a few lines of HTML, some CSS and the JavaScript file.

Simply install the plugin by downloading the files and adding the following HTML code:</br>

&lt;div class="wrapper"&gt;</br>
    &lt;div id="chart"&gt;</br>
    &lt;/div&gt;</br>
&lt;/div&gt;</br>

You simply launch the plugin by adding the following code:</br>

$('body').drawBar({</br>
});</br>

Or to launch the other bar function add: </br>

$('body').drawOverhead({</br>
});</br>

The features that exists are a bar graph that works both vertically and horizontally. </br>
You can edit the height and width of the element by changing it it settings.</br>
The data options is the data that you want to display in the graph, simply add or remove the properties in the votes object.</br>
Padding is simply the padding between the bars.</br>
These settings are the same, the only thing that separates them are the width and height of the element.</br>

var settings = $.extend({</br>
    data: votes,</br>
    height: '200px',</br>
    width: '500px',</br>
    padding: 0</br>
  }, options );</br>

There is also another feature available for your use and that is a tooltip that works both on the graph bar but also on other elements.</br>
If you only want to use it on the graph there is no need for change. </br>
But if you want to change it or add it to another element there is a few things you need to change.</br>

First there is a settings option here aswell:</br>

var settings = $.extend({</br>
    element: '.addIndex'</br>
}, options );</br>

You change it to the element you want to use it on, with either the Class or the Id of it.</br>
There is also one thing you need to change and that is the tooltip that is displayed, this is the showTooltip function:

showTooltip = function(event) {</br>
    var addIndexId = $(this).attr('data-id'); <b>*Remove this line*</b></br>
    $('div.tooltip').remove();</br>
    $('&lt;div class='tooltip'&gt;&lt;p&gt; Total number of votes: ' + addIndexId + '&lt;/p&gt;&lt;/div&gt;') <b>*Change this line*</b></br>
        .appendTo('body');</br>
    changeTooltipPosition(event);</br>
},</br>

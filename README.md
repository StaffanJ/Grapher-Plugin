# Grapher-Plugin

A plugin that handles two basic graphs by simply adding a few lines of HTML, some CSS and the JavaScript file.

Simply install the plugin by downloading the files and adding the following HTML code:</br>

&lt;div class="wrapper"&gt;</br>
    &lt;div id="chart"&gt;</br>
    &lt;/div&gt;</br>
&lt;/div&gt;</br>

The features that exists are a bar graph that works both vertically and horizontally. </br>
You can edit the height and width of the element by changing it it settings.</br>
The data options is the data that you want to display in the graph, simply add or remove the properties in the votes object.</br>
Padding is simply the padding between the bars.</br>

var settings = $.extend({</br>
    data: votes,</br>
    height: '200px',</br>
    width: '500px',</br>
    padding: 0</br>
  }, options );</br>

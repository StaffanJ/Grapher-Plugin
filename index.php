<!DOCTYPE html>
<html>
<head>
  <title>Grapher Plugin</title>
  <link rel="stylesheet" type="text/css" href="myCss.css">
</head>
<body>
<div id='flash'>
    <h1 style='text-align:center;'>Grapher!</h1>
    <h2>About Grapher</h2>
    <p>So you have found your way here? Great! This is the graphing tool called Grapher. I created this plugin because i wanted a simple yet powerful graph tool. The goal with Grapher is that it shall be easy to learn and easy to customize and the user should not have to be overwhelmed by the amount of code required to use the plugin. The most advanced part is going to be to add new bars and changing the height and width of the element. Let's get started shall we!</p>
    <p>First let's start with an example.</p>
    
    <div class="wrapper">
      <div id="chart">
      </div>
    </div>

    <p>Here we have a simple graph that displays a few bars with information.</p>

    <h2>Basic installation and Usage</h2>
    <p>Let's start by downloading the plugin.</p>
    <button id="downloadBtn"><a href='../graph_Plugin/download/Grapher-Plugin.zip'>Download Plugin</a></button><br><br>
    <p>It's also available on <a href="https://github.com/StaffanJ/Grapher-Plugin">GitHub</a></p>
    
    <p>To get the plugin to work you need jQuery and a path to the plugin, to add the plugin to your page just add it to the directory that your JavaScript is in and call it the following way. There is also a need for the CSS file, inside the CSS you can change color on the bars and other things, feel free to change it as you see fit.</p>
    <h4>HTML Code:</h4><pre class='exampleCode'>  <code>
  &lt;script src="your/path/to/javascript/grapher.js"&lt;&gt;/script&gt;
  &lt;script src="your/path/to/css/graper_CSS.js"&lt;&gt;/script&gt;</code>
    </pre><br>
    <p>The basic idea of the plugin is that you should only have to change a few thing to get the plugin to work.</p> 
    <p>To get the plugin to work start by adding the follow HTML code:</p>
    <h4>HTML Code:</h4><pre class='exampleCode'><code>  
  &lt;div class="wrapper"&gt;
    &lt;div id="chart"&gt;
    &lt;/div&gt;
  &lt;/div&gt;</code>
    </pre><br>
    <p>I do recommend downloading the <a href="../graph_Plugin/download/grapher_CSS.zip">CSS</a> file to get the most out of the experience, if you don't things will break.</p>
    <p>To start the graph with the basic data and layout add the following code.</p> 
    <h4>JavaScript Code:</h4><pre class='exampleCode'><code> 
  $('body').drawBar({
  });</code>
    </pre>
    <p>This will start the graph with the basic code and data, as shown by the example above.</p>
    <p>But i guess you don't want the green color and the names i have in my graph? So lets get change that shall we? Depending on if you want to change the color or the data shown the following is required.</p>
    <h4>Settings in the plugin</h4>
    <p>You can edit the height and width of the element by changing it it settings.
       The data options is the data that you want to display in the graph, simply add or remove the properties in the votes object.
       Padding is simply the padding between the bars.
       These settings are the same, the only thing that separates them are the width and height of the element.
       All these settings are in the plugin file.</p>
    <h4>JavaScript Code:</h4><pre class='exampleCode'><code>  
  var settings = $.extend({
    data: data,
    element: $("#chart"),
    height: '200px',
    width: '500px',
    padding: 10
  }, options );
      </code>
    </pre>
    <p>Feel free to change these settings to your liking. I will give a brief description as to what they do. The data is the stuff you want to show on your page, the element is the html element you want to call to draw the graph, width and height are the dimensions of the graph and padding is the padding between the bars.</p>
    <p>To change the data that is shown you edit the data variable at the top of the plugin file simple as that.</p>
    <h4>Change settings in the plugin</h4>
    <p>So now we have covered the basics of the plugin but if you want to change settings without going into the plugin file you need to change it when you call the function. Let me demonstrate.</p>
    <h4>JavaScript Code:</h4><pre class='exampleCode'><code>  
  $('body').drawBar({
      element: $("#newChart"),
      height: '300px',
      width: '400px',
      padding: 5
  });
      </code>
    </pre>
    <p>This code will display the graph that is shown below. Can you see the difference?</p>
  <div class="wrapper">
    <div id="newChart">
    </div>
  </div>
  <h3>Tooltip</h3>
  <p>There is also another feature hidden within the plugin, and that is a tooltip function. By default this is assigned to the graphs and their bars.
  If you only want to use it on the graph there is no need for change. 
  But if you want to change it or add it to another element there is a few things you need to change.

  First there is a settings option here aswell:</p>
  <h4>JavaScript Code:</h4><pre class='exampleCode'><code>  
    var settings = $.extend({
      element: '.addIndex'
  }, options );
      </code>
    </pre>

  <p>You change it to the element you want to use it on, with either the Class or the Id of it.
  There is also one more thing you need to change and that is the tooltip that is displayed, that is in the the showTooltip function:</p>

  <h4>JavaScript Code:</h4><pre class='exampleCode'><code>
  showTooltip = function(event) {
    var addIndexId = $(this).attr('data-id'); <b>*Remove this line*</b>
    $('div.tooltip').remove();
    $('&lt;div class='tooltip'&gt;&lt;p&gt; Total number of votes: ' + addIndexId + '&lt;/p&gt;&lt;/div&gt;') <b>*Change this line*</b>
        .appendTo('body');
    changeTooltipPosition(event);
    },
    </code>
    </pre>

    <h3>Further plans for Grapher</h3><p>I plan on adding additional charts like a pie chart, the obstacle i have is learning SVG and after that things will be rolling out. I might also adds some sort of database connection further down the road to make the plugin more versatile but that is going to be optional since most people just want to add their own values and make it simple for them.</p>
  <h2>Comparison of different Bar Graphs</h2>
  <p>To further illustrate the simplicity of my plugin I've done a comparison of different plugins that handle Bar Plugins.</p>
  <img src="img/Comparison_of_different_bar_plugins.png" />
  <p>I have chosen to not display the name of the plugins since i feel that would point them out might give negative feedback.</p>
  <p>As you can see my plugin scores low on most of the things I've compared to, I have retrieved the data from <a href="http://jshint.com/">JSHint</a>, I also compared the way the plugins displayed the graph.</p>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="grapher.js"></script>
<script src="main.js"></script>
</html>
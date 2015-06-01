(function( $ ) {
/*----------------------------------------------------------------------------
    Add values to the object votes to add more attirubes to the graph.
-----------------------------------------------------------------------------*/
var votes = [{name: "Johan", numberOfVotes: 1},
                {name: "Staffan", numberOfVotes: 2},
                {name: "Kristofer", numberOfVotes: 3},
                {name: "Dalibor", numberOfVotes: 4},
                {name: "Lisa", numberOfVotes: 5}],
    initiate = 0;

/*------------------------------------------------------------------
        The element that you want to add the graph to.
------------------------------------------------------------------*/
chart = $("#chart");

$.fn.drawBar = function(options){

    var settings = $.extend({
        data: votes,
        height: '200px',
        width: '500px',
        padding: 10
    }, options );

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Assigning the height and width to the element, depending on what your height to you need to change newparagraphs margin-bottom css according to it.
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    chart.css('height', settings.height);
    chart.css('width', settings.width);

    /*--------------------------------------------------------------------------------
        Declaring variables that handle different things inside the draw function.
    ----------------------------------------------------------------------------------*/
    var barwidth = ((chart.width()-(settings.data.length-1)*settings.padding-(settings.data.length)*10)/settings.data.length),
        left = 0,
        totalVotes = 0,
        percentage = [0, 25, 50, 75, 100];

        /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                Checks the values array and prints out the percentage for each value.
          If you want to change the different percentage values you need to change the percentage variable depending on it and add or remove from the values array.
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
         $(percentage).each(function(i){

            /*--------------------------------------------------------------------------------------------------
                    Here the plugin creates a new paragraph for each value in the percentage variable. 
            ---------------------------------------------------------------------------------------------------*/
            
            var newparagraph = $('<p class="percentageParagraph">|' + percentage[i] + '%</p>');
            newparagraph.css('bottom', percentage[i]-10 + '%');
            chart.append(newparagraph);
        });

        $(settings.data).each(function(i){
            totalVotes = totalVotes + settings.data[i].numberOfVotes;
        });

        $(settings.data).each(function(i){
            var newbar = $('<div class="graphBar drawingGraphsBar pointer addIndex" data-name="' + settings.data[i].name + '" data-id="' + settings.data[i].numberOfVotes + '"><p class="graphBarParagraph">' + settings.data[i].name + '</p></div>');
                newbar.width(barwidth+"px");
                newbar.height((100/totalVotes)*settings.data[i].numberOfVotes+"%");
                newbar.css('left', left+"px");
                chart.append(newbar);
                left += (barwidth+settings.padding+10);
        });

        if(initiate === 1){
            $('.addIndex').removeClass('drawingGraphsBar');
        }

        initiate = 1;

    $('body').toolTip({});
};

$.fn.drawOverhead = function (options){

    var settings = $.extend({
        data: votes,
        height: '500px',
        width: '200px',
        padding: 10
    }, options );

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
            Assigning the height and width to the element, depending on what your width to you need to change newparagraphs margin-bottom css according to it.
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    chart.css('height', settings.height);
    chart.css('width', settings.width);

    /*----------------------------------------------------------------------------------
        Declaring variables that handle different things inside the draw function.
    -----------------------------------------------------------------------------------*/
    var barheight = ((chart.height()-(settings.data.length-1)*settings.padding-(settings.data.length)*10)/settings.data.length),
        top = 0,
        totalVotes = 0,
        percentage = [0, 25, 50, 75, 100];
       /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                Checks the values array and prints out the percentage for each value.
          If you want to change the different percentage values you need to change the percentage variable depending on it and add or remove from the values array.
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        $(percentage).each(function(i){
             /*-------------------------------------------------------------------------------------------------
                    Here the plugin creates a new paragraph for each value in the percentage variable. 
            ---------------------------------------------------------------------------------------------------*/
            var newparagraph = $('<p class="percentageParagraph">|' + percentage[i] + '%</p>');
            newparagraph.css('left', percentage[i] + '%');
            chart.append(newparagraph);
        });

        $(settings.data).each(function(i){
            totalVotes = totalVotes + settings.data[i].numberOfVotes;
        });

        $(settings.data).each(function(i){
            var newbar = $('<div class="graphOverhead pointer drawingGraphsOverhead addIndex" data-name="' + settings.data[i].name + '" data-id="' + settings.data[i].numberOfVotes + '"><p class="graphOverheadParagraph">' + settings.data[i].name + '</p></div>');
                newbar.width((100/totalVotes)*settings.data[i].numberOfVotes+"%");
                newbar.height(barheight+"px");
                newbar.css('top', top-10+"px");
                chart.append(newbar);
                top += (barheight+settings.padding+10);
              
        });


        if(initiate === 1){
            $('.addIndex').removeClass('drawingGraphsOverhead');

        }

        initiate = 1;

    
    $('body').toolTip({});
};

/*----------------------------------------------------------------------------------------
    The funtion for displaying tooltip, binds different events to the .addIndex class.
-----------------------------------------------------------------------------------------*/
$.fn.toolTip = function(options) {

     var settings = $.extend({
        element: '.addIndex'
    }, options );

    var changeTooltipPosition = function(event) {
        var tooltipX = event.pageX - 80,
            tooltipY = event.pageY + 10;
            $('div.tooltip').css({top: tooltipY, left: tooltipX});
            
    },
     
    showTooltip = function(event) {
        var addIndexId = $(this).attr('data-id');
            $('div.tooltip').remove();
            $('<div class="tooltip"><p> Total number of votes: ' + addIndexId + '</p></div>')
                .appendTo('body');
            changeTooltipPosition(event);
    },
     
    hideTooltip = function(event) {
        $('div.tooltip').remove();
    };
        
    $(settings.element).bind({
        mousemove : changeTooltipPosition,
        hover : showTooltip,
        mouseleave: hideTooltip
    });
}

/*--------------------------------------------------------------------------------------------------------
    Code that adds another vote to the graph, but since there is no place to save it it's worthless
----------------------------------------------------------------------------------------------------------    
chart.delegate('.addIndex', 'click', function(){
    var id = $(this).attr('data-name');
    $('#chart').html('');
    addIndexArray(votes, id);
});

function addIndexArray (array, index) {
    $(array).each(function(i){
        if (array[i].name == index) {
            array[i].numberOfVotes++;
        }
    });

    $(window).drawBar({
        padding: 10
    });
}
----------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------
    Code that adds another value to the graph, does nothing atm since there is no place to save it.
----------------------------------------------------------------------------------------------------------
/*$('#addToChart').on('click', function(){
    var valueToArray = $('#valueToArray').val();
    $('#chart').html('');
    addToArray(votes, valueToArray);
});

function addToArray (array, name) {
    votes.push({name: name, numberOfVotes: 1});
    $(window).drawBar({
        padding: 10
    });
    //drawOverhead(votes, 10);
}
------------------------------------------------------------------------------------------------------------*/
 
}( jQuery ));
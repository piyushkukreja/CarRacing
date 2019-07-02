/*$(function(){}); this is a shorthand function call to document.ready event which looks like follows


$(document).ready(function(){
    alert("Hello");
});

The basic syntax to use jquery is:
$(selector).action();
*/
$(function(){
    //all your jquery code goes here
    //alert("hello");
    //$('#box').hide();
    //$('.thing').fadeOut();
    //$('h1').css("color","blue")
    $('button').click(function(){
        $('#box').fadeOut(1000);
    });
    
    /***************jQuery Selectors**************/
    
    
    //https://api.jquery.com/category/selectors
    //w3schools.com/jquery/jquery_ref_selectors.asp
    //w3schools.com/jquery/trysel.php
    
    //Grouping Selectors!
    //$('h2, h3, h4').css('border', 'solid 1px red');
    //ID Selectors
    //$('div#container').css('border', 'solid 1px red');
    
    //Class Selectors
    //$('p.lead').css('border', 'solid 1px red');
    
    //Pseudo-element selector-selects the first(complete and only first 'li' in whole html) element
    //$('li:first').css('border', 'solid 1px red');
    
    //Pseudo-element selector - selects all even p tag
    //$('p:even').css('border', 'solid 1px red');
    
    //Descendant Selectors
    //$('div em').css('border', 'solid 1px red');
    
    //Child Selectors
    //$('div > p').css('border', 'solid 1px red');
    
//    jQuery header selector; selects all headers i.e. h1-h6
    //$(':header').css('border', 'solid 1px red');
    
    //jQuery contains Selector; checks for parent element and selects the immediate parent(div)
    //$('div:contains("me")').css('border', 'solid 1px red');
    
    
    /***********************************************************************************
    *****************************jQuery Events******************************************
    ************************************************************************************/
    
    //api.jquery.com/category/events
    //w3schools.com/jquery/jquery_ref_events.asp
    
    
    $('#box').click(function(){
        alert('you just clicked a box')
    });
    $('input[type="text"]').blur(function(){
        if($(this).val() == ""){
            $(this).css('border', 'solid 1px red');
            $('#box').text('Forgot to add some text');
        }
    });
    
    $('input[type="text"]').keydown(function(){
        if($(this).val() !== ""){
            $(this).css('border', 'solid 1px #777');
            $('#box').text('Thanks for that');
        }
    });
    $('#box').hover(function(){
        //code which will be executed on mouse in
        $('#box').text('You Hovered in');

    }, function(){
        //code which will be executed on mouse out
        $('#box').text('You Hovered out');
    });
    
    /***********************************************************************************
    *****************************jQuery Chaining******************************************
    ************************************************************************************/
    
    $('.notification-bar').delay(3000).slideDown().delay(3000).fadeOut();
    
     /***********************************************************************************
    *****************************jQuery Hide-Show******************************************
    ************************************************************************************/
    
    //$('h1').hide();
    //$('.hidden').show();
    //$('div.hidden').fadeIn(3000);
    $('#box1').click(function(){
        $(this).fadeTo(3000, 0.2, function(){
            $(this).slideUp();
        });
    });
    
    $('div.hidden').slideDown();
    
    $('button').click(function(){
        $('#box1').slideToggle();
    });
    
    /***********************************************************************************
    *****************************jQuery Animate******************************************
    ************************************************************************************/
    
    $('#left').click(function(){
        $('.box').animate({
            left: "-=10px",
            fontSize: "-=2px"
        }, function(){
            //code to be executed when animation is complete
        });
    });
    $('#right').click(function(){
        $('.box').animate({
            left: "+=10px",
            fontSize: "+=2px"
        }, function(){
            //code to be executed when animation is complete
        });
    });
    $('#up').click(function(){
        $('.box').animate({
            top: "-=20px",
            opacity: "+=0.1"
        }, function(){
            //code to be executed when animation is complete
        });
    });
    $('#down').click(function(){
        $('.box').animate({
            top: "+=20px",
            opacity: "-=0.1"
        }, function(){
            //code to be executed when animation is complete
        });
    });

    /***********************************************************************************
    *****************************jQuery CSS******************************************
    ************************************************************************************/
    $('#circle2').css({
        'background': '#8a8d22',
        'display': 'inline-block',
        'color': 'white',
        'text-align': 'center',
        'line-height': '150px',
        'width':'150px',
        'height':'150px',
    }).addClass('circleShape');//addClass is for runtime which most developers use mostly for animations(also removeClass method exists for runtime)
    
    /***********************************************************************************
    *****************************jQuery error(hw.html)******************************************
    ************************************************************************************/
    
    $('#times').click(function(){
        $('#withTimes').css({'display':'none'});
        $('#times').css({'display':'none'});
    });
    
    
    /***********************************************************************************
    *****************************jQuery error(hw.html)******************************************
    ************************************************************************************/
    
    $('#go').click(function(){
        
        function checkIfComplete(){
            if( isComplete == false){
                isComplete=true;
            }else{
                place='second';
            }
        }
        //set the flag variable to False by default
        var isComplete = false;
        
        //set a place variable to 'first' by default
        var place = 'first';
        //get the width of the cars
        var carWidth = $('#car1').width();
        
        //get the width of the race track
        var raceTrackWidth = $(window).width() - carWidth;
        
        //generate two random number between 1-5000
        var racetime1 = Math.floor(1 + Math.random() * 5000);
        
        var racetime2 = Math.floor(1 + Math.random() * 5000);
        
        $('#car1').animate({
            //move the car to the end of the race track
            left: raceTrackWidth    
        }, racetime1, function(){
            //code to be executed after race completes
            checkIfComplete();
            $("#raceInfo1 span").text('Finished in' + place + 'place and clocked at' + racetime1 + 'milliseconds');

        });
        
        $('#car2').animate({
            //move the car to the end of the race track
            left: raceTrackWidth
        }, racetime2, function(){
            //code to be executed after race completes
            checkIfComplete();
            
            $("#raceInfo2 span").text('Finished in' + place + 'place and clocked at' + racetime2 + 'milliseconds');
            
        });
    });
    
    $('#reset').click(function(){
        $('.car').css('left', '0');
        $('.raceInfo span').text(' ');
    });
    
});
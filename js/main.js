
//Hide unhide contact info
$(document).ready(function(){
    $("#contactnav").click(function(){
        $("#contactinfo").slideToggle();
    });
});


$(document).ready(function(){
    $("#contactnavwide").click(function(){
        $("#contactinfowide").slideToggle();
    });
});


/*
//Set youtube thumb height
var new_height = document.getElementById('youtube_thumb').offsetWidth;
console.log(new_height);
new_height = 0.5625*new_height;
console.log(new_height);
document.getElementById('youtube_thumb').style.height=new_height + 'px';

//Set youtube page height
var new_height = document.getElementsByClassName('youtube_page').offsetWidth;
console.log(new_height);
new_height = 0.5625*new_height;
console.log(new_height);
document.getElementsByClassName('youtube_page').style.height=new_height + 'px';
*/
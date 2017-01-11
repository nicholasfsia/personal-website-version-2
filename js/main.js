
var all = document.getElementById("all"),
	ui_ux = document.getElementById("ui_ux"),
	gd = document.getElementById("gd"),
	hardware = document.getElementById("hardware"),

	uwaterloo_library_mobile = document.getElementById("uwaterloo_library_mobile"),
	bloombox = document.getElementById("bloombox"),
	instagram = document.getElementById("instagram"),
	personal_website = document.getElementById("personal_website"),
	agf = document.getElementById("agf"),
	nineharvest = document.getElementById("nineharvest"),
	brand_logo = document.getElementById("brand_logo"),
	personal_logo = document.getElementById("personal_logo"),
	cad = document.getElementById("cad"),
	wedding = document.getElementById("wedding"),
	poster = document.getElementById("poster"),
	editorial = document.getElementById("editorial");



all.addEventListener("click", function() {
	all.style.color = "#163044";
	all.style.textDecoration = "underline";

	ui_ux.style.color = "#356873";
	ui_ux.style.textDecoration = "none";

	gd.style.color = "#356873";
	gd.style.textDecoration = "none";

	hardware.style.color = "#356873";
	hardware.style.textDecoration = "none";

	uwaterloo_library_mobile.display ="inline-block";
	bloombox.style.display = "inline-block";
	instagram.style.display = "inline-block";
	personal_website.style.display = "inline-block";
	agf.style.display = "inline-block";
	nineharvest.style.display = "inline-block";
	brand_logo.style.display = "inline-block";
	personal_logo.style.display = "inline-block";
	cad.style.display = "inline-block";
	wedding.style.display = "inline-block";
	poster.style.display = "inline-block";
	editorial.style.display = "inline-block";

});

ui_ux.addEventListener("click", function() {
	all.style.color = "#356873";
	all.style.textDecoration = "none";

	ui_ux.style.color = "#163044";
	ui_ux.style.textDecoration = "underline";

	gd.style.color = "#356873";
	gd.style.textDecoration = "none";

	hardware.style.color = "#356873";
	hardware.style.textDecoration = "none";

	uwaterloo_library_mobile.display ="inline-block";
	bloombox.style.display = "none";
	instagram.style.display = "inline-block";
	personal_website.style.display = "inline-block";
	agf.style.display = "inline-block";
	nineharvest.style.display = "none";
	brand_logo.style.display = "none";
	personal_logo.style.display = "none";
	cad.style.display = "none";
	wedding.style.display = "none";
	poster.style.display = "none";
	editorial.style.display = "none";
});

gd.addEventListener("click", function() {
	all.style.color = "#356873";
	all.style.textDecoration = "none";

	ui_ux.style.color = "#356873";
	ui_ux.style.textDecoration = "none";

	gd.style.color = "#163044";
	gd.style.textDecoration = "underline";

	hardware.style.color = "#356873";
	hardware.style.textDecoration = "none";

	uwaterloo_library_mobile.display ="none";
	bloombox.style.display = "none";
	instagram.style.display = "none";
	personal_website.style.display = "none";
	agf.style.display = "none";
	nineharvest.style.display = "inline-block";
	brand_logo.style.display = "inline-block";
	personal_logo.style.display = "inline-block";
	cad.style.display = "none";
	wedding.style.display = "inline-block";
	poster.style.display = "inline-block";
	editorial.style.display = "inline-block";
});

hardware.addEventListener("click", function() {
	all.style.color = "#356873";
	all.style.textDecoration = "none";

	ui_ux.style.color = "#356873";
	ui_ux.style.textDecoration = "none";

	gd.style.color = "#356873";
	gd.style.textDecoration = "none";

	hardware.style.color = "#163044";
	hardware.style.textDecoration = "underline";

	uwaterloo_library_mobile.display ="none";
	bloombox.style.display = "inline-block";
	instagram.style.display = "none";
	personal_website.style.display = "none";
	agf.style.display = "none";
	nineharvest.style.display = "none";
	brand_logo.style.display = "none";
	personal_logo.style.display = "none";
	cad.style.display = "inline-block";
	wedding.style.display = "none";
	poster.style.display = "none";
	editorial.style.display = "none";
});


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
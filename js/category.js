var all = document.getElementById("all"),
	ui_ux = document.getElementById("ui_ux"),
	gd = document.getElementById("gd"),
	hardware = document.getElementById("hardware"),

	ui_ux_class = document.getElementsByClassName("ui_ux"),
	gd_class = document.getElementsByClassName("gd"),
	hardware_class = document.getElementsByClassName("hardware");



all.addEventListener("click", function() {
	all.style.color = "#163044";
	all.style.textDecoration = "underline";

	ui_ux.style.color = "#356873";
	ui_ux.style.textDecoration = "none";

	gd.style.color = "#356873";
	gd.style.textDecoration = "none";

	hardware.style.color = "#356873";
	hardware.style.textDecoration = "none";


	for(i=0; i<ui_ux_class.length; i++) {
		ui_ux_class[i].style.display = "inline-block";
	}
	
	for(i=0; i<gd_class.length; i++) {
		gd_class[i].style.display = "inline-block";
	}

	for(i=0; i<ui_ux_class.length; i++) {
		hardware_class[i].style.display = "inline-block";
	}

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

	for(i=0; i<ui_ux_class.length; i++) {
		ui_ux_class[i].style.display = "inline-block";
	}
	
	for(i=0; i<gd_class.length; i++) {
		gd_class[i].style.display = "none";
	}

	for(i=0; i<ui_ux_class.length; i++) {
		hardware_class[i].style.display = "none";
	}


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

	for(i=0; i<ui_ux_class.length; i++) {
		ui_ux_class[i].style.display = "none";
	}
	
	for(i=0; i<gd_class.length; i++) {
		gd_class[i].style.display = "inline-block";
	}

	for(i=0; i<ui_ux_class.length; i++) {
		hardware_class[i].style.display = "none";
	}


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

	for(i=0; i<ui_ux_class.length; i++) {
		ui_ux_class[i].style.display = "none";
	}
	
	for(i=0; i<gd_class.length; i++) {
		gd_class[i].style.display = "none";
	}

	for(i=0; i<ui_ux_class.length; i++) {
		hardware_class[i].style.display = "inline-block";
	}

});
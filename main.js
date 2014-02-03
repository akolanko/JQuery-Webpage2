$(document).ready( function (){
	$(".big").fadeOut(0);
	$("#pageTwo").fadeOut(0);
	$("#homepage").click( function(){
		$("#homepage").fadeOut(3000);
		$("#pageTwo").delay(1000).fadeIn(3000);
		$("#image1").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image10").fadeIn(1500);
			$("#image10").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image10").fadeOut(1500);
			});
		});
		$("#image2").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image20").fadeIn(1500);
			$("#image20").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image20").fadeOut(1500);
			});
		});
		$("#image3").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image30").fadeIn(1500);
			$("#image30").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image30").fadeOut(1500);
			});
		});
		$("#image4").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image40").fadeIn(1500);
			$("#image40").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image40").fadeOut(1500);
			});
		});
		$("#image5").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image50").fadeIn(1500);
			$("#image50").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image50").fadeOut(1500);
			});
		});
			$("#image6").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image60").fadeIn(1500);
			$("#image60").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image60").fadeOut(1500);
			});
		});
		$("#image7").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image70").fadeIn(1500);
			$("#image70").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image70").fadeOut(1500);
			});
		});
		$("#image8").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image80").fadeIn(1500);
			$("#image80").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image80").fadeOut(1500);
			});
		});
		$("#image9").click( function(){
			$("#pageTwo").animate({opacity: .2}, 1500);
			$("#image90").fadeIn(1500);
			$("#image90").click( function(){
				$("#pageTwo").animate({opacity: 1}, 1500);
				$("#image90").fadeOut(1500);
			});
		});
	});
});
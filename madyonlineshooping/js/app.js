$(document).ready(function(){
	// console.log("hi");
	// Start   Back to Top   Section

	$(".btn-backtotops").hide();
	$(window).scroll(function(){
		
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 300){
			$(".btn-backtotops").fadeIn(1000);
		}else{
			$(".btn-backtotops").fadeOut(1000);
		}
	});

	// End   Back to Top   Section
	// Start Nav Bar 
	 $(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 200){
			$('.navbar').addClass("navmenus");

		}else{
			$('.navbar').removeClass("navmenus");
		}
	 });


	 
$(".navbuttons").click(function(){
	$(this).toggleClass('crossxs');
});
	//End Nav Bar
 
	//Start  Propetry  Section 

	$(".propertylists").click(function(){
		// $(this).addClass("activeitems");
		$(this).addClass("activeitems").siblings().removeClass('activeitems');

		// const filtervalue  = $(this).attr('data-filter');
		const filtervalue = $(this).data('filter');

		// console.log(filtervalue);

		if(filtervalue === "all"){
			$(".filters").show("slide",400);
		}else{
			//Method 1
			// $(".filters").hide();
			// $(".filters").filter('.'+filtervalue).show();

			$(".filters").not('.'+filtervalue).hide(); //animation  error so inviatvale make
			$(".filters").filter('.'+filtervalue).show(); //animation  error so inviatvale make

		}
	});

	// End Propery  Section 

	// Start Adv  Section

	$(window).scroll(function(){
		// console.log(scroll);
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 1000){
			$('.advimages').addClass("fromlefts");
			$('.advtexts').addClass('fromrights');
		}else{
			$('.advimages').removeClass('fromlefts');
			$('.advtexts').removeClass('fromrights');
		}
	});
	// End  Adv  Section

	// //Start Footer Section
	const getyear =document.getElementById('getyear');
	const getfullyear = new Date().getFullYear();
	getyear.textContent = getfullyear;

	//End 	Footer Section
	
});


 
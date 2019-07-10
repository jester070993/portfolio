
const svg = document.querySelector(".jLetter");

const morph2start = "M35.029,14.154c0-1.65-1.35-3-3-3h-8.824c-1.65,0-3,1.35-3,3v7.14c0,1.65,1.35,3,3,3h8.824c1.65,0,3-1.35,3-3V14.154z"

const morph2end = " M90.117,35.025c0-13.128-6.365-23.871-14.149-23.871H34.354c-7.781,0-14.148,10.743-14.148,23.871v56.814c0,13.13,6.367,23.872,14.148,23.872h41.614c7.784,0,14.149-10.742,14.149-23.872V35.025z"



const morph3start = "M75.4,11.154v30.323c-4.043-5.69-9.883-8.535-17.52-8.535 c-4.043,0-7.824,0.749-11.343,2.246c-3.52,1.498-6.589,3.557-9.209,6.176c-0.822,0.822-1.585,1.695-2.3,2.604v35.673 c0.715,0.91,1.478,1.78,2.3,2.602c2.621,2.624,5.69,4.682,9.209,6.179c3.519,1.498,7.3,2.247,11.343,2.247 c5.314,0,9.809-1.423,13.477-4.27l0.113-0.111L65.969,76.18h-0.111h-0.113c-0.896,0.447-1.872,0.75-2.92,0.896 c-1.049,0.152-2.098,0.226-3.145,0.226c-2.174,0-4.193-0.411-6.064-1.235c-1.872-0.821-3.501-1.926-4.885-3.313 c-1.386-1.385-2.49-3.014-3.313-4.886c-0.825-1.87-1.235-3.894-1.235-6.063c0-2.172,0.41-4.194,1.235-6.064 c0.822-1.871,1.927-3.519,3.313-4.941c1.384-1.421,3.013-2.527,4.885-3.314c1.871-0.785,3.892-1.178,6.064-1.178 c2.172,0,4.211,0.393,6.12,1.178c1.91,0.787,3.556,1.874,4.94,3.257c1.386,1.387,2.508,3.016,3.369,4.885 c0.861,1.872,1.291,3.857,1.291,5.953L75.29,89.77h15.048V11.154H75.4z"

// const morph3end = "M75.4,11.154v30.323c-4.043-5.69-9.883-8.535-17.521-8.535 c-4.043,0-7.824,0.749-11.343,2.246c-3.52,1.498-6.589,3.557-9.209,6.176c-0.822,0.822-1.585,1.695-2.3,2.604v35.673 c0.715,0.91,1.478,1.78,2.3,2.603c2.621,2.624,5.69,4.682,9.209,6.179c3.519,1.498,7.3,2.247,11.343,2.247 c5.313,0,9.81-1.423,13.478-4.271l0.113-0.11L65.969,76.18h-0.111h-0.112c-0.896,0.447-1.872,0.75-2.92,0.896 c-1.05,0.152-2.099,0.226-3.146,0.226c-2.174,0-4.193-0.411-6.063-1.235c-1.872-0.82-3.501-1.926-4.885-3.313 c-1.386-1.385-2.49-3.014-3.313-4.886c-0.825-1.87-1.235-3.894-1.235-6.063c0-2.172,0.41-4.194,1.235-6.063 c0.822-1.871,1.927-3.519,3.313-4.941c1.384-1.421,3.013-2.527,4.885-3.314c1.87-0.785,3.892-1.178,6.063-1.178 s4.211,0.393,6.12,1.178c1.91,0.787,3.556,1.874,4.94,3.257c1.386,1.387,2.508,3.016,3.369,4.885 c0.861,1.872,1.291,3.857,1.291,5.953l-0.11,54.131h15.048V11.154H75.4z"


const morph3end =  "M75.4,11.154v30.323c-4.043-5.69-9.883-8.535-17.52-8.535c-4.043,0-7.824,0.749-11.343,2.246c-3.52,1.498-6.589,3.557-9.209,6.176c-0.822,0.822,38.761,1.695,38.046,2.604v35.673c0.715,0.91-38.868,1.78-38.046,2.602c2.621,2.624,5.69,4.682,9.209,6.179c3.519,1.498,7.3,2.247,11.343,2.247c5.314,0,9.809-1.423,13.477-4.27l0.113-0.111L65.969,76.18h-0.111h-0.113c-0.896,0.447-1.872,0.75-2.92,0.896c-1.049,0.152-2.098,0.226-3.145,0.226c-2.174,0-4.193-0.411-6.064-1.235c-1.872-0.821-3.501-1.926-4.885-3.313c-1.386-1.385-2.49-3.014-3.313-4.886c-0.825-1.87-1.235-3.894-1.235-6.063c0-2.172,0.41-4.194,1.235-6.064c0.822-1.871,1.927-3.519,3.313-4.941c1.384-1.421,3.013-2.527,4.885-3.314c1.871-0.785,3.892-1.178,6.064-1.178c2.172,0,4.211,0.393,6.12,1.178c1.91,0.787,3.556,1.874,4.94,3.257c1.386,1.387,2.508,3.016,3.369,4.885c0.861,1.872,1.291,3.857,1.291,5.953L75.29,89.77h15.048V11.154H75.4z"






svg.addEventListener("mouseenter", ()=>{
	// anime({
	// 	targets: ".Dpath",
	// 	d: [{
	// 		value: morph3end
	// 	}],
 //  		duration: 1500,
	// 	})

	 anime({
		// targets: ".Dpath",
		// d: [{
		// 	value: morph2end
		// }],
  // 		duration: 1500,
  //       easing: "easeOutExpo",

		// });
		targets: [".Jdot", ".Jpath"],
		translateX: [0, -20],
		translateY: [0, -20],
		easing: "easeOutExpo",	
		duration: 1500,
	// morphing.play();
})

	 	 anime({
		// targets: ".Dpath",
		// d: [{
		// 	value: morph2end
		// }],
  // 		duration: 1500,
  //       easing: "easeOutExpo",

		// });
		targets:".Dpath",
		translateX: [0, 30],
		translateY: [0, 30],
		easing: "easeOutExpo",	
		duration: 1500,
	// morphing.play();
})
})


   



svg.addEventListener("mouseleave", ()=>{
	console.log("you left over the svg")
	anime({
		targets: [".Jdot", ".Jpath"],
		translateX: [-20, 0],
		translateY: [-20, 0],
		easing: "easeOutExpo",	
		duration: 1500,
	// morphing.play();
})

	 	 anime({
		targets:".Dpath",
		translateX: [30, 0],
		translateY: [30, 0],
		easing: "easeOutExpo",	
		duration: 1500,
	// morphing.play();
	})
})





 
// 	targets: ".path2",
// 	// d: [{
// 	// 	value: d1
// 	// }],
//     easing: "easeOutExpo",
//     duration: 1500,
//     translateX: 10




// anime.timeline({ 
// 		// loop: true,
// 		// duration: 25000
// 			})
// 	// .add({
// 	// 	targets: ".h1",
// 	// 	translateX: [1000, 0],
// 	// 	// opacity: [1, 0],
// 	// 	// easing: "inOutElastic",
// 	// 	// delay: 500
// 	// 	duration: 500
// 	// })
// 	// .add({
// 	// 	targets: ".h1",
// 	// 	scaleX: [0,1],
// 	// 	opacity: [.5, 1],
// 	// 	duration: 900
// 	// })
// 	.add({
// 	targets: ".h1",
// 	 opacity: [0,1],
//     translateX: [40,0],
//     scaleX: [0.3, 1],
//     easing: "easeOutExpo",
//     delay: 500,
//         duration: 1000

//     // offset: '-=600'
// 	})
// 		.add({
// 	targets: ".h1",
// 	 opacity: [1, 0],
//     translateX: [0, -40],
//     // scaleX: [0.3, 1],
//     easing: "easeInExpo",
//     delay: 500,
//     duration: 1000
//     // offset: '-=600'
// 	})
// 		.add({
// 	targets: ".h1",
// 	 opacity: [0,1],
//     translateY: [100,0],
//     easing: "easeOutExpo",
//     delay: 500,
//         duration: 1000

//     // offset: '-=600'
// 	})
// 			.add({
// 	targets: ".h1",
// 	 opacity: [1,0],
//     translateY: [0,-100],
//     easing: "easeInExpo",
//     delay: 500,
//        duration: 1000

//     // offset: '-=600'
// 	}).add({
// 	targets: ".h1",
// 	 opacity: [0,1],
// 	     easing: "easeOutExpo",

// 	     translateY: [0,0],
// 	      duration: 1500,
//     delay: 800,
// 	})
// 	.add({
//     targets: "hr",
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700,
//     offset: '-=100'
// })

// const svg = document.querySelector("svg");
// const path1  = document.querySelector(".path1");
// const path2 = document.querySelector(".path2");
// const svg1 = document.querySelector(".svg");
// const test = document.querySelector(".test");



// console.log(path1, path2 )




// const d2 = "M188.493,69.535c-3.538-8.227-8.358-15.395-14.464-21.502c-6.107-6.105-13.277-10.926-21.503-14.464c-8.229-3.533-16.972-5.303-26.228-5.303h-21.082v-0.001H39.455l12.479,23.508h16.511v0.002h26.338h0.61l0.05,0.021h3.284l-83.67,96.154c5.524,0,111.107-76.929,126.959-92.781c-928.284-422.364,645.841,686.359,12.923,9.257c3.661,3.924,6.557,8.583,8.678,13.983c2.12,5.399,3.183,11.185,3.183,17.354c0,6.301-1.063,12.149-3.183,17.551c-2.121,5.397-5.017,10.061-8.678,13.979c-3.665,3.923-7.976,6.977-12.923,9.162c-4.949,2.188-10.19,3.277-15.717,3.277h-23.914l-4.033,45.915l27.949-22.389c9.256,0,17.998-1.766,26.229-5.304c8.227-3.534,15.396-8.354,21.503-14.465c6.104-6.104,10.926-13.272,14.464-21.501c3.534-8.228,5.303-16.974,5.303-26.229C193.797,86.506,192.027,77.764,188.493,69.535z"


// const d1 = "M105.217,72.042L78.027,57.193L25.44,100.001c0,2.441,52.134,23.083,51.237,25.269 c-0.901,2.186-59.727-11.044-61.396-9.373c-1.672,1.672,53.937,18.144,51.753,19.108c-2.188,0.965-4.566,1.447-7.136,1.447H29.43 v26.806h30.47c6.298,0,12.212-1.188,17.743-3.566c5.527-2.377,10.316-5.623,14.367-9.739c4.049-4.111,7.26-8.87,9.642-14.271c2.378-5.399,3.565-11.187,3.565-17.355V72.042z"


// // anime({
// // 	targets: "path1"
// // })



// // anime({
// // 	targets: "path2"
// // })

// //testing svg morph animatin 
// svg1.addEventListener("mouseover", () => {
// 	anime({
// 	targets: ".path2",
// 	// d: [{
// 	// 	value: d1
// 	// }],
//     easing: "easeOutExpo",
//     duration: 1500,
//     translateX: 10
// })
// 	anime({
// 	targets: ".path1",
// 	// d: [{
// 	// 	value: d2
// 	// }],
//     easing: "easeOutExpo",
//     duration: 1500,
//     translateY: 20
// })
// })


// //LOGO animation idea - put shape/polygon around letters, rotate on mouse over, and move letters slighly on mouse over as well
// svg1.addEventListener("mouseout", () => {
// 	anime({
// 	targets: ".path1",
// 	// d: [{
// 	// 	value: d2
// 	// }],
//     easing: "easeOutExpo",
//     duration: 1500,
//     translateY: 0
// })
// 		anime({
// 	targets: ".path2",
// 	// d: [{
// 	// 	value: d1
// 	// }],
//     easing: "easeOutExpo",
//     duration: 1500,
//     translateX: 0
// })
// })


//once  the document is loaded, checks if window width is below 768 px, 
//if so, hide nav and arrows  and add a click listener to toggle the logo
$(document).ready(function(){
	if(window.innerWidth < 768){
		$(".navul").hide();
		$(".socialUL").hide();
		const logo = document.querySelector(".logo")
		logo.addEventListener("click", () => {
			$(".navul").slideToggle();
			$(".socialUL").slideToggle();
		})
	}
})

//variables for animated nav items on hover 
//animates hover with anime.js library
// const animeWrapper = document.querySelectorAll(".animeWrapper")
// const iconWrapper = document.querySelectorAll(".iconWrapper")
// animeWrapper.forEach((animeWrapper) => {
// 	animeWrapper.addEventListener("mouseenter", (e) => {
// 		console.log(this.value)
// 		anime({
// 			targets: animeWrapper.querySelector(".arrow"),
// 			scale: 30,
// 			easing: "easeInExpo",		
// 			duration: 300
// 		})
// 	})
// 	animeWrapper.addEventListener("mouseleave", (e) => {
// 		anime({
// 			targets: animeWrapper.querySelector(".arrow"),
// 			scale: 1,
// 			easing: "easeInOutExpo",
// 			duration: 300
// 		})
// 	})
// })
// //icon animations hover
// iconWrapper.forEach( wrapper => {
// 	wrapper.addEventListener("mouseenter", () => {
// 		anime({
// 			targets: wrapper.querySelector("hr"),
// 			scaleX: 20,
// 			opacity: 1,
// 			easing: "easeOutExpo",
// 			duration: 350
// 		})
// 		wrapper.addEventListener("mouseleave", () => {
// 			anime({
// 				targets: wrapper.querySelector("hr"),
// 				scaleX: 0,
// 				opacity: 0,
// 				easing: "easeOutExpo",
// 				duration: 350
// 			})
// 		})
// 	})
// })

//set "active" class on given page
const titles = document.querySelectorAll(".text")
titles.forEach(title => {
	title.addEventListener("click", (e) =>{
		console.log(this.value)
		// if(title.classList.contains("active"){

		// }
		// title.classList.toggle("active")

		// if (title.classList.contains("active")){
		// 	title.classList.remove("active")
		// }
		// if(title.classList.toggle("active")){

		// }
	})
})






// })
// logo.addEventListener("click", () => {
// 	anime({
// 		targets: ".logo",
//  		translateX: "400px", // -> from '28px' to '100%',
// 		spring: "(1, 80, 10, 0)"
// 	})
	

// })


// svg logo animation
const svg = document.querySelector(".jLetter");

svg.addEventListener("mouseenter", ()=>{
	 anime({
		targets: [".Jdot", ".Jpath"],
		translateX: [0, -20],
		translateY: [0, -20],
		easing: "easeOutExpo",	
		duration: 1500,
})
	anime({
		targets:".Dpath",
		translateX: [0, 30],
		translateY: [0, 30],
		easing: "easeOutExpo",	
		duration: 1500,
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
})
	anime({
		targets:".Dpath",
		translateX: [30, 0],
		translateY: [30, 0],
		easing: "easeOutExpo",	
		duration: 1500,
	})
})
//end svg animation



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






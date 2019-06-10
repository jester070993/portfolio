anime.timeline({ 
		// loop: true,
		// duration: 25000
			})
	// .add({
	// 	targets: ".h1",
	// 	translateX: [1000, 0],
	// 	// opacity: [1, 0],
	// 	// easing: "inOutElastic",
	// 	// delay: 500
	// 	duration: 500
	// })
	// .add({
	// 	targets: ".h1",
	// 	scaleX: [0,1],
	// 	opacity: [.5, 1],
	// 	duration: 900
	// })
	.add({
	targets: ".h1",
	 opacity: [0,1],
    translateX: [40,0],
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    delay: 500,
        duration: 1000

    // offset: '-=600'
	})
		.add({
	targets: ".h1",
	 opacity: [1, 0],
    translateX: [0, -40],
    // scaleX: [0.3, 1],
    easing: "easeInExpo",
    delay: 500,
    duration: 1000
    // offset: '-=600'
	})
		.add({
	targets: ".h1",
	 opacity: [0,1],
    translateY: [100,0],
    easing: "easeOutExpo",
    delay: 500,
        duration: 1000

    // offset: '-=600'
	})
			.add({
	targets: ".h1",
	 opacity: [1,0],
    translateY: [0,-100],
    easing: "easeInExpo",
    delay: 500,
       duration: 1000

    // offset: '-=600'
	}).add({
	targets: ".h1",
	 opacity: [0,1],
	     easing: "easeOutExpo",

	     translateY: [0,0],
	      duration: 1500,
    delay: 800,
	})
	.add({
    targets: "hr",
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=100'
})


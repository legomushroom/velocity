class Cross
	constructor:->
		@vars()
		@init()
		console.log 'cross init'

	vars:->
	init:->
		$div1 = $ "<div class='c-green-g a-g' />"
		$div2 = $ "<div class='c-green-g a-g' />"
		$div3 = $ "<div class='c-green-g a-g' />"
		$div4 = $ "<div class='c-green-g a-g' />"
		width = 2
		height = 100
		$div1.css
			width: height
			height: width
			top: '50%'
			right: '100%'
			'margin-top': -(width/2)
		$div3.css
			width: height
			height: width
			top: '50%'
			left: '100%'
			'margin-top': -(width/2)
		
		$div2.css
			width: width
			height: height
			left: '50%'
			'margin-left': width/2
			top: '100%'
		$div4.css
			width: width
			height: height
			left: '50%'
			'margin-left': width/2
			bottom: '100%'
		$(document.body).append $div1
		$(document.body).append $div2
		$(document.body).append $div3
		$(document.body).append $div4

		$div1.velocity
			right: '50%'
		$div3.velocity
			left: '50%'

		$div2.velocity
			top: '50%'
		$div4.velocity
			bottom: '50%'

window.Cross = Cross














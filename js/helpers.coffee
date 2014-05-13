class Helpers
	rand:(min,max)->
    Math.floor((Math.random() * ((max + 1) - min)) + min)

window.helpers = new Helpers
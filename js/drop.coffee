class Drop
  constructor:(@o={})->
    @vars()
    @init()

  vars:->
    @$proto = $ '<div class="circle c-green-g drop" />'

  init:->
    @radius = @o.radius
    @radius ?= 200
    @cnt = @radius/10
    @$els = helpers.cloneBits @$proto, @cnt, @o.$container

  run:->
    step = (2*Math.PI)/@cnt
    angle = 0
    centerX = 0
    centerY = 0
    for $el, i in @$els
      left  = parseInt(centerX+(Math.cos(angle)*(@radius/1.25)),10)
      top = parseInt(centerY+(Math.sin(angle)*(@radius/1.25)),10)
      $el.css
        marginLeft: left
        marginTop:  top

      left2 = parseInt(centerY+(Math.cos(angle)*(1.1*@radius)),10)
      top2 = parseInt(centerY+(Math.sin(angle)*(1.1*@radius)),10)
      left2 -= left
      top2 -= top
      $el
        .velocity({
          translateX: left2
          translateY: top2
          opacity: 1
        },
        {
          delay: @o.i*15,
          easing: 'easeOutElastic',
          duration: 1500
        })
      coef = 1
      if left >= 0
        delayStep = 100*coef
        stepCalc = 50
        for i in [0..1200] by stepCalc
          if (top >= i) and (top <= i+stepCalc)
            delay = (i/stepCalc)*delayStep

        delayStep = 20*coef
        for i in [0..1200] by stepCalc
          if (top <= -i) and (top >= -i-stepCalc)
            delay = (i/stepCalc)*delayStep
        delay ?= 100*coef
        $el
          .velocity({
            translateX: -helpers.rand(20,400)
            translateY: helpers.rand(-600,600)
            left: 0
          },
          {
            delay: (((10-@o.i)*50*coef)+delay+helpers.rand(0,delayStep)+3350)
            duration: 1000*coef
          })


      angle += step



window.Drop = Drop
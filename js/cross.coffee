$.easing.quake = (t, millisecondsSince, startValue, endValue, totalDuration)->
  b = Math.exp(-t*10)*Math.cos(Math.PI*2*t*10)
  if t >= 1 then return 1
  1 - b

class Cross
  constructor:->
    @vars()
    @init()

  vars:->
  init:->
    $div1   = @createDiv class: 'c-green-g'
    $div2   = @createDiv class: 'c-green-g'
    $div3   = @createDiv class: 'c-green-g'
    $div4   = @createDiv class: 'c-green-g'
    $circle = @createDiv()
    $circleLine = @createDiv class: 'c-green-g'
    width = 2
    height = 200
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
      'margin-left': -(width/2)
      top: '100%'
    $div4.css
      width: width
      height: height
      left: '50%'
      'margin-left': -(width/2)
      bottom: '100%'

    $circleLine.css
      width: width
      height: 0
      left: '50%'
      'margin-left': -(width/2)
      top: '50%'

    size = 20
    attr =
      left:   '50%'
      top:    '50%'
      width:  size
      height: size
      'margin-left': -(size/2)
      'margin-top':  -(size/2)
      'border-radius': '50%'
      'opacity': 0
      'border': "#{size/2}px solid #00FFC6"
   
    $circle.css attr

    start = 0
    
    $div1
      .velocity({ right: '50%',  width: 0  })
      .velocity({ right: '50%',  width: height, opacity: 0 })
      # .velocity({ right: '50%',  width: 0  })
    $div3
      .velocity({ left: '50%',   width: 0  })
      .velocity({ left: '50%',   width: height, opacity: 0  })

    $div2
      .velocity({ top: '50%',    height: 0 })
      .velocity({ top: '50%',    height: height, opacity: 0 })

    $div4
      .velocity({ bottom: '50%', height: 0 })
      .velocity({ bottom: '50%', height: height, opacity: 0 })

    attr = { scale: 5, opacity: 1 }
    $circle.velocity( attr, delay: 300, duration: 200 )
      .velocity { scale: 1.5 }, {
        duration: 1000,
        easing: 'spring'
      }

    $circleProto = $circle.clone()
    # $circleProto.css attr

    circles = @cloneCircles $circleProto

    lineHeight = 200
    attr = { scale: .1 }
    $circle.velocity attr, duration: 2800

    for $circle in circles
      attr = { scale: @rand(2,8)/10  }
      attr2 = { 
        translateX: @rand(-80,80),
        'border-width': 0, opacity: 100,
        translateY: -2*lineHeight+@rand(-100,100),
        scale: 1.15
      }
      $circle.velocity( attr, { duration: 0 })
        .velocity attr2, { delay: 1200+@rand(0,1800), duration: 1200 }

    $circleLine.velocity { 
      height: lineHeight,
      translateY: -lineHeight
    }, delay: 3500, duration: 1000

  cloneCircles:($proto)->
    circles = []
    for i in [0...20]
      $new = $proto.clone()
      $(document.body).append $new
      circles.push $new
    circles

  createDiv:(o)->
    $div = $ '<div />'
    o?.class? and $div.addClass o.class
    $(document.body).append $div
    $div

  rand:(min,max)->
    Math.floor((Math.random() * ((max + 1) - min)) + min)

window.Cross = Cross














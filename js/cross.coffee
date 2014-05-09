# $.easing.crazy = (t, millisecondsSince, startValue, endValue, totalDuration)->
#     if(t<0.5) {
#         return t*4;
#     } else {
#         return -2*t + 3;  
#     }

class Cross
  constructor:->
    @vars()
    @init()

  vars:->
  init:->
    $div1   = $ "<div class='c-green-g' />"
    $div2   = $ "<div class='c-green-g' />"
    $div3   = $ "<div class='c-green-g' />"
    $div4   = $ "<div class='c-green-g' />"
    $circle = $ "<div class='' />"
    $circleLine = $ "<div class='c-green-g' />"
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
      'margin-left': width/2
      top: '100%'
    $div4.css
      width: width
      height: height
      left: '50%'
      'margin-left': width/2
      bottom: '100%'

    $circleLine.css
      width: width
      height: 0
      left: '50%'
      'margin-left': -(width/2)
      top: '50%'

    $(document.body).append $circleLine

    size = 20
    $circle.css
      left:   '50%'
      top:    '50%'
      width:  size
      height: size
      'margin-left': -(size/2)
      'margin-top':  -(size/2)
      'border-radius': '50%'
      'opacity': 0
      'border': "#{size/2}px solid #00FFC6"

    $(document.body).append $div1
    $(document.body).append $div2
    $(document.body).append $div3
    $(document.body).append $div4
    $(document.body).append $circle

    $div1.velocity { right: '50%',  width: 0  }
    $div3.velocity { left: '50%',   width: 0  }
    $div2.velocity { top: '50%',    height: 0 }
    $div4.velocity { bottom: '50%', height: 0 }

    attr = { scale: 1.5, opacity: 1 }
    $circle.velocity( attr, delay: 300, duration: 200 )
      .velocity { scale: 1 }, { 
        duration: 1000,
        easing: 'spring'
        # complete: -> $(document.body).append $circleProto.css 'opacity': 1
      }

    
    $circleProto = $circle.clone()
    circles = @cloneCircles $circleProto

    # $circle.css scale: 2
    lineHeight = 200
    attr = { scale: .1 }
    $circle.velocity attr, delay: 100, duration: 1800
    # attr = { 'border-width': 0 }
    # $circleProto.velocity attr, delay: 1600, duration: 1000
    # $circleLine.velocity { height: lineHeight, translateY: -lineHeight }, delay: 1600, duration: 1000

    for $circle in circles
      attr = { scale: @rand(2,8)/10  }
      $circle.velocity( attr, { duration: 0 })
        .velocity { translateX: @rand(-80,80), 'border-width': 0, opacity: 100, translateY: -2*lineHeight+@rand(-100,100), scale: 1.15 }, { delay: 1200+@rand(0,1800), duration: 1200 }

  cloneCircles:($proto)->
    circles = []
    for i in [0...30]
      $new = $proto.clone()
      $(document.body).append $new
      circles.push $new
    circles

  rand:(min,max)->
    Math.floor((Math.random() * ((max + 1) - min)) + min)




window.Cross = Cross














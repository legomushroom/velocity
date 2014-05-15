class Cross
  constructor:->
    @vars()
    @init()

  vars:->
  init:->

    # $div1   = helpers.createDiv class: 'c-green-g'
    # $div2   = helpers.createDiv class: 'c-green-g'
    # $div3   = helpers.createDiv class: 'c-green-g'
    # $div4   = helpers.createDiv class: 'c-green-g'
    # $circle = helpers.createDiv()
    # $velocity = $('#js-velocity')
    # $screen1 = $('#js-screen1')
    # $circleLine = helpers.createDiv
    #   class: 'c-green-g'
    #   container: $screen1
    # width = 2
    # height = 200
    # $div1.css
    #   width: height
    #   height: width
    #   top: '50%'
    #   right: '100%'
    #   'margin-top': -(width/2)
    # $div3.css
    #   width: height
    #   height: width
    #   top: '50%'
    #   left: '100%'
    #   'margin-top': -(width/2)
    # $div2.css
    #   width: width
    #   height: height
    #   left: '50%'
    #   'margin-left': -(width/2)
    #   top: '100%'
    # $div4.css
    #   width: width
    #   height: height
    #   left: '50%'
    #   'margin-left': -(width/2)
    #   bottom: '100%'

    # $circleLine.css
    #   width: width
    #   height: 0
    #   left: '50%'
    #   'margin-left': -(width/2)
    #   top: '50%'

    # size = 20
    # attr =
    #   left:   '50%'
    #   top:    '50%'
    #   width:  size
    #   height: size
    #   'margin-left': -(size/2)
    #   'margin-top':  -(size/2)
    #   'border-radius': '50%'
    #   'opacity': 0
    #   'border': "#{size/2}px solid #00FFC6"
   
    # $circle.css attr

    # start = 0
    
    # $div1
    #   .velocity({ right: '50%',  width: 0  })
    #   .velocity({ right: '50%',  width: height, opacity: 0 })
    #   # .velocity({ right: '50%',  width: 0  })
    # $div3
    #   .velocity({ left: '50%',   width: 0  })
    #   .velocity({ left: '50%',   width: height, opacity: 0  })

    # $div2
    #   .velocity({ top: '50%',    height: 0 })
    #   .velocity({ top: '50%',    height: height, opacity: 0 })

    # $div4
    #   .velocity({ bottom: '50%', height: 0 })
    #   .velocity({ bottom: '50%', height: height, opacity: 0 })

    # attr = { scale: 5, opacity: 1 }
    # $circle.velocity( attr, delay: 300, duration: 200 )
    #   .velocity { scale: 1.5 }, {
    #     duration: 1000,
    #     easing: 'spring'
    #   }

    # $circleProto = $circle.clone()
    # # $circleProto.css attr

    # circles = helpers.cloneBits $circleProto

    # lineHeight = 200
    # attr = { scale: .1 }
    # $circle.velocity attr, duration: 2800

    # for $circleBit in circles
    #   attr = { scale: helpers.rand(2,8)/10  }
    #   attr2 = {
    #     translateX: helpers.rand(-80,80),
    #     'border-width': 0, opacity: 100,
    #     translateY: -2*lineHeight+helpers.rand(-100,100),
    #     scale: 1.15
    #   }
    #   $circleBit.velocity( attr, { duration: 0 })
    #     .velocity attr2, { delay: 1200+helpers.rand(0,1800), duration: 1200 }

    # $circleLine.velocity {
    #   height: lineHeight,
    #   translateY: -lineHeight
    # }, delay: 3500, duration: 1000
    # $circle.velocity {opacity:0}, duration: 100

    # # # ===> line
    # lines = helpers.cloneBits $circleLine, 8
    # r = 0
    # for $line, i in lines
    #   r += r+i
    #   $line.css {
    #     'margin-left': "#{-i}px"
    #     height: lineHeight
    #     'transform': "translateY(#{-lineHeight}px) translateX(#{-r}px)"
    #     opacity: 0
    #   }, duration: 0
    #   $line
    #     .velocity( {opacity:1}, duration: 20, delay: 4500+(r))
    #     .velocity( {opacity:0}, duration: 400)
    
    # $fast = $('#js-fast')
    # $fastShade = $fast.find('.text-wrapper__shade')
    # $robust = $('#js-robust')
    # $easy = $('#js-easy')
    # # $robustShade = $robust.find('.text-wrapper__shade')

    # $fastShade
    #   .velocity({ translateX: -300 },
    #     delay: 4500, easing: 'easeOutExpo', duration: 700
    # )
    # $circleLine.velocity {
    #   translateX: -300
    # }, delay: 0, duration: 700, easing: 'easeOutExpo'

    
    # $robust
    #   .velocity({width: 300}, delay: 5200, easing: 'easeOutExpo', duration: 400)
    # $fastShade
    #   .velocity({ translateX: 0 },{
    #     delay: 0,
    #     easing: 'easeOutExpo',
    #     duration: 400
    #     complete:->
    #       $easy.css 'opacity': 1
    #       $fast.css 'display': 'none'
    #     })
    # $circleLine.velocity {
    #   translateX: 0
    # }, delay: 0, duration: 400, easing: 'easeOutExpo'

    # $robust
    #   .velocity({ width: 0 }, delay: 0, easing: 'easeOutExpo', duration: 300)
    # $circleLine.velocity {
    #   translateX: -300
    # }, delay: 0, duration: 300, easing: 'easeOutExpo'

    # $circleLine.css 'transform-origin': '50% bottom'

    # $circleProto = $circleLine.clone()
    
    # # ===> tree
    # # $circleProto.css
    # #   'top': '100%'
    # #   'height': height
    # #   'margin-top': -200
    # #   'margin-left': -300 - (width/2)
    # #   'transform': 'none'
    # #   'opacity': 0

    # # lines = helpers.cloneBits $circleProto, 6
    # # for $line, i in lines
    # #   angle = if i % 2 is 0 then 90 else -90
    # #   $line.velocity {
    # #     rotateZ: angle,
    # #     opacity: 100
    # #   }, {
    # #     easing: 'easeOutBounce',
    # #     duration: 1400+helpers.rand(0,600),
    # #     delay: 7400+(i*100)+helpers.rand(0,500)
    # #     complete: ->
    # #       $(this).fadeOut()
    # #   }

    # # for i in [0..20]
    # setTimeout =>
    #   new Thunder
    # , 14500

    # $circleLine
    #   .velocity({top: '100%'}, delay: 200, duration: 500, easing: 'easeInExpo')
    #   .velocity { rotateZ: 20 }, duration: 1, delay: 0
    #   .velocity { rotateZ: 0 }, { duration: 1500, easing: 'quake' }

    # $circleProto.css
    #   'margin-top': 0
    #   'top': '100%'
    #   # 'height': height
    #   'margin-left': -300 - (width/2)
    #   'transform': 'none'

    # lines2 = helpers.cloneBits $circleProto, 32, $screen1
    # for $line2, i in lines2
    #   y = if (i+1) % 5 is 0 then -200 else -100
    #   h = if (i+1) % 5 is 0 then height else height-100
    #   $line2.css
    #     'margin-left': "#{-300 - (width/2) + ((i+1)*100)}px"
    #     height: h

      
    #   $line2
    #     .velocity {
    #       translateY: y
    #     }, {
    #     easing: 'elasticOut'
    #     duration: if i < 10 then 700 else 1
    #     delay: 6650+(i*50)
    #     }
     

    #   $line2.velocity {
    #     rotateZ: -90
    #   }, {
    #     delay: 800+((lines2.length-i)*120)
    #     easing: 'easeOutBounce'
    #     duration: 600
    #     # delay: 6650+(i*50)
    #   }

    # $screen1.velocity {
    #   translateX: -2400
    # }, {
    #   duration: 2000
    #   delay: 7000
    # }

    # $easy.velocity {
    #   translateX: -2400
    # }, {
    #   duration: 2000
    #   delay: 7000
    # }

    # $velocity.velocity { 'margin-left': 0 }, { duration: 2000, delay: 7000 }

    # childs = $velocity.children()
    # for i in [childs.length-1..0]
    #   $child = $ childs[i]
    #   $child
    #     .velocity {
    #       translateX: -2000
    #       translateY: -200-helpers.rand(0,400)
    #       rotateZ: helpers.rand(-500,500)
    #     }, {
    #     delay: 9000+((childs.length-i)*50),
    #     duration: 2000
    #     }
    # $slices = $('.slice')
    # for slice, i in $slices
    #   do (i)->
    #     $slice = $ slice
    #     $slice
    #       .velocity { rotateZ: -90 }, {
    #         duration: 1500, delay: 10200+(i*200)
    #         easing: 'easeInExpo'
    #         complete:->
    #           (i is 0) and new Cloud
    #       }


window.Cross = Cross















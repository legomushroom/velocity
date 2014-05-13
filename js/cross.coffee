class Cross
  constructor:->
    @vars()
    @init()

  vars:->

  init:->
    $div1   = helpers.createDiv class: 'c-green-g'
    $div2   = helpers.createDiv class: 'c-green-g'
    $div3   = helpers.createDiv class: 'c-green-g'
    $div4   = helpers.createDiv class: 'c-green-g'
    $circle = helpers.createDiv()
    $velocity = $('#js-velocity')
    $screen1 = $('#js-screen1')
    $circleLine = helpers.createDiv
      class: 'c-green-g'
      container: $screen1
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

    for $circleBit in circles
      attr = { scale: window.helpers.rand(2,8)/10  }
      attr2 = {
        translateX: window.helpers.rand(-80,80),
        'border-width': 0, opacity: 100,
        translateY: -2*lineHeight+window.helpers.rand(-100,100),
        scale: 1.15
      }
      $circleBit.velocity( attr, { duration: 0 })
        .velocity attr2, { delay: 1200+window.helpers.rand(0,1800), duration: 1200 }

    $circleLine.velocity {
      height: lineHeight,
      translateY: -lineHeight
    }, delay: 3500, duration: 1000
    $circle.velocity {opacity:0}, duration: 100

    # # ===> line
    lines = @cloneCircles $circleLine, 8
    r = 0
    for $line, i in lines
      r += r+i
      $line.css {
        'margin-left': "#{-i}px"
        height: lineHeight
        'transform': "translateY(#{-lineHeight}px) translateX(#{-r}px)"
        opacity: 0
      }, duration: 0
      $line
        .velocity( {opacity:1}, duration: 20, delay: 4500+(r))
        .velocity( {opacity:0}, duration: 400)
    
    $fast = $('#js-fast')
    $fastShade = $fast.find('.text-wrapper__shade')
    $robust = $('#js-robust')
    $easy = $('#js-easy')
    # $robustShade = $robust.find('.text-wrapper__shade')

    $fastShade
      .velocity({ translateX: -300 },
        delay: 4500, easing: 'easeOutExpo', duration: 700
    )
    $circleLine.velocity {
      translateX: -300
    }, delay: 0, duration: 700, easing: 'easeOutExpo'

    
    $robust
      .velocity({width: 300}, delay: 5200, easing: 'easeOutExpo', duration: 400)
    $fastShade
      .velocity({ translateX: 0 },{
        delay: 0,
        easing: 'easeOutExpo',
        duration: 400
        complete:->
          $easy.css 'opacity': 1
          $fast.css 'display': 'none'
        })
    $circleLine.velocity {
      translateX: 0
    }, delay: 0, duration: 400, easing: 'easeOutExpo'

    $robust
      .velocity({ width: 0 }, delay: 0, easing: 'easeOutExpo', duration: 300)
    $circleLine.velocity {
      translateX: -300
    }, delay: 0, duration: 300, easing: 'easeOutExpo'

    $circleLine.css 'transform-origin': '50% bottom'

    $circleProto = $circleLine.clone()
    
    # ===> tree
    # $circleProto.css
    #   'top': '100%'
    #   'height': height
    #   'margin-top': -200
    #   'margin-left': -300 - (width/2)
    #   'transform': 'none'
    #   'opacity': 0

    # lines = @cloneCircles $circleProto, 6
    # for $line, i in lines
    #   angle = if i % 2 is 0 then 90 else -90
    #   $line.velocity {
    #     rotateZ: angle,
    #     opacity: 100
    #   }, {
    #     easing: 'easeOutBounce',
    #     duration: 1400+window.helpers.rand(0,600),
    #     delay: 7400+(i*100)+window.helpers.rand(0,500)
    #     complete: ->
    #       $(this).fadeOut()
    #   }

    $circleLine
      .velocity({top: '100%'}, delay: 200, duration: 500, easing: 'easeInExpo')
      .velocity { rotateZ: 20 }, duration: 1, delay: 0
      .velocity { rotateZ: 0 }, { duration: 1500, easing: 'quake' }

    $circleProto.css
      'margin-top': 0
      'top': '100%'
      # 'height': height
      'margin-left': -300 - (width/2)
      'transform': 'none'

    lines2 = @cloneCircles $circleProto, 32, $screen1
    for $line2, i in lines2
      y = if (i+1) % 5 is 0 then -200 else -100
      h = if (i+1) % 5 is 0 then height else height-100
      $line2.css
        'margin-left': "#{-300 - (width/2) + ((i+1)*100)}px"
        height: h

      
      $line2
        .velocity {
          translateY: y
        }, {
        easing: 'elasticOut'
        duration: if i < 10 then 700 else 1
        delay: 6650+(i*50)
        }
     

      $line2.velocity {
        rotateZ: -90
      }, {
        delay: 800+((lines2.length-i)*120)
        easing: 'easeOutBounce'
        duration: 600
        # delay: 6650+(i*50)
      }

    $screen1.velocity {
      translateX: -2400
    }, {
      duration: 2000
      delay: 7000
    }

    $easy.velocity {
      translateX: -2400
    }, {
      duration: 2000
      delay: 7000
    }

    $velocity.velocity { 'margin-left': 0 }, { duration: 2000, delay: 7000 }

    childs = $velocity.children()
    for i in [childs.length-1..0]
      $child = $ childs[i]
      $child
        .velocity {
          translateX: -2000
          translateY: -200-window.helpers.rand(0,400)
          rotateZ: window.helpers.rand(-500,500)
        }, {
        delay: 9000+((childs.length-i)*50),
        duration: 2000
        }
    $slices = $('.slice')
    for slice, i in $slices
      do (i)->
        $slice = $ slice
        $slice
          .velocity { rotateZ: -90 }, {
            duration: 1500, delay: 10200+(i*200)
            easing: 'easeInExpo'
            complete:->
              (i is 0) and new Cloud
          }



  cloneCircles:($proto, cnt=20, $container)->
    circles = []
    for i in [0...cnt]
      $new = $proto.clone()
      $cont = $container or $(document.body)
      $cont.append $new
      circles.push $new
    circles

  createDiv:(o)->
    $div = $ '<div />'
    o?.class? and $div.addClass o.class
    $cont = o?.container or $(document.body)
    $cont.append $div
    $div

window.Cross = Cross

class Cloud
  constructor:(@o={})->
    @init()

  init:->
    new CloudBit
      width: 90
      height: 120
      deg: 5
      class: 'c-grey-g circle center'

    new CloudBit
      width: 80
      height:  90
      deg: 45
      class: 'c-grey-g circle center'
      shiftY: 40
      shiftX: -5

    new CloudBit
      width: 80
      height:  100
      deg: -35
      class: 'c-grey-g circle center'
      shiftY: 20
      shiftX: -90

    new CloudBit
      width: 60
      height:  60
      deg: 0
      class: 'c-grey-g circle center'
      shiftY: 30
      shiftX: -40

    new CloudBit
      width: 70
      height: 70
      deg: 10
      class: 'c-grey-g circle center'
      shiftX: 55
      shiftY: 40

    new CloudBit
      width: 60
      height: 30
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: 75
      shiftY: 60

    new CloudBit
      width: 70
      height: 30
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: -100
      shiftY: 60

    new CloudBit
      width: 80
      height: 50
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: -60
      shiftY: 55
    new CloudBit
      width: 40
      height: 30
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: 25
      shiftY: 55

    new CloudBit
      width: 10
      height: 10
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: 103
      shiftY: 65

    new CloudBit
      width: 5
      height: 5
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: 110
      shiftY: 66

    new CloudBit
      width: 10
      height: 10
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: -128
      shiftY: 65

    new CloudBit
      width: 8
      height: 5
      deg: 0
      class: 'c-grey-g circle center'
      shiftX: -135
      shiftY: 65

class CloudBit
  constructor:(@o={})->
    @vars()
    @$el = helpers.createDiv(class: 'c-grey-g circle center')
    @setAttrs()
    @loop(); @show()
  vars:->
    @scale = 0
    @opacity = 0

  setAttrs:->
    @$el.css(
      width:  @o.width
      height: @o.height
      marginLeft:  (-@o.width/2)  + (@o.shiftX ?= 0)
      marginTop:   (-@o.height/2) + (@o.shiftY ?= 0)
      'opacity': 0
    ).velocity({
      scale: 0
    },{ duration: 0 })

  show:->
   @$el.velocity {
    opacity: 100
    scale: 1
   }, { easing: 'easeOutElastic', delay: window.helpers.rand(0,100), duration: 1200 }

  loop:->
    @$el
      .velocity({
        scaleX: .9
        scaleY: 1
        translateX: (@o.width/20)
        translateY: 0
        rotateZ: @o.deg
      }, { duration: 500 }).velocity({
        scaleY: .9
        scaleX: 1
        translateX: 0
        translateY: (@o.height/20)
        rotateZ: @o.deg
        complete:=> @loop()
      }, { duration: 500 })

  destroy:->
    clearInterval @interval

class Thunder
  constructor:(@o={})->
    @vars()
    init()
  vars:->

  init:->











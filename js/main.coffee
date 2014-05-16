class Main
  constructor:(@o={})->
    @vars()
    @init()

  vars:->
    @$fast = $('#js-fast')
    @$car1 = $('#js-car1')
    @$car2 = $('#js-car2')
    @$arrow1 = $('#js-arrow1')
    @$arrow2 = $('#js-arrow2')
    @$arrow3 = $('#js-arrow3')
    @$arrow4 = $('#js-arrow4')
    @$arrowWrap = $('#js-arrow-wrap')
    @$robust = $('#js-robust')
    @$robustShade1 =  @$robust.find('#js-robust-shade1')
    @$robustShade2 =  @$robust.find('#js-robust-shade2')
    @$easy = $('#js-easy')
    @$easyText = $('#js-easy-text')

    @$line = $('#js-line')

    @thunder = new Thunder

    @drops = for i in [0..10]
          new Drop
            radius: i*50
            i: i

    @bubbles = new Bubbles

  init:->
    @s = 1
    @car1(0)
    @car2(700)
    @arrows()
    @throwFA(2200)
    @shiftRobustArrow(3400)
    @fallRobust(3800)
    @showCloud(3200*@s)
    @showThunder(5200*@s)
    @waterDrop(7000*@s)
    @showBubbles(8500*@s)

  showBubbles:(delay)->
    @bubbles.run(delay)
    setTimeout =>
      @$easyText.css(
        height: 240
        width:  240
      ).velocity({
        translateX: -120
        translateY: -120
      },{
        duration: 1400*@s
        # delay: 750*@s
      })
      @$easy
        .velocity({
          width: 2
          height: 2
        },{
          duration: 1400*@s
        })

      @$line
        .velocity({
          height: 200
          translateY: -200
        },{
          delay: 1800*@s
          duration: 1000*@s
        })

        .velocity({
          top: '100%'
          # rotateZ: 20
        },{ easing: 'easeInExpo', duration: 500*@s })

        .velocity({
          rotateZ: 20
        },{ duration: 1 })

        .velocity({
          rotateZ: 0
        },{ easing: 'quake', duration: 1500*@s })

      $lineProto = @$line.clone()
      $lineProto.css
        top: '100%'
        transform: "none"

      lines = helpers.cloneBits $lineProto
      for $line, i in lines
        y = if (i+1) % 5 is 0 then -200 else -100
        h = if (i+1) % 5 is 0 then 200 else 100
        $line.css
          height: h
          marginLeft: "#{ -1 + ((i+1)*100)}px"
          transform: "rotate(20deg)"

        $line
          .velocity({
            translateY: y
          },{
            delay: 3350+(i*60),
            easing: 'easeOutElastic',
            duration: 600*@s
          })

    , delay

  waterDrop:(delay)->
    setTimeout =>
      @$easy
        .velocity({
          width: 240
          height: 240
        },{
          easing: 'easeOutElastic'
          duration: 1500*@s
        })

      setTimeout =>
        for drop in @drops
          drop.run()

        @$robust
          .velocity top: '100%', marginTop: 0
      , 100
    , delay

  showThunder:(delay)->
    setTimeout =>
      @thunder.run()
    , delay

  showCloud:(delay)->
    @cloud = new Cloud
      delay: delay
      hideDelay: 6000*@s

  car1:(delay)->
    @$car1
      .velocity { right: '-40%', opacity: 2 }, {
        duration: 400*@s,
        delay: delay*@s
      }
    
    @fastChilds = @$fast.children()
    for child, i in @fastChilds
      $child = $ child
      $child = $child.find('#js-bit-inner')
      $child
        .velocity({ rotateZ: 40 }, {
          delay: (delay+160+(i*15))*@s, duration: 100*@s
        }).velocity({ rotateZ: 0 },  {
          delay: (60+(i*15))*@s,
          duration: 5000*@s,
          easing: 'quake',
        })

  car2:(delay)->
    @$car2
      .velocity { left: '-40%', opacity: 1 }, { delay: delay*@s, duration: 400*@s }

    for child, i in @fastChilds
      $child = $ child
      $child = $child.find('#js-span')
      $child.css 'transform-origin': 'center top'
      $child
        .velocity({ rotateZ: 40 }, {
          delay: (delay+160+(@fastChilds.length-i)*15)*@s, duration: 100*@s
        }).velocity({ rotateZ: 0 },  {
          delay: (60+(@fastChilds.length-i)*15)*@s, duration: 5000*@s, easing: 'quake'
        })

  fallRobust:(delay)->
    @$robust
      .velocity({
        top: '100%'
        rotateZ: -50
        marginTop: -55
      },{
        delay: delay*@s,
        easing: 'easeInQuad',
        duration: 300*@s,
      }).velocity({
        rotateZ: 0
      },{
        duration: 500*@s
        easing: 'easeOutBounce'
      })

    arrows = [ @$arrow1, @$arrow2, @$arrow3, @$arrow4 ]
    for $arrow, i in arrows
      $arrow
        .velocity({
          'top': '100%',
          marginTop: -200,
          rotateZ: 60+helpers.rand(0,20)
        },{
          easing: 'easeInQuad'
        }).velocity {
          rotateZ: 90
        }, {
          easing: 'easeOutBounce',
          duration: 400*@s,
          complete: ->
            $(this).hide()
        }


  shiftRobustArrow:(delay)->
    @$arrowWrap
      .velocity({ translateX: -206 },{ delay: delay*@s })

    @$robustShade1
      .velocity({ marginLeft: -206 },{ 
        delay: delay*@s
        complete:=>
          @$robustShade2.hide()
          @$fast.hide()
      })


  throwFA:(delay)->
    for i in [0..1]
      $child = $ @fastChilds[i]
      $child.css 
        'transform-origin': 'center center'
        'position': 'absolute'
      if i is 1
        angle = 280
        $child
          .velocity({ rotateZ: angle/5, left: '45%', top: '55%' },{
           duration: 50*@s
           easing: 'linear'
           delay: delay*@s
          }).velocity({ rotateZ: angle, left: '-10%', top: '110%' },{
           duration: 1000*@s
           easing: 'linear'
          })
      else
        angle = 600
        $child
          .velocity({ rotateZ: angle/10, left: '50%', top: '50%' },{
            duration: 50*@s
            easing: 'linear'
            delay: delay*@s
          }).velocity({ 
            rotateZ: angle+helpers.rand(0,40),
            left: '-10%', top: '20%'
          },{
            duration: 1000*@s
            easing: 'linear'
          })



  arrows:->
    arrowAngle = 20
    delay = 1400
    duration = 2000
    angle = arrowAngle+helpers.rand(0,arrowAngle)
    @$arrow1
      .velocity({ rotateZ: 90, left: '150%' }, { duration: 1, delay: delay*@s })
      .velocity({ left: '70%', top: '50%', rotateZ: angle }, { duration: 400*@s })
      .velocity({ rotateZ: 1.5*angle }, { duration: 1 })
      .velocity({ rotateZ: angle }, { duration: duration*@s, easing: 'quake' })

    angle = arrowAngle+helpers.rand(0,arrowAngle)
    @$arrow2
      .velocity({ rotateZ: 90, left: '150%' }, { duration: 1, delay: (delay+200)*@s })
      .velocity({ left: '10%', top: '50%', rotateZ: angle }, { duration: 400*@s })
      .velocity({ rotateZ: 1.5*angle }, { duration: 1 })
      .velocity({ rotateZ: angle }, { duration: duration*@s, easing: 'quake' })

    angle = arrowAngle+helpers.rand(0,arrowAngle)
    @$arrow3
      .velocity({ rotateZ: 90, left: '150%' }, { duration: 1, delay: (delay+250)*@s })
      .velocity({ left: '20%', top: '50%', rotateZ: angle }, { duration: 400*@s })
      .velocity({ rotateZ: 1.5*angle }, { duration: 1 })
      .velocity({ rotateZ: angle }, { duration: duration*@s, easing: 'quake' })

    angle = 20
    @$arrow4
      .velocity({ rotateZ: 90, left: '150%' }, { duration: 1, delay: (delay+400)*@s })
      .velocity({ left: '50%', top: '50%', rotateZ: angle }, { duration: 400*@s })
      .velocity({ rotateZ: 1.5*angle }, { duration: 1 })
      .velocity({ rotateZ: angle }, { duration: duration*@s, easing: 'quake' })


setTimeout ->
  new Main
, 1000

# setTimeout ->
#   new window.Cross
# , 2000
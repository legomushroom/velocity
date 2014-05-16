class Thunder
  constructor:(@o={})->
    @vars()
    @init()
  vars:->
    @$background = $('#js-thunder-bg')
    @$robust = $('#js-robust')
    @boomCnt = 0

  init:->
    @spark1 = new Spark
      shiftY: -140
      shiftX: -120
      top: 100
    @spark2 = new Spark
      shiftY: -120
      shiftX: -150
      top: 100

    @$bit = helpers.createDiv class: 'c-grey-g center circle'
    @$bit.css
      width: 2
      height: 0
      marginLeft: -1
      'transform-origin': 'top center'

    @thunder = helpers.cloneBits @$bit, 20

  run:->
    setTimeout =>
      @makeBoom @thunder, @$bit
      setTimeout =>
        @makeBoom @thunder, @$bit
        setTimeout =>
          @makeBoom @thunder, @$bit
        , 380
      , 320
    , @o.delay

  makeBoom:(thunder, $bit)->
    @boomCnt++
    @prevAngle = 100
    $prevBit = $bit
    $bit.css 'z-index': 9
    $cloud
      .addClass('c-grey-g')
      .removeClass('c-green-g')
    @$robust.css 'color', '#777'
    @$background
      .velocity({'opacity': 1},{ duration:40 }).velocity({'opacity': 0},{
        delay: 200
        duration:40
        complete: =>
          $cloud
            .removeClass('c-grey-g')
            .addClass('c-green-g')
          @$robust.css 'color', '#00FFC6'

      })

    for $bit1, i in thunder
      $bit1.css
        top: '100%'
        opacity: 0
      $prevBit.append $bit1
      size = @calcSize i
      do (i)->
        $bit1.velocity({
          height:  size.height
          rotateZ: size.angle
          opacity: 1
          width: 4
          marginLeft: -2
        },{ duration: 200 }).velocity({ width: 0, marginLeft: 0 },{
          duration: 50
        })
      $prevBit = $bit1

    @s = 1
    if @boomCnt is 1 or @boomCnt is 3
      # @$robust.css 'transform-origin': 'right bottom'

      @$robust
        .velocity({
          # translateY: -100
          rotateZ: -30+helpers.rand(0,-30)
        },{ 
          duration: 50*@s,
          delay: 160*@s
        })

        .velocity({
          rotateZ: 0
        },{
          duration: 600*@s
          easing: 'easeOutBounce'
        })
    if @boomCnt is 1
      @spark1.run()
    if @boomCnt is 3
      @spark2.run()

  calcSize:(i)->
    angle = 0
    # @prevAngle ?= 100
    if i is 0
      angle = helpers.rand(15,25)
      height = 50
    else
      if i % 2 is 0
        angle = -@prevAngle + helpers.rand(0,10)
        @prevAngle = angle
        height = helpers.rand(40, 150)
      else
        angle = -@prevAngle + helpers.rand(0,20)
        height = helpers.rand(10, 40)
        @prevAngle = angle

    angle: angle
    height: height

window.Thunder = Thunder
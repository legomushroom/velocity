class Thunder
  constructor:(@o={})->
    @vars()
    @init()
  vars:->
    @$background = $('#js-thunder-bg')
    @$robust = $('#js-robust')

  init:->
    $bit = helpers.createDiv class: 'c-grey-g center circle'
    $bit.css
      width: 2
      height: 0
      marginLeft: -1
      'transform-origin': 'top center'

    thunder = helpers.cloneBits $bit, 15
    setTimeout =>
      @makeBoom thunder, $bit
      setTimeout =>
        @makeBoom thunder, $bit
        setTimeout =>
          @makeBoom thunder, $bit
        , 350
      , 320
    , @o.delay

  makeBoom:(thunder, $bit)->
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
      do (i)=>
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
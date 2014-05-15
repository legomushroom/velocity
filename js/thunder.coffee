class Thunder
  constructor:(@o={})->
    @vars()
    @init()
  vars:->
    @$slice = $('.slice1')

  init:->
    $bit = helpers.createDiv class: 'c-green-g center circle'
    $bit.css
      width: 2
      height: 0
      marginLeft: -1
      'transform-origin': 'top center'

    thunder = helpers.cloneBits $bit, 15
    @makeBoom thunder, $bit
    setTimeout =>
      @makeBoom thunder, $bit
      setTimeout =>
        @makeBoom thunder, $bit
      , 350
    , 320

  makeBoom:(thunder, $bit)->
    @prevAngle = 100
    $prevBit = $bit
    $bit.css 'z-index': 9
    $cloud
      .addClass('c-green-g')
      .removeClass('c-grey-g')
    @$slice
      .velocity({'opacity': 0},{ duration:40 }).velocity({'opacity': 1},{
        delay: 200
        duration:40
        complete: =>
          $cloud
            .removeClass('c-green-g')
            .addClass('c-grey-g')
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
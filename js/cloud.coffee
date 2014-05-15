class Cloud
  constructor:(@o={})->
    @vars()
    @init()

  vars:->
    @$el = helpers.createDiv
      class: 'center c-grey-g'

    window.$cloud = @$el

  init:->
    new CloudBit
      width: 90
      height: 120
      deg: 5
      class: 'inherit-bg circle center'
      container: @$el

    new CloudBit
      width: 80
      height:  90
      deg: 45
      class: 'inherit-bg circle center'
      shiftY: 40
      shiftX: -5
      container: @$el

    new CloudBit
      width: 80
      height:  100
      deg: -35
      class: 'inherit-bg circle center'
      shiftY: 20
      shiftX: -90
      container: @$el

    new CloudBit
      width: 60
      height:  60
      deg: 0
      class: 'inherit-bg circle center'
      shiftY: 30
      shiftX: -40
      container: @$el

    new CloudBit
      width: 70
      height: 70
      deg: 10
      class: 'inherit-bg circle center'
      shiftX: 55
      shiftY: 40
      container: @$el

    new CloudBit
      width: 60
      height: 30
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: 75
      shiftY: 60
      container: @$el

    new CloudBit
      width: 70
      height: 30
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: -100
      shiftY: 60
      container: @$el

    new CloudBit
      width: 80
      height: 50
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: -60
      shiftY: 55
      container: @$el

    new CloudBit
      width: 40
      height: 30
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: 25
      shiftY: 55
      container: @$el

    new CloudBit
      width: 10
      height: 10
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: 103
      shiftY: 65
      container: @$el

    new CloudBit
      width: 5
      height: 5
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: 110
      shiftY: 66
      container: @$el

    new CloudBit
      width: 10
      height: 10
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: -128
      shiftY: 65
      container: @$el

    new CloudBit
      width: 8
      height: 5
      deg: 0
      class: 'inherit-bg circle center'
      shiftX: -135
      shiftY: 65
      container: @$el


class CloudBit
  constructor:(@o={})->
    @vars()
    @$el = helpers.createDiv(
      class: @o.class
      container: @o.container
      )
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
   }, { easing: 'easeOutElastic', delay: helpers.rand(0,100), duration: 1200 }

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
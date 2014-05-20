class Spark
  constructor:(@o={})->
    @vars()
    @init()
    # @run()

  vars:->

  init:->
    $proto = helpers.createDiv class: 'spark'

    @sparks = helpers.cloneBits $proto, @o.cnt or helpers.rand(10,20)
    size = @o.size or 2
    for $spark, i in @sparks
      $spark.css
        width:  size+helpers.rand(0,size)
        height: size+helpers.rand(0,size)
        left: @o.left or '50%'
        top:  "#{@o.top or 50}%"
        marginTop:  @o.shiftY
        marginLeft: @o.shiftX

  run:->
    for $spark, i in @sparks
      blowSize = @o.blowSize or 100
      top = 2*@o.top or 100
      if top < 100 then top = 100
      $spark
        .velocity({
          translateX: helpers.rand(-blowSize,blowSize)
          translateY: helpers.rand(-blowSize,blowSize)
          opacity: 1
        },
        {
          duration: 500+blowSize
          easing: 'easeInOutQuad'
          delay: (@o.delay or 0)+helpers.rand(0,100)
        })

        .velocity({
          top: "#{top}%"
          translateY: 0
          marginTop: 0
          opacity: -2
        },
        {
          duration: @o.duration or 2500
          easing: 'easeInOutExp'
        })

window.Spark = Spark




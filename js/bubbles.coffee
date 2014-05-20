class Bubbles
  constructor:(@o={})->
    @vars()
    @init()

  vars:->
    @$el    = helpers.createDiv class: "bubbles"

    @$proto = $ '<div class="bubble" />'

  init:->
    @bits = helpers.cloneBits @$proto, 30, @$el
    for $bit, i in @bits
      size = helpers.rand(12,24)
      $bit.css
        width: size
        height: size
        borderWidth: size/2

  run:(delay)->
    for $bit, i in @bits
      $bit
        .velocity({
          top: '-10%'
          borderWidth: 0
          translateX: helpers.rand(-120,120)
          translateY: helpers.rand(0,300)
          opacity: 100
        },
        {
          duration: 1400
          delay: helpers.rand(i*25,i*25 + 1000) + delay
        })

    @$el
      .velocity({
        marginTop: 0
      },
      {
        duration: 1000
        delay: delay
      })


window.Bubbles = Bubbles

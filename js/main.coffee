class Main
  constructor:(@o={})->
    @vars()
    @init()

  vars:->
    @$fast = $('#js-fast')
    @$car1 = $('#js-car1')
    @$car2 = $('#js-car2')

  init:->
    @s = 1
    @start = 0*@s
    @dur   = 400*@s

    @$car1
      .velocity { right: '-20%', width: '0%', opacity: 1, duration: @dur }
    @start = 0*@s
    @dur   = 4500*@s
    for child, i in @$fast.children()
      $child = $ child
      $child
        .velocity({ rotateZ: 40 }, {
          (delay: 200+helpers.rand(0,300))*@s, duration: 100
        }).velocity({ rotateZ: 0 },  {
          delay: (60+helpers.rand(0,50))*@s, duration: @dur, easing: 'quake'
        })

    # @$car1
    #   .velocity { right: '-20%', width: '0%', opacity: 1 }

setTimeout ->
  new Main
, 1000

# setTimeout ->
#   new window.Cross
# , 2000
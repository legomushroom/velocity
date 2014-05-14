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

    @$car1
      .velocity { right: '-40%', opacity: 2 }, { duration: 400*@s }
    
    fastChilds = @$fast.children()
    for child, i in fastChilds
      $child = $ child
      $child
        .velocity({ rotateZ: 40 }, {
          delay: (160+(i*15))*@s, duration: 100*@s
        }).velocity({ rotateZ: 0 },  {
          delay: (60+(i*15))*@s,
          duration: 5000*@s,
          easing: 'quake',
        })

    setTimeout =>
      @$car2
        .velocity { left: '-40%', opacity: 1 }, { delay: 0*@s, duration: 400*@s }

      for child, i in fastChilds
        $child = $ child
        $child = $child.find('span')
        $child.css 'transform-origin': 'center top'
        $child
          .velocity({ rotateZ: 40 }, {
            delay: (160+(fastChilds.length-i)*15)*@s, duration: 100*@s
          }).velocity({ rotateZ: 0 },  {
            delay: (60+(fastChilds.length-i)*15)*@s, duration: 5000*@s, easing: 'quake'
          })
    , 2000*@s


setTimeout ->
  new Main
, 1000

# setTimeout ->
#   new window.Cross
# , 2000
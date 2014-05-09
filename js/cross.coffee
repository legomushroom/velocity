class Cross
  constructor:->
    @vars()
    @init()
    console.log 'cross init'

  vars:->
  init:->
    $div1   = $ "<div class='c-green-g a-g' />"
    $div2   = $ "<div class='c-green-g a-g' />"
    $div3   = $ "<div class='c-green-g a-g' />"
    $div4   = $ "<div class='c-green-g a-g' />"
    $circle = $ "<div class='c-green-g a-g' />"
    width = 2
    height = 500
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
      'margin-left': width/2
      top: '100%'
    $div4.css
      width: width
      height: height
      left: '50%'
      'margin-left': width/2
      bottom: '100%'

    $circle.css
      left:   '50%'
      top:    '50%'
      width:  0
      height: 0
      'border-radius': '50%'

    $(document.body).append $div1
    $(document.body).append $div2
    $(document.body).append $div3
    $(document.body).append $div4
    $(document.body).append $circle

    $div1.velocity { right: '50%',  width: 0  }
    $div3.velocity { left: '50%',   width: 0  }
    $div2.velocity { top: '50%',    height: 0 }
    $div4.velocity { bottom: '50%', height: 0 }

    $circle.velocity { width: 20, height: 20 }



window.Cross = Cross














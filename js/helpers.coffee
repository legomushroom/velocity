class Helpers
  createDiv:(o={})->
    $el = $ '<div />'
    o.class? and $el.addClass o.class
    $cont = o?.container or $(document.body)
    $cont.append $el
    $el

  cloneBits:($proto, cnt=20, $container)->
    circles = []
    for i in [0...cnt]
      $new = $proto.clone()
      $cont = $container or $(document.body)
      $cont.append $new
      circles.push $new
    circles

  rand:(min,max)->
    Math.floor((Math.random() * ((max + 1) - min)) + min)

window.helpers = new Helpers

$.easing.quake = (t)->
  b = Math.exp(-t*10)*Math.cos(Math.PI*2*t*10)
  if t >= 1 then return 1
  1 - b

$.easing.elasticOut = (t)->
  s = undefined
  a = 0.1
  p = 0.4
  return 0  if t is 0
  return 1  if t is 1
  if not a or a < 1
    a = 1
    s = p / 4
  else
    s = p * Math.asin(1 / a) / (2 * Math.PI)
  a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1

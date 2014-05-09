class Main
  constructor:(@o={})->
    @vars()
    new window.Cross

  vars:->

setTimeout ->
  new Main
, 1000
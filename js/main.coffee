class Main
  constructor:(@o={})->
    @vars()
    new window.Cross

  vars:->

setTimeout ->
  new window.Cross
, 1000

# setTimeout ->
#   new window.Cross
# , 2000
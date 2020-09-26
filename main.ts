basic.forever(function () {
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # #
        . . # . #
        . . # . #
        `)
    basic.pause(500)
    basic.showArrow(ArrowNames.North)
    basic.pause(500)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(500)
    basic.showArrow(ArrowNames.East)
    basic.pause(500)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(500)
    basic.showArrow(ArrowNames.South)
    basic.pause(500)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(500)
    basic.showArrow(ArrowNames.West)
    basic.pause(500)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(500)
})

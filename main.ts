radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
    	
    }
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendNumber(0)
})
radio.setGroup(1)

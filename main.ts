input.onGesture(Gesture.Shake, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.Z))
})

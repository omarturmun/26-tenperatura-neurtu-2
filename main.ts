let tenperatura = 0
basic.forever(function () {
    tenperatura = input.temperature()
    basic.showNumber(tenperatura - 6)
})
basic.forever(function () {
    if (input.temperature() < 17) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (input.temperature() > 20) {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    if (input.temperature() < 17) {
        music.setVolume(160)
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
    if (input.temperature() > 20) {
        music.setVolume(181)
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
})

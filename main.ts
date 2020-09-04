let x = 0
let dist = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("wash your hands! wash-wash-wash")
    x = 0
    while (true) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
        dist = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Inches
        )
        basic.pause(1000)
        if (dist >= 5 && dist <= 7) {
            x += 1
        }
        if (x > 20) {
            break;
        }
    }
    basic.showString("you did it")
    music.stopMelody(MelodyStopOptions.All)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})

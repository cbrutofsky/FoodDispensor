function calibrateDispensor(angle: number) {
    input.onButtonPressed(Button.AB, function () {
        input.onButtonPressed(Button.A, () => {
            angle = Math.max(0, angle - 5)
            pins.servoWritePin(AnalogPin.P0, angle)
            led.stopAnimation()
        })
        input.onButtonPressed(Button.B, () => {
            angle = Math.min(180, angle + 5)
            pins.servoWritePin(AnalogPin.P0, angle)
            led.stopAnimation()
        })
        basic.showNumber(angle)
    })
    return angle
}

function dispensorTimer(angle: number) {
    for (let time = 0; time <= 5; time++) {
        basic.showNumber(time)
        if (time == 5) {
            pins.servoWritePin(servo_pin, 180);
            basic.pause(1000)
            pins.analogWritePin(servo_pin, 90);
            time = 0
        }
    }
}
let servo_pin = AnalogPin.P0;
let starting_angle = 90

basic.forever(function () {
    dispensorTimer(starting_angle)
})

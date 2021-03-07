input.onButtonPressed(Button.A, function () {
    Number2 += 1
})
input.onButtonPressed(Button.AB, function () {
    Number22 = Number22
    Number2 = Number2
    basic.showNumber(Number22)
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.B, function () {
    Number22 += 1
})
let Number22 = 0
let Number2 = 0
basic.showNumber(0)

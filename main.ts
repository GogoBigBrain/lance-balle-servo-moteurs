function envoyer () {
    servos.P0.setAngle(93)
}
function arrêter_roues () {
	
}
input.onButtonPressed(Button.A, function () {
    if (mode == 1) {
        basic.showNumber(1)
        Recharger()
        basic.pause(750)
        envoyer()
        basic.pause(750)
    }
    if (mode == 2) {
        basic.showNumber(2)
        angle_p1 += -20
        servos.P1.setAngle(angle_p1)
        if (angle_p1 < 0) {
            angle_p1 += 20
        }
    }
    if (mode == 3) {
        basic.showNumber(3)
        angle_p2 += -20
        servos.P2.setAngle(angle_p2)
    }
})
input.onButtonPressed(Button.AB, function () {
    mode += 1
    basic.showNumber(mode)
    if (mode == 4) {
        mode = 1
        basic.showNumber(1)
    }
})
/**
 * Fonctions
 * 
 * système propulsion ---->
 * 
 * pas encore dévelopé
 */
function partir_roues () {
	
}
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        basic.showNumber(1)
        automatique()
        basic.pause(750)
    }
    if (mode == 2) {
        basic.showNumber(2)
        angle_p1 += 20
        servos.P1.setAngle(angle_p1)
        if (angle_p1 > 180) {
            angle_p1 += -20
        }
    }
    if (mode == 3) {
        basic.showNumber(3)
        angle_p2 += 20
        servos.P2.setAngle(angle_p2)
    }
})
/**
 * Fonctions
 * 
 * système de chargement ------------>
 */
function Recharger () {
    servos.P0.setAngle(32)
}
function semiauto () {
    Recharger()
    basic.pause(750)
    envoyer()
    basic.pause(750)
}
function automatique () {
    for (let index = 0; index < 5; index++) {
        Recharger()
        basic.pause(750)
        envoyer()
        basic.pause(750)
    }
}
let angle_p2 = 0
let angle_p1 = 0
let mode = 0
mode = 1
angle_p1 = 90
angle_p2 = 0
servos.P0.setAngle(32)
servos.P1.setAngle(90)
servos.P1.setRange(0, 180)
servos.P2.setRange(0, 45)
basic.forever(function () {
    mode = Math.constrain(mode, 1, 4)
})

/**
 * Mode d'emploi
 * 
 * 4 modes à changer avec A+B
 * 
 * MODE1: Balles
 * 
 * MODE2: Direction horizontale
 * 
 * MODE3: Direction vertical
 * 
 * MODE4: Propulsion
 * 
 * Merci de me laisser vos commentaires
 * 
 * -Thomas
 */
function ActionA () {
    if (mode == 1) {
        MA1()
    }
    if (mode == 2) {
        MA2()
    }
    if (mode == 3) {
        MA3()
    }
    if (mode == 4) {
    	
    }
}
function MB4 () {
	
}
function MA2 () {
    basic.showNumber(2)
    angle_p1 += -20
    servos.P1.setAngle(angle_p1)
    if (angle_p1 < 0) {
        angle_p1 += 20
    }
}
/**
 * Fonctions
 * 
 * système de chargement ------------>
 */
/**
 * Fonctions
 * 
 * système propulsion ---->
 * 
 * pas encore dévelopé
 */
function envoyer () {
    servos.P0.setAngle(93)
}
function Toujours () {
    mode = Math.constrain(mode, 1, 5)
}
function arrêter_roues () {
	
}
function Démarage () {
    mode = 1
    angle_p1 = 90
    angle_p2 = 0
    servos.P0.setAngle(32)
    servos.P1.setAngle(90)
    servos.P1.setRange(0, 180)
    servos.P2.setRange(0, 45)
}
input.onButtonPressed(Button.A, function () {
    ActionA()
})
function MA1 () {
    basic.showNumber(1)
    Recharger()
    basic.pause(750)
    envoyer()
    basic.pause(750)
}
input.onButtonPressed(Button.AB, function () {
    AB()
})
function MB2 () {
    basic.showNumber(2)
    angle_p1 += 20
    servos.P1.setAngle(angle_p1)
    if (angle_p1 > 180) {
        angle_p1 += -20
    }
}
function MA3 () {
    basic.showNumber(3)
    angle_p2 += -20
    servos.P2.setAngle(angle_p2)
}
function partir_roues () {
	
}
function AB () {
    mode += 1
    basic.showNumber(mode)
    if (mode == 5) {
        mode = 1
        basic.showNumber(mode)
    }
}
input.onButtonPressed(Button.B, function () {
    ActionB()
})
function Recharger () {
    servos.P0.setAngle(32)
}
function semiauto () {
    Recharger()
    basic.pause(750)
    envoyer()
    basic.pause(750)
}
function MA4 () {
	
}
function automatique () {
    for (let index = 0; index < 5; index++) {
        Recharger()
        basic.pause(750)
        envoyer()
        basic.pause(750)
    }
}
function MB1 () {
    basic.showNumber(1)
    automatique()
    basic.pause(750)
}
function MB3 () {
    basic.showNumber(3)
    angle_p2 += 20
    servos.P2.setAngle(angle_p2)
}
function ActionB () {
    if (mode == 1) {
        MB1()
    }
    if (mode == 2) {
        MB2()
    }
    if (mode == 3) {
        MB3()
    }
    if (mode == 4) {
    	
    }
}
let angle_p2 = 0
let angle_p1 = 0
let mode = 0
Démarage()
basic.forever(function () {
    Toujours()
})

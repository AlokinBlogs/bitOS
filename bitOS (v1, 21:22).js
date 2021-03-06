// bitOS (Version 1, Build 4, 2022)
// Made by alokinBlogs, using Visual Studio Code, and Microsoft Makecode, as well as a BBC micro:bit board. Ofiicial name is "alokin-bitOS"
// -
// Initial booting logo, which can be changed. This is supposed to show the letter "H". to change it, you can replace the hashes (which are the lights that are supposed to be shown) with dots. Shift it to a figure of your desire.
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    `)
basic.pause(50)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . # . . .
    `)
basic.pause(50)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    . # . . .
    `)
basic.pause(50)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # .
    # . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.clearScreen()
basic.forever(function () {
    // When Button A is pressed, it will show the current compass heading.
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.compassHeading()))
    }
    // When Button B is presses, the current temperature will be shown.
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (input.temperature()))
    }
    // When the board is being shaked, the board will choose a random number from 0 to 26 by default. If you wish for the max number to be changed, please change the number from below.
    if (input.isGesture(Gesture.Shake)) {
        basic.showString("" + (randint(0, 26)))
    }
    // When the board is dropped (please, do not break yours), it senses the motion and warns you. You can change the warning by replacing "Be careful!" with something else of your choice.
    if (input.isGesture(Gesture.FreeFall)) {
        basic.showString("Be careful!")
    }
    // When the board's LEDs are facing dowm, they will all turn on to immitate the effect of a red flashlight, but won't be as effective as one. It turns off 10 seconds after its activation.
    if (input.isGesture(Gesture.ScreenDown)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(10000)
    }
    // When the board is flipped with the logo upside down, show a help page.
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showString("Do you need help? Go to alokinblogs.com for more info.")
    }
    // Once the board is turned right, it warns the user to connect headphones or a speaker with a headphone jack by attaching the 0 and GND pin to a port.
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showString("Connect Pin 0 and Pin 2 to a headphone jack.")
        basic.pause(3000)
        music.playMelody("C D D E F G G A ", 260)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showString("Please plug your micro:bit to your computer and open a text document.")
        basic.pause(7500)
        serial.writeLine("Hello, welcome to bitOS! This is the secret help center. You can still turn the board with the logo down to see all the needed things on the screen, but this shows everything in a notepad on your computer. If you want the source code, you can look in the GIT repository of the OS. For more info, visit alokinblogs.com/bitos ")
    }
    if (input.isGesture(Gesture.ThreeG)) {
        basic.showString("I am going to ask you a question, you click A for Yes and B for No.")
        basic.pause(100)
        basic.showString("Is the power of the cell called Michachondia?")
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("Wrong!")
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("You are correct!")
        }

    }
    // Once the board is tiled left and up, it shows an animation that repeats 5 times.
    if (input.isGesture(Gesture.TiltLeft)) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . . . #
                # # . . .
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(10)
            basic.showLeds(`
                . . . # #
                # # . . #
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(10)
            basic.showLeds(`
                . . # # #
                # # . # #
                . # . . #
                . # . . .
                # # # # #
                `)
            basic.pause(10)
            basic.showLeds(`
                . . . # #
                # # . . #
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(10)
            basic.showLeds(`
                . . . . #
                # # . . .
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.pause(10)
            basic.showLeds(`
                . . . . .
                # # . . .
                . # . . .
                . # . . .
                # # # # #
                `)
            basic.clearScreen()

        }
    }
    
})


    

    


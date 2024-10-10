/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Oct 2024
 * This program trafic lights
*/


let neopixelStrip: neopixel.Strip = null


basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))  // Green
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))  // Yellow
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))  // Red
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // Green 
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))  
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))  
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))  
    neopixelStrip.show()
    basic.pause(1000)

    // Yellow 
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))  
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow)) 
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))  
    neopixelStrip.show()
    basic.pause(1000)

     // Red    
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))  
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))  
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))    
    neopixelStrip.show()
    basic.pause(1000)

    
    basic.showIcon(IconNames.Happy)
})

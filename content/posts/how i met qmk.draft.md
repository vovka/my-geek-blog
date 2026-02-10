
How It All Started — Motivation

For a long time, I was using a small portable Bluetooth keyboard with a touchpad. The touchpad wasn’t very convenient, but overall I was satisfied.

Before 2025, I typed like a sloth from Zootopia — slow and relaxed. Most of what I typed were things like if, for, class, etc.
(here the image should be inserted). 
Then 2025 changed everything. Suddenly my typing looked more like this:
(here the image of Bruce typing from the Bruce mighty).
  
I started writing much less code and realized that most of my time was now spent typing regular text — trying to explain to AI what to do.

At that time, I couldn’t find a decent speech-to-text solution for Ubuntu. This quickly turned into pain everywhere: fingers, wrists, forearms. That’s when I understood it was time to change my keyboard.

First, I pulled my old Microsoft Ergonomic Keyboard 4000 off the shelf, where it had been resting for about 15 years. I used it for a couple of weeks. It solved some problems, but created others. So I decided to move on.

My next thought was Kinesis — especially their Advantage series. In most cases, Kinesis will satisfy your needs. It’s kind of like a MacBook among keyboards: polished, expensive, works out of the box. Typical price: roughly $350–450.

But then I decided to look for alternatives — and found some gems.


---

Alternative Input Devices

Steno keyboards

Plover-style stenography keyboards let you type entire words or phrases in a single chord. Advantages:

extremely high potential typing speed (200+ WPM is common among trained users)

minimal finger movement

excellent ergonomics


Downsides: steep learning curve.

Price range: $150–400 depending on hardware.


---

CharaChorder

CharaChorder is a chorded keyboard where each “key” is actually a small joystick-like switch.

Advantages:

entire words typed in one gesture

advertised speeds up to 300+ WPM

very compact


Price: around $250–300.


---

Svalboard

Svalboard is a high-end optical keyboard with analog switches and extreme customization.

Advantages:

per-key analog sensing

very low finger travel

highly configurable


Price: ~€700–900 depending on configuration.


---

And then there’s the whole ecosystem of keyboards based on open-source firmware — most of them also open hardware.


---

How Keyboards Actually Work

Typical keyboards use a matrix under the keys: rows and columns.

When you press a key, you short one row with one column. A microcontroller scans this matrix many times per second and figures out exactly which key was pressed.

The keyboard firmware’s main job is to detect these events and send them to the computer.

Popular open-source firmwares include:

QMK (Quantum Mechanical Keyboard)

ZMK

RMK


I didn’t know how to choose, so I went with QMK — it’s the most popular on GitHub, supports hundreds (maybe thousands) of keyboards, and lets you build your own from scratch if you want: design a PCB, etch it, assemble it by hand. Total freedom.


---

My First Split Keyboard

I wanted something cheap to start with:

split layout

built-in pointing device

no hand movement for mouse control


So I picked a ~$100 clone of the Dilemma Keyboard by bastardkb — without knowing much about it.

It worked out of the box, but:

touchpad was buggy

no dynamic key remapping


I thought: I’m a programmer — I’ll fix it.

I cloned QMK, set up the environment, compiled the default firmware, flashed it…

…and bricked the keyboard.

That’s where the journey really started.


---

Reverse Engineering Everything

Turned out my keyboard had a custom pinout.

The seller wouldn’t help, so I spent several weekends with a multimeter:

tracing the key matrix

identifying MCU pins

reverse-engineering the LED wiring

figuring out the touchpad connections


Then I reconfigured QMK, rebuilt, reflashed.

This took a couple of months of weekend work. Surprisingly, I enjoyed it.

Step by step:

1. got the key matrix working


2. added touchpad support via QMK drivers


3. implemented LEDs



Eventually I had a fully working custom firmware.


---

Dynamic Remapping: VIA vs Vial

Next goal: dynamic key remapping.

There are two main tools:

VIA

Vial


They’re similar, but Vial is more advanced, so I chose it.

Vial uses its own fork of QMK with custom USB protocol extensions. That meant:

forking QMK

porting my changes

rebuilding everything again


Honestly, I don’t think I could’ve done this without coding agents.


---

Final Result

Now I have a fully customized split keyboard running Vial-enabled QMK.

Key features:

Dynamic remapping

Any key can be reassigned instantly without reflashing firmware.

Combos

Press multiple keys together to produce another key or action (for example, J+K = Esc). Great for reducing finger travel.

Tap Dance

One key can do different things depending on how you tap it:

single tap

double tap

hold


For example: tap = (, hold = {.

Macros

Record or define sequences of keystrokes and trigger them with a single key.


---

Main Takeaway

Ergonomics and typing speed live on orthogonal axes.

You can improve ergonomics without increasing speed.
You can type fast on almost any keyboard.

But good ergonomics let you type longer — without pain.

And that, for me, turned out to matter much more.


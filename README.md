# 🟡 Pac-Man for Raspberry Pi (Phaser.js)

An arcade-inspired Pac-Man clone built with [Phaser.js](https://phaser.io/) and optimized for smooth web-based play on Raspberry Pi devices.

---

## 🕹️ Features

* **Phaser Engine:** Built with Phaser 3 for responsive 2D rendering, sprite animations, and arc physics.
* **Classic Gameplay:** Retro maze navigation, dot collecting, power pellets, and ghost AI.
* **Raspberry Pi Ready:** Optimized to run seamlessly inside Chromium in fullscreen/kiosk mode.
* **Flexible Input:** Keyboard controls out of the box, with support for USB arcade controllers or web sockets for custom GPIO controls.

---

## 📋 Requirements

To run and host this game locally on your Raspberry Pi (or any machine), you'll need:

* **Node.js & npm** (recommended for local development server)
* A modern web browser (**Chromium** on Raspberry Pi OS)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/Blazey485/PacMan-RaspberryPI.git](https://github.com/Blazey485/PacMan-RaspberryPI.git)
cd PacMan-RaspberryPI
```

##Launch a Local Web Server
```python3 -m http.server 8080```
OR 
``` npm run dev```

🖥️ Running on Raspberry Pi (Arcade / Kiosk Mode)

To run the game automatically on boot in fullscreen kiosk mode on Raspberry Pi OS:
```chromium-browser --kiosk --noerrdialogs --disable-infobars http://localhost:8080chromium-browser --kiosk --noerrdialogs --disable-infobars http://localhost:8080 ```

controls: 
**WASD** and **ArrowKeys** 
also works with a joycon/joystick


🛠️ Built With

    Phaser 3 - HTML5 Game Framework

    JavaScript (ES6) / HTML5 / CSS3


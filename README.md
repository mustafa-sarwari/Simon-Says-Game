
# 🟢 Simon Says Game

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://mustafa-sarwari.github.io/Simon-Says-Game/)

A classic memory game built with HTML, CSS, and JavaScript. The game challenges the player to repeat a sequence of button presses, which increases in length and difficulty with each round.

> 🎮 Inspired by the original "Simon" electronic game and built as part of a frontend development capstone project.

![Simon Says Game Demo](./assets/simon-says.gif)

---

## 🚀 Live Demo

**[🎮 Play the game now!](https://mustafa-sarwari.github.io/Simon-Says-Game/)**

---

## 📋 Table of Contents

- [Features](#-features)
- [How to Play](#-how-to-play)
- [Technologies Used](#️-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

- 🎨 **Dynamic pattern generation** - Randomly generated sequences for endless replayability
- 🔊 **Audio feedback** - Unique sounds for each colored pad
- 💡 **Visual feedback** - Animated pad highlights and hover effects
- 📊 **Round tracking** - Progress through increasing difficulty levels
- 🎯 **Four difficulty levels** - Choose from 8, 14, 20, or 31 rounds
- 📱 **Responsive design** - Works on desktop and mobile devices
- ♿ **Accessible** - Keyboard and screen reader friendly
- 🎮 **Game reset** - Start fresh anytime

---

## 🎯 How to Play

1. Click the **"Start"** button to begin the game
2. Watch carefully as the computer highlights a sequence of colored pads
3. Repeat the pattern by clicking the pads in the same order
4. Each round adds one new color to the sequence
5. The game ends if you click the wrong color
6. Try to complete all rounds to win!

**Difficulty Levels:**
- Level 1: 8 rounds
- Level 2: 14 rounds
- Level 3: 20 rounds
- Level 4: 31 rounds

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup for game structure
- **CSS3** - Modern styling with animations and transitions
- **JavaScript (ES6+)** - Game logic and DOM manipulation
- **Parcel** - Build tool and development server
- **Jest** - Testing framework
- **Puppeteer** - End-to-end testing

---

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mustafa-sarwari/Simon-Says-Game.git
   cd Simon-Says-Game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📂 Project Structure

```
Simon-Says-Game/
├── assets/                     # Game assets
│   ├── background.png         # Background image
│   ├── simon-says.gif         # Demo GIF
│   └── simon-says-sound-*.mp3 # Sound effects
├── test/                       # Test files
│   ├── us-01.test.js          # Start button tests
│   ├── us-02.test.js          # Pad interaction tests
│   ├── us-03.test.js          # Computer turn tests
│   ├── us-04.test.js          # Player turn tests
│   └── us-05.test.js          # Game completion tests
├── index.html                  # Main HTML file
├── index.js                    # Game logic
├── styles.css                  # Styling
├── jest.config.js             # Jest configuration
├── package.json               # Project dependencies
├── LICENSE                    # MIT License
├── CODE_OF_CONDUCT.md        # Code of conduct
├── CONTRIBUTING.md           # Contribution guidelines
├── SECURITY.md               # Security policy
└── README.md                 # This file
```

---

## 💻 Development

### Available Scripts

- `npm start` - Start development server on port 3000
- `npm test` - Run all tests
- `npm run test:1` - Run start button tests
- `npm run test:2` - Run pad interaction tests
- `npm run test:3` - Run computer turn tests
- `npm run test:4` - Run player turn tests
- `npm run test:5` - Run game completion tests

### Code Structure

The game is organized into several key functions:

- **Event Handlers**: `startButtonHandler()`, `padHandler()`
- **Game Logic**: `playComputerTurn()`, `playHumanTurn()`, `checkPress()`, `checkRound()`
- **Helper Functions**: `setLevel()`, `activatePad()`, `activatePads()`, `setText()`
- **Utility Functions**: `getRandomItem()`, `resetGame()`

---

## 🧪 Testing

The project includes comprehensive tests using Jest and Puppeteer:

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:1  # Start button functionality
npm run test:2  # Pad interactions
npm run test:3  # Computer turn logic
npm run test:4  # Player turn logic
npm run test:5  # Game completion
```

Tests cover:
- ✅ Start button functionality
- ✅ Pad click interactions
- ✅ Computer sequence generation
- ✅ Player input validation
- ✅ Round progression
- ✅ Game reset functionality

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to:
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Contact

**Mustafa Sarwari**

- 🌐 GitHub: [@mustafa-sarwari](https://github.com/mustafa-sarwari)
- 💼 LinkedIn: [Mustafa Sarwari](https://www.linkedin.com/in/gm-sarwari/)
- 📧 Email: mustafa.sarwari@email.com

---

## 🌟 Acknowledgments

- Inspired by the classic Simon electronic game from the 1980s
- Built as part of a frontend development capstone project
- Special thanks to all contributors and testers

---

## 📈 Future Enhancements

- [ ] Add leaderboard with local storage
- [ ] Implement multiple difficulty modes
- [ ] Add dark/light theme toggle
- [ ] Create multiplayer mode
- [ ] Add power-ups and bonuses
- [ ] Improve mobile touch responsiveness
- [ ] Add sound volume controls
- [ ] Implement pause functionality

---

<div align="center">
  
**If you enjoyed this game, please consider giving it a ⭐!**

Made with ❤️ by Mustafa Sarwari

</div>


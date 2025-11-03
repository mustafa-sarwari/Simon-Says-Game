# Contributing to Simon Says Game

Thank you for considering contributing to the Simon Says Game! We welcome contributions from everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear title and description
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

### Suggesting Enhancements

We welcome feature requests! Please open an issue with:
- A clear title and description
- The motivation for the feature
- How the feature should work
- Any alternative solutions you've considered

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, concise commit messages
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

3. **Test your changes**
   - Ensure all existing tests pass: `npm test`
   - Add tests for new features
   - Test manually in different browsers

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of what you've changed
   - Reference any related issues
   - Wait for review and address any feedback

## Development Setup

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
   The game will be available at http://localhost:3000

4. **Run tests**
   ```bash
   npm test
   ```

## Code Style Guidelines

- Use meaningful variable and function names
- Write comments for complex logic
- Keep functions small and focused
- Follow JavaScript best practices
- Use consistent indentation (2 spaces)
- Add JSDoc comments for functions

## Commit Message Guidelines

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Start with a capital letter
- Keep the first line under 50 characters
- Reference issues and pull requests when relevant

Examples:
- `Add: multiplayer mode feature`
- `Fix: sound not playing on mobile devices`
- `Update: README with new screenshots`
- `Refactor: game logic for better performance`

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🎮

# Tradeoffs in Tenzies Project

This document outlines the design decisions and tradeoffs made during the implementation of the **Tenzies** React app. These tradeoffs reflect the balance between simplicity, scalability, performance, and developer experience while building the project.

---

## 1. State Management with `useState`
- **Decision**: Use `useState` to manage dice state (`value`, `isHeld`) and game status.
- **Pros**:
  - Simple and beginner-friendly.
  - Hooks are idiomatic React for managing component state.
  - Easy to reset state for a new game with a single function call.
- **Cons / Tradeoffs**:
  - State updates are asynchronous, making `console.log` debugging less direct.
  - Not as scalable for larger apps compared to Context API or Redux.

---

## 2. Conditional Rendering for Win State
- **Decision**: Use conditional JSX to switch between the "Game Board" and the "Win Screen".
- **Pros**:
  - Very clear logic — `hasWon ? WinScreen : GameBoard`.
  - Keeps UI logic declarative and readable.
- **Cons / Tradeoffs**:
  - Entire sections of the DOM are swapped out instead of partially reused.
  - Could result in more re-renders compared to toggling smaller UI parts.

---

## 3. `every()` for Win Check
- **Decision**: Use `Array.every()` to check if all dice are held and equal.
- **Pros**:
  - Concise, functional approach.
  - Runs in O(n) time — efficient for small sets of dice (10).
- **Cons / Tradeoffs**:
  - Re-calculated on every render — no memoization used.
  - Would be less efficient if scaled to hundreds of dice.

---

## 4. CSS Animations for Feedback
- **Decision**: Use CSS keyframes for button animations (shake, bulge, etc.).
- **Pros**:
  - Keeps animations lightweight and performant.
  - Easy to attach to events with `:active` or React state toggles.
- **Cons / Tradeoffs**:
  - Limited control compared to libraries like Framer Motion.
  - Complex animation states can get harder to manage in CSS alone.

---

## 5. Component Decomposition
- **Decision**: Break down UI into `Instructions`, `DiceGrid`, and `Die` components.
- **Pros**:
  - Increases readability and reusability.
  - Encourages separation of concerns.
- **Cons / Tradeoffs**:
  - Slightly more boilerplate with props drilling.
  - Larger apps might need Context or state management libraries.

---

## 6. `newGame` vs. Resetting State
- **Decision**: Reset dice array with `generateAllNewDice()`.
- **Pros**:
  - Simple and clear reset functionality.
  - Reuses existing helper logic for dice generation.
- **Cons / Tradeoffs**:
  - Does not preserve any session history or stats (e.g., roll count, time played).
  - Could limit expansion into a leaderboard or analytics.

---

## 7. Styling Approach
- **Decision**: Use plain CSS files instead of CSS-in-JS or frameworks.
- **Pros**:
  - Beginner-friendly and avoids added dependencies.
  - Easy to test styles in isolation.
- **Cons / Tradeoffs**:
  - Harder to scale for larger apps without utility libraries (e.g., Tailwind).
  - Class name collisions possible without a naming convention.

---

## 8. Confetti Integration (Planned)
- **Decision**: Consider `react-confetti` for win screen feedback.
- **Pros**:
  - Improves user experience and delight.
  - Easy to plug in with conditional rendering.
- **Cons / Tradeoffs**:
  - Extra dependency increases bundle size.
  - Requires handling responsive behavior (fit to window).

---

## Conclusion
The Tenzies project intentionally prioritizes **simplicity, clarity, and React fundamentals** over scalability or advanced optimization. These tradeoffs are appropriate for a learning project and internship preparation, where demonstrating understanding of **state management, conditional rendering, and reusable components** is more valuable than enterprise-level scaling.

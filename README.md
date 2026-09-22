# Dev Insights — Mini Blog

An internal mini blog platform prototype built with React, TypeScript, and Vite, for employees to share quick web development tips and updates.

## Installation, Running & Testing

This project uses **Vite** as its build tool and dev server.

1. Clone the repository:
```bash
   git clone https://github.com/Bruno-te/dev-insights-mini-blog.git
   cd dev-insights-mini-blog
```
2. Install dependencies:
```bash
   npm install
```
3. Start the development server:
```bash
   npm run dev
```
4. Open `http://localhost:5173/` in your browser.

**Testing:** This project does not currently include an automated test suite. Each requirement was verified manually by running the dev server and checking the rendered output and browser console directly — e.g. confirming the highlighted post and "New!" badge render correctly, and that `[withLogger] Header mounted` / `unmounted` appear in the console.

## Design Decisions

### Component types
All components are functional components using hooks, rather than class components. React's own documentation now recommends function components as the standard approach — they avoid `this`-binding issues, let related lifecycle logic live together in a single `useEffect` instead of being split across `componentDidMount`/`componentWillUnmount`, and are what the `withLogger` HOC and `React.memo` optimizations are built around.

### Styling
Two styling methods are used:
- **External CSS files** (one per component, in `src/styles/`) for the base layout and look.
- **Inline styles** for conditional highlighting — the `Post` component applies a `style` prop conditionally when the post's author matches a highlighted author.

Conditional styling is also demonstrated with the "New!" badge, which appears on posts dated within the last 24 hours.

### Optimization
- `Post` is wrapped in `React.memo` so it only re-renders when its `post` prop actually changes.
- Each `Post` rendered in `PostList` uses `post.id` (not array index) as its `key`, so React can correctly track individual posts even if the list is reordered or filtered later.
- A `withLogger` higher-order component logs to the console when a wrapped component mounts and unmounts (applied to `Header`). This demonstrates the HOC pattern for cross-cutting behavior without duplicating logic inside each component.



## Challenges

The main challenge was a stale render during development — after updating `App.tsx` with new prop values, the browser kept showing the old text even though Vite's terminal confirmed the hot-reload had applied. A hard browser reload resolved it; it turned out to be a caching issue rather than a code problem, which was a useful reminder to check the environment, not just the code, when something doesn't behave as expected.

## Libraries Used

- React
- TypeScript
- Vite

No additional third-party UI or state management libraries were used — everything is built with core React and TypeScript.
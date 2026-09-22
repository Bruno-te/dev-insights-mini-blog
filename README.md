# Dev Insights — Mini Blog

An internal mini blog platform prototype built with React, TypeScript, and Vite, for employees to share quick web development tips and updates.

## Installation & Running

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Bruno-te/dev-insights-mini-blog.git
   cd dev-insights-mini-blog
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server (powered by Vite):
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open `http://localhost:5173/` in your browser.

## Design Decisions

### Component types
All components are functional components using hooks, rather than class components. React's own documentation now recommends function components as the standard approach — they avoid `this`-binding issues, let related lifecycle logic live together in a single `useEffect` instead of being split across `componentDidMount`/`componentWillUnmount`, and are what the `withLogger` HOC and `React.memo` optimizations are built around.

### Styling
Two styling methods are used:
- **External CSS files** (one per component, in `src/styles/`) for the base layout and look.
- **Inline styles** for conditional highlighting — the `Post` component applies a `style` prop conditionally when the post's author matches a highlighted author.

Conditional styling is also used for the "New!" badge, which appears on posts dated within the last 24 hours.

### Optimization
- `Post` is wrapped in `React.memo` so it only re-renders when its `post` prop actually changes.
- Each `Post` rendered in `PostList` uses `post.id` (not array index) as its `key`, so React can correctly track individual posts even if the list is reordered or filtered later.
- A `withLogger` higher-order component logs to the console when a wrapped component mounts and unmounts (applied to `Header`). This demonstrates the HOC pattern for cross-cutting behavior without duplicating logic inside each component.

## Challenges

_(fill this in with anything that actually gave you trouble — e.g. the HMR caching issue you hit earlier, or working out the generic typing for `withLogger`)_

## Libraries Used

- React
- TypeScript
- Vite

No additional third-party UI or state libraries were used — everything is built with core React and TypeScript.
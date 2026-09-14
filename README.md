# 🚀 Dev Stack

A React app that lets developers browse curated tools and technologies, then build their own ideal tech stack by picking one option per category.

## 🛠️ Built With

- React
- Tailwind CSS
- React Toastify
- daisy UI
- reat toastify

## ✨ Features

- **Browse Technologies** – View a grid of tools and frameworks, each with a description, category, difficulty, and rating.
- **Build Your Stack** – Add technologies to a live sidebar stack with one click, with instant toast feedback.
- **Manage Your Selections** – Remove individual items or clear the whole stack, with visual feedback (green border/checkmark) showing what's already added.

---

## 📖 React Questions

**1. What is JSX, and why is it used in React?**
JSX lets you write HTML-like syntax directly inside JavaScript. It's used because it makes describing UI structure much easier to read and write than calling `React.createElement()` manually.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — read-only from the child's side. State is data a component manages *internally* and can change over time, causing the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own data. I used it for `stack` (the full tech list), `loading`, and `selectedStack` (the technologies the user has added).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects after a component renders — like fetching data. I needed it to fetch `TechStack.json` once when the component first mounts, instead of fetching on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to track which items changed, were added, or removed between renders. Without a stable unique key, React can't efficiently update the list and may render items incorrectly.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. Example:
```jsx
{selectedStack.length == 0 ? (
                                <div className="flex flex-col items-center justify-center text-center py-10 text-gray-400">
                                    <span className="text-2xl mb-2">+</span>
                                    <p className="text-sm">
                                        Add technologies to build your ideal stack.
                                    </p>
                                </div>
                            ) :
                                selectedStack.map(stack =>
                                    <StackSidebar
                                        key={stack.id}
                                        stack={stack}
                                     removeFromStack={removeFromStack}
                                    ></StackSidebar>
                                )
                            }
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent → child: pass data as props (e.g. `<TechCard tech={tech} />`). Child → parent: the parent passes a function down as a prop, and the child calls that function (e.g. `onAdd(tech)`), which runs the parent's state update.






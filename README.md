# 📘 Library Dashboard – Home Assessment

This project documents the technical setup, key assumptions, and user flows of the Library Dashboard assessment. The app is mock-based and built for a fast, professional demonstration of front-end capabilities using modern frameworks.

---


## 📌 Assumptions

- The app assumes:
  - Multiple users exist, each with their own dashboard area.
  - No backend is required; all state is kept in local memory.
  - Access control is simulated using a `hasAccess` boolean.
  - Chart visualization merges all visuals from selected KPIs in a layout or storyboard.
    > ⚠️ This merging approach is for demo purposes and may not reflect production logic.
  - ⚠️ The other properties for layout and storyboard are not rendered, thois i would like to discuss. You will see only 1 different for layout and storyboard.

---

## 🧪 Key User Actions Or Jobs to be done:

### ✅ 1. Add a Layout
- Users select KPIs to include in a layout.

### ✅ 2. View Layouts / Storyboards
- A modal shows layout/storyboard details:
  - Merged chart types.
  - Chart preview (via Chart.js).
  - List of included KPIs, with title and calculation.

### ✅ 3. Request Access
- If `hasAccess` is false, a “Request Access” button appears.
- The modal allows the user to submit a reason.
- Upon submission, access is granted immediately (simulated).

---

## 🧠 How the Tech Works

This app uses **Next.js App Router**, enabling server-side rendering and client-side interactivity via React components. On initial load, HTML is generated and served by **Vercel’s serverless infrastructure**.

Once loaded in the browser, **React handles all UI updates** based on local state. Modals, tabs, and dynamic charts update in response to user actions.

State management is handled via **Redux Toolkit**, simulating a backend by storing all data (users, KPIs, layouts, storyboards) in memory. User interactions dispatch Redux actions, and components re-render accordingly.

On deployment, **Vercel** runs `npm run build`, precompiling the app and serving it globally. The App Router supports route-based code splitting, and dynamic behavior is hydrated on the client.

---

## ⚙️ Tech Stack

| Area             | Technology                     |
|------------------|--------------------------------|
| Frontend         | Next.js (App Router)           |
| Language         | TypeScript                     |
| UI Frameworks    | Tailwind CSS, Bulma            |
| State Management | Redux Toolkit (in-memory only) |
| Charting         | Chart.js                       |
| Component Docs   | Storybook (in progress)        |
| Deployment       | Vercel                         |

---

## 🔗 Links

- 🔍 **Live Demo**: [Dashboard App in vercel](https://home-asssesment-dashboard-library-n.vercel.app/?user=casey)
  > Available users: `casey`, `peter`, `john`

- 📁 **Repository**: [GitHub Repo alejandro-zapeta](https://github.com/alejandro-zapeta/home-asssesment-dashboard-library-nextjs)

- **Loom Video**: 
https://www.loom.com/share/6c9cc5b1e7c04b3eaa6de177f5befe9f?sid=f0790a9d-8366-49f7-9992-3ea8f84d1a39


---

## ✅ Notes

- All data is mock-based with no persistent storage.
- Refreshing the page resets the app state.
- This solution is optimized for **presentation and rapid delivery**, not backend completeness.

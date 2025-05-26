# 💼 ElevateHR — Advanced HR Performance Dashboard

A modern, responsive, and feature-rich HR management dashboard built with **Next.js (App Router)** and **Tailwind CSS**. ElevateHR enables HR managers to track employee performance, manage bookmarks, view analytics, and more — all in a clean and intuitive UI.

🌐 [Live Demo](https://elevate-hr.vercel.app/)  
📂 [GitHub Repository](https://github.com/PranavAdityaa/ElevateHR)

---

## 🔧 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/docs/app)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **State Management**: Zustand
- **Authentication**: Mock login (NextAuth.js optional)
- **Charts & UI**: Chart.js, Framer Motion (for transitions)

---

## 🚀 Features Implemented

### 🏠 Dashboard Homepage (`/`)
- Fetches employee data from `https://dummyjson.com/users?limit=20`
- Displays employee cards with:
  - Full Name, Email, Age, Department (randomized logic)
  - Star-based performance rating (1–5)
  - Action Buttons: `View`, `Bookmark`, `Promote`

### 🔍 Search & Filter
- Search by name, email, or department (case-insensitive)
- Multi-select filter by department and rating

### 👤 Dynamic Employee Page (`/employee/[id]`)
- Tabbed layout: `Overview`, `Projects`, `Feedback`
- Profile info: Address, Phone, Bio, Performance History
- Performance badge with dynamic color rating
- All tabs load mock data with dynamic rendering

### 📌 Bookmarks Page (`/bookmarks`)
- Lists all bookmarked employees
- Actions: Remove Bookmark, Promote, Assign to Project

### 📊 Analytics Page (`/analytics`)
- Charts rendered using Chart.js:
  - Department-wise average ratings
  - Bookmark trend visualization

---

## ⚙️ Tech Highlights

- Custom hooks: `useBookmarks`, `useSearch`
- Reusable UI components: `Card`, `Badge`, `Button`, `Modal`, etc.
- Zustand for global state management
- Mobile-first responsive design with Tailwind dark/light mode
- Error and loading states per component

---

## 🧠 Advanced Expectations Met

✅ Modular Folder Structure  
✅ Zustand for centralized state  
✅ Form handling in Feedback tab  
✅ Keyboard accessibility and responsive layouts  
✅ Optional auth (mock login screen implemented)  
✅ Animations using Framer Motion  

---

# 🛠️ Getting Started
1. Clone the Repository
git clone https://github.com/PranavAdityaa/ElevateHR.git
cd ElevateHR

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev

Visit http://localhost:3000 to view the app in the browser.

📁 Folder Structure
bash
Copy
Edit
ElevateHR/
├── app/                # App Router (routes)
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── public/screenshots/ # Project screenshots
├── styles/             # Tailwind and global CSS
└── README.md
📬 Contact
Developer: B Pranav Aditya
📧 LinkedIn
📞 9059728400



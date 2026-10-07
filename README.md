# Signup Page

A clean and responsive signup form built with **React** and **Tailwind CSS**. The form collects a full name, email, password and password confirmation, validates the input, and shows feedback with toast notifications.

## Features

- Fields for full name, email, password and confirm password
- Show/hide toggle on both password fields
- Duplicate email check (case-insensitive) against previously registered users
- Password validation:
  - Password and confirm password must match
  - At least one special character
  - At least one number
  - At least one capital letter
- Success and error feedback using toast notifications
- Form state managed with `useReducer`
- Responsive layout styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- [react-toastify](https://fkhadra.github.io/react-toastify/) for notifications

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Husnainawm/Form-Validation-for-Login.git

# 2. Go to the project folder
cd SignupPage

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Packages used

If you are setting up from scratch, install them with:

```bash
npm install lucide-react react-toastify
npm install tailwindcss @tailwindcss/vite
```

## Project Structure

```
SignupPage/
├── src/
│   ├── SignUp/
│   │   └── Form.jsx      # Signup form component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## How It Works

1. Each input updates a single state object through one `useReducer` reducer. The input's `name` attribute is used as the key.
2. On submit, the form runs these checks in order:
   1. Email is not already registered
   2. Password and confirm password match
   3. Password has a special character, a number and a capital letter
3. If a check fails, an error toast is shown and the submit stops.
4. If all checks pass, the user is added to the `dataSet` array and a success toast is shown.

## Notes

- Users are stored in React state only, so the data is lost when the page is refreshed. There is no backend or database yet.
- Validation on the frontend is only for quick user feedback. A real application must also validate and check for duplicate emails on the server.
- Passwords should never be stored in plain text or in `localStorage` in a real project.

## Future Improvements

- Connect to a backend API and database
- Add a sign-in page
- Persist users with a backend instead of local state
- Add a password strength indicator

## Author

**Husnain Ali**

## License

This project is open source and available for learning purposes.
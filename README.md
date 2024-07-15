# Login Form Application

This is a ReactJS application that demonstrates a simple login functionality and a dashboard with transaction data. The project showcases creativity in UI/UX design and responsive design principles.

## Prerequisites

- Node.js
- ReactJS
- Git

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/abhishekram404/login-form-assessment.git
   cd login-form-assessment
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

   The dev server should start at `http://localhost:5173`.

## Features

### Login Page

- Two input fields: Email and Password.
- On Login Button Click, the user is authenticated and redirected to the Dashboard Page.

### Dashboard Page

- Redirects to the Dashboard Page after successful login.
- A Title Bar at the top and a Navigation Menu at the Side Bar with "Transaction" as the Menu Item.
- Right side of the Title Bar shows a profile image (static image) and the name of the logged in user.
- Profile icon click shows a sub menu with Profile and Log Out options.
- Log Out button ends the user session and redirects to the login page.

### Transactions Page

- Displays a list of transactions in tabular format (pagination couldn't be implemented due of lack of its support in the API).
- Allows the user to search for transactions by entering a search query.

## Packages Used

- React: A JavaScript library for building user interfaces.
- React DOM: Serves as the entry point to the DOM and server renderers for React.
- React Router DOM: Enables navigation between views or components in a React application.
- @tanstack/react-query: For fetching, caching, and updating server data.
- Axios: A promise-based HTTP client for making HTTP requests.
- Styled-components: For styling React components.
- Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- TypeScript: A superset of JavaScript that adds static types.
- ESLint: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- Prettier: An opinionated code formatter.
- Husky: For managing Git hooks.
- Lint-staged: Runs linters on git staged files.

## Development

### Scripts

- `dev`: Starts the development server.
- `build`: Builds the project.
- `lint`: Runs ESLint to check for code issues.
- `preview`: Previews the production build.
- `prepare`: Prepares Husky for git hooks.

### Linting and Formatting

- ESLint is used for linting.
- Prettier is used for code formatting.
- Husky and lint-staged are used to enforce code quality on commit.

### Project Structure

```
login-form
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── providers
│   ├── services
│   ├── styles
│   ├── types
│   ├── utils
│   └── main.tsx
├── .eslintrc.cjs
├── .prettierrc
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Notes

- Ensure to handle user sessions securely.
- Use environment variables to store sensitive data.
- Show creativity in designing and implementing the UI/UX.

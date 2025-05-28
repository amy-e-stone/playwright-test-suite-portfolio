# Playwright Test Suite for Full-Stack Web App

This project is an end-to-end test suite built with [Playwright](https://playwright.dev) and TypeScript to test an example full-stack web application. It automates user workflows such as registration, login, CRUD operations, and form validation all within a single, maintainable framework.

Tests are structured using the Page Object Model, making them easy to read, expand, and maintain. The suite includes cross-browser coverage (Chromium, Firefox, and WebKit) and mimics real user behavior for reliable functional testing.

## Features

- End-to-end and regression testing
- Page Object Model architecture
- Cross-browser support (Chromium, Firefox, WebKit)
- Reusable, readable test logic
- Organized test structure using Playwright’s built-in test runner — no extra tools required

---

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/amy-e-stone/playwright-test-suite-portfolio.git
   cd playwright-test-suite-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **(Optional) To launch tests in a visible browser window, use the '--headed' tag:**
   ```bash
   npx playwright test --headed
   ```

---

## Other options to run tests:

- To run all tests:
  ```bash
   npx playwright test
  ```

- To run a specific test file:
  ```bash
  npx playwright test tests/<the-test-file-name>.spec.ts
  ```

- To view the last test report:
  ```bash
  npx playwright show-report
  ```

---

## Visual Trace (Optional)

1. **Open the 'playwright.config.ts' file**

2. **Temporarily set:**
   ```ts
   use: {
   trace: 'on',
   }
   ```

3. **After running the test(s):**
   ```bash
   npx playwright show-trace test-results/<folder>/trace.zip
   ```

Note: the trace folder, denoted 'folder' above, is automatically named by Playwright according to the test name.

This will automatically launch the Trace Viewer in your browser, where you can explore each action step-by-step. Trace allows you to view every action with screenshots, DOM snapshots, and timing breakdowns.

---

## Project Structure
/tests                -> Test specifications  
/page-objects         -> Page Object files  
playwright.config.ts  -> Test configuration
   








# Node.js + Express + TypeScript + Sequelize Project

This project is a boilerplate for creating a backend API using Node.js, Express, TypeScript, and Sequelize with PostgreSQL as the database.

## Features

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **Jest**: A delightful JavaScript testing framework.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repository-url.git
    cd your-repository
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
   - Create a `.env` file in the root directory and fill in the necessary values. Refer to the [`.env`](#env) section for an example.

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Build for production:
    ```bash
    npm run build
    ```

6. Run the server:
    ```bash
    npm start
    ```

7. Run migrations:
    ```bash
    npm run migrate
    ```

## Testing

Run the tests with Jest:
```bash
npm test

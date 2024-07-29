# College Hub

College Hub is a Progressive Web App (PWA) designed to enhance communication and management within the college community. The platform provides features such as an event calendar, notifications center, job vacancies, and custom form creation with sharable links. It also supports role-based authentication for Admin and User roles.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The College Hub project is split into two main parts:

1. **Client**: The frontend application built with Next.js, providing a responsive and interactive user interface.
2. **Server**: The backend application built with NestJS, handling business logic, data management, and API services.

## Project Structure

The project directory is structured as follows:

```
ISMT-Hub/
├── client/       # Frontend application (Next.js)
│   ├── README.md # Client-specific instructions
│   ├── ...
├── server/       # Backend application (NestJS)
│   ├── README.md # Server-specific instructions
│   ├── ...
├── .git/
├── README.md     # Root README file
```

- **client**: Contains the Next.js application.
- **server**: Contains the NestJS application.
- **.git**: Git version control directory.
- **README.md**: Root README file.

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your system.

### Clone the Repository

```bash
git clone https://github.com/dipeshkumarsah98/College-Hub.git
cd College-Hub
```

### Install Dependencies

#### Client

Navigate to the client directory and install dependencies:

```bash
cd client
yarn install
```

#### Server

Navigate to the server directory and install dependencies:

```bash
cd ../server
yarn install
```

## Scripts

### Client Scripts

For client-specific scripts, refer to the [client README](client/README.md).

### Server Scripts

For server-specific scripts, refer to the [server README](server/README.md).

## Environment Variables

Create `.env` files in both the `client` and `server` directories based on the `.env.example` files provided.

### Client

Refer to the [client README](client/README.md) for client environment variables.

### Server

Refer to the [server README](server/README.md) for server environment variables.

## Running the Project

### Development

To run the project in development mode, follow these steps:

#### Client

Navigate to the client directory and start the development server:

```bash
cd client
yarn dev
```

#### Server

Navigate to the server directory and start the development server:

```bash
cd ../server
yarn start:dev
```

### Production

To build and start the project in production mode, follow these steps:

#### Client

Navigate to the client directory, build, and start the production server:

```bash
cd client
yarn build
yarn start
```

#### Server

Navigate to the server directory, build, and start the production server:

```bash
cd ../server
yarn build
yarn start:prod
```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Commit your changes with a clear message.
5. Push your changes to your forked repository.
6. Create a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


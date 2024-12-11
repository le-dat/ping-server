# Ping Server Project

## Description

This project is designed to automatically ping servers at regular intervals to ensure they are up and running. It includes features such as automatic server pinging every 5 minutes with a random delay to avoid simultaneous pings.

### Prerequisites

Make sure you have the following installed:

- Node.js (v20)
- npm (v6 or higher)

## Installation

To install the project dependencies, run:

```sh
npm install | yarn install
```

## Usage

```sh
npm start | yarn start
```

The server will start on the port specified in your environment variables or default to 3000.

## Features

```sh
- Automatic server pinging every 5 minutes with a random delay between 0 and 20000 ms.
- Logs the status of each ping to the console.
- Configurable server list to ping.
```

## API Endpoints

```sh
GET /api/servers - Retrieve the list of servers being pinged.
POST /api/servers - Add a new server to the ping list.
DELETE /api/servers/:id - Remove a server from the ping list.
```

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📝 Version

0.1.0

## Author

### Le Quoc Dat

Passionate software developer with a knack for creating efficient and user-friendly applications. Dedicated to continuous learning and improvement, always exploring new technologies and methodologies.

- **Portfolio:** [Website Portfolio](https://ledat-portfolio.vercel.app/)
- **GitHub:** [Le Quoc Dat](https://github.com/le-dat)
- **LinkedIn:** [Le Quoc Dat](https://www.linkedin.com/in/le-quoc-dat)

Feel free to reach out for collaboration or any inquiries!

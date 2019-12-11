# Kartify
## Getting Started
### Installation
1. Download or clone this repository
2. Inside of the repository directory, run `npm install`
### Building
To build the files, run `npm build`.
### Configuring the server
To specify which port the server will listen on, assign the desired port number to the `process.env.PORT` environment variable or
create a `.env` file and assign the port number to the PORT variable there.
#### Configuring dotenv
If you wish to specify the port number in a .env file, do the following:
1. create a file in the root directory named `.env`.
2. in the `.env` file, specify the port number.

Example:
```
// .env file
PORT=YOUR_PORT_NUMBER_HERE
```
### Starting the server
To start the server, run `npm start`.

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
1. Create a file in the root directory named `.env`.
2. In the `.env` file, specify the port number & root.
3. Image uploads require an API key from Cloudinary. Sign up for a freeaccount [here](https://cloudinary.com/) and obtain an name, API key, and secret.

Example:
```
// .env file
PORT=YOUR_PORT_HERE
ROOT=http://127.0.0.1
CLOUD_NAME=YOUR_CLOUD_NAME_HERE
CLOUD_API_KEY=YOUR_CLOUD_API_KEY_HERE
CLOUD_API_SECRET=YOUR_CLOUD_API_SECRET
```
### Starting the server
To start the server, run `npm start`.

# Kartify
#react #redux #reacthooks #ecommerce #greenfield #css #frontend
## Overview
A front-end React app redesigning a multi-component product page on a retail web portal.
## Table of Contents
_Need to add links_
* [Description](#description)
* [Installation]
* [Usage]
* [Related Projects]
* [Team Members]

## Description
[](#description)
_A more detailed outline of the project. What does it do? Is there a high level list of features? If describing a project that has visual features, consider adding pictures or animations of the features and functionality in this section. See Adding Screen Captures below._

The Kartify product page contains many components of a modern e-commerce product page, with the following sections:
* [Product Overview](#overview)
* [Related Items](#related)
* [Your Outfit](#outfits)
* [Questions & Answers](#questions)
* [Reviews](#reviews)

![Kartify Product Page](https://user-images.githubusercontent.com/26628913/71313556-2a029b00-2432-11ea-8370-28f713f946b5.gif)

### Product Overview
[](#overview)
_Developed by [David Lam](https://github.com/davidlam296)_



### Related Items
[](#related)
_Developed by [Sebastian Coronel](https://github.com/scoronelhamilton)_



### Your Outfit
[](#outfits)
_Developed by [Sebastian Coronel](https://github.com/scoronelhamilton)_



### Questions & Answers
[](#questions)
_Developed by [Elaine Wong](https://github.com/lainermeister)_



### Reviews
[](#reviews)
_Developed by [Bryce Champaign](https://github.com/brycechampaign)_



## Installation
_How can another developer get your project up and running on their own? What dependencies are required? Are there environmental requirements? Be specific, and outline steps to take in order to get the project running._

Below are instructions on how to install the repo, build the files, configure the environment variables, and start the server.
1. Download or clone this repository
2. Inside of the repository directory, run `npm install`
### Building
To build the files, run `npm build`.
### Configuring the server
To specify which port the server will listen on, assign the desired port number to the `process.env.PORT` environment variable or
create a `.env` file and assign the port number to the PORT variable there.
### Configuring dotenv
1. Create a file in the root directory named `.env`.
2. In the `.env` file, specify the port number & root.
3. Image uploads require an API key from Cloudinary. Sign up for a free account [here](https://cloudinary.com/) and obtain an name, API key, and secret.
Example:
```.env
PORT=YOUR_PORT_HERE
ROOT=http://127.0.0.1
CLOUD_NAME=YOUR_CLOUD_NAME_HERE
CLOUD_API_KEY=YOUR_CLOUD_API_KEY_HERE
CLOUD_API_SECRET=YOUR_CLOUD_API_SECRET
```
### Starting the server
To start the server, run `npm start`. Now, navigate to http://localhost:3000/products/1

## Usage
_Further details on how the project is meant to be used may be helpful. For a library or framework, this section would outline how to use the library within another project (see socket.io  ). For a service that is meant to be used within a larger project architecture, instructions on how to integrate may be necessary (see node-statsD  )._

## Related Projects
_Links to other repositories that are related to the current one. Are there partner projects? Is there a newer version of this project elsewhere?_

## Team Members 
* [David Lam](https://github.com/davidlam296)
* [Sebastian Coronel](https://github.com/scoronelhamilton) 
* [Elaine Wong](https://github.com/lainermeister) 
* [Bryce Champaign](https://github.com/brycechampaign) 




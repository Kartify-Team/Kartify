# Kartify
#react #redux #reacthooks #ecommerce #greenfield #css #frontend
## Overview
A front-end React app redesigning a multi-component product page on a retail web portal.
## Table of Contents
_Need to add links_
* [Description](#description)
* [Installation](#running-the-project)
* [Usage](#usage)
* [Related Projects](#related-projects)
* [Team Members](#team-members)

## Description
The Kartify product page contains many components of a modern e-commerce product page, with the following sections:
* [Product Overview](#product-overview)
* [Related Products](#related-products)
* [My Outfit](#my-outfit)
* [Questions & Answers](#questions-&-answers)
* [Reviews](#reviews)

![Kartify Product Page](https://user-images.githubusercontent.com/26628913/71313556-2a029b00-2432-11ea-8370-28f713f946b5.gif)

Per business requirements, the [product page was styled](#styling) both in light and dark themes.

### Product Overview
_Developed by [David Lam](https://github.com/davidlam296)_

### Related Products
_Developed by [Sebastian Coronel](https://github.com/scoronelhamilton)_

![Related Products](https://user-images.githubusercontent.com/55328949/71314266-e7928b80-243c-11ea-8709-99085b36809d.gif)

This section shows a lis of products related to the main product. The ids of the products to show are determined server-side, but additional HTTP requests are required to get the information, cover image, and price of each related product.

The products are displayed in a finite carousel. If there are more than five related products, the user will be able to navigate the carousel by clicking the 'next' button. Once the last product in the carousel is diplayed, the arrow will disappear.

Each chard has a 'compare' button in the top-right corner that will open a modal that displays the features of the main product and the clicked product. The common features are shown in the same line to make comparison easier.

![Comparison Window](https://user-images.githubusercontent.com/55328949/71316076-09523980-2462-11ea-9080-121caf0b1ee5.gif)

Clicking anywhere else in the product card will redirect the user to the main page of that product.

### My Outfit
_Developed by [Sebastian Coronel](https://github.com/scoronelhamilton)_
 
![Save Outfit Local Storage](https://user-images.githubusercontent.com/55328949/71314017-4fdf6e00-2439-11ea-82dc-1c1a7abe6066.gif)

### Questions & Answers
_Developed by [Elaine Wong](https://github.com/lainermeister)_

Thw Questions & Answers are rendered for specific products based on an external API GET request. 

The first two questions & answers are displayed (sorted with Seller on top, then by helpfulness). Lazy loading functionality allows for "infinite scrolling" until a user gets to the end of the question list.

Users can mark questions & answers as "helpful" as well as "reporting" answers, and all these actions send PUT requests to the API.

Additionally, users can enter 3 or more characters to search for questions by keyword.

![Questions & Answers GIF 1](https://user-images.githubusercontent.com/26628913/71314491-422de680-2441-11ea-8376-04eec6b345c1.gif)

Users can add questions to specific product pages, and answers to specific questions, both which sends POST requests to the API. The "Add Question" and "Add Answer" forms conditionally render off the same components that validate upon submission.

The "Add Answer" form allows for users to upload up to 5 images of the product. This sends images to the [Cloudinary](https://cloudinary.com) API, which returns a list of URLs that we send to the external API when storing answers.

![Questions & Answers GIF 2](https://user-images.githubusercontent.com/26628913/71314476-f8dd9700-2440-11ea-93dd-8d6e6b7e6146.gif)

### Reviews
_Developed by [Bryce Champaign](https://github.com/brycechampaign)_

### Styling
We built color swapping functionality to allow users to flip between light and dark themes. The theme is set by default to the user's preferred setting, but the user can toggle back and forth using the theme swapping toggle.

![Kartify-Light-and-Dark](https://user-images.githubusercontent.com/26628913/71299541-b6a34f80-2385-11ea-915b-f23e98c78ffd.gif)

We created a [gist](https://gist.github.com/lainermeister/041fb9530e8c5b0a5b025911e4125527) on how to add this functionality onto any React app.

## Running the Project
The project is [deployed](http://ec2-18-223-99-176.us-east-2.compute.amazonaws.com/products/1) on a free-tier AWS server.

In addition, it can be run locally using the following instructions.

### Installation
1. Download or clone this repository
2. Inside of the repository directory, run `npm install`
### Building
To build the files, run `npm build`.
### Environment Configuration
1. To specify which port the server will listen on, assign the desired port number to the `process.env.PORT` environment variable or create a `.env` file and assign the port number to the PORT variable there.
2. Create a file in the root directory named `.env`.
3. In the `.env` file, specify the port number & root.
4. Image uploads require an API key from Cloudinary. Sign up for a free account [here](https://cloudinary.com/) and obtain an name, API key, and secret.
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




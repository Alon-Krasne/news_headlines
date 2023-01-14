# Overview
This project is a simple news headlines web application that allows users to view news articles from various sources and categories. The client-side application is built with React and the server-side is built with Node.js. Both the client and server are containerized using Docker and can be easily set up using Docker Compose.

## Installation
1. Install Docker and Docker Compose. Official Docker website link below:
    * [Docker](https://docs.docker.com/get-docker/)
    * [Docker Compose](https://docs.docker.com/compose/install/)
1. Clone this repository and navigate to the project directory.
1. Create a `.env` file in the root directory of the project with the following entry: `API_KEY=<your_news_api_key>`
1. Run `docker-compose build` in the root directory of the project to build the client and server containers.
1. Run `docker-compose up` in the root directory of the project to start application.

Open your web browser and navigate to http://localhost:3000 to view the application.

_Note: You will need an API key from News API to run the application. You can get one for free by signing up on their website._

## Additional information
* The client side is running on port 3000.
* This service is based on the [News API](https://newsapi.org/).

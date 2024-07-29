# E-commerce-backend

## Description
This project is a back end for an e-commerce website built using Express.js and Sequelize, allowing managers at an internet retail company to manage their products, categories, and tags.

## Technologies Used
- Express.js
- Sequelize
- PostgreSQL
- Dotenv

## Installation
To run this application locally, follow these steps:
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
    - `npm i` 
    - `npm init -y`
    - `npm i express`
    - `npm i sequelize`
    - `npm i pg`
    - `npm i dotenv`
       ## Note:
       - Ensure "package.json" is configured with the accurate attributes.
       - Use your DB credentials to access the environment is added to `.env` file in the root directory

3. run `psql`then enter your passcode
4. Run schema command:
    - `\i schema.sql`
    - `\q`
5. Run seed command:
    - `npm run seed`
6. Start the server by running: `npm start` or `node server.js`

## Usage
- Open Insomnia Core to test the API routes.
- Use GET, POST, PUT, and DELETE requests to interact with the categories, products, and tags routes.

## Application Image

## License
MIT

## Author
Alyssa Hanewinkel
# FOODELICIOUS

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies
- body-parser: 1.15.2
- dotenv: 2.0.0
- ejs: 2.4.1
- express: 4.17.1
- knex: 0.11.7
- knex-logger: 0.1.0
- morgan: 1.7.0
- node-sass-middleware: 0.9.8
- pg: 6.0.2
- twilio: 3.32

## Screenshots
!["Screenshot of Home Page"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Home_page.png)

!["Screenshot of Menu Page"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Menu_main.png)

!["Screenshot of Pizza Menu"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Menu_pizza.png)

!["Screenshot of Pasta Menu"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Menu_pasta.png)

!["Screenshot of Burger Menu"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Menu_burger.png)

!["Screenshot of Wings Menu"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Menu_wings.png)

!["Screenshot of Beverage Menu"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Menu_beverage.png)

!["Screenshot of Checkout Page"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Checkout_page.png)

!["Screenshot of Info_Page"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Info_page.png)

!["Screenshot of Info Page with Error"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Info_error.png)

!["Screenshot of Confirm Page"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Confirm_page.png)

!["Screenshot of Message Screenshot"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Message_screenshot.jpg)

!["Screenshot of Message Screenshot 2"](https://github.com/JingfZhang/midterm-project-food/blob/master/docs/Message_screenshot2.jpg)

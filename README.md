# Stock Buys Diary

# Walk-Through-Video

(https://www.youtube.com/watch?v=GG31Zjg6IGQ)

# Description

This is a Rails based project for my Stock Buys Diary application. This project is a way to keep track of all of your stock buys. You can also view the company associated with the stocks purchased. On a community page on the application you can view all of the companies users are buying stocks from.  

A user can sign up for the app and then log in and log out. The applicaiton is meant for many users to keep track of their own companies and stocks and see what other companies other users are adding. 

Once a user decides on a stock they want to buy they can record it in their stocks diary form above their recorded stock buys. Here they can keep track of the stock's name, price purchased at, number of the stock bought at the time, information about the stock, and the company the stock is associated with. The user can also delete the stock from the list. If the user needs to edit the stock they can flip the card the stock is on and edit the information about the stock on the front of the card. 

There is also a community companies list where a user can see what companies are popular to buy from. If a user creates a stock buy that has a company not yet in the community companies list, that company will be added to the list at the time of the creation of the stock. 

I made this project because I find finance exciting. My favorite aspect of this application is that users can share the companies they are buying from while still keeping their individual stock buys private. The collective power of communal investing on the web has shown immense power lately. Happy trading!


## Installation

1. Fork and clone this repo
2. CD into this from project and then in order to insall necessary gems run:

```bash
bundle install 
```
3. Make sure the database and migrations for the data base are running with:

```bash
rails db:create
rails db:migrate
```
4. Seed data to the database if you choose with:

```bash
rails db:seed
```

5. Then run the command below to start the server:

```bash
rails server
```

## In order to ge the front end running then follow these directions.

1. Navigate into the client folder:

```bash
cd client
```
2. Downloaed the npm dependencies

```bash
 npm install
```
3. Run the frontend development server

```bash
 npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# React-App-for-Flatiron-Project

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Configuration
Dependencies and all configuration is done in environment.rb. Your database is also set up here. DataMapper will use sqlite3 by default. By default the application uses the sqlite3-memory adapter (no configuration needed).

## Test Methods and Params found in the Controllers folder with 

```bash
bundle exec Rake Console
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

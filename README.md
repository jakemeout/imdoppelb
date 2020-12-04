# IMDoppelB

A small web application that allows a user to search for a movie title, view a carousel of movie titles from the search, and give that movie a thumbs up or thumbs down.

# Demo
![](IMDoppelBDemo.gif)



# Local Setup Instructions

## Clone the REPO
Navigate to a directory on your local machine and clone the repo - `git clone https://github.com/jakemeout/imdoppelb.git`

## Frontend Setup

1. Navigate to the imdoppelb-fe/ folder in your terminal and run the command `npm install`.
2. Get an API Key from themoviedb.org and setup .env file to store the key. Navigate to https://developers.themoviedb.org/3/getting-started/introductionAPI in your browser and request for an API key.
3. Create a file `touch .env` in the root directory of imdoppelb-fe/ to store the API key.
4. Add this variable to the .env file `M_API_KEY=[your key]`.

That's it! Now you can npm start and search a movie!



## Backend API Setup

1. Navigate to the imdoppelb-api/ folder in your terminal and run the command `npm install`.
2. If you do not have postgresql installed, please install it with homebrew https://www.postgresql.org/download/macosx/. Another resource to summarize this installation is here https://flaviocopes.com/postgres-how-to-install/.
3. Install ORM Sequelize CLI to help easily create a new db `npm install --save-dev sequelize-cli`
4. Run `sequelize init`, this will create a config json in the config folder. 
5. Navigate to the config.json and ensure the dialect is 'postgres', and the 'username' is correct. If you do not know the username/owner permissions for postgres, you can find out the user by running `psql postgres` then `\du+`. You can enter the role name as the username of the config file.
6. Run `sequelize db:create`
7. Run `sequelize db:migrate`

Hopefully you didn't run into any issues! Now you have the backend setup. `npm start` and you can start using the app!

Please follow up with any questions by emailing me at [Jhyde@me.com](mailto:jhyde@me.com)
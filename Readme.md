# Installation of this project

## Prerequisites

- NodeJS version 14.17.0 or higher.
- Npm version 6.14.13 or higher.
- Visual Studio Code or any other editor you like to use.

### Important dependencies
- React & React-dom version 17.0.2.
- React-router-dom version 6.2.1.
- Recharts version 2.1.8.


## How to install

### Use of the back-end API
- Create a folder anywhere you want in your computer.
- In that folder, clone the back-end API with the terminal instruction :
```
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```
- Install the packages or dependencies : `npm install`
- Run the back-end API : `npm run dev`
- The message "Magic happens on port 3000" will appear.

### Use of the front-end application
- In the same folder you created before, make a second clone with the front-end application :
```
git clone https://github.com/Jerome-Fromantin/JeromeFromantin_12_01022022.git
```
- Install the packages or dependencies : `npm install`
- Run the front-end application : `npm start`
- By default, it will want to use the port 3000. So, this message will appear :
>? Something is already running on port 3000.
>Would you like to run the app on another port instead? >> (Y/n)
- Press the key "y".
- The application will then run on "localhost:3001".

**But don't Forget !**

The process just above will only display the elements of the page that are identical for every user.

To access a user's data, you must add his id at the end of the url.
2 ids are accessible here, "12" and "18" so the final urls will be "localhost:3001/12" or "localhost:3001/18".

***Enjoy the visit !***
# My Meds

By pooling together users’ reviews of medicine in an openly accessible space, the My Meds web app aims to bridge the disconnect and enable people to take charge and make educated decisions regarding their own health. 

It is a website for people to share their experiences and leave reviews for medicine they have taken, as well as view ratings and first-hand testimonials for medication from other users of similar demographic background or medical history— think of it like a “Yelp” for medicine!


## Setting up:

* **Installing:** 
  * Install Node.js  https://nodejs.org/en/ 

* **Running locally:**
  1. In the command line, use `git clone` to clone the repository and run `npm install` to install the required packages for this project:
```bash
git clone https://github.com/chipduy/COMP523-myMeds.git
cd COMP523-myMeds
npm install
```

  2. Run `npm start` in the command line from inside of the project folder to start the web application
		* To make sure you are inside of the project folder run `cd COMP523-myMeds`
  

## Testing:

  1. Run `npm install` will automatically install the **React Testing Library** packages.
 
  2. Then, type `npm test` in the command line to run the tests


## Deployment:

  * This project is deployed using **Firebase Hosting**.
  * The process in detail 
    * https://firebase.google.com/docs/hosting/quickstart
  * To deploy an updated version of the web application, run the following in the command line:
    1. Make sure you are inside of the project folder by running `cd COMP523-myMeds` in the command line
    2. Type `firebase login` to login with our Firebase credentials
    3. Type `firebase init`
    4. Then type 'Y' in response to the question 'Are you ready to proceed?'
    5. Select 'Hosting' from the menu
    6. Then you will be asked a series of questions. Type in the following answers to those questions:
      * What do you want to use as your public directory? **build**
      * Configure as a single-page app (rewrite all urls to /index.html)? **Yes**
      * Set up automatic builds and deploys with GitHub? **No**
      * File build/index.html already exists. Overwrite? **Yes**
    7. Then, run `npm run build`.
    8. Finally, run `firebase deploy` to finish the deployment.


## Languages/Technologies used:

  * **Frontend**: ReactJS, React Bootstrap, Material UI (all using HTML, CSS, JavaScript as the languages)
  * **Backend**:  Node.js (using JavaScript as the language)
  * **Database**: Firebase Firestore
  * **Testing**:  React Testing Library, jest-dom for React Testing Library


## Directory Layout/Architecture:

```bash
├── .firebase/                     
├── public/                        # Output directory containing static files
├── src/                           # Application source code
│   ├── components/                # Contains files for individual components that don't not represent full pages (ReviewForm.jsx, NavbarContainer.jsx, etc.)
│   ├── contexts/                  # Context providers, specifically the AuthContext.jsx file.
│   ├── css/                       # CSS stylesheets
│   ├── helpers/                   # Contains files with helper/utility functions
│   ├── img/                       # Contains image files
│   ├── pages/                     # Contains files for component representing full pages/screens in the app (Home.jsx, MedPage.jsx, LogIn.jsx, Faq.jsx, etc.)
│   ├── tests/                     # Contains test files
│   ├── App.css                    # CSS stylesheet for the entire app (for example, where the website's background is set)
│   ├── App.js                     # Contains the route containers
│   ├── firebase.js                # Initializes and adds Firebase to this JavaScript web app
│   └── index.js                   # Route handler, or the client-side entry point into the screen e.g. ReactDOM.render(<App />, container)
├── .firebasesrc                   
├── firebase-debug.log             
├── firebase.json                  
├── jsconfig.json                  # Specifies the root files and the options for the features provided by the JavaScript language service.
├── package-lock.json              # Describes the exact dependency tree that was used in the team's original environment
├── package.json                   # The list of project dependencies + NPM scripts
└── yarn.lock                      # Describes the exact dependency tree that was used
```


## Authors:

* **Duy Nguyen** 

* **Shruti Gopalswamy** 

* **Sungdong Kim**

* **Usman Raja** 


## Client:

* **Nash Philbeck** 



# Food Delivery Website(Back end part)


installed: - npm install
             >express
             >mongoose (help us to conntect with data base)
             >jsonwebtoken (we create the authentication system)
             >bcrypt (we will incrypt the user data and store in data base)
             >cors (permission to connet our front end to connect with the backend)
             >dotenv (using this we can use the enviroment variable in the project)
             >body parser (using this we will parse the data commming through the user)
             >multer (usingt this we can create the imagr store system)
             >Stripe (we will add the payment gate ways on the web page)
             >validator (check if password or email id is valid or not)
             >nodemon (when we save our project server will be restarted)


code line:- 
npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon

To run, sever.js i have edited the script part in package.json to "nodemon server.js"

confifg Folder ->to store database congiguration
modules Folder->to stores mofules of our mongoDB database
MiddleWare Folder -> to store  middleware
controllers -> add logic for backend
routes
upload -> all images uploaded by the user
.env -> store all the enviroment variables

To test Api we will not use browser , here i am using thunder client

using mongodb

creating db.js in config

databse is connected

now models are created to store products in database (models -> foodModel)
creating food model


now creating APIs ,using that we can add the new food item in our database (controllers -> foodController)

creating a controller function to add food item, using this func i will create one route (routes ->foodRoutes)

post created (foodRouter.post in foodRouter) then we addd logic for addFood in controler

then checking apis through Thunder


now we see how the image is shown in front end












creating new file userController.js in controllers   ->   create login and signup
create new file userRoute.js in route                ->   create multiple route
create new file userModel.js in model                ->   where i will define the model of user 

wrote basic structure user model -> user Controntroller -> user Route -> chcek api
write the logic part for register user and login user in user Controller

now open front end folder to connect the login and register part






create cartController.js in controllers -> for shop cart functionality
create auth.js in middleware            ->when user send data, they will use token to authenticate them , to decode the token we will use the middleware
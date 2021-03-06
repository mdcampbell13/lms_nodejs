# lms_nodejs
Nodejs project based on client-side earlier project. Project is an example of a small business site with capability if reservations submitted to a database and email verifying reservations returned to the administrator and customer. This project has also been deployed as a functioning Heroku app at https://lms-nodejs.herokuapp.com/ using this Git repository.


This project meets the following requirements as stated by Code Louisville's JavaScript Project Requirments.
- Responsive through the use of Bootstrap framework and media queries
- Uploaded to GitHub repository with over 5 seperate commits
- Includes readme file with description of what project is and which 3 requirements are met

3+ requirements from feature list:
- Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app (This requirment is met through the order look-up function which retrieves a json object from a MongoDB database that is selected by the user and displayed in the order look-up pages when a look-up is requested for a specific order number which is actually the _id of the json object that it represents. Also has a cancel order button. Create, Read and Delete from CRUD functions are fulfilled)
- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX) (fetch is used in the movie roulette and weather forecast functions in the screen reservation page). Sendgrid API service is also used to send order notification emails to customer and administrator and cancellation emails to the administrator
- Create a form and save the values (on click of Submit button) to an external file 
You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted (Reservations from the reservation forms are saved as json objects to a MongoDB database. Verification can be provided by using the order look-up function or will be provided upon request)
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application (This is provided by the zipcode look-up on the home page)
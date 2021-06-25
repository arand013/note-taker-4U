// ALL Dependendcies
var express = require("express");

//Creates app variable to express functions
var app = express();

//Create port variable
var PORT = process.env.PORT || 3003;

//Middleware for json
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + './public'));
app.use(express.json()); 


//Routes
require("./routes/routes")(app);

// Listener
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
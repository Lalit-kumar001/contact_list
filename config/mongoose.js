//require the library
var mongoose=require('mongoose');

// connect to the database 
mongoose.connect('mongodb://localhost/contacts_list_db');


// aquire the connection (or this is to acess the database)
const db=mongoose.connection;

// error 
db.on('error',console.error.bind(console,'error in connection'));

//successfull
db.once('open',function(){
    console.log('successfully db running');
})


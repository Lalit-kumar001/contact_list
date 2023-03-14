const express=require('express');
const path=require('path');
const port=8000;
const db=require('./config/mongoose');
const Contact=require('./model/contact')
const app=express();

// var contactList=[
// {
//     name:'lalit',
//     phone:'123456789'
// }
// ,
// {
//     name:'lalit kumar',
//     phone:'124683789'

// }

// ]
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
// app.use(function(req,res,next){
//     console.log('mw1 is called' );
//     next();
// })

// app.use(function(req,res,next){
//     console.log('mw2 is called' );
//     next();

// })



app.get('/',function(req,res){
Contact.find({},function(err,contacts){
    if(err){
        console.log('error');
        return;

    }
    //contacts variable me sara data aa chuka hai mera
    return res.render('contacts_template',{
        contacts_List:contacts
    })
})


//    return res.render('contacts_template',{
//      contacts_List:contactList
//    })
})
app.get('/added_successfully',function(req,res){
    return res.render('added_successfully')
})

app.post('/new-contact',function(req,res){
    // contactList.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
if(err){
    console.log('error in creating contact');
    return ;
}
console.log('*******',newContact);
return res.redirect('/');
    })

    
})


app.get('/delete-contact/',function(req,res){
    console.log('delete');
let id=req.query.id;
Contact.findByIdAndDelete(id,function(err){
if(err){
    console.log('error is coming')
    return
}
return res.redirect('/');
})



// without database 

    // let phone=req.query.phone;
    // let index=contactList.findIndex((eachObject)=>{
    //     return eachObject.phone==phone;
    // })

    // contactList.splice(index,index+1);
    // return res.redirect('/');
})


app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return ;
    }
    console.log('server is running on port ',port)
})

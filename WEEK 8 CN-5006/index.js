mongoose = require('mongoose');
//app=express();
const MONGO_URI = 'mongodb://localhost:27017/week8';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true})
;const db= mongoose.connection;

db.on('error', function(err)
{console.log('Error occured during connection'+err)
    }
);

db.once('connected',function(){
    console.log(`connected to ${MONGO_URI}`);
});

//creating the scheme
const PersonScheme = new mongoose.Schema({ name: {
    type: String,required:true
},
age: Number, Gender:String,Salary:Number
});

// creating  model  named  as  modelname  with  collection  named  as  personCollection
 const person_doc = mongoose.model('modelname', PersonScheme, 'personcollection');
 //creating a single account
 const doc1 = new person_doc({ name: 'sujit',age:21,Gender:"male",Salary:4000}
);
//  adding  one  document  in  the  collection  
doc1
.save()
.then((doc1)=> {
    console.log("New Article Has been Added Into Your DataBase.",doc1);
})
.catch((err) => {
console.error(err);
});

//adding multiple documents
manypersons=[ { name: 'Rachana',age:18,Gender:"female",Salary:5000}
    ,{name:'zest',age:19,Gender:"female",Salary:6000}
    ,{name:'subarna',age:20,Gender:"fmale",Salary:4000}
    ,{name:'nanda',age:21,Gender:"female",Salary:7000}
    ]
    person_doc.insertMany(manypersons).then(function(){
        console.log("Data inserted") //success
    }).catch(function(error){
        console.log(error) //failure
    });

    //fetching the data use of find
    person_doc.find({}) //find all users
    .sort({Salary:1}) //sort ascending by firstname
    .select('name Salary age')//Name and Salary only
    .limit(15) //limit to 10 items
    .exec()    //execute the query
    .then(docs => { 
     console.log("showing multiple documents")
     docs.forEach(function(Doc) {
        console.log(Doc.age,Doc.name);
     })
    }) 
    .catch(err => {
        console.error(err)
    })  
    
//running the command for which gender=female and age is greater than given number.
    var givenage=25
    person_doc.find({Gender:'Feamle',age:{$gte:givenage}})
    //find all users
    .sort({Salary:1}) //sort ascending by firstname
    .select('name Salary age')//Name and Salary only
    .limit(15) //limit to 10 items
    .exec()    //execute the query
    .then(docs => {
        console.log("showingagegreaterthan25",givenage)
        docs.forEach(function(Doc) {
            console.log(Doc.age.Doc.name);
        })
    })
    .catch(err => {
        console.error(err)})

//counting all the documents
        person_doc.countDocuments().exec()
        .then(count=>{

            console.log("Total documents count:",count)
        }) .catch(err => {
            console.error(err)
        })    
        
//deleting the cocuments for a given criteria
        person_doc.deleteMany({ age: {$gte:25}})
        .exec()
        .then(docs=>{
            console.log('deleted documents are:',docs);
        })
        .catch(function(error){
            console.log(error);
        });

//updating all the document
        person_doc.updateMany({ Gender:"Female"},{Salary:5000})
        .exec()
        .then(docs=>{
            console.log("update")
            console.log(docs); //success
        })
        .catch(function(error){
            console.log(error);//failure
        });
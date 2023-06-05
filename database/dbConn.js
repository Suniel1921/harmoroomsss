const mongoose = require ('mongoose');

mongoose.connect(process.env.dbConn)
.then(()=>{
    console.log(`Database Connected !`);
})
.catch((error)=>{
    console.log(`Database Not Connected ! ${error}`)
})
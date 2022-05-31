let express = require('express')

let app = express();

app.use(express.static(__dirname + '/dist/school_form'));

app.get('/*',(req , resp)=>{
    reso.sendFile(__dirname+'/dist/school_form/index.html');
})

app.listen(process.env.PORT ||8080)
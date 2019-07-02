const express = require('express');//include-vame edin vunshen express

const app = express();//iniciirame go 

app.use(express.static('./public')); //serviraj vsi4kite papki v public papkata - kakvoto slojish tam neka userite da mogat da go dostypvat

app.listen(3000, () => console.log('Listening...'));//3000 e port//startiraj se i slushaj

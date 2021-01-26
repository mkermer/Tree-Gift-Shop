var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "abce8310c467f2",
        pass: "414ec886c4c596"
    }
};

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var lastname = req.body.lastname
    var email = req.body.email 
    var message = req.body.message 
    var content = `name: ${name} \n lastname: ${lastname} \n email: ${email} \n message: ${message} ` 

    var mail = {
        from: name,
        to: '1ad230729f-399b7b@inbox.mailtrap.io',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)

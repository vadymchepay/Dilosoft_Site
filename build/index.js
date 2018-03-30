const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Body Parser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//Static folder
app.use('/', express.static(path.join(__dirname, '/')));
app.get('/', (req, res) => {
    res.render('index')
});
app.post('/send', (req, res) => {

    const name = req.body.user_name;
    const mail = req.body.user_email;
    const phone = req.body.user_phone;
    const mesage = req.body.MESSAGE;
    
    const output = '<p>У вас нове повідомлення</p><h3>Контактні дані</h3><ul><li>Імя: ' + name + '</li><li>E - mail: ' +mail + '</li><li>Телефон: ' + phone + '</li></ul><h3>Повідомлення</h3><p>' + mesage + '</p>';
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.ukr.net'
        , port: 465
        , secure: true,
        auth: {
            user: 'dilosoft_mailer@ukr.net', 
            pass: 'Vfiekmrf2018' 
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Dilosoft_site" <dilosoft_mailer@ukr.net>', 
        to: 'sales@dilosoft.com, vadym.bychkov@dilosoft.com', 
        subject: 'Повідомлення з сайту', 
        text: 'Hello world?', 
        html: output
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('index', {msg: 'Повідомлення відправлено'});

    });

    
    
});
app.listen(3000, () => console.log('Server started...'));
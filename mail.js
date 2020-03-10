const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')


const auth = {
    auth: {
        api_key: '9b6278d77466c15433c33dea7653e3fa-ee13fadb-67636893',
        domain: 'sandboxedfd9235685f40a8b20676cea2c59831.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))


const sendMail = (email,subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'raigoza.frankie@gmail.com',
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, function(err,data){
        if (err) {
            cb(err,null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail
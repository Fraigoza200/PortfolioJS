const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.SECRET,
        domain: process.env.HOST
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))


const sendMail = (email,subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'frankieraigoza@gmail.com',
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, (err,data) =>{
        if (err) {
            cb(err,null)
        } else {
            cb(data)
        }
    })
}

module.exports = sendMail
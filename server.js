const express = require('express')
const sendMail = require('./mail')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/email', (req,res) => {

    const { subject, email, text } = req.body
    console.log('Data:', req.body)

    sendMail(email, subject, text, function(err,data){
        if(err) {
            res.sendStatus(500).json({message: "Internal Error"})
        } else {
            res.json({message: 'Email sent!!'})
        }
    })
})

app.listen(process.env.PORT || 3001)
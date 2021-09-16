const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const app = express()
const port = process.env.PORT || 3001

const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
hbs.registerPartials(partialsPath)
app.set('views', viewPath)


app.use(express.static(publicDirectory))

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

//render homepage
app.get('',(req, res) =>{
    res.render('index',{
        title: 'Weather App',
        name: 'Carlos Sibalatani'
    })
})
app.get('/weather', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*")
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode.geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        forecast.forecast(latitude,longitude, (error, {weatherData}) => {
            if (error) {
                return res.send({
                })
            }
            res.send({
                location,
                weatherData
            })
        })
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About me',
        name: 'Carlos Sibalatani'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help',
        name: 'Carlos Sibalatani',
        message: 'Contact sibalatanics@outlook.com'
    })
})

app.get('/help/*',(req, res) => {
    res.render('404',{
        title: "404 - Page not found",
        message: "Sorry, an error has occured, Requested Help page not found!",
        name: 'Carlos Sibalatani'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title: '404 - Page not found',
        message: 'Sorry, an error has occured, Requested page not found!',
        name: 'Carlos Sibalatani'
    })
})
app.listen(port, () =>{
    console.log('Server is up on port '+port)
})
const express = require ('express')
const {twig}= require ('twig') /*เป็นตัวเก้ับตัวเเปร (const) ตัวเเปรชื่อ express  */

const app =  express() /*เป็นการเรียกฟังชัน*/

app.set('view engine', 'twig')

const homeController =  require('./controllers/home.controller')
const newsController =  require('./controllers/news.controller')


app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))


  /*รับค่า / เข้ามา เเล้วส่งคพว่า Hello*/

app.listen(8000, function(err){
	console.log('Server is running on port 8000')
}) 
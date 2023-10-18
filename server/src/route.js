const UserController = require('./controllers/UserController')
const SpeakerController = require('./controllers/SpeakerController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)//สร้าง
    
    app.put('/user/:userId', UserController.put)//แก้ไข
    
    app.delete('/user/:userId', UserController.remove)//ลบ
    
    app.get('/user/:userId', UserController.show)//ดูผู้ใช้
    
    app.get('/users', isAuthenController, UserController.index)//ดูทั้งหมด

    //camera
    app.post('/speaker', SpeakerController.create)
    
    app.put('/speaker/:speakerId', SpeakerController.put)
    
    app.delete('/speaker/:speakerId', SpeakerController.remove)
    
    app.get('/speaker/:speakerId', SpeakerController.show)
    
    app.get('/speakers', SpeakerController.index)

    //login
    app.post('/login', UserAuthenController.login)
}

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


exports.Avatar = () => {
    
    ('/avatar', upload.single('avatar'), function (req, res) {
        const { filename, size } = req.file
        
        return res.render('avatar', { image: `/uploads/${filename}`, size })
    })
}
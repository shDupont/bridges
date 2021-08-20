var multer = require('multer')

var armazenamento = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, './uploads/')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname)
        }
    }
)

var upload = multer({storage: armazenamento})

module.exports = upload;
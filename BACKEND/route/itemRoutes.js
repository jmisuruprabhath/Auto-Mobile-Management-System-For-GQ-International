const express =require('express')
const router = express.Router()
const {getAllItems,getItemById} = require('../controller/ItemsControllers')

router.get('/items',getAllItems)

router.get('/items/:id',getItemById)

module.exports = router;
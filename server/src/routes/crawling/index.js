const express = require('express')
const KoDic = require('../../../models/KorDic')
const CrawlingRouter = express.Router()


CrawlingRouter.route('/').get(async(req,res)=>{
    const dictionary= await KoDic.find()
    res.json({status:200,dictionary})
})

module.exports = CrawlingRouter
const express = require('express')
const CrawlingRouter = require('./crawling')
const router = express.Router()
const crawling = require('./crawling')
const KoDic = require("../../models/KorDic")

router.use('/crawling',crawling)

module.exports = router
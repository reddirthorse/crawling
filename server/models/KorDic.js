const mongoose = require('mongoose')

const KoDicSchema = mongoose.Schema({
    순서:{type:String},
    링크:{type:String},
    이름:{type:String},
    품사:{type:String},
    한자:{type:String},
    설명:{type:String}
})

const KoDic = mongoose.model('KoDic',KoDicSchema, 'kor_dic_coll')
module.exports = KoDic
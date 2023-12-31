/* cuando se crea un nuevo modelo se crea un nuevo documento dentro de la base de datos */
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FacturasSchema = Schema({
        facturasId: Number,
        client: String,
        fechaReg: String,
        fechaRegHora_db: String,
        fechaRegDia_db: String,
        pushMoney: String,
        nomAlistador: String,
        nomChequeador: String,
        fechaAlistado: String,
        fechaChequeo: String,
        numMesa: String,
        horaChequeo: String,
        
});

module.exports = mongoose.model('facturas', FacturasSchema) // "datas" es el nbombre de la coleccin donde se guarda la info //
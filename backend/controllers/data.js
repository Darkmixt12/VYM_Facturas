'use strict';
/* importar moment para poder usar las fechas */
const moment = require('moment/moment');
/* controladores podriamos decir que es la funcionalidad de la web GET, POST, DELETE, UPDATE ETC ETC ETC */
var Facturas = require('../models/facturas') /* importamos el modelo  que es una referencia a la base de datos */;

var controller = {
    /* METODO PARA GUARDAR DATOS EN LA BASE DE DATOS */
    facturaSaveCheck: async function (req, res) {
        var factura = new Facturas();
        var params = req.body;
        let hora = moment().format('LT');
        let dia = moment().format('L');

        factura.facturasId = params.facturasId;
        factura.client = params.client;
        factura.fechaReg = params.fechaReg;
        factura.fechaRegHora_db = hora;
        factura.fechaRegDia_db = dia;
        factura.pushMoney = params.pushMoney
        factura.nomAlistador = params.nomAlistador;
        factura.nomChequeador = params.nomChequeador;
        factura.fechaAlistado = params.fechaAlistado;
        factura.fechaChequeo = params.fechaChequeo;
        factura.numMesa = params.numMesa;
        factura.horaChequeo = params.horaChequeo

        let resultFacturas = await Facturas.find({facturasId: params.facturasId});
        if(resultFacturas.length > 0) {
            return res.status(500).send({message: 'Numero de factura ya utilizado'})
        }
        
        await factura.save();
        console.log(factura);
        return res.status(200).send(factura)
    },

    /* METODO PARA MOSTRAR DATOS DE LA BASE DE DATOS */
    getFacturasInfo: async function (req, res) {
        const {id} = req.params /* trae la id de la base de datos */
    
        try {
        let ListFactura = await Facturas.findById(id);
        console.log(id);
            return res.status(200).send({ListFactura})
        }catch(err) {
            return res.status(500).send({message: 'Factura no encontrada'})
        }

    },
    

    /* LANZAR UN LISTADO DE TODAS LAS FACTURAS EN LA BASE DE DATOS */
    getFacturaList: async function(req, res) {
        try{
        let facturasInfo = await Facturas.find({}).sort('facturasId');
            return res.status(200).send({facturasInfo})
        }catch(err) {
            return res.status(500).send({message: 'Error al conectar con la base de'})
        }
        
    },
    /* ACTUALIZAR DATOS DE LA BASE DE DATOS */
    updateFactura: async function (req, res){
        let facturaId = req.params.id;
        let update = req.body;
        console.log(req.params.facturaId)
        try{
            let facturaUpdated = await Facturas.findByIdAndUpdate(facturaId, update, {new:true}).exec();
            return res.status(200).send({factura: facturaUpdated})
        }catch(err){
            return res.status(500).send({message: 'Ninguna factura esta relacionada a ese ID'})
        }
        
    },
    /* ELIMINAR FACTURAS DE LA BASE DE DATOS */
    deletedFactura: async function (req, res) {
        let facturaId = req.params.id;

        try{
        let facturasDeleted = await Facturas.findByIdAndRemove(facturaId).exec();
            return res.status(200).send({factura: facturasDeleted})
        }catch(err){
                res.status(500).send({message: err.message})
            }
    
    }

}

module.exports = controller;



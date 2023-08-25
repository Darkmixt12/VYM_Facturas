export class Factura {
    constructor(
        public _id: String,
        public facturasId: number,
        public client: String,
        public fechaReg: String,
        public pushMoney: String,
        public nomAlistador: String | null,
        public nomChequeador: String | null,
        public fechaAlistado: String,
        public fechaChequeo: String,
        public numMesa: String,
        public horaChequeo: String,
    ){}
}


export class Informe {
    constructor(
        public tituloInforme: string,
        public sedeInforme: string,
        public fechaInforme: string,
        public objetivoGeneral: Array<string>,
        public objEspec: Array<string>
    ){}
}
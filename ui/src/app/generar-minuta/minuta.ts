export class Minuta {
    constructor(
        public tituloMinuta: string,
        public asuntoMinuta: string,
        public fechaMinuta: string,
        public horaInicioMinuta: string,
        public horaTerminoMinuta: string,
        public selectorSede: string,
        public nombreAsistente: string,
        public correoAsistente: string,
        public selectorCargo: string,
        public rdAsistencia: string,
        public justificacion: string,
        public objEspec: string,
        public compromisos: string,
        public responsableComp: string,
        public fechaLimite: string,
        public rdCumplimiento: string
    ) { }
}
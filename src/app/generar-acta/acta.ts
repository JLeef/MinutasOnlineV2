export class Acta {
    constructor(
        //información basica
        public tituloActa: string,
        public numeroActa: string,
        public fechaActa: string,
        public horaInicioActa:string ,
        public horaTerminoActa:string ,
        //public selectorSede:string,
        //asistentes
        public nombreAsistente: string,
        public correoAsistente: string,
       // public selectorCargo: string,
        //public rdAsistencia: string,
        public justificacion: string,
        //agenda
        public orden: string,
        public responsable: string,
        public correo: string,
        //public rdAbordado : string,
        public tiempoDisponible: string,
        //Compromisos
        public compromiso: string,
        public responsableComp: string,
        public fechaLimite: string
        //public rdCumplimiento: string
    ){}
}
//Clase normal
class Video {
    titulo:string;
    longutiud: number;
    constructor(titulo: string, longutiud: number){
        this.titulo= titulo;
        this.longutiud=longutiud;
        console.log(titulo);
    }
    printTitle() :string {
        return this.titulo;
    }
    printLongitud() : number{
        return this.longutiud;
    }
    play(){
        console.log("Playing");
    }
    stop(){
        console.log("Stopping");
    }
}
//Clases con herencia
class Pelicula extends Video{
    constructor(titulo: string, longutiud: number){
        super(titulo, longutiud);
        console.log("Comenzando la Pelicula");
    }
    play(){
        super.play();
        console.log("Playing the movie")
    }
    stop() {
        super.stop();
        console.log("Stopping the movie")
    }
}
//Chequeo de tipo de un objeto obj
function isString(obj: number | string): obj is string {
    return typeof obj === 'string';
}

let miVideo: Video = new Video("Hola", 10);
let miPeli: Pelicula = new Pelicula("Hola y adios", 20);

miPeli.play();
miPeli.stop();

//Decoradores
function Decorador(cls : Function) {
    console.log("Buenos dias, soy el Decorador")
}
@Decorador
class Speaker{

}

//Genericos
function genericReceptor<T>(obj :T) : T {
    return obj;
}
let cadena = genericReceptor<string>("Hola");
let numero = genericReceptor<number>(10);

//Genericos parte 2
class Printer<T>{
    printAll(arr :T[]){
        console.log(arr.length)
    }
}
let printer: Printer<number> = new Printer();
printer.printAll([1,2]);
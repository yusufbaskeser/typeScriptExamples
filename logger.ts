interface Logger{


    log(message: string):void


}

class ConsoleLogger implements Logger{
    log(message: string): void {
        console.log(`${message}`)
    }
}

class FileLogger implements Logger{
    log(message: string): void {
        console.log(`Dosyaya yazılıyor ${message}`)
    }
}


const l = new ConsoleLogger();
const ı = new FileLogger();

l.log("bu benim mesajım");
ı.log("merhabalar");
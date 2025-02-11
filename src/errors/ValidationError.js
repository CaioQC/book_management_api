import BadRequest from "./BadRequest.js";

class ValidationError extends BadRequest{
    constructor(erro){
        const menssagensErro = Object.values(erro.errors).map(erro => erro.message).join("; ");
        
        super(`Os seguintes erros foram encontrados: ${menssagensErro}`);
    }
    
}

export default ValidationError;
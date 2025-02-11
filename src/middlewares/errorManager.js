import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import BadRequest from "../errors/BadRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorManager(erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        new BadRequest().sendResponse(res);
    }

    else if(erro instanceof mongoose.Error.ValidationError){
        new ValidationError(erro).sendResponse(res);
    }

    else if(erro instanceof NotFound){
        erro.sendResponse(res);
    }

    else{
        new BaseError().sendResponse(res); 
    }
}

export default errorManager;
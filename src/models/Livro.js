import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {
            type: String,
            required: [true, "O título do livro é obrigatório"]
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "autores",
            required: [true, "O nome do autor é obrigatório"]
        },
        editora: {
            type: String,
            required: [true, "O nome da editora é obrigatório"]
        },
        numeroPaginas: {
            type: Number,
            validate: {
                validator : (valor)=>{
                return valor >= 10 && valor <= 5000
                },
                message : "O número de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}"
            }
        }
    }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;
import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ClienteDto {

    @IsNotBlank({message: 'Campo Data é obrigatório'})
    data_cad?: Date;

    @IsNotBlank({message: 'Campo NOME é obrigatório'})
    nome?: string;

    @IsNotBlank({message: 'Campo CPF é obrigatório'})
    cpf?: string;

    @IsNotBlank({message: 'Campo E-MAIL é obrigatório'})
    email?: string;

    @IsNotBlank({message: 'Campo WHATSAPP é obrigatório'})
    whatsapp?: string;
        
    @IsNotBlank({message: 'Campo ENDEREÇO é obrigatório'})
    endereco?: string;

    @IsNotBlank({message: 'Campo NÚMERO é obrigatório'})
    numero?: string;
    
    @IsNotBlank({message: 'Campo BAIRRO é obrigatório'})
    bairro?: string;
    
    @IsNotBlank({message: 'Campo CIDADE é obrigatório'})
    cidade?: string;
    
    @IsNotBlank({message: 'Campo UF é obrigatório'})
    uf?: string;
    
    @IsNotBlank({message: 'Campo CEP é obrigatório'})
    cep?: string;

}
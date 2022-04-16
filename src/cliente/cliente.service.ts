import { ClienteDto } from './dto/cliente.dto';
import { ClienteRepository } from './cliente.repository';
import { ClienteEntity } from './cliente.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class ClienteService {

    constructor(
        @InjectRepository(ClienteEntity)
        private clienteRepository: ClienteRepository
    ) { }

    async getAll(): Promise<ClienteEntity[]> {
        const list = await this.clienteRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('Não temos dados ainda'));
        }
        return list;
    }

    async findById(id: number): Promise<ClienteEntity> {
        const cliente = await this.clienteRepository.findOne(id);
        if (!cliente) {
            throw new NotFoundException(new MessageDto('O Registro do Cliente não existe para este ID'));
        }
        return cliente;
    }

    async findByCpf(cpf: string): Promise<ClienteEntity> {
        const cliente = await this.clienteRepository.findOne({ cpf: cpf });
        return cliente;
    }

    async create(dto: ClienteDto): Promise<any> {
        const exists = await this.findByCpf(dto.cpf);
        if (exists) throw new BadRequestException(new MessageDto('Um Cliente com este CPF já existe na base.'));
        const cliente = this.clienteRepository.create(dto);
        await this.clienteRepository.save(cliente);
        return new MessageDto(`cliente ${cliente.nome} criado`);
    }

    async update(id: number, dto: ClienteDto): Promise<any> {
        const cliente = await this.findById(id);
        if (!cliente)
            throw new NotFoundException(new MessageDto('não existe'));
        const exists = await this.findByCpf(dto.cpf);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('Um Cliente com este CPF já existe na base.'));
        
        dto.data_cad ? cliente.data_cad = dto.data_cad : cliente.data_cad = cliente.data_cad;
        dto.nome ? cliente.nome = dto.nome : cliente.nome = cliente.nome;
        dto.cpf ? cliente.cpf = dto.cpf : cliente.cpf = cliente.cpf;
        dto.email ? cliente.email = dto.email : cliente.email = cliente.email;
        dto.whatsapp ? cliente.whatsapp = dto.whatsapp : cliente.whatsapp = cliente.whatsapp;
        dto.endereco ? cliente.endereco = dto.endereco : cliente.endereco = cliente.endereco;
        dto.numero ? cliente.numero = dto.numero : cliente.numero = cliente.numero;
        dto.bairro ? cliente.bairro = dto.bairro : cliente.bairro = cliente.bairro;
        dto.cidade ? cliente.cidade = dto.cidade : cliente.cidade = cliente.cidade;
        dto.uf ? cliente.uf = dto.uf : cliente.uf = cliente.uf;
        dto.cep ? cliente.cep = dto.cep : cliente.cep = cliente.cep;

        await this.clienteRepository.save(cliente);
        return new MessageDto(`cliente ${cliente.nome} atualizado com sucesso!`);
    }

    async delete(id: number): Promise<any> {
        const cliente = await this.findById(id);
        await this.clienteRepository.delete(cliente);
        return new MessageDto(`cliente ${cliente.nome} excluído com sucesso!`);
    }
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cliente'})
export class ClienteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date', nullable: false})
    data_cad: Date;

    @Column({type: 'varchar', length: 50, nullable: false})
    nome: string;

    @Column({type: 'varchar', length: 15, nullable: false, unique: true}) 
    cpf: string;

    @Column({type: 'varchar', length: 255, nullable: false}) 
    email: string;

    @Column({type: 'varchar', length: 15, nullable: false}) 
    whatsapp: string;

    @Column({type: 'varchar', length: 30, nullable: false,}) 
    endereco: string;

    @Column({type: 'varchar', length: 4, nullable: false}) 
    numero: string;

    @Column({type: 'varchar', length: 30, nullable: false}) 
    bairro: string;

    @Column({type: 'varchar', length: 50, nullable: false}) 
    cidade: string;

    @Column({type: 'varchar', length: 2, nullable: false}) 
    uf: string;

    @Column({type: 'varchar', length: 10, nullable: false}) 
    cep: string;
}
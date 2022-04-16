import { ClienteEntity } from './cliente.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ClienteEntity)
export class ClienteRepository extends Repository<ClienteEntity> {}
import { ClienteEntity } from './cliente.entity';
import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ClienteEntity])],
    providers: [ClienteService],
    controllers: [ClienteController]
})
export class ClienteModule { }

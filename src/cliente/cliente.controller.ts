import { ClienteService } from './cliente.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { ClienteDto } from './dto/cliente.dto';

@Controller('cliente')
export class ClienteController {

    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    async getAll() {
        return await this.clienteService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.clienteService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: ClienteDto) {
        return await this.clienteService.create(dto);
    }
    
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ClienteDto) {
        return await this.clienteService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.clienteService.delete(id)
    }
}

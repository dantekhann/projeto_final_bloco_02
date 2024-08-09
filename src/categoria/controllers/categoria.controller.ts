import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { Categoria } from '../entities/Categoria.entity';
import { CategoriaService } from '../services/categoria.services';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria')
@Controller("/categorias")
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.CategoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.CategoriaService.findById(id);
  }

  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK)
  findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
    return this.CategoriaService.findByTipo(tipo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Categoria: Categoria): Promise<Categoria> {
    return this.CategoriaService.create(Categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Categoria: Categoria): Promise<Categoria> {
    return this.CategoriaService.update(Categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.CategoriaService.delete(id);
  }
}

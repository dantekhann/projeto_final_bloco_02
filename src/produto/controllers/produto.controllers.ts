
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Body,
  HttpException,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.services';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.ProdutoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  nomefindByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.ProdutoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Produto: Produto): Promise<Produto> {
    return this.ProdutoService.create(Produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Produto: Produto): Promise<Produto> {
    return this.ProdutoService.update(Produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ProdutoService.delete(id);
  }
}

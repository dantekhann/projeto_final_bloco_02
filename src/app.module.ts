import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entities/produto.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_crud_farmacia',
      entities: [Categoria, Produto],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriaModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

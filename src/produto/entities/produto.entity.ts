import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_produtos' })
export class Produto {
  static id: any;
  [x: string]: any;
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ type: 'int' })
  quantidade: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @ApiProperty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @IsNotEmpty()
  @ApiProperty()
  @Column()
  foto: string;

  @ApiProperty()
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
    
  })
  categoria: Categoria;
}

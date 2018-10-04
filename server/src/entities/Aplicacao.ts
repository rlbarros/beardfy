import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aplicacao {
  @PrimaryGeneratedColumn()
  public idAplicacao: number;

  @Column()
  public nome: string;

  @Column()
  public chaveAutorizacao: string;
}

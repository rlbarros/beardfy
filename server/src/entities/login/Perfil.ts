import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Aplicacao } from './Aplicacao';

@Entity({
  name: 'perfis',
  schema: 'login' 
 })
export class Perfil {
  @PrimaryGeneratedColumn()
  public idPerfil: number;

  @ManyToOne(type => Aplicacao, aplicacao => aplicacao.perfis)
  public aplicacao: Aplicacao;

  @Column()
  public titulo: string;

  @Column()
  public descricao: string;
}

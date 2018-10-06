import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Aplicacao } from './Aplicacao';

@Entity({
  name: 'permissoes',
  schema: 'login' 
 })
export class Permissao {
  @PrimaryGeneratedColumn()
  public idPermissao: number;

  @OneToOne(type => Permissao, permissao => permissao.permissaoPai)
  @JoinColumn({name: "idPermissaoPai"})
  public permissaoPai: Permissao

  @ManyToOne(type => Aplicacao, aplicacao => aplicacao.perfis)
  @JoinColumn({name: "idAplicacao"})
  public aplicacao: Aplicacao;

  @Column()
  public titulo: string;

  @Column()
  public descricao: string;

  @Column()
  public ativa: boolean;
}

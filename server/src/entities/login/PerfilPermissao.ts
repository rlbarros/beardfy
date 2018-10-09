import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Perfil } from './Perfil';
import { Permissao } from './Permissao';

@Entity({
  name: 'permissoes',
  schema: 'login'
 })
export class PerfilPermissao {

  public init(idPerfil:number, idPermissao: number) :void {
    this.idPerfil = idPerfil;
    this.idPermissao = idPermissao;
  }

  @PrimaryColumn()
  public idPerfil: number;

  @PrimaryColumn()
  public idPermissao: number;
}

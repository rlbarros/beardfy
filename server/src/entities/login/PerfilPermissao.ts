import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Perfil } from './Perfil';
import { Permissao } from './Permissao';

@Entity({
  name: 'perfilpermissao',
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

  @Column({ nullable: false, type: "simple-array"})
  public tipo: string[];
}

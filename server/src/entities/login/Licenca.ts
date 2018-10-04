import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Licenca {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public cnpjCpf: string;

  @Column()
  public dataCadastro: Date;

  @Column()
  public validoAte: Date;
}

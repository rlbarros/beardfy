import { Licenca } from '../../entities/login/Licenca';
import { DatabaseProvider } from '../../database';

export class LicencaService {
  public async getById(id: number): Promise<Licenca> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Licenca).findOne(id);
  }

  public async create(licenca: Licenca): Promise<Licenca> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Licenca).save(licenca);
  }

  public async list(): Promise<Licenca[]> {
    const connection = await DatabaseProvider.getConnection();
    return await connection.getRepository(Licenca).find();
  }

  public async update(licenca: Licenca): Promise<Licenca> {
    const connection = await DatabaseProvider.getConnection();
    const repo = connection.getRepository(Licenca);
    const entity = await repo.findOne(licenca.id);
    entity.cnpjCpf = licenca.cnpjCpf;
    entity.dataCadastro = licenca.dataCadastro;
    entity.validoAte = licenca.validoAte;
    return await repo.save(entity);
  }

  public async delete(id: number): Promise<Licenca> {
    const connection = await DatabaseProvider.getConnection();
    const entity = await connection.getRepository(Licenca).findOne(id);
    return await connection.getRepository(Licenca).remove(entity);
  }
}

export const licencaService = new LicencaService();

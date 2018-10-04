import { Controller } from '../Controller';
import { HttpServer } from '../../server/HttpServer';
import { Request, Response } from 'restify';
import { licencaService } from '../../services/login/licencaService';

export class LicencaController implements Controller {
  initialize(httpServer: HttpServer): void {
    httpServer.get('/login/licencas', this.list.bind(this));
    httpServer.get('/login/licenca/:id', this.getById.bind(this));
    httpServer.post('/login/licenca', this.create.bind(this));
    httpServer.put('/login/licenca/:id', this.update.bind(this));
    httpServer.del('/login/licenca/:id', this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await licencaService.list());
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const licenca = await licencaService.getById(req.params.id);
    res.send(licenca ? 200 : 404, licenca);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await licencaService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    res.send(await licencaService.update(req.body));
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(await licencaService.delete(req.params.id));
  }
}

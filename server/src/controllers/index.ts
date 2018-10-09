// root
import { PingController } from "./PingController";

// Login
import { LicencaController } from "./login/LicencaController";
import { AplicacaoController } from "./login/AplicacaoController";
import { PerfilController } from "./login/PerfilController";
import { PermissaoController } from "./login/PermissaoController";
import { PerfilPermissaoController } from "./login/PerfilPermissaoController";

export const Controllers = [
  new PingController(),
  new LicencaController(),
  new AplicacaoController(),
  new PerfilController(),
  new PermissaoController(),
  new PerfilPermissaoController()
];

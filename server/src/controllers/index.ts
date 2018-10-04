// root
import { PingController } from "./PingController";

// Login
import { LicencaController } from "./login/LicencaController";
import { AplicacaoController } from "./login/AplicacaoController";

export const Controllers = [
  new PingController(),
  new LicencaController(),
  new AplicacaoController()
];

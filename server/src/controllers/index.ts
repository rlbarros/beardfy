// root
import { PingController } from "./PingController";

// Login
import { LicencaController } from "./login/LicencaController";

export const Controllers = [
  new PingController(),
  new LicencaController()
];

export class AppSettings {
  name: string;
  dateCreation: string;
  authors: string;
  description: string;
  privacyPolicyTitle: string;
  privacyPolicy: string;
  errorTitle: string;
  errorMessage: string;
  registerTitle: string;
  registerMessage: string;
  correctUpdatePersonalInfoTitle: string;
  correctUpdatePersonalInfoMessage: string;

  constructor() {
    // General information
    this.name = 'Schedule';
    this.dateCreation = '2017';
    this.authors = 'Juan Manuel Guerrero Hernández & Juan Carlos Estebes González';
    this.description = 'Esta plataforma fue creada sólo para el uso interno del ' +
    'Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Querétaro, se prohibe ' +
    'todo uso no autorizado.';
    // Privacy policy
    this.privacyPolicyTitle = 'Términos de privacidad';
    this.privacyPolicy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Pellentesque nisl nunc, placerat vitae porttitor at, fringilla et sapien. Etiam mi erat,' +
    ' blandit sed posuere vel, convallis eget lorem. Suspendisse ac lectus libero. Aliquam erat' +
    ' volutpat. In maximus tellus et nunc semper sodales. Pellentesque habitant morbi tristique' +
    ' senectus et netus et malesuada fames ac turpis egestas. Donec malesuada felis vel libero ' +
    'lobortis finibus. Ut ut faucibus magna. Morbi blandit, augue at porttitor accumsan, nunc ' +
    'ipsum molestie sem, ac gravida magna ex non neque.';
    // Error messages
    this.errorTitle = '¡Ocurrió un error!';
    this.errorMessage = 'Por favor, vuelve a intentarlo :(';
    // Register messages
    this.registerTitle = '¡Te has registrado!';
    this.registerMessage = 'Te enviaremos un correo para confirmar que eres tú, después de ingresar el link,' +
    'podrás acceder a Schedule :)';
    this.correctUpdatePersonalInfoTitle = '¡Guardado!';
    this.correctUpdatePersonalInfoMessage = 'Tu información personal se ha actualizado exitosamente';
  }
}

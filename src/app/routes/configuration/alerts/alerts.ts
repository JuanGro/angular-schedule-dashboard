// Sweet alerts
const swal = require('sweetalert');

export class Alerts {
  public generalErrorTitle: string;
  public generalErrorMessage: string;

  public confirmationAlertTitle: string;
  public confirmationButton: string;
  public cancelationButton: string;
  public confirmationTitle: string;
  public cancelationTitle: string;
  public cancelationMessage: string;
  public responseConfirmation: string;

  public registerTitle: string;
  public registerMessage: string;

  public loginErrorTitle: string;
  public loginErrorMessage: string;

  public errorUserLoggedTitle: string;
  public errorUserLoggedMessage: string;

  public deleteStudyProgramMessage: string;
  public deleteStudyProgramConfirmationMessage: string;

  public deleteCourseMessage: string;
  public deleteCourseConfirmationMessage: string;

  constructor() {
    /* General errors */
    this.generalErrorTitle = '¡Esto no debería pasar!';
    this.generalErrorMessage = 'Por favor, vuelve a intentarlo :(';
    /* Confirmation alert */
    this.confirmationAlertTitle = '¡Cuidado!';
    this.confirmationButton = '¡Claro!';
    this.cancelationButton = 'No estoy seguro :(';
    this.confirmationTitle = '¡Qué valiente!';
    this.cancelationTitle = '¡Tranquil@!';
    this.cancelationMessage = 'Nada se ha eliminado :)';
    /* Register */
    this.registerTitle = '¡Ya eres uno de lo nuestros!';
    this.registerMessage = 'Te enviaremos un correo para confirmar que en verdad eres tú, después de confirmarlo, ' +
    'ya podrás acceder a Schedule :)';
    /* Login */
    this.loginErrorTitle = '¡No tan rápido!';
    this.loginErrorMessage = '¡Verifica que tu correo y contraseña sean los correctos! ;)';
    /* Auth-guard services */
    this.errorUserLoggedTitle = '¿A dónde vas?';
    this.errorUserLoggedMessage = 'Primero cierra sesión :)';
    /* Study program list */
    this.deleteStudyProgramMessage = '¿Estás seguro de querer eliminar este plan de estudios?';
    this.deleteStudyProgramConfirmationMessage = 'El plan de estudios se ha eliminado correctamente :)';
    /* Courses */
    this.deleteCourseMessage = '¿Estás seguro de querer eliminar este curso?';
    this.deleteCourseConfirmationMessage = 'El curso se ha eliminado correctamente :)';
  }

  /**
   * Method to show a success message
   */
  public successMessage(title: string, message: string) {
    swal(title, message, 'success');
  }

  /**
   * Method to show an error message
   */
  public errorMessage(title: string, message: string) {
    swal(title, message, 'error');
  }

  /**
   * Method to show a warning message
   */
  public warningMessage(title: string, message: string) {
    swal(title, message, 'warning');
  }

  /**
   * Method to show a message in an alert
   */
  public message(title: string, message: string) {
    swal(title, message);
  }
}

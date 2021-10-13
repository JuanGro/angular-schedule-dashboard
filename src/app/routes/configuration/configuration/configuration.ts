import { Alerts } from './../alerts/alerts';

// Models
import { Period } from './../../models/period/period.model';

export class Configuration {
  public alerts: Alerts;

  public name: string;
  public institutionalDomain: string;
  public dateCreation: string;
  public authors: string;
  public career: string;
  public description: string;
  public period: Period;
  public periodList: Period[];

  constructor() {
    this.alerts = new Alerts();
    /* General information */
    this.name = 'Schedule';
    this.institutionalDomain = '@itesm.mx';
    this.dateCreation = '2017';
    this.authors = 'Juan Manuel Guerrero Hernández & Juan Carlos Estebes González';
    this.description = 'Esta plataforma fue creada sólo para el uso interno del ' +
    'Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Querétaro, se prohibe ' +
    'todo uso no autorizado.';

    this.periodList = [
      { name: 'Remediales' },
      { name: 'Primer semestre' },
      { name: 'Segundo semestre' },
      { name: 'Tercer semestre' },
      { name: 'Cuarto semestre' },
      { name: 'Quinto semestre' },
      { name: 'Sexto semestre' },
      { name: 'Séptimo semestre' },
      { name: 'Octavo semestre' },
      { name: 'Noveno semestre' }
    ];
  }

  /**
   * Method to show the privacy policy
   */
  public privacyPolicy() {
    const privacyPolicyTitle = 'Términos de privacidad';
    const privacyPolicyMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Pellentesque nisl nunc, placerat vitae porttitor at, fringilla et sapien. Etiam mi erat,' +
    ' blandit sed posuere vel, convallis eget lorem. Suspendisse ac lectus libero. Aliquam erat' +
    ' volutpat. In maximus tellus et nunc semper sodales. Pellentesque habitant morbi tristique' +
    ' senectus et netus et malesuada fames ac turpis egestas. Donec malesuada felis vel libero ' +
    'lobortis finibus. Ut ut faucibus magna. Morbi blandit, augue at porttitor accumsan, nunc ' +
    'ipsum molestie sem, ac gravida magna ex non neque.';
    this.alerts.message(privacyPolicyTitle, privacyPolicyMessage);
  }

  /**
   * Method to append the institutional domain to the param
   * @param word: word to append the institutional domain
   */
  public appendInstitutionalDomain(word: string) {
    return word + this.institutionalDomain;
  }
}

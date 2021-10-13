import { User } from './../user/user.model';

/**
* Class that declares all the attributes used in the Student object.
**/
export class Student extends User {
  public nationality: string;
  public local: string;
  public entry_date: string;
  public organization?: string;
  public campus?: string;
  public career?: string;
  public study_program?: string;

  /**
  * Constructor to create a User based on server response at POST.
  * Params:
  *   - jsonText: The student returned from API in json format string.
  **/
  constructor(json?) {
    if (json) {
      super(json);
      this.nationality = json.nationality;
      this.local = json.local;
      this.entry_date = json.entry_date;
    }
  }
}

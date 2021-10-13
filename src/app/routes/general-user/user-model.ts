/**
* Class that declares all the attributes used in the User object.
**/
export class User {
  id_college: string;
  name?: string;
  last_name?: string;
  password?: string;
  confirm_password?: string;
  email?: string;
  phone?: string;
  birthday?: Date;
  gender?: string;
  nationality?: string;
  local?: string;
  entry_date?: Date;
  schedule_status?: string;
  id_career?: string;

  // id_career: string;

  /**
  * Constructor to create a User based on server response at POST.
  * Params:
  *   - jsonText: The user returned from API in json format string.
  **/
  constructor(json?) {
    if (json) {
      this.id_college = json.id_college;
      this.name = json.name;
      this.last_name = json.last_name;
      this.password = json.password;
      // this.confirm_password = json.confirm_password;
      if (json.email) {
        this.email = json.email;
      }
      this.phone = json.phone;
      this.birthday = json.birthday;
      this.gender = json.gender;
      this.nationality = json.nationality;
      this.local = json.local;
      this.entry_date = json.entry_date;
      // this.id_career = json.id_career;
    }
  }
}

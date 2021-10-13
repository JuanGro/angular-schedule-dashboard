/**
* Class that declares all the attributes used in the User object.
**/
export class User {
  public id_college: string;
  public name: string;
  public last_name: string;
  public password?: string;
  public password_confirmation?: string;
  public email: string;
  public phone: string;
  public birthday: string;
  public gender: string;
  public status?: boolean;

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
      this.password_confirmation = json.password_confirmation;
      this.email = json.email;
      this.phone = json.phone;
      this.birthday = json.birthday;
      this.gender = json.gender;
      this.status = json.status;
    }
  }
}

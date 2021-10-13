/**
* Class that declares all the attributes used in the Study program object.
**/
export class StudyProgram {
  public name: string;
  public description: string;
  public status?: boolean;
  public created_at?: string;
  public updated_at?: string;
  public career_code?: string;

  /**
  * Constructor to create a User based on server response at POST.
  * Params:
  *   - jsonText: The student returned from API in json format string.
  **/
  constructor(json?) {
    if (json) {
      this.name = json.name;
      this.description = json.description;
      if (json.status) { this.status = json.status; }
      if (json.created_at) { this.created_at = json.created_at; }
      if (json.updated_at) { this.updated_at = json.updated_at; }
      if (json.career_code) { this.career_code = json.career_code; }
    }
  }
}

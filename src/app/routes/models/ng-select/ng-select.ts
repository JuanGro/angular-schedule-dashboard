/**
 * Class that declares all the attributes used in the Course object.
 **/
export class NgSelect {
  public id: string;
  public text: string;
  /**
   * Constructor to create a Period based on server response at POST.
   * Params:
   *   - jsonText: The period returned from API in json format string.
   **/
  constructor(json?) {
    if (json) {
      this.id = json.code;
      this.text = json.name;
    }
  }
}

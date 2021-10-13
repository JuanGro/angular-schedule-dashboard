/**
* Class that declares all the attributes used in the Period object.
**/
export class Period {
  public name: string;

  /**
  * Constructor to create a Period based on server response at POST.
  * Params:
  *   - jsonText: The period returned from API in json format string.
  **/
  constructor(json?) {
    if (json) {
      this.name = json.name;
    }
  }
}

/**
* Class that declares all the attributes used in the Course object.
**/
export class Course {
    public name: string;
    public code: string;
    public description?: string;
    public units: number;
    public class_hours: number;
    public lab_hours: number;
    public period?: string;

    /**
    * Constructor to create a Period based on server response at POST.
    * Params:
    *   - jsonText: The period returned from API in json format string.
    **/
    constructor(json?) {
      if (json) {
        this.name = json.name;
        this.code = json.code;
        if (json.description) {
          this.description = json.description;
        }
        this.units = json.units;
        this.class_hours = json.class_hours;
        this.lab_hours = json.lab_hours;
      }
    }
  }

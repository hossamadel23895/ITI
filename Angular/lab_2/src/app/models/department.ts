export class Department {
  public id: number;
  public name: string;
  public location: string;

  constructor(id: number, name: string, location: string) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}

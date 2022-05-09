export class Student {
  public id: number;
  public name: string;
  public age: number;
  public deptNo: number;

  constructor(
    id: number,
    name: string,
    age: number,
    deptNo: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.deptNo = deptNo;
  }
}

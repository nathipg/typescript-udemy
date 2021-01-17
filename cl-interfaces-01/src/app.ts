abstract class Department {
  static fiscalYear = 2020;
  /* private name: string; */
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department (${this.id}): ${this.name}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(this.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment('d2', []);

    return this.instance;
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log(`Accounting Department (${this.id}): ${this.name}`);
  }
}



const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const accounting = AccountingDepartment.getInstance();

accounting.addEmployee('Apollo');
accounting.addEmployee('Joana');
accounting.addEmployee('Max');

accounting.addReport('Another report...');
accounting.mostRecentReport = 'New report';
console.log(accounting.mostRecentReport);

accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();

const it = new ITDepartment('d1', ['Pissuti']);

it.addEmployee('Apollo IT');
it.addEmployee('Joana IT');

console.log(it);

/* const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); */
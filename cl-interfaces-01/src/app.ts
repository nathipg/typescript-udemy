class Department {
  /* private name: string; */
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d1', []);

accounting.addEmployee('Apollo');
accounting.addEmployee('Joana');

accounting.addReport('Another report...');

accounting.describe();
accounting.printEmployeeInformation();
accounting.printReports();

const it = new ITDepartment('d1', ['Pissuti']);

it.addEmployee('Apollo IT');
it.addEmployee('Joana IT');

console.log(it);

/* const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe(); */
const Employee = require('./employee');

class Manager extends Employee {
    static managers = [];
    employees = [];

    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);

        Manager.managers.push(this);
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(bonus) {
        const total = this._totalSubSalary() * bonus;

        return total;
    }

    _totalSubSalary() {
        let sum = this.salary;

        for(const employee of this.employees) {
            if(employee instanceof Manager) {
                sum += employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }

        return sum;
    }
}

module.exports = Manager;

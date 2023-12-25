class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;

        if(manager !== null) {
            this.manager = manager;

            manager.addEmployee(this);
        } else {
            this.manager = manager;
        }
    }

    calculateBonus(bonus) {
        const total = this.salary * bonus;

        return total;
    }
}

module.exports = Employee;

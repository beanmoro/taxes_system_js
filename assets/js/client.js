export default class Client {
    constructor(name) {
      this.name = name;
      this.id = 0;
      this.salary = [];
    }
  
    getName() {
      return this.name;
    }
  
    setName(name) {
        this._name = name;
    }

    getId() {
      return this.id;
    }
 
    calculateTax() {

        let totalTaxes = 0;
        for(let i = 0; i < this.salary.length; i++){
            totalTaxes += (this.salary[i].annualGrossAmount - this.salary[i].deductions) * 0.21;
        }
        return totalTaxes;
        
        
    }
}

function calculateTotalTaxes(salary) {
    let totalTaxes = 0;
    for(let i = 0; i < salary.length; i++){
        totalTaxes += (salary[i].annualGrossAmount - salary[i].deductions) * 0.21;
    }
    return totalTaxes;
}

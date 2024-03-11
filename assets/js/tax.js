export default class Tax {
    constructor(annualGrossAmount, deductions){
        this._annualGrossAmount = annualGrossAmount;
        this._deductions = deductions;
    }

    get annualGrossAmount(){
        return this._annualGrossAmount;
    }

    set annualGrossAmount(value){
        this._annualGrossAmount = value;
    }

    get deductions(){
        return this._deductions;
    }

    set deductions(value){
        this._deductions = value;
    }

}
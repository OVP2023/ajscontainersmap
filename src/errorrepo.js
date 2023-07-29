class ErrorRepository{
    constructor() {
        this.errors = new Map([[1,'error1'],[2,'error2']]);
    }
    translate(code){
        if (!this.errors.has(code)){       
            throw new Error ("Unknown error")         
        } else {
            return this.errors.get(code)
        }
    }

}
module.exports = ErrorRepository

class Person{
    constructor(name){
        this.name =name;
    }

    sayMyname(){
        return `Meu nome é  ${this.name}!`;
    }
}

module.exports = {Person};
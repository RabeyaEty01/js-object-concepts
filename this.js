//console.log(this);
const ety = {
    id: 101,
    money: 5000,
    name: 'Ety',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(myArrow);
    },

    //arrow function nijossho kono this er value hold kore rakhte parena 

    treatDey: function (expense, bokshish, tax) {
        this.money = this.money - expense - bokshish - tax;
        console.log('hello', this);
        return this.money;
    }
}

function add() {
    console.log(this);
}

const ety = {
    id: 101,
    money: 5000,
    name: 'Ety',
    treatDey: function (expense, bokshish, tax) {
        this.money = this.money - expense - bokshish - tax;
        console.log('hello', this);
        return this.money;

    }
}
const heroNoman = {
    id: 102,
    money: 6000,
    name: 'Noman'
}
const normal = {
    id: 103,
    money: 7000,
    name: 'Normal shaheb'
}

//call
// ety.treatDey.call(heroNoman, 500, 100, 50);
// ety.treatDey.call(heroNoman, 300, 50, 30);

//apply
ety.treatDey.apply(heroNoman, [500, 100, 50]);
ety.treatDey.apply(normal, [300, 50, 30]);
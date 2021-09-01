const ety = {
    id: 101,
    money: 5000,
    name: 'Ety',
    treatDey: function (expense) {
        this.money = this.money - expense;
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
ety.treatDey(1000);
const heroTreatDey = ety.treatDey.bind(heroNoman);
const normalTreatDey = ety.treatDey.bind(normal);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
ety.treatDey(400);
normalTreatDey(200); 

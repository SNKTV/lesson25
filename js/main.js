// Лекція 25

// Завдання 1 

const user = {};

Object.defineProperty(user, 'name', {

    writable: false
});

Object.defineProperty(user, 'age', {

    writable: false
});

Object.defineProperty(user, 'id', {

    writable: false,
    configurable: false
});

console.log(user);

// Завдання 2 

const dataBase = {
    dbName: 'user',
    dbType: 'MySQL'
};

const configurateDB = {
    token: '123',
    password: '567',
    user: 'admin'
};

Object.freeze(dataBase);
console.log(Object.isFrozen(dataBase));
Object.seal(configurateDB);
console.log(Object.isSealed(configurateDB));

// Завдання 3

let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
    set setSalaries(position) {
        for (let i = 0; i < position.length; i++) {
            let arr = position[i].split(':');
            salaries[arr[0]] = +arr[1];
        }
        return salaries;
    }
}

Object.defineProperty(salaries, 'sum', {
    get () {
        let sum = 0;
        for (salary in this) {
            if (+this[salary]) {
                sum += this[salary];
            }
        }
        console.log(sum);
    }
})

salaries.setSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
console.log(salaries);

// Завдання 4

let user1 = {
    name: 'Mike',
    surname: 'Davis',
    age: 25
}

Object.defineProperty(user1, 'userInfo', {
    get() {
        let userInfo = {};
        for (key in user1) {
            userInfo[key] = user1[key];
        }
        console.log(userInfo);
    }
})

user1.setSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];

user1.userInfo
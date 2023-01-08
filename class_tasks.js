// Классы

// Например, у нас есть пользователь в системе: firstName, а lastName. Также у нас есть функции getFullName() и canPayed(), которые позволяют получить полное имя пользователя и его возможность оплачивать покупки. 


// class User = {
//   firstName: "Sam",
//   lastName: "Blue",
//   age: 29,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   canPayed: function () {
//     return this.age >= 18
//   }
// };


// console.log(user.getFullName()); // "Sam Blue"
// console.log(user.canPayed()); // true


// Сравните это с кодом, который предполагает, что у нас уже где-то определен класс с именем User:

// let sam = new User("Sam", "Blue", 30);

// console.log(sam.getFullName()); // "Sam Blue"
// console.log(sam.canPayed()); // true 

// - создаем пользователя с именем `"Sam"`, фамилией `"Blue"` и возрастом `30` лет.
// - получаем его полное имя, вызывая `user.getFullName()`.
// - проверяем, может ли пользователь оплачивать покупки, вызывая `user.canPayed()`.


// ### Что такое классы?

// Классы позволяют нам сгруппировать вместе все переменные и функции, описывающие объект в нашем приложении (пользователя, человека, сотрудника, рецепт и т.д.).

// ### Отличие объекта от класса

// Объекты позволили нам группировать несколько переменных в один объект.

// <aside>
// ℹ️ Объект - это только представление переменных. Классы определяют поведение, потому что мы можем иметь внутри класса функции имеющие отношение к этой сущности.

// </aside>

// ## Методы и свойства

// Переменные внутри класса называются **свойствами**, а функции внутри класса называются **методами**.



// // ## Использование класса
// // Используя класс пользователя из примеров выше, посмотрим, как мы можем создать двух разных пользователей:

// let sam = new User("Sam", "Blue", 30);
// sam.getFullName(); // "Sam Blue"
// sam.getInitials(); // "SB"
// sam.canPayed(); // true


// let charley = new User("Charley", "Don", 17);
// charley.getFullName(); // "Charley Don"
// charley.getInitials(); // "CD"
// charley.canPayed(); // false

// sam и charley являются разными переменными. Первый является результатом, new User("Sam", "Blue", 30), а второй является результатом new User("Charley", "Don", 17). Обе переменные создаются одним и тем же классом, но имеют разные свойства.


// ### Ключевое слово `new`
// Поскольку `User` это класс, вы можете создать новый экземпляр этого класса с помощью ключевого слова `new`.


// ### Экземпляр
// `sam` является объектом, созданным с помощью класса `User`. Пример ниже немного упрощен.


// let sam = new User("Sam", "Blue", 30);

// User {
//   firstName: "Sam",
//   lastName: "Blue",
//   age: 30,
//   getFullName: function() {...},
//   getInitials: function() {...},
//   canPayed: function() {...}
// }

// В примере выше приведен сокращенный пример.


// ### task. Создать экземпляр
// В `user.js` определен пустой класс `User`. В `index.js` создайте новую переменную с именем `user` и назначьте ее новому экземпляру класса `User`.


// const user = {
//     firstName: "Sam",
//     lastName: "Blue",
//     age: 29,
//     getFullName: function () {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     canPayed: function () {
//       return this.age >= 18
//     }
//   };
  
  
//   console.log(user.getFullName()); // "Sam Blue"
//   console.log(user.canPayed()); // true



// class User {
//     name
//     constructor(name, surname, age) {
//         this.name = name,
//         this.surname = surname,
//         this.age = age
//     }
// }

// const user = new User("Печорин","Маратов", 30)
// user.name = "Казбек"
// console.log(user.name)
// console.log(user)


// ## Класс и экземпляр

//  Класс - это фабрика, которая создает объекты.

// Класс `Person` принимает один параметр. На его основе вы можете создать несколько экземпляров:

// let person1 = new Person("Sam Doe");
// let person2 = new Person("Charley Bron");


// **Каждый экземпляр отличается**
// Каждый экземпляр класса - это новая сущность. Даже если объекты имеют одинаковые значения внутри.

// person1 === person2; // false (they are not the same)




// ## **Определение собственного класса**

// Мы используем ключевое слово `class`, за которым следует имя класса `User`, затем у нас есть открывающая и закрывающая фигурные скобки, которые вместе определяют начало и конец класса.

// class User {

// }

// ### Соглашение об именовании

// Важно называть классы в регистре **UpperCamelCase**. Первый символ каждого слова должен быть в верхнем регистре, остальные в нижнем регистре. Например, `QuickRecipe`, `YearlyResult`.


// ### **Определение и использование класса**
// Класс определяется один раз, но может быть использован более одного раза. В дальнейших примерах мы будем разделять их комментариями: `// class definition` и `// class usage`:

// // class definition
// class User {

// }

// // class usage
// let user1 = new User();
// let user2 = new User();


// ### task. Определение класса
// Определите пустой класс представляющий **рецепт**. Создайте новую переменную с именем `recipe` и назначьте ее новому экземпляру этого класса.


// // class definition
// class Recipe {

// }
// // class usage
// let recipe = new Recipe()


// ### Функция `constructor`

// Когда вы определяете класс, вы можете создать внутри этого класса функцию, называемую **конструктором**, которая будет автоматически вызываться каждый раз, когда вы создаете новый класс.

// class User {
//   constructor() {
//     console.log("creating instance");
//   }
// }

// // В примере выше мы добавили `console.log()` внутри функции `constructor()`.

// // Каждый раз, когда мы будем создавать новый экземпляр с помощью ключевого слова `new`, мы увидим создание пользователя экземпляра в консоли:

// let user1 = new User(); // "creating instance"
// let user2 = new User(); // "creating instance"


// Синтаксис constructor

// class User {
//   constructor() {
//     // code here
//   }
// }
// Обратите внимание на отсутствие ключевого слова `function`. 

// Функции определенные внутри класса (методы), не используют ключевое слово `function`.


// ### Пример визуализации `constructor`
// Запустите пример в редакторе кода.

// // Class definition
// class User {
//   constructor() {
//     console.log("Creating a new instance of User");
//   }
// }

// // Class usage
// let user1 = new User();
// console.log("------");
// let user2 = new User();
// console.log("=======");


// ## Параметры конструктора

// `constructor()` может принимать параметры.

// Допустим, у нас есть класс `User` и мы хотели бы создать новый экземпляр пользователя класса, предоставив параметры `firstName` и `lastName`.

// // class definition
// class User {
//   constructor(firstName, lastName) {
//     console.log("creating instance user");
//     console.log(firstName);
//     console.log(lastName);
//   }
// }

// // class usage
// let sam = new User("Sam", "Doe");

// После создания нового экземпляра пользователя, let sam = new User("Sam", "Doe"); в консоли мы увидим:
// creating instance user
// "Sam"
// "Doe"


// ### task. **Визуализируйте параметры конструктора** 
// Запустите пример в браузере.

// ### task. **Определите параметры конструктора**

// Класс `Recipe` принимает название рецепта, за которым следует количество калорий.

// Завершите класс `Recipe`, чтобы он выводил в консоль имя и калории, когда создается новый экземпляр класса.


// ## Переменные экземпляра
// ℹ️ Переменная экземпляра - это переменная, принадлежащая конкретному экземпляру класса.
// Преимущества создания переменных экземпляра:

// - переменные экземпляра, которые вы создаете в методе `constructor()`, возвращаются как пары ключ/значение в объекте.
// - эти переменные экземпляра можно использовать во всех методах экземпляра класса.

// // class definition
// class User {
//   constructor() {
//     this.firstName = "Sam";
//     this.age = 30;
//   }
// }

// // class usage
// let user = new User();
// let user1 = new User();
// console.log(user["firstName"]); // User {age: 30}
// console.log(user1["age"]);

// Мы создали переменную экземпляра внутри constructor(), написав: this.age = 30.
// Затем, когда мы определили новый экземпляр этого класса, мы получили объект, содержащий age: 30, как пару ключ/значение.


// ## Что такое `this`

// `this` позволяет нам определять переменные экземпляра. Ключевое слово `this` относится к текущему экземпляру класса. Более подробно данная тема будет разобрана несколькими примерами ниже.

// // class definition
// class User {
//   constructor() {
//     this.firstName = "Sam";
//     this.age = 24;
//   }
// }

// // class usage
// let user = new User();
// console.log(user); // User {firstName: "Sam", age: 24}


// class User {
//   constructor() {
//     this.firstName = "Sam";
//     this.age = 24;
//   }
// }

// class Puser {
//   constructor(surname, age) {
//     this.surname = surname;
//     this.age = age;
//   }
// }

// let user = new User();
// console.log(user);
// let puser = new Puser();
// console.log(puser);
// puser.surname = "bingo";
// console.log(puser.surname);

// В примере выше для облегчения понимания темы мы используем захардкоденные примеры. Т.е. у всех пользователей будет имя "Sam" и возраст 24 года. Чуть позже мы будем делать это более гибко.




// ### task. **Переменная экземпляра**

// Завершите определение класса `User`, чтобы каждый новый экземпляр содержал следующие переменные экземпляра:

// - переменная экземпляра `age` равна `30`
// - переменная экземпляра `hasVoted` равна `false`

// // class definition
// class User {
//   constructor() {
// 		// my code
//     this.age = 30;
//     this.hasVoted = false;
//   }
// }


// // class usage
// let user = new User();
// console.log(user);



// ### task. **Переменная экземпляра**

// Завершите определение класса `Recipe`, чтобы каждый новый экземпляр содержал следующие переменные экземпляра:

// - переменная экземпляра `cookingTime` равна `30`
// - в переменную экземпляра `allergies` поместить массив со строкой `"nuts"`.



// ## Захват параметров `constructor`
// В примере выше мы создавали переменные экземпляра с жестко заданным значением. Создадим переменные экземпляра и назначим их параметрам, полученным в конструкторе.

// // // class definition
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }


// // // `this.firstName` является новой переменной экземпляра**,** а `firstName` является параметром конструктора.
// // // Использование данного класса:

// // class usage
// let sam = new User("Sam", "Blue");
// console.log(sam); // {firstName: "Sam", lastName: "Blue"}



// Мы захватили параметры переданные конструктору `"Sam"` и `"Blue"`, и создали две переменные экземпляра: `this.firstName` и `this.lastName`.

// Наличие этих двух переменных экземпляра позволит нам написать собственные методы экземпляра в след. примерах.

// Несколько экземпляров

// // class usage
// let sam = new User("Sam", "Blue");
// console.log(sam); // User {firstName: "Sam", lastName: "Blue"}

// let charlie = new User("Charlie", "Doe");
// console.log(charlie); // User {firstName: "Charlie", lastName: "Doe"}

// Один и тот же класс ****`User` генерирует разные экземпляры.

// `sam` и `charlie` являются двумя экземплярами одного и того же класса. У них одинаковая структура, но разные значения.

// ### Другой пример

// Очень часто параметры конструктора передаются в переменные экземпляра.

// // class definition
// class User {
//   constructor(firstName, lastName, age, hasVoted) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.hasVoted = hasVoted;
//   }
// }

// // class usage
// let user = new User("Sam", "Blue", 30, false);
// console.log(user); // User {firstName: "Sam", lastName: "Blue", age: 30, hasVoted: false}



// ### task. **Захват переменной экземпляра**

// Завершите определение класса `User`, чтобы он захватывал переменные экземпляра `firstName`, `lastName` и `age` полученные в качестве параметров.



// ### task. **Захват переменной экземпляра**

// Завершите определение класса `Recipe`, чтобы он захватывал переменные экземпляра `name` и `calories` полученные в качестве параметров.




// ## Методы экземпляра в классе

// ℹ️ Метод экземпляра - это метод, который можно вызвать для экземпляра класса.


// // class definition
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return console.log("full name here");
//   }
// }

// // class usage
// let user = new User("Sam", "Doe");
// user.getFullName(); // "full name here"


// Метод .getFullName(), который мы вызвали для переменной user, является экземпляром класса User. Метод объединен в один класс.

// ### Синтаксис методов

// // Создадим класс с тремя разными методами экземпляра.

// class Payment {
//   constructor(paymentMethod) {
//     this.paymentMethod = paymentMethod;
//   }

//   canPay() {
//     //code for canPay
//   }

//   hasPaid() {
//     // code for hasPaid
//   }

//   redirectToBank() {
//     // code for redirectToBank
//   }
// }


// ### task. **Создать методы экземпляра**

// Завершите класс `User`, чтобы он содержал следующие методы экземпляра:

// - `getFullName`, который должен вернуть строку: `"fullname here"`
// - `canVote`, который должен вернуть `true`
// - `hasVoted`, который должен вернуть `false`



// ## **Реализация методов экземпляра**

// В примерах выше мы создавали методы экземпляра, возвращающие жестко заданные значения. Мы можем использовать переменные экземпляра внутри этих методов экземпляра, чтобы иметь возможность реализовать более гибкую функциональность.

// // class definition
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// 	}

// 	getFullName() {
//     return console.log(`${this.firstName} ${this.lastName}`);
// 	}
// }

// // class usage
// let user = new User("Sam", "Doe");
// user.getFullName(); // "Sam Doe"

// Метод `getFullName()` возвращает полное имя пользователя.

// Распространенной ошибкой здесь является:

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     // this is INCORRECT
//     return console.log(`${firstName} ${lastName}`);
//   }
// }
// let user = new User("Sam", "Doe");
// user.getFullName(); // firstName is not defined


// Переменные firstName и lastName недоступны из метода getFullName. Они доступны только в конструкторе. По этой причине мы фиксируем эти значения в конструкторе как переменные экземпляра, чтобы мы могли использовать их, когда захотим, в любом методе экземпляра.


// this относится к текущему экземпляру класса.


// // Другой пример

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// 	}

//   canVote() {
//     return this.age >= 18;
//   }
// }
// return age >= 18 вернет логическое значение. Поскольку это метод экземпляра, у нас нет переменной age. У нас есть переменная экземпляра this.age.


// ### task. **Реализовать методы экземпляра**

// Реализуйте метод экземпляра `getFullName`, чтобы он возвращал имя и фамилию пользователя, разделенные пробелом.

// Код в файле `index.js` будет выдавать ошибку, пока вы не определите метод `getFullName`.




// ### task. **Реализовать методы экземпляра**

// Реализуйте следующие методы экземпляра для класса `Recipe`:

// - `isLowCaloric`, который возвращает истину, когда калорийность рецепта составляет 400 или ниже и `false` в противном случае.
// - `isHighCaloric`, который возвращает истину когда калорийность рецепта составляет 600 или выше и `false` в противном случае.



// ### task. **Реализовать методы экземпляра**
// Реализуйте следующие методы экземпляра для класса `User`:
// - `getFullName` возвращает имя и фамилию пользователя, разделенные пробелом
// - `getInitials` возвращает первый символ имени, сразу за которым следует первый символ фамилии
// - `canVote` возвращает истину, когда пользователю исполнилось 18 лет или больше, и `false` в противном случае


// Данные примеры познакомили вас с концепцией **объектно-ориентированного программирования**. Вы используете классы для описания сущностей в вашем приложении.

// Мы перешли от процедурного (список инструкций одна за другой) к объектно-ориентированному программированию (ООП).

// ООП позволяет лучше повторно использовать код, потому что вы можете создать новый экземпляр класса и вызвать в нем методы экземпляра.

// **Пример процедурного кода:**

// let user = {
// 	firstName: "Sam",
// 	lastName: "Blue",
// 	getFullName: function(firstName, lastName) {
// 		return `${firstName} ${lastName}`;
// 	},
// 	canVote: function(age) {
// 		return age >= 18
// 	}
// };

// console.log(user.getFullName("Charlie", "Shean")); // "Sam Blue"
// console.log(user.canVote(30)); // true


// // С помощью ООП:

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getInitials() {
//     return `${this.firstName[0]}${this.lastName[0]}`;
//   }

//   canVote() {
//     return this.age >= 18;
//   }
// }

// let user = new User("Sam", "Blue", 30);

// console.log(user.getFullName()); // "Sam Blue"
// console.log(user.getInitials()); // "SB"
// console.log(user.canVote()); // true


// ### project. **Варианты имени**

// Ранее данный [проект](https://www.notion.so/0a07a6b63a61468eb8902e4160631518) мы делали с помощью функций, теперь перепишем его с помощью ООП.

// Дополните класс **NameVariations**, чтобы он содержал 3 метода экземпляра:

// - `getNumberOfChars` возвращает количество символов для переменной экземпляра имени
// - `getLower` возвращает переменную экземпляра имени в нижнем регистре
// - `getUpper` возвращает переменную экземпляра имени в верхнем регистре




// ## Наследование

// У нас есть класс `Employee`, который имеет 2 метода экземпляра: `getFullName()` и `getInitials()`.
// class definition
// class Employee {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
  
//     getInitials() {
//       return this.firstName[0] + this.lastName[0];
//     }
//   }

  // Также нам нужно создать еще один класс для админов. Класс Admin будет содержать 3 метода экземпляра: getFullName(), getInitials() и paySalaries().
  // class definition
// class Admin {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getInitials() {
//     return this.firstName[0] + this.lastName[0];
//   }

//   paySalaries() {
//     console.log("Paying salaries...");
//   }
// }

// Методы `constructor()`, `getFullName()` и `getInitials()` в наших классах повторяются.

// Дублирование кода плохая практика, т.к. если нам понадобится обновить реализацию одного из этих методов когда-нибудь в будущем, нам придется сделать это в обоих классах.

// В программировании есть популярный принцип **[DRY**,](https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself) который мы в примерах выше нарушаем.

// ### Какие задачи решает наследование?

// Класс `Admin` (дочерний класс) может унаследовать все функциональные возможности класса `Employee` (родительский класс).

// class definitions
// class Employee {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getInitials() {
//     return this.firstName[0] + this.lastName[0];
//   }
// }


// class Admin extends Employee {
//   paySalaries() {
//     console.log("Paying salaries...");
//   }
// }


// // class usage
// const employee = new Employee("Sam", "Smith");
// console.log(employee); // Employee { firstName: 'Sam', lastName: 'Smith' }
// console.log(employee.getInitials()); // SS


// const admin = new Admin("Alex", "Smith");
// console.log(admin); // Admin { firstName: 'Alex', lastName: 'Smith' }
// console.log(admin.getInitials()); // AS
// admin.paySalaries();


// Мы добавили extends Employee рядом с class Admin. Данная запись позволит классу Admin автоматически унаследовать все методы, определенные в классе Employee. Дочерний класс Admin также унаследует от родителя constructor().


// ### Распространенные ошибки

// Убедитесь в том, что класс `Parent` определен первым, чтобы вы могли унаследовать его методы в другом классе.

// ReferenceError: Cannot access 'Employee' before initialization



// ### task. Писатель **и пользователь**

// Определите класс `Writer`, содержащий следующие методы экземпляра:

// - `getFullName` возвращает полное имя писателя
// - `canVote` возвращает истину, когда возраст 18 или выше, и ложь в противном случае
// - `publishArticle` выводит в консоль строку: `"Article published"`



// ### П**ереопределение родительских методов**
// В качестве примера возьмем класс `Employee`:
// class definition

// class Employee {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getInitials() {
//     return this.firstName[0] + this.lastName[0];
//   }
// }

// На основе класса `Employee` мы хотим создать класс `Admin`. Данный класс также должен иметь метод `getInitials()`, но метод `getFullName()` будет иметь другую реализацию. Например, чтобы данный метод возвращал полное имя пользователя, за которым идет префикс `(admin)` (чтобы мы знали, что это администратор).

// Несмотря на то, что `getFullName()` отличается от родительского класса, вы можете унаследовать данный метод от родительского класса и переопределить его.

// class Admin extends Employee {
//   getFullName() {
//     return `${this.firstName} ${this.lastName} (admin)`;
//   }
// }

// let user = new Employee ("Sam","Doe");
// console.log(user.getFullName());

// let admin = new Admin ("Sam","Doe");
// console.log(admin.getFullName());


// ### task. **Сотрудник и владелец**
// Завершите класс `Owner`, чтобы он реализовывал все функции класса `Employee`.
// При вызове метода `getPosition()` он должен возвращать: `X is the owner`, где `X` имя владельца.



// ### string.startsWith(characters)

// Метод получает один параметр, который представляет собой символы, которые вы хотите найти. Он возвращает `true`, когда эти символы находятся **в начале** строки и `false` в противном случае.


// let string = "Hello World!";

// console.log(string.startsWith("H")); // true
// console.log(string.startsWith("h")); // false
// console.log(string.startsWith("Hello")); // true
// console.log(string.startsWith("World")); // false
// console.log(string.startsWith("HelL")); // false

// ### string.endsWith(characters)

// Метод `.endsWith()` возвращает значение `true`, если символы находятся **в конце** строки и `false` в противном случае.


// let string = "Hello World!";

// console.log(string.endsWith("!")); // true
// console.log(string.endsWith("d")); // false
// console.log(string.endsWith("Hello")); // false
// console.log(string.endsWith("World")); // false
// console.log(string.endsWith("World!")); // true
// console.log(string.endsWith("ld!")); // true




// ## Преобразование строки в число
// У вас есть текстовое поле. Пользователь начинает вбивать какие-то данные. Браузер предоставит вам это значение в виде строки. Потому что браузер не знает, что именно будет вводить пользователь и выставляет данный тип по умолчанию.
// Преобразовать строку в число вы можете, используя метод `Number.parseInt()`.


// let value = "35";
// console.log(value);
// //convert to a number:
// let age = Number.parseInt(value, 10);
// console.log(age);


// Классовый компонент в React

import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;

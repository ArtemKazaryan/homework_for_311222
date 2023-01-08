/* passport.js */
export default class Passport {
      /**
       * @param {string} firstName
       * @param {string} lastName
       */
          // my code
      constructor(firstName, lastName ) {
            this.firstName = firstName;
            this.lastName = lastName;  
      }
      getFirstName() {
            return this.firstName.toLowerCase()
      }

      getLastName() {
            return this.lastName.toUpperCase()
      }

      getFullName() {
            return `${this.firstName} ${this.lastName}`
      }

      getInitials() { 
            while (this.firstName[0] === undefined || this.lastName[0] === undefined ) {
                  return ""
            }
            return `${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}.`
            
      }

      getIsValidName() {
            if ((this.firstName === "") || (this.lastName === "") || (this.lastName.endsWith(".") === true)) {
                  return "No"
            }
            return "Yes"   
      }
    }

//     Завершите класс `Passport`, чтобы он включал следующие методы экземпляра:

// - `getFirstName`, который возвращает имя в нижнем регистре
// - `getLastName`, который возвращает фамилию в верхнем регистре
// - `getFullName`, который возвращает имя и фамилию, разделенные пробелом
// - `getInitials`, который возвращает первый символ имени в верхнем регистре, за которым следует символ точки, затем первый символ фамилии в верхнем регистре и символ точки
// - `getIsValidName`, который возвращает `"Yes"`, если имя содержит хотя бы одну букву и фамилия содержит хотя бы одну букву. Также фамилия не должна заканчиваться точкой. Во всех остальных случаях возвращает `"No"`.
/* name-variations.js */

export default class NameVariations {
    /** @param {string} name */
    constructor(name) {
          // my code
          this.name = name;
    }
  
    getNumberOfChars() {
          // my code
          return this.name.length
    }
  
    getLower() {
          // my code
          return this.name.toLowerCase()
    }
  
    getUpper() {
          // my code
          return this.name.toUpperCase()
    }
  }

//   - `getNumberOfChars` возвращает количество символов для переменной экземпляра имени
// - `getLower` возвращает переменную экземпляра имени в нижнем регистре
// - `getUpper` возвращает переменную экземпляра имени в верхнем регистре
/* bill.js */

export default class Bill {
      constructor() {
          this.amounts = [];
      }
    
      /** @param {string} amountStr */
      addAmount(amountStr) {
                // my code
                let amountNmb = Number.parseInt(amountStr, 10);
                this.amounts.push(amountNmb);
                return this.amounts;
      } 
          // my code
      getCount() {
            return this.amounts.length;
      }  

      getTotal() {
            let sum = 0;
            for (let i=0; i < this.amounts.length; i++) {
                  sum = sum + Number.parseInt(this.amounts[i],10);
            }
            return sum
      } 

      getAverage() {
            return this.getTotal()/this.getCount()
      } 
    }

// - `addAmount` добавляет полученную от пользователя сумму к переменной экземпляра `amounts` Сумма, которую он получает, является строкой, а вам необходимо вывести число.
// - `getCount` возвращает количество элементов в переменной экземпляра `amounts`.
// - `getTotal` возвращает сумму всех чисел внутри переменной экземпляра `amounts`.
// - `getAverage` возвращает среднее значение, которое человек должен заплатить. Вы можете обратиться к уже существующим методам экземпляра, используя ключевое слово `this`.
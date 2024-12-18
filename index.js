

function BankAccount(name, surname, balance) {
    this.name = name;
    this.surname = surname;
    this.my_balance = balance;
    this.balance_history = [];

   
    this.addBalance = function (money) {
        this.my_balance += money;
        this.balance_history.push(`+${money}`);
        alert(`${this.name} ${this.surname}, sizin balansınız artırıldı. Cari balans: ${this.my_balance} ₼`);
    };

    
    this.withdrawBalance = function (money) {
        if (this.my_balance >= money) {
            this.my_balance -= money;
           
        this.balance_history.push(`-${money}`);

            alert(`${this.name} ${this.surname}, balansdan çıxarış edildi. Cari balans: ${this.my_balance} ₼`);
        } else {
            alert("Balans kifayət deyil.");
        }
    };

    
    this.showHistory = function () {
      

        alert(`Sizin balansiniz ${ this.balance_history} ₼ `)
    };

   
    this.getBalance = function () {
        return `${this.name} ${this.surname}, cari balansınız: ${this.my_balance} ₼`;
    };
}



const names = prompt("Zəhmət olmasa adınızı daxil edin:");
const surname = prompt("Zəhmət olmasa soyadınızı daxil edin:");

    const user1 = new BankAccount(names, surname, 5000);



function showMenu() {
    let operation = true;
    while (operation) {
        const option = prompt(
            "This page says \n"+
            "Welcome to the Bank App! \n"+
            "What would you like to do? \n"+
            "1: Deposit \n"+
            "2: Withdraw \n"+
            "3: View Transaction History \n"+
            "4: Check Balance \n"+
            "5: Exit \n"
        );

        switch (option) {
            case "1":
                const addmoney = Number(prompt("Balansı artırmaq üçün məbləği daxil edin:"));
                if (!isNaN(addmoney) && addmoney > 0) {
                    user1.addBalance(addmoney);
                } else {
                    alert("Yanlış məbləğ daxil edildi!");
                }
                break;
            case "2":
                const moneyWithdraw = Number(prompt("Balansdan çıxarış etmək üçün məbləği daxil edin:"));
                if (!isNaN(moneyWithdraw) && moneyWithdraw > 0) {
                    user1.withdrawBalance(moneyWithdraw);
                } else {
                    alert("Yanlış məbləğ daxil edildi!");
                }
                break;
            case "3":
                user1.showHistory();
                break;
            case "4":
                alert(user1.getBalance());
                break;
            case "5":
                operation = false;
                alert("Təşəkkürlər! Sistemdən çıxılır.");
                break;
            default:
                alert("Yanlış seçim! Zəhmət olmasa 1-dən 5-ə qədər bir seçim edin!");
        }
    }
}



showMenu();

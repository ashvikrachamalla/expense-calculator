class Form{
    constructor(){
        this.expense_details = createInput("expense details");
        this.expense_amount = createInput("expense amount");
        this.income_details = createInput("income details");
        this.income_amount = createInput("income amount");
        this.expense = createButton("expense");
        this.income = createButton("income");
        this.greeting = createElement('h3');
        this.submit = createButton("submit");
        this.status="none";
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.expense.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("expense calculator");
        title.position(130,0);
        
        this.income.position(300,200);
        this.expense_details.position(150,200);
        this.expense_amount.position(150,300);
        this.expense.position(100, 200);
        this.submit.position(250,350);
        this.income_details.position(150,200);
        this.income_amount.position(150,300);
        if(this.status == "none"){
            this.expense_details.hide();
            this.expense_amount.hide();
            this.income_details.hide();
            this.income_amount.hide();
            this.submit.hide();
        }else if (this.status == ("expense")){
            this.expense_details.show();
            this.expense_amount.show();
            this.submit.show();
        }else if (this.status == "income"){
            this.income_details.show();
            this.income_amount.show();
            this.submit.show();
        }
        this.expense.mousePressed(()=>{
            this.status = "expense"
            
            
            this.expense.hide();
            this.income.hide();
            
        })
        this.income.mousePressed(()=>{
            this.status = "income";
            
            this.expense.hide();
            this.income.hide();
            
        })
        this.submit.mousePressed(()=>{
            this.income.show();
            
        this.expense.show();
            this.expense_details.hide();
            this.expense_amount.hide();
            this.submit.hide();
            this.income_amount.hide();
            this.income_details.hide();
            
            if(this.status == "expense"){
                this.updateExpense();
            }
            if(this.status == "income"){
                this.updateIncome();
            }
           
            this.status = "none";
        })
    }
    updateExpense(){
        if(transaction!=undefined){
            transaction+=1;
            var expenseRef = database.ref('expense/entry'+transaction);
            database.ref(expenseRef).set({
                expensedate:new Date(),
                expensedetails:this.expense_details.value(),
                expenseamount:this.expense_amount.value()
            })
            this.updatetransaction();
        }
        
    }
    updateIncome(){
        if(transaction!=undefined){
            transaction+=1
            var incomeRef = database.ref('income/entry'+transaction);
            database.ref(incomeRef).set({
                incomedate:new Date(),
                incomedetails:this.income_details.value(),
                incomeamount:this.income_amount.value()
            })
            this.updatetransaction();
        }
        
    }
    updatetransaction(){
        database.ref('/').update({
            transaction:transaction
        })
    }
}

class EmployeePayrollData{

    //getter and setter method
    get id()
    {
        return this._name;
    }
    set id(id){
        this._id = id;
    }
    get name(){
        return this._name;
     }
        set name(name)
        {
         let nameREgex = RegExp('^[A-Z]{1}[a-z]{2,}$');
         if(nameREgex.test(name))
         this._name = name;
         else throw 'Name is Incorrect'
       }
     get profilePic(){
         return this._profilePic;
     }
     set profilePic(profilePic){
         this._profilePic = profilePic;
 
     }
 
     get gender(){
         return this._gender;
     }
     set gender(gender){
         this._gender = gender;
     }
 
     get department(){
         return this._department;
     }
     set department(department)
     {
         this._department = department;
     }
 
     get salary(){
         return this._salary;
     }
     set salary(salary){
         this._salary = salary;
     }
 
     get note(){
         return this._note;
     }
     set note(note){
         this._note = note;
     }
 
     get satrtDate(){
         return this._startDate;
     }
     set satrtDate(satrtDate){
         this._startDate = satrtDate;
     }
     //method
     toString(){
         const options = {year : 'numeric', month: 'long', day:'numeric'};
         const empDate = !this.satrtDate ?"undefined": this.satrtDate.toLocaleDateString("en-US",options);
 
         return "id=" + this.id +" ,name = " + this.name + ",gender=" + this.gender + ",profilePic=" + this.profilePic + ",department=" + this.department +",salary=" + this.salary + ",startDate = " + empDate + ",note=" +this.note;
        }
 }
 
 /**
  * Ability to set Event Listeners when Document is loaded so as to.
  */
 //..........UC2...........
 window.addEventListener('DOMContentLoaded',(event) => {
     const name = document.querySelector('#name');
     const textError =  document.querySelector('.text-error');
     name.addEventListener('input',function(){
     if(name.value.length==0){
         textError.textContent = "";
         return;
     }
     try {
        (new EmployeePayrollData()).name = name.value;;
        textError.textContent = "";
     } catch (e) {
         textError.textContent = e;
     }  
     });
    
     const salary = document.querySelector('#salary');
     const output = document.querySelector('.salary-output');
     output.textContent = salary.value;
     salary.addEventListener('input',function(){
         output.textContent = salary.value;
      
     });
 });
 
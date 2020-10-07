
function formData(){
    const name = document.getElementById('itemN').value;
    const num = document.getElementById('Quan').value;
    const arr =[document.getElementById('op1'),document.getElementById('op2'),document.getElementById('op3')];

    if( arr[0].checked)
    {const type = document.getElementById('op1').value;}
    else if( arr[1].checked)
    {const type = document.getElementById('op2').value;}
    else ( arr[2].checked)
    {const type =document.getElementById('op3').value;;}

var newitem =new purchase (name,type,num);
newitem.price();
newitem.render();
}



function purchase(name,category,quantity){
 
    this.name=name;
    this.category=category;
    this.quantity=quantity;
    purchase.all.push(this);
    this.price=function(){
        return getRndInteger(350,750);

    };


}
purchase.all=[];


var product1= new purchase ("iphone",'mobile',11);
var product2 =new purchase ('sony','mobile',11);
var product3 =new purchase ('samsung','mobile',11);
product1.price();
product2.price();
product3.price();
product1.render();
product2.render();
product3.render();

// random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
 }
function setItem ()
 {

    const itemArr = JSON.stringify(purchase.all);
    const storageItem = localStorage.setItem("items",itemArr);
 }
function getItem (){
 const returnItem = localStorage.getItem('items');
 if(returnItem){
     const re2 = JSON.parse(returnItem);
 }


 }
function createHeader(){

    const firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    let headerRow = document.createElement('th');

    firstRow.appendChild(headerRow);
    headerRow.textContent="Device name";

    let headerRow2 = document.createElement('th');
    firstRow.appendChild(headerRow2);
    headerRow2.textContent="quantity";

    let headerRow3 = document.createElement('th');
    firstRow.appendChild(headerRow3);
    headerRow3.textContent="unit price";

    let headerRow4 = document.createElement('th');
    firstRow.appendChild(headerRow4);
    headerRow4.textContent="category";


}
createHeader();
purchase.prototype.render = function(){

    let secRow = document.createElement('tr');
    table.appendChild(secRow);
    for (let i =0;i<purchase.all.length;i++){
let  rowData = document.createElement('td');
secRow.appendChild(rowData);
rowData.textContent=this.purchase.all.name[i];
let  rowData1 = document.createElement('td');
secRow.appendChild(rowData1);
rowData1.textContent=this.purchase.all.quantity[i];
let  rowData2 = document.createElement('td');
secRow.appendChild(rowData2);
rowData2.textContent=this.purchase.all.price[i];
let  rowData3 = document.createElement('td');
secRow.appendChild(rowData3);
rowData3.textContent=this.purchase.all.category[i];
}
}

function creatFooter(){
 const total=0;
 const footerrow = createElement('tr');
 table.appendChild(footerrow);
 let data = createElement('td');
 footerrow.appendChild(data);
 data.textContent="Total";
 
 for(let i =0;i <purchase.all.length;i++)
 {
    total+=purchase.all.price[i];
 }
 let data2 = createElement('td');
 footerrow.appendChild(data);
data2.textContent=total;
 

}
creatFooter();
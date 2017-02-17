function person(firstname,lastname,age,eyecolor)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;

this.newlastname=newlastname;
}

function newlastname(new_lastname)
{
this.lastname=new_lastname;
}

personObj=new Object();
personObj.firstname="John";
personObj.lastname="Doe";
personObj.age=50;
personObj.eyecolor="blue";
var myFather=new person("John","Doe",50,"blue");

myFather.newlastname("Hui");
document.write(myFather.lastname);

/* 
author:	 salmanff
License: MIT License (with attribution)

This is a simplified jlos microlibrary ...
jlos makes it easy to create json data structures and use the browser's "local storage" to store the data

Simple Usage:
-------------
var myVar = new jlos('dataStructName',{'valueAtInit':{'hello':'world'}}); // new local storage entity is created as 'jlos-data-dataStructName' with initial value {'hello':'world'}
myVar.data.foo = "bar";				// IMPORTANT: ALL values set in myVar.data (other wise they wont be saved)
myVar.save();						// saves the changes to local storage

var thisWorks;
thisWorks = (myVar.data.hello == "world"? true: false);
thisWorks = (myVar.data.foo == "bar"? true: false);


myVar = null;						// just to show myVar is disassociated from jlos structure
var anotherVar = new jlos('dataStructName'); // jlos data structure names are unique.. so creating a new variable to point to the jlos actually points to the same datastructure
thisWorks = (anotherVar.data.hello == "world"? true: false);
thisWorks = (anotherVar.data.foo == "bar"? true: false);

var jlosName = anotherVar.name // the data structure's name can always be accessed like this


// just be careful not to have two variables pointing to the same jlos and making changes to it...

*/

function jlos(name, options) {
  this.name = name;
  this.initialize(options);
}


jlos.prototype.initialize = function (options) {
 this.meta = options? {'options': options} : {'options':null};
 if (localStorage["jlos-data-"+this.name] && localStorage["jlos-data-"+this.name].length>0){
	this.data = JSON.parse(localStorage["jlos-data-"+this.name]);
 } else if (options && options.valueAtInit) {
	this.data = options.valueAtInit; 
 } else {
	this.data = {};
 }
};

jlos.prototype.save = function () {
	// saves the data in local storage
	localStorage["jlos-data-"+this.name]= JSON.stringify(this.data); 
};

jlos.prototype.remove = function () {
	// removes local storage item and deletes the data
	localStorage.removeItem("jlos-data-"+this.name);
	this.data=null;
};


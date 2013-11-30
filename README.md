jlos
====

JSON Local Storage 


This is a simple microlibrary allowing you to store JSON data structures in web browser local storage.


Example Usage
-------------
var myVar = new jlos('dataStructName',{'valueAtInit':{'hello':'world'}}); // new local storage entity is created as 'jlos-data-dataStructName' with initial value {'hello':'world'}
myVar.data.foo = "bar";	// IMPORTANT: ALL values set in myVar.data (other wise they wont be saved)

var thisWorks;  // the following returns true
thisWorks = (myVar.data.hello == "world"? true: false);
thisWorks = (myVar.data.foo == "bar"? true: false);

myVar.save();						// saves the changes to local storage

myVar = null;						// just to show myVar is disassociated from jlos structure
var anotherVar = new jlos('dataStructName'); // jlos data structure names are unique.. so creating a new variable to point to the jlos actually points to the same datastructure
thisWorks = (anotherVar.data.hello == "world"? true: false);
thisWorks = (anotherVar.data.foo == "bar"? true: false);

var jlosName = anotherVar.name // the data structure's name can always be accessed like this


 
author:	 salmanff
License: MIT License (with attribution)


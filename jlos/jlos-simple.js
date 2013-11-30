
/* 
This is a simplified jlos file, without using the filesystem for archiving data.
See jlos.js for more comprehensive file system related futionality...


NB Updated on march 12:
- removed escaping of data storage
- added 'valueAtInit' option
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
	localStorage["jlos-data-"+this.name]= JSON.stringify(this.data); 
};

jlos.prototype.remove = function () {
 localStorage.removeItem("jlos-data-"+this.name);
 this.data=null;
};


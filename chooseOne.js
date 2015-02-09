//Andrew Klump
//February 2015
//THis is a console version of the dice roller adapted from Capouch's student picker




//var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

var courses = { "Die1": ['1','2','3','4','5','6'], "Die2": ['1','2','3','4','5','6'], "Die3": ['1', '2', '3', '4', '5', '6'], "Die4": ['1','2','3','4','5','6']}
 

function chooseOne(course) {
  var thisClass = courses[course];

  var n = thisClass.length;
  var which = Math.floor(Math.random() * n);

  print('Chosen: ' + thisClass[which]);
}


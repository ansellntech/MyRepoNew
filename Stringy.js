/* This File Has String Relatesd Functios */
/// <summary>
/// <h1>List of Class Methods</h1>
/// <ul>
///   <li>String.str(obj) - returns a String Representention of a Object</li>
///   <li>.len(str) - returns a String.lenght</li>
///   <li>.ucase(str) - returns a String in Uppercase (EX: QWERTY)</li>
///   <li>.lcase(str) - returns a String in Lower Case (EX: qwerty)</li>
///   <li>.fucase(str) - return first letter of a string in uppercase</li>
///   <li>.efucase(str) - return first letter of each string in a given word to UpperCase</li>
/// </ul>
///</summary>
var Stringy = {
  str : function(obj){
    return new Object().toString(obj);
  },
  len: function(str){
    return str.length;
  },
  ucase : function(str){
    return String.prototype.toUpperCase(str);
  },
  lcase : function(str){
    return String.prototype.toLowerCase(str);
  },
  fucase : function(str){
    return Stringy.ucase(str[0])+str.slice(1,str.length-1);
  },
  efucase : function(str){
    var word = '';
    var words = str.split(" ");
    for(i in words){
      word += Stringy.fucase(words[i]);
    }
    return word;
  }
};

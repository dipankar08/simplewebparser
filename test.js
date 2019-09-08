str = "   \n\n    dip   \n\ndip    "
console.log(str)

str = str.replace(/\s+/g, " ");
str = str.replace(/[\r\n]+/g, '\n'); 
str = str.trim()
console.log('>>>'+str)
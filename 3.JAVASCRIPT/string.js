let password = "Adarsh@#*5342";

console.log(typeof password);

// 1.lowercase all characters
console.log(password.toLocaleLowerCase()); 

// 2. for upper case
console.log(password.toLocaleUpperCase());

// 3.How do I check if string contains some characters.
console.log(password.includes("42"));

// 4.How do I find index of a character in string. find position of character
console.log(password.indexOf("*"));

// 5.// 5. How do i check if string ends with some characters.
console.log(password.endsWith("53"));
console.log(password.endsWith("42"));


let empname="raviraj";
console.log(empname.indexOf("v", 3));
console.log(empname.indexOf("a", 3));

// replace character
console.log(empname.replace("raj","kiran"));
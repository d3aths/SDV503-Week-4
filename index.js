let x = 3

if (x === 5) {
    console.log ("x is equal to 5")
  } else if (x === 3) {
    console.log ("x is equal to 3") 
  }

  const a = {isHavingFun: true}
  const b = {isHavingFun: true}
  console.log (a === b)
  console.log (a == b) //they are both false cause one is "a" and the other is "b", doesnt matter if values are the same

  const c = { isHavingFun: true } 
  const d = c
  console.log (c === d) //true because same reference


  const hasApples = 'true'
  
  if (hasApples) { 
    // Eat apple 
  } else { 
    // Buy apples 
  }

  const person1 = 'Joe';  //sets unchangeable variable
switch (person1) {
  case 'Jane': //for each case, the code checks if it matches the value in person
    console.log('Hi Jane'); //if person is found to be Jane, will say hi
    break; //stops the rest of the code running if the statement finds correct match
  case 'John':
    console.log('Hi John');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
  default: //if the correct value in person is not found in the switch statement, displays default message
    console.log('Hi');
    break;
}


const foo = 1;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');  //gives this message if variable matches any of the multiple cases of these numbers
    break;  //so this can be one line of code pretty much, all 4 are part of one check
  case -1:
  case -2:
    console.log('I love this number');  //gives this if it matches the next two
    break;
  default:
    console.log('I don\'t like this number.');  //if none of the cases match
}


const abc = 1;
let output = '';  //leaves output empty so each case can add onto the final result
switch (abc) {   //in this first block of cases, it adds on more to the output string after each case
  case 0:
    output += 'So ';  //we get output of different text that starts depending on what number abc variable is
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}


const person = 'Joe';
switch (person) {
  case 'Jane': {    //each case here must be enclosed in code brackets to be able to us the "let name" variable
    let name = 'Jane';  //otherwise it will get errors
    console.log(name);  //so each case the switch goes through is checking for the name, once it finds the correct name from the "const person", it assigns to let name, then outputs name into console
    break;
  }
  case 'John': {
    let name = 'John';
    console.log(name);
    break;
  }
  case 'Joe': {
    let name = 'Joe';
    console.log(name);
    break;
  }
  case 'Mary': {
    let name = 'Mary';
    console.log(name);
    break;
  }
  default: {
    console.log('No name');
    break;
  }
}
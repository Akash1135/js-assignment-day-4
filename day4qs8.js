/* Javascript Essentials | Batch 1Question 7:An integer number greater than 1 is called a ​prime​ if it cannot be divided without a remainder by anythingexcept 1 and itself.In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.Write the code which outputs prime numbers in the interval from 2 to n.For n = 10 the result will be 2,3,5,7.P.S. The code should work for any n, not be hard-tuned for any fixed valueQuestion 8:Replace Function Expressions with arrow functions in the code below:
*/
/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
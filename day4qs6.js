/*Rewrite the function using '?' or '||'Write a loop which 
rompts for a number greater than 100. If the visitor enters
 another number – ask themto input again.The loop must ask
  for a number until either the visitor enters a number
   greater than 100 or cancels theinput/enters an empty
    line.Here we can assume that the visitor only inputs
     numbers. There’s no need to implement a 
     specialhandling for a non-numeric input in this task.*/


     let num;

     do {
       num = prompt("Enter a number greater than 100?", 0);
     } while (num <= 100 && num);
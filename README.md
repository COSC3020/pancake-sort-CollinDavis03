# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

## Answer 
Looking at this code we know that the code has to scan through the code and with that each iteration would be $O(n)$ for the comparisons of each pass. 

With the passes, we have to perform that on every element that we have in the array and reduce the size by 1. This would come out to be $n$. 

Combining these it would come out to be $O(n^2)$ as the worst-case scenario and then the best-case scenario would be $O(n)$. This would only happen if it was to be linear and found at the start of the array. 

## Sources
I looked at Cian Melker and Caden's code to get an idea of how to do the pancake sort code because I was struggling with that at the start. I looked over it to get a better understanding of their code and then wrote it on my own in VS code. I also asked Nolan for his reference on the runtime analysis because I wanted to make sure that I was doing the runtime analysis code right. 

## Plagarism Statement
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”


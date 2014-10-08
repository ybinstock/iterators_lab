# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

higher order functions are functions that either pass in a function or output a function


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max': returns the maximum value in a list.
* `min`: returns the minumum value in a list.
* `each`: iterates over each value and does the function of the parameter for each one
* `map`: like each, but returns a new array.
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Iterates through each value in the list, returning an array of all the values that pass a truth test
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). Iterates over an array and turns it into one accumulated value.
* `reject`: [note](http://underscorejs.org/#reject). the opposite of filter. returns the values in list without the elements in the truth test

Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).


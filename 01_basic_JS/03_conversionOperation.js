/*
ToPrimitive
Undefined -> The result equals the input argument (no conversion).
Null ->	The result equals the input argument (no conversion).
Boolean	-> The result equals the input argument (no conversion).
Number-> The result equals the input argument (no conversion).
String-> The result equals the input argument (no conversion).
Object	-> Return a default value for the Object. The default value of an object is retrieved by calling the internal [[DefaultValue]] method of the object, passing the optional hint PreferredType. The behaviour of the [[DefaultValue]] method is defined by this specification for all native ECMAScript objects (8.6.2.6).

9.2 ToBoolean ->The operator ToBoolean converts its argument to a value of type Boolean according to the following table:
Undefined -> 	false
Null-> false
Boolean	-> The result equals the input argument (no conversion).
Number-> The result is false if the argument is +0, -0, or NaN; otherwise the result is true.
String-> 	The result is false if the argument is the empty string (its length is zero); otherwise the result is true.
Object	true

9.3 ToNumber
The operator ToNumber converts its argument to a value of type Number according to the following table:
Input Type	Result
Undefined-> 	NaN
Null	-> +0
Boolean	-> The result is 1 if the argument is true. The result is +0 if the argument is false.
Number-> The result equals the input argument (no conversion).
String	-> See grammar and note below.


Object	Apply the following steps:
1. Call ToPrimitive(input argument, hint Number).

2. Call ToNumber(Result(1)).

3. Return Result(2).
*/


let name = "Priya";
console.log(Number(name)); // Resutl is NaN

let num = 123;
console.log(String(num)) // converted to string


/********************************Operators**********************************/

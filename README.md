# qr-decompositiond


# methods

``` js
var decom = require('qr-decomposition')
```
```
var ok = decom(A, E, R)
```
Decompose the matrix `A` into `E` and `R`

`A` is not modified.

If `A` was non-square or the algorithm could not find a solution, `ok` is
`false`. Otherwise `ok` is `true`.





#Example
``` js
var ndarray = require('ndarray');
var zeros = require('zeros');
var show = require('ndarray-show');
var decom = require('qr-decomposition');

var A = ndarray([ 1,1,0,1,0,1,0,1,1 ], [ 3, 3 ]);
var E = zeros([ 3, 3 ]);
var R = zeros([ 3, 3 ]);

decom(A, E, R);
console.log('L=\n' + show(E));
console.log('U=\n' + show(R));
```

output:

```
E=

 0.7071    0.4082   -0.5723
 0.7071   -0.4082    0.5723
 0.0000    0.8164    0.5723
 ```
 ```
 R=
 
 1.4141   0.7071   0.7071
 0.0000   1.2242   0.4082
 0.0000   0.0000  1.1547
 ```

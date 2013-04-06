Concentrate
===========

Produce binary data with a neat DSL.

Overview
--------

Concentrate allows you to efficiently create buffers by chaining together calls
to write numbers, strings and even other buffers! Concentrate is also easily
extendable so you can implement your own custom types.

If you want to parse binary data, might I suggest [dissolve](https://github.com/deoxxa/dissolve)?

Features
--------

* Accurate handling of [u]int{8,16,32} numbers in both signed and unsigned
  variants using fast, built-in [Buffer](http://nodejs.org/docs/latest/api/buffer.html)
  methods
* Fast and reliable operation through lazy compilation of results
* Tiny (<150 LoC) implementation, allowing for easy debugging

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install concentrate

Or via git:

> $ git clone git://github.com/deoxxa/concentrate.git node_modules/concentrate

Usage
-----

Also see [example.js](https://github.com/deoxxa/concentrate/blob/master/example.js) and
[example-complex.js](https://github.com/deoxxa/concentrate/blob/master/example-complex.js).

```javascript
#!/usr/bin/env node

var Concentrate = require("./index");

var data = Concentrate().uint8(1).uint8(2).uint32be(555).string("hi there", "utf8").result();

console.log(data);
```

Methods
-------

All methods aside from `result` are chainable and all except `copy` return the
same Concentrate instance they were called on.

Execution Methods
-----------------

* `copy()` - returns a new copy of the current Concentrate instance, copying the
  state of the current job list
* `reset()` - resets the job list
* `result()` - compiles the job list into a buffer and returns that buffer

Writing methods
---------------

* `buffer(data)`
* `string(data, encoding)` - write a string with the given encoding
* `int8(data)` - signed 8 bit integer
* `sint8(data)` - signed 8 bit integer
* `uint8(data)` - unsigned 8 bit integer
* `int16(data)` - signed, little endian 16 bit integer
* `int16le(data)` - signed, little endian 16 bit integer
* `int16be(data)` - signed, big endian 16 bit integer
* `sint16(data)` - signed, little endian 16 bit integer
* `sint16le(data)` - signed, little endian 16 bit integer
* `sint16be(data)` - signed, big endian 16 bit integer
* `uint16(data)` - unsigned, little endian 16 bit integer
* `uint16le(data)` - unsigned, little endian 16 bit integer
* `uint16be(data)` - unsigned, big endian 16 bit integer
* `int32(data)` - signed, little endian 32 bit integer
* `int32le(data)` - signed, little endian 32 bit integer
* `int32be(data)` - signed, big endian 32 bit integer
* `sint32(data)` - signed, little endian 32 bit integer
* `sint32le(data)` - signed, little endian 32 bit integer
* `sint32be(data)` - signed, big endian 32 bit integer
* `uint32(data)` - unsigned, little endian 32 bit integer
* `uint32le(data)` - unsigned, little endian 32 bit integer
* `uint32be(data)` - unsigned, big endian 32 bit integer
* `floatbe(data)` - big endian 32 bit float
* `floatle(data)` - little endian 32 bit float
* `doublebe(data)` - big endian 64 bit double
* `doublele(data)` - little endian 64 bit double

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* ADN ([@deoxxa](https://alpha.app.net/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))

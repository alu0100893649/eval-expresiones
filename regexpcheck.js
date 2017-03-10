#!/usr/bin/env node 
"use strict";

let util = require("util");

console.log(` 
EJERCICIO 1:
Escriba una expresión regular que reconozca las cadenas de doble
comillas. Debe permitir la presencia de comillas y caracteres
escapados. Pruebe con '"hello \"world\" and ... "'
    `);
function check(strings, reg) {
  strings.forEach((s) => {
    let m = s.match(reg);
    console.log(`INPUT: ${s}:\n  MATCH: ${util.inspect(m)}`);
  });
}

// solución de prueba

let r = /"[^"\\]*"/g;
check([
    '25',
    '43 "hello world" 57',
    '"hello" y "world"',
    'hola "mundo"', 
    '"hello \"world\" and ... "'
    ], r);

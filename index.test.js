const test = require('tape')
const index = require('./index')

test('Teste 1', (t) => {
    t.assert(index.dolarParaReais(10) === 51.01,
    "Converteu corretamente")
    t.end()
})

const test = require('tape')
const index = require('./index')

test('Teste 2', (t) => {
    t.assert(index.maiorNumero(10,83,70) === 83,
    "Maior numero correto")
    t.end()
})


const test = require('tape')
const index = require('./index')

test('Teste 3', (t) => {
    t.assert(index.fahrenheitParaCelsius(100) === 50,
    "Transferiu para Celsius corretamente")
    t.end()
})


const test = require('tape')
const index = require('./index')

test('Teste 4', (t) => {
    t.assert(index.bilheteria(10,12,120) === 120,
    "Os dados não conferem")
    t.end()
})


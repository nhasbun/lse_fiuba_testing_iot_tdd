/**
 * En una lista vacía hay cero elementos.
 * Cuando se agrega un elemento a una lista vacía hay un elemento.
 * Cuando se agregan dos elementos a una lista vacía hay dos elemento.
 * En una lista vacía no se encuentra ninguna clave.
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 * Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados. ++++
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.

 New,
 * Cuando se agrega un elemento que ya existe al principio, la lista de claves está ordenada
 */

const {assert} = require("chai");
const expect = require("chai").expect;
const Lista = require("../src/lista.js");



describe("lista de pares clave:valor", function(){

    describe("En una lista vacia:", function() {

        var lista = new Lista();

        it("=> hay cero elementos almacenados", function() {
            console.log(lista.count());
            assert.equal(lista.count(), 0);
        })

        it("=> no se encuentra ninguna clave", function() {
            assert.isNaN(lista.find("clave"));

        })
    })

    describe("Cuando se agrega a una lista vacía un elemento: ", function() {

        var lista = new Lista();
        lista.add("some_key", "some_value")

        it("=> hay un elemento", function() {

            assert.equal(lista.count(), 1);
        })

        it("=> se recupera su clave", function() {
            var some_value = lista.find("some_key");
            assert.equal(some_value, "some_value");
        })

        it("=> la lista de claves está ordenada", function() {

            var keys = lista.get_keys();
            assert.equal(keys[0], "some_key");
        })
    })

    describe("Cuando se agrega a una lista vacía dos elementos: ", function() {

        var lista = new Lista();
        lista.add("a", "a");
        lista.add("b", "b");

        it("=> hay dos elementos", function() {
            assert.equal(lista.count(), 2);
        })
    })

    describe("Cuando se agrega una clave que ya está en la lista: ", function() {

        var lista = new Lista();
        lista.add("some_key", "some_value");
        lista.add("some_key", "new_value");


        it("=> se actualiza el valor correspondiente", function() {
            var value = lista.find("some_key");
            assert.equal(value, "new_value");
        })

        it("=> no cambia la cantidad de elementos almacenados", function() {
            assert.equal(lista.count(), 1);
        })
    })

    describe("Cuando se agrega un elemento al principio: ", function() {

        var lista = new Lista();
        lista.add("some_b_key", "some_value");
        lista.add("some_c_key", "some_value");

        it("=> la lista de claves está ordenada", function() {
            lista.add("some_a_key", "first_value");

            var keys = lista.get_keys();
            assert.equal(keys[0], "some_a_key");
        })
    })

    describe("Cuando se agrega un elemento al final: ", function() {
        var lista = new Lista();
        lista.add("some_a_key", "some_value");
        lista.add("some_b_key", "some_value");

        it("=> la lista de claves está ordenada", function() {
            
            lista.add("some_z_key", "last_value");

            var keys = lista.get_keys();
            assert.equal(keys[2], "some_z_key");
        })
    })

    describe("Cuando se agrega un elemento que ya existe al principio: ", function() {

        var lista = new Lista();
        lista.add("some_key", "some_value");
        lista.add("some_key2", "some_value2");

        it("=> la lista está ordenada", function() {
            lista.add("some_key2", "new_value2");

            var keys = lista.get_keys();
            assert.equal(keys[0], "some_key");
            assert.equal(keys[1], "some_key2");
        })
    })

})

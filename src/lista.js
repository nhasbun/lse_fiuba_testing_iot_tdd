/*
* @Author: Nicolás Hasbún A.
* @Date:   2022-03-16 20:02:50
* @Last Modified by:   nhasbun
* @Last Modified time: 2022-03-17 01:45:41
*/

module.exports = class Lista {

    #elements;

    constructor() {
        this.#elements = [];
    }

    index(key) {
        for (var i = 0; i < this.#elements.length; i++) {

            var stored_key = this.#elements[i].key;

            if (stored_key == key){
                return i;
            }
        }

        // If key not in elements
        return -1;
    }

    count() {
        // console.log('Elements %o', this.#elements);
        return this.#elements.length;
    }

    find(key) {

        var key_index = this.index(key);

        if (key_index == -1) {
            return NaN
        }

        else {
            return this.#elements[key_index].value;
        }
    }

    add(key, value) {

        var key_index = this.index(key);

        if (key_index == -1) {
            // key doesn't exists, we push a new one
            this.#elements.push({key, value});
        }

        else {
            // we update value
            this.#elements[key_index].value = value;
        }
    }

    add_first(key, value) {
        var key_index = this.index(key);

        if (key_index > -1) {
            // key exists, we remove existing key:pair element
            this.#elements.splice(key_index, 1);
        }

        // key doesn't exists, we push first a new one
        this.#elements.unshift({key, value});
    }
}
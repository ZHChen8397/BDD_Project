"use strict";
var PythonShell = require('python-shell');
var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;
var assert = require('assert');

module.exports = (function() {

    var wall;
    var dictionary = new Dictionary().define('NUM', /(\d+)/);
    var library = English.library(dictionary)

    .given("a $NUM foot wall", function(height) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                var options = {
                    scriptPath: './pyforJS'
                    };
                    var pyshell = new PythonShell('cam.py',options);
              
                    pyshell.on('message', function (result) {
                        console.log('innnnnnnn here')
                        if(result) resolve(result)
                        else reject(result)
                    });
            }, 100);
        })
    })

    .given("$NUM green bottles are standing on the wall", function(number_of_bottles) {
        return new Promise(function(resolve, reject) {
            resolve(true)
        });
    })

    .when("$NUM green bottle accidentally falls", function(number_of_falling_bottles) {
        return new Promise(function(resolve, reject) {
            resolve(true)
        });
    })

    .then("there (?:are|are still) $NUM green bottles standing on the wall", function(number_of_bottles) {
        return new Promise(function(resolve, reject) {
            assert(true)
        });
    });

    return library;
})();
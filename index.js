/* jslint node: true */
/* global featureFile, scenarios, steps */
"use strict";

var path = require('path');
var Yadda = require('yadda');
Yadda.plugins.mocha.StepLevelPlugin.init();
new Yadda.FeatureFileSearch('./test/unit/features').each(function(file) {

    featureFile(file, function(feature) {

        var library = require('./test/unit/steps/bottle.js');
        var yadda = Yadda.createInstance(library);

        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step, done) {
                yadda.run(step, done);
            });
        });
    });
});

// new Yadda.FeatureFileSearch('./test/unit/features').each(function(file) {
//     // console.log(file)
//     featureFile(file, function(feature) {

//         var libraries = require_feature_libraries(feature);
//         var yadda = Yadda.createInstance(libraries);

//         scenarios(feature.scenarios, function(scenario) {
//             steps(scenario.steps, function(step) {
//                 yadda.run(step);
//             });
//         });
//     });
// });

// function require_feature_libraries(feature) {
//     // console.log(`feature ${JSON.stringify(feature,null,2)}`)
//     return feature.annotations.step.split(', ').reduce(require_library, []);
// }

// function require_library(libraries, library) {
//     return libraries.concat(require('./test/unit/steps/' + library));
// }
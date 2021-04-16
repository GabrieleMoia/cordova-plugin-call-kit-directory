var exec = require('cordova/exec');

exports.addIdentifiers = function (arg0, success, error) {
    exec(success, error, 'cordova-plugin-call-kit-directory', 'addIdenfiers', [arg0]);
};

exports.removeIdenfiers = function (arg0, success, error) {
    exec(success, error, 'cordova-plugin-call-kit-directory', 'removeIdenfiers', [arg0]);
};

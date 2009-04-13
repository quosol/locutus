function runkit_class_emancipate (classname) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
	// %          note 1: Function can only obtain classes from the global context
	// %          note 2: We have to delete all items on the prototype
    // *     example 1: function A () {}
    // *     example 1: A.prototype.methodA = function () {};
    // *     example 1: function B () {}
    // *     example 1: runkit_class_adopt('B', 'A');
    // *     example 1: runkit_class_emancipate('B');
    // *     returns 1: true

    if (typeof window[classname] !== 'function') {
        return false;
    }

    for (var p in window[classname].prototype) {
        delete window[classname].prototype[p];
    }
    return true;
}
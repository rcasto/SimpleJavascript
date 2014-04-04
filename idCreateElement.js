// demonstrates that you are able to modify pre-existing objects

// here we add a function to the document object that allows you to create an element an automatically
// assign it an id of your choosing

document.createElementId = function (tagname, id) {
    if (!tagname || !id) {
        console.log("no");
        return;
    }
    var element = document.createElement(tagname);
    element.id = id;
    return element;
};
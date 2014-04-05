var TEST_CONTAINER = "testResults";

function getTestResultContainer(id) {
    return document.getElementById('testResults');
}

function createTestResultEntry(result, desc) {
    var testResult = document.createElement('li');
    testResult.className = result ? 'pass' : 'fail';
    testResult.appendChild(document.createTextNode(desc));
    return testResult;
}

/*
    This method asserts that the input expression is true
    expr - expression that evaluates to true or false
    desc - description of the assertion being tested
*/
function assertTrue(expr, desc) {
    var testResultList = getTestResultContainer(TEST_CONTAINER);
    var testResult = createTestResultEntry(expr, desc);
    testResultList.appendChild(testResult);
}

/*
    This method asserts that the input expression is false
    expr - expression that evaluates to true or false
    desc - description of the assertion being tested
*/
function assertFalse(expr, desc) {
    var testResultList = getTestResultContainer(TEST_CONTAINER);
    var testResult = createTestResultEntry(!expr, desc);
    testResultList.appendChild(testResult);
}

/*
    A TestSuite is essentially a collection of tests
*/
function TestSuite() {
    this.tests = [];
}

// Inject a test list into document body, to show test results
window.onload = function () {
    var ul = document.createElement('ul');
    ul.id = TEST_CONTAINER;

    ul.appendChild(document.createTextNode('Test Results'));

    document.body.appendChild(ul);

    // Some example tests
    assertTrue(1 === 1, "testing that 1 = 1");
    assertTrue(1 + 1 === 3, "testing should fail");

    assertFalse(1 === 2, "Should pass");
    assertFalse(2 + 2 === 4, "Should not pass");

    // Actual example test
    assertTrue(document.getElementById('testResults'), "Verify that testResults list is present");
};
function getFullName(fname, lname) {
    let name = `${fname} ${lname}`;
    sendToWeb(name);
}

function calculateVals(val1, val2) {
    let val = val1+val2;
    sendToWeb(val);
}

function testFunc() {
    sendToWeb("Called test function");
}

function sendToWeb(data) {
    window.postMessage(JSON.stringify(data));
  }


window.testFunc2 = () => {
    return "Called test function2"
}

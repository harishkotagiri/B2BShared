function getFullName(fname, lname) {
    let name = `${fname} ${lname}`;
    sendToMobile(name);
}

function calculateVals(val1, val2) {
    let val = val1+val2;
    sendToMobile(val);
}

function sendToMobile(data) {
    window.ReactNativeWebView.postMessage(data);
  }

  // For Web

window.getFullName = (fname, lname) => {
    return `${fname} ${lname}`;
}

window.calculateVals = (val1, val2) => {
    return val1+val2;
}

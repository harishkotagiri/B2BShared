function getFullName(fname, lname) {
    let name = `${fname} ${lname}`;
    let data = {type: 'Response from External JS:', name};
    sendToMobile(data);
}

function calculateVals(val1, val2) {
    let val = val1+val2;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function sendToMobile(data) {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}

  // For Web

window.getFullName = (fname, lname) => {
    return `${fname} ${lname}`;
}

window.calculateVals = (val1, val2) => {
    return val1-val2;
}

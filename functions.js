import init, { greet } from "./pkg/hello_wasm.js"

init().then(() => {
  //change global variable value
  window.isReady = true;
});

function runCode(){
  console.log("WASM loaded and ready: " + window.isReady);
  if (window.isReady == true){
    let inputField = document.getElementById("myTextInput");
    let value = inputField.value;
    console.log("The input: " + value);
    greet(value);
  } else {
    alert("WebAssembly doesn't seem to be working on your browser...");
  }
}
window.runCode = runCode;

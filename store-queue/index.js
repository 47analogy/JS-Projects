let count = 100;
const line = [];


document.getElementById("serving").innerHTML = count;
document.getElementById("pickup").onclick = () => addToQueue(count);
document.getElementById("return").onclick = () => addToQueue(count);
document.getElementById("question").onclick = () => addToQueue(count);
const nextButton = document.querySelector("#next");

function addToQueue() {
  count++;
  line.push(count);
  document.getElementById("line").innerHTML = line;
  nextButton.onclick = () => removeFromQueue();
}

function removeFromQueue() {
  const nextCustomer = line.shift();
  serving.innerHTML = nextCustomer;
  
  if (line.length < 1) { // last customer in line
    nextButton.onclick = null;
  }
  document.getElementById("line").innerHTML = line;
}
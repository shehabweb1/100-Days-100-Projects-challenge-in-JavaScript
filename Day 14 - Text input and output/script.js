function textEdit() {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
  return text;
}
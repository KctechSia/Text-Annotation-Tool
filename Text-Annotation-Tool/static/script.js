let annotations = [];

function annotateSelection(label) {
  const textarea = document.getElementById("inputText");
  const text = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  if (start === end) {
    alert("Please select some text to annotate.");
    return;
  }

  const selectedText = text.slice(start, end);

  annotations.push({
    entity: selectedText,
    start: start,
    end: end,
    label: label
  });

  alert(`Annotated "${selectedText}" as ${label}`);
}

document.getElementById("submitBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;

  const response = await fetch("/annotate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text, annotations: annotations })
  });

  const result = await response.json();
  document.getElementById("outputArea").textContent = JSON.stringify(result, null, 2);
});

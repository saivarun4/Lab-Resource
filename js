document.getElementById('copyCodeBtn').addEventListener('click', function() {
    var codeElement = document.getElementById('codeSnippet');
    var code = codeElement.textContent;

    var textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Code copied to clipboard!');
});

document.getElementById('copyOutputBtn').addEventListener('click', function() {
    var outputElement = document.getElementById('outputResult');
    var output = outputElement.textContent;

    var textarea = document.createElement('textarea');
    textarea.value = output;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Output copied to clipboard!');
});

// Assume you have a function to run your code and get the output, for example:
function runCode() {
    // Your code logic here
    // For example:
    var output = "Output of your code goes here";
    document.getElementById('outputResult').textContent = output;
}

// Call the runCode function to display the output
runCode();


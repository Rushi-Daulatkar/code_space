
    function copyCode() {
        /* Get the text content of the code element */
        var codeText = document.getElementById("code").textContent;

        /* Create a textarea element to hold the code text */
        var textarea = document.createElement("textarea");
        textarea.value = codeText;

        /* Append the textarea to the body */
        document.body.appendChild(textarea);

        /* Select the text in the textarea */
        textarea.select();
        textarea.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text to the clipboard */
        document.execCommand("copy");

        /* Remove the textarea from the body */
        document.body.removeChild(textarea);

        /* Provide visual feedback (optional) */
        alert("Code copied to clipboard!");
    }

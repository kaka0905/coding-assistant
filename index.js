// import autosize from 'autosize';
// import $ from 'jquery';
// import * from './main';

document.addEventListener('DOMContentLoaded', function() {
    autosize(document.querySelectorAll('#code'));
}, false);

function explainCode() {
    // Get the code from the code editor
    var code = document.getElementById("code").value;

    // Make HTTP request to GPT API
    $.ajax({
        url: "https://api.openai.com/v1/chat/completions",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <YOUR-API-KEY>"
        },
        data: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Explain the following code: \n" + code}],
            "temperature": 0.7
        }),
        success: function(response) {
            // Display the response in the response div
            var explain = response['choices'][0]['message']['content']
            document.getElementById("response").innerText = explain;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        }
    });
}

function extract(){
    // Get the code from the code editor
    var code = document.getElementById("code").value;

    // Make HTTP request to GPT API
    $.ajax({
        url: "https://api.openai.com/v1/chat/completions",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <YOUR-API-KEY>"
        },
        data: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Extract the assumptions in the following code: \n" + code}],
            "temperature": 0.7
        }),
        success: function(response) {
            // Display the response in the response div
            var explain = response['choices'][0]['message']['content']
            document.getElementById("response").innerText = explain;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        }
    });
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}

function reference(){
    // Get the code from the code editor
    var code = document.getElementById("code").value;

    // Make HTTP request to GPT API
    $.ajax({
        url: "https://api.openai.com/v1/chat/completions",
        type: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <YOUR-API-KEY>"
        },
        data: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Show: with a public web link and exact confidence level percentage in seperate lines,  a similar code reference to: \n" + code}],
            "temperature": 0.7
        }),
        success: function(response) {
            // Display the response in the response div
            var explain = response['choices'][0]['message']['content']
            document.getElementById("response").innerText = explain;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        }
    });
}
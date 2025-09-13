
let contentArea = document.querySelector(".text-area");
let prompt = document.querySelector("#prompt");
let btn = document.querySelector(".btn");


let url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
let apiKey = "AIzaSyAHSU1ICtcebQxfPR5oTKZM4F5V9fFZVMg";
async function ai(promptText) {
    let response = await fetch(`${url}?key=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [
                { parts: [{ text: promptText }] }
            ]
        })
    });
    let data = await response.json();
    contentArea.innerText = data.candidates[0].content.parts[0].text;
    prompt.value = "";
}



function getResponse(){
    let text = prompt.value;
    ai(text);
    
    
}


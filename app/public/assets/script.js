//*** POST request on form submission **************************************************//
document.querySelector("#survey").addEventListener("submit", (e) => {
    //Prevent reload:
    e.preventDefault();

    //Save your answers into a profile object:
    const yourProfile = {
        name: document.querySelector('#name').value,
        photo: document.querySelector('#pic-link').value,
        scores: []
    }
    //Loop through all questions and push their responses to the scores property of yourProfile:
    for (let i = 1; i <= 10; i++) {
        yourProfile.scores.push(parseInt(document.querySelector(`input[name="q${i}"]:checked`).value))
    }

    //Make a POST request with the yourProfile object:
    const xhr = new XMLHttpRequest();
    xhr.open("POST", '/api/friends', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(yourProfile));
});
//**************************************************************************************//  
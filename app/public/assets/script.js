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

    //Display your profile on the survey page pop-up:
    document.querySelector('#profile-popup').style.display = 'block';
    document.querySelector('#your-name').textContent = yourProfile.name;
    document.querySelector('#your-pic').src = yourProfile.photo;

    //Make a POST request with the yourProfile object:
    fetch('/api/friends', {
        method: 'POST',
        body: JSON.stringify(yourProfile),
        headers:{ 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    //The POST request should return your match. Display the match in the pop-up:
    .then(data => {
        console.log(data);
        document.querySelector('#match-name').textContent = data.name;
        document.querySelector('#match-pic').src = data.photo;
    });
    
});
//**************************************************************************************//  

//Add a listener allowing users to close the profile popup:
document.querySelector('#close-profile').addEventListener('click', (e) => {
    document.querySelector('#profile-popup').style.display = 'none';
});
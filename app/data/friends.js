const fakeScores = () => {
    let scores = [];
    for(let i = 0; i < 10; i++) {
        scores.push(Math.floor(Math.random() * 5) + 1);
    }
    return scores;
}

module.exports = [
    {
        "name": "Ernst Stavro Blofeld",
        "photo": "https://upload.wikimedia.org/wikipedia/en/c/c3/Blofeldpleasance67.jpg",
        "scores": fakeScores()
    }, {
        "name": "Lord Voldemort",
        "photo": "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
        "scores": fakeScores()
    }, {
        "name": "Sauron",
        "photo": "https://upload.wikimedia.org/wikipedia/en/3/3a/Sauron.jpg",
        "scores": fakeScores()
    }, {
        "name": "Dr. Hannibal Lecter",
        "photo": "https://upload.wikimedia.org/wikipedia/en/6/6e/Hannibal_Lecter_in_Silence_of_the_Lambs.jpg",
        "scores": fakeScores()
    }, {
        "name": "Cthulu",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cthulhu_sketch_by_Lovecraft.jpg",
        "scores": fakeScores()
    }, {
        "name": "Professor James Moriarty",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/2/28/Professor_Moriarty_-_The_Final_Problem_-_Sidney_Paget.jpg",
        "scores": fakeScores()
    }, {
        "name": "Count Dracula",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/9/90/Bela_Lugosi_as_Dracula%2C_anonymous_photograph_from_1931%2C_Universal_Studios.jpg",
        "scores": fakeScores()
    }, 
]

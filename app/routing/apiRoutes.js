//Import data from friends.js:
const friendData = require('../data/friends');

//*** Compatability Functions **********************************************************//
const friendDif = (myScores, friendScores) => {
    let totalDif = 0;
    for(let i = 0; i < myScores.length; i++) {
        totalDif += Math.abs(myScores[i] - friendScores[i]);
    }
    return totalDif;
}
const findMatch = (me, friends) => {
    let topMatch= friends[0]; 
    //Loop through each friend and replace topMatch each time a better match is found, so long as it's not the same profile:
    for(let i = 1; i < friends.length; i++) {
        if(friendDif(me.scores, topMatch.scores) > friendDif(me.scores, friends[i].scores)
        && me.name !== friends[i].name) {
            topMatch = friends[i];
        }
    }
    return topMatch;
}
//**************************************************************************************//

//*** Route Exports ********************************************************************//
module.exports = app => {
    app.get('/api/friends', (req, res) => {
        console.log('Received GET request at /api/friends');
        res.json(friendData);
    });
    //On receiving a new friend, push them to the friends array:
    app.post('/api/friends', (req, res) => {
        const topFriend = findMatch(req.body, friendData);
        friendData.push(req.body);
        res.json(topFriend);
    })
}
//**************************************************************************************//

//*** Global Variables and Imports *****************************************************//
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
app.use(express.urlencoded({ 
    extended: true 
}));
app.use(express.json());
app.use(express.static('./app/public'));
//**************************************************************************************//

//*** Local Imports ********************************************************************//
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//**************************************************************************************//

//*** Listener *************************************************************************//
app.listen(PORT, () => {
    console.log("FriendFinder server listening on Port " + PORT);
  });
//**************************************************************************************//  
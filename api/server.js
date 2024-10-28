// create http server and mount the app

import http from "http";
import app from "./src/config/expressConfig.js";

const server = http.createServer(app);

// assigning port values
const port = process.env.PORT || 3001;
server.listen(port, (error) => {
  if (error) {
    console.error("Error starting server");
  } else {
    console.log(`Server started on http://localhost:${port}`);
    console.log("Press Ctrl+C to stop");
  }
});

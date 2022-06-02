const express = require("express");
const userRoutes = require("./routes/userRoute");

const app = express();
app.use("/api/user", userRoutes);

    

app.listen(3000, () => {
    console.log("server running...");
});


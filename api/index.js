const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());
// finding all users
app.get("/users", async (req, res) => {
  try {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);    
  } catch (error) {
    res.status(500).send(error);
  }
});

// finding user by username
app.get("/users/:username", async (req, res) => {
  try {
    const snapshot = await User.where("username", "==", req.params.username).get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/create", async (req, res) => {
  // adding only username and password
  const { username, password } = req.body;
  try{
    await User.add({ username, password });
    res.send("User created");
  } catch(err){
    res.send(err);
  }
});

app.post("/update", async (req, res) => {
  try {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.send({ msg: "Updated" });    
  } catch (error) {
    res.status(500).send(error);    
  }

});

app.post("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({ msg: "Deleted" });    
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(4000, () => console.log("Up & RUnning *4000"));

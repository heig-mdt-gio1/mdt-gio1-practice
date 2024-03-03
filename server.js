import express from 'express';

const app = express();
const port = 3333;

const signedUpUsers = [];

function isUserSignedUp(email) {
    return signedUpUsers.includes(email);
}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/notUsed", (req, res) => {
    const email = req.query.email;
    const available = !isUserSignedUp(email);
    res.json({ available });
});

app.post("/registerUser", (req, res) => {
    if (!req.body) {
        res.status(400).send("Invalid request");
        return;
    }

    const { email, firstname, lastname, phone } = req.body;

    if (isUserSignedUp(email)) {
        res.status(400).send("User already registered");
        return;
    }
    
    signedUpUsers.push(email);
    res.json({ id: signedUpUsers.length, email, firstname, lastname, phone});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

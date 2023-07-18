#!/us/bin/env node

import express, { Request, Response } from 'express';

const app = express();

app.get("/", async (req: Request, res: Response) => {
    res.send("Hi There!")
})


app.listen(3005, () => {
    console.log(`Server is listening on PORT 5002.`);
})
//import express from 'express';
//import mongoose from 'mongoose';
//import Messages from './dbMessages.js';

const express = require("express");
const mongoose = require("mongoose");
const Messages = require("./dbMessages.js");
const Pusher = require("pusher");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const pusher = new Pusher({
  appId: "1104334",
  key: "06c7453f5b7b1e8b9271",
  secret: "6faa9b069dc34aa28cb4",
  cluster: "eu",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors());

// pusher
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change occured", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("message", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});



const connection_url =
  "mongodb+srv://admin:KGafnOvWv5FPBJfM@cluster0.zkfcl.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

// api routes that gives back all messages
app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.tryThis = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from me!");
});

exports.getAllData = functions.https.onRequest(async (request, response) => {
  try {
    const collectionRef = db.collection("clubs");

    const snapshot = await collectionRef.get();
    const data = [];

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    response.status(200).json(data);
  } catch (error) {
    console.error("Error getting data from Firestore:", error);
    response.status(500).send("Internal Server Error");
  }
});

exports.getClubs = functions.https.onRequest(async (request, response) => {
  try {
    const collectionRef = db.collection("club-trial");

    const snapshot = await collectionRef.get();
    const data = [];

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    response.status(200).json(data);
  } catch (error) {
    console.error("Error getting data from Firestore:", error);
    response.status(500).send("Internal Server Error");
  }
});

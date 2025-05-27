require("dotenv").config();
const express = require("express");
const db = require("../../../../../Db-config/db");

const router = express.Router();

const TABLE_NAME = "poc";
const FIELD_NAME = "name";
const FIELD_EMAIL = "email";

// Insert Data
router.post("/insert", (req, res) => {
    const { name, email } = req.body;
    const query = `INSERT INTO ${TABLE_NAME} (${FIELD_NAME}, ${FIELD_EMAIL}) VALUES (?, ?)`;
    db.query(query, [name, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User added successfully", id: result.insertId });
    });
});

// Retrieve Data
router.get("/", (req, res) => {
    const query = `SELECT * FROM ${TABLE_NAME}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});

// Update Data
router.put("/update/:id", (req, res) => {
    const { name, email } = req.body;
    const query = `UPDATE ${TABLE_NAME} SET ${FIELD_NAME} = ?, ${FIELD_EMAIL} = ? WHERE id = ?`;
    db.query(query, [name, email, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User updated successfully" });
    });
});

// Delete Data
router.delete("/delete/:id", (req, res) => {
    const query = `DELETE FROM ${TABLE_NAME} WHERE id = ?`;
    db.query(query, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted successfully" });
    });
});

module.exports = router;

const notesData = require('../db/db.json');
const fs = require('fs');
var uniqid = require('uniqid');
const { error } = require('console');
const express = require('express');
const { response } = require('express');

// Routing
module.exports = (app) => {
    // API GET requests - handles when users "visit" a page
    app.get('/api/notes', (req, res) => {
        res.json(notesData);
    });

    // API Post Requests
    app.post('/api/notes', (req, res) => {
        if (notesData) {
            req.body.id = uniqid();
            console.log(uniqid());
            notesData.push(req.body);
            fs.writeFile('./db/db.json', JSON.stringify(notesData), error => {
                if (error) {
                    throw error;
                }
            })
            res.json(true);
        } else {
            res.json(false);
        }
    });
    // Delete function
    app.delete('/api/notes/:id', (req, res) => {
        for (var i = 0; i < notesData.length; i++) {
            if (notesData[i].id === req.params.id) {
                notesData.pop(i)
                fs.writeFile('./db/db.json', JSON.stringify(notesData), error => {
                    if (error) {
                        throw error;
                    }
                })
                res.json(true);
                break;
            }
        }
    });
};
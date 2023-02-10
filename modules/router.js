const express = require('express');
const router = express.Router();
const model = require('./func');
const cors = require('cors');
const db = require('./db');
const { getIcons } = require('./func')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

// Add default route

router.get('/', async (req,res) => {
    var rooms = await db.getRooms();
    res.render('index',{ title: "Cobra Escape games", subtitle:"Escape the grasps of time", rooms})
})

router.get('/about', async (req,res) => {
    res.render('about',{ title: "About Cobra Escape", subtitle:""})
})

router.get('/rooms', async (req,res) => {
    var rooms = await db.getRooms();
    var icons = getIcons();

    res.render('room-list', { title:"View our rooms", subtitle:"Pick your poison", rooms, icons})
})

router.get('*',async(req, res)=>{
    res.render('not-found',{title:"Not Found", subtitle: 'This page does not exist.'})
})

module.exports = router;
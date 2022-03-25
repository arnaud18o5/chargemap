'use strict';
import express from 'express';
import passport from '../utils/pass'
import { station_get, station_list_get, station_post, station_get_with_gwa } from '../controllers/stationController';

const router = express.Router();

//router.get('/:gender/:weight/:age', station_get_with_gwa);

//router.get('/:id', station_get);

router.get('/', station_list_get);



router.post('/', passport.authenticate('jwt', {session: false}), station_post);

router.put('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('From this endpoint you can edit stations.');
});

router.delete('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('From this endpoint you can delete stations.');
});

export default router;
// https://gitlab.metropolia.fi/sssf22/week1/-/tree/main/server-three
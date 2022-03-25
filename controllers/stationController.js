'use strict';
import Stations from '../models/stationModel';
import mongoose from 'mongoose';

const station_get_with_gwa = async(req, res) => {
  console.log(req.query);
  res.json(await station.find({hidden: false}).where('gender').gt(req.query.weight));
}

const station_get = async (req, res) => {
  console.log("request get /:id")
  res.json(await station.findById(req.query.id));
};

const station_list_get = async (req, res) => {
  res.json(await Stations.find().populate('Connections')); //
  //res.json(req.query);
};





const station_post = async (req, res) => {
    try {
      const newStation = req.body;
      await Station.create(newStation);
      res.json(newStation);
    }catch(e){
      console.log('station controller create failed', e);
      res.json({message: e.message});
    }
}



export { station_list_get, station_get, station_post, station_get_with_gwa };

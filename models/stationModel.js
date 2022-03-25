'use strict';
import mongoose from 'mongoose'
import ConnectionTypes from './connectionTypes'

const Schema = mongoose.Schema;

const stationSchema = new Schema({ //add filename
  _id: Schema.Types.ObjectId,
  Title: String,
  Town: String,
  AdressLine1: String,
  StateOrProvince: String,
  PostCode: String,
  Location: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  Connections: [{type: Schema.Types.ObjectId, ref:ConnectionTypes}]
})


export default mongoose.model('Stations', stationSchema);

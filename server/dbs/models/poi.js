import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Poi = new Schema({
  name: {
    type: String // 景点名称
  },
  province: {
    type: String
  },
  city: {
    type: String
  },
  county: {
    type: String
  },
  areCode: {
    type: String
  },
  tel: {
    type: String
  },
  addr: {
    type: String
  },
  type: {
    type: String
  },
  module: {
    type: String
  },
  longitude: { //经度
    type: Number
  },
  latitude: { //纬度
    type: Number
  }
})
export default mongoose.model('Poi', Poi)

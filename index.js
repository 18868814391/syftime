var moment = require('moment');
function add(time){
  return moment(time).valueOf();
}
module.exports={
  add
}
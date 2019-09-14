var moment = require('moment');
function TimeStamp(d){ ////时间格式：'2018-12-27 18:30:00',返回时间戳:1435214562
  return moment(d).valueOf();
}
function TimeEver(d){ //时间格式：'2019-9-13 18:30:00',返回:昨天18：30 /今天/前天
  // let today=moment().valueOf(); //现在
  let theTime=moment(d).valueOf(); //该数据的创建时间
  let date1 = new Date()
  let times1 = date1.getTime()
  let hour1 = date1.getHours()
  let minute1 = date1.getMinutes()
  let second1 = date1.getSeconds()
  let ZeroTime = times1 - hour1 * 3600 * 1000 - minute1 * 60 * 1000 - second1 * 1000 //当天零点的时间戳
  let ZeroTime2 = times1 - hour1 * 3600 * 1000 - minute1 * 60 * 1000 - second1 * 1000-24*60*60*1000 //昨天零点的时间戳
  let ZeroTime3 = times1 - hour1 * 3600 * 1000 - minute1 * 60 * 1000 - second1 * 1000-24*60*60*1000*2 //前天零点的时间戳
  if(theTime>=ZeroTime){//说明是今天零时后
    // let ddd=`今天${d.Substring(0,10)}`
    return `今天${d.substr(10,5)}`
  }else if(theTime>=ZeroTime2){
    return `昨天${d.substr(10,5)}`
  }else if(theTime>=ZeroTime3){
    return `前天${d.substr(10,5)}`
  }
  else{
    return d.substr(0,16)
  }
}
function TimeString(timestamp){ //输入时间戳，返回，包含年月日时分秒 HH:mm:ss 的全部时间对象
  if((timestamp*1)>0){
    let leftSecond = parseInt(timestamp/1000)
    let Day = Math.floor(leftSecond / (60 * 60 * 24))
    let Hour = Math.floor((leftSecond - Day * 24 * 60 * 60) / 3600)
    let Minute = Math.floor((leftSecond - Day * 24 * 60 * 60 - Hour * 3600) / 60)
    let Second = Math.floor(leftSecond - Day * 24 * 60 * 60 - Hour * 3600 - Minute * 60)
    if(Day<10){
      Day='0'+Day
    }
    if(Hour<10){
      Hour='0'+Hour
    }
    if(Minute<10){
      Minute='0'+Minute
    }
    if(Second<10){
      Second='0'+Second
    }
    return {
      'year':'00',
      'monuth':'00',
      'day':String(Day),
      'hour':String(Hour),
      'minute':String(Minute),
      'second':String(Second),
      'timeData1':`${(Day*24+Hour*1)?(Day*24+Hour*1):'00'}:${Minute}:${Second}`,
    }
  }else{
    return {
      'year':'00',
      'monuth':'00',
      'day':'00',
      'hour':'00',
      'minute':'00',
      'second':'00',
      'timeData1':'00:00:00',
    }    
  }
}

module.exports={
  TimeStamp,TimeEver,TimeString
}
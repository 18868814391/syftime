
# 安装
npm install syftime --save

#使用
import syftime from 'syftime'

syftime.TimeStamp('2018-12-27 18:30:00') 
=> 1545906600000

syftime.TimeEver('2019-9-12 02:01:00')  
=> 前天02:01

syftime.TimeString('2019-9-14 09:30:00')
=> { day: "364",
     hour: "15",
     minute: "42",
     monuth: "00",
     second: "33",
     timeData1: "8751:42:33",
     year: "00" }
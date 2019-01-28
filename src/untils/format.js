export const format = (time)=> {
  var date =  new Date(Number(time));
  var y = 1900+date.getYear();
  var m = "0"+(date.getMonth()+1);
  var d = "0"+date.getDate();
  var h = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  h = h < 10 ? ('0' + h) : h;
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length)+"  "+h+":"+minute+":"+second;
}

export const formatTime = (time) => {
  var date =  new Date(Number(time));
  var y = 1900+date.getYear();
  var m = "0"+(date.getMonth()+1);
  var d = "0"+date.getDate();
  var h = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  h = h < 10 ? ('0' + h) : h;
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return h+":"+minute+":"+second;
}

export const getDay = (number) => {
  switch(number) {
    case 0:
     return '星期天'
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6: 
      return '星期六'
  }
}
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
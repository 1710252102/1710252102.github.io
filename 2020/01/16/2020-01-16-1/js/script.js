var data=['Phone11','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null;
    flag=0;
window.onload=function(){
  var stop=document.getElementById('stop'),
      play=document.getElementById('play');
  play.onclick=PlayFun;
  stop.onclick=StopFun;
  document.addEventListener('keyup',(event)=>{
    if(event.keyCode==13){
        if(flag==0)
        {
          PlayFun();
          flag=1;
        }
        else
        {
          StopFun();
          flag=0;
        }
    }
  })
}

//开始抽奖
function PlayFun(){
  var title=document.getElementById('title'),
      play=document.getElementById('play');
  clearInterval(timer);
  timer=setInterval(() => {
    var random=Math.floor(Math.random()*data.length);
    title.innerHTML=data[random];
  },50);
  play.style.background='#999';
}

//停止抽奖
function StopFun(){
  var title=document.getElementById('title'),
      play=document.getElementById('play');
    clearInterval(timer);
    play.style.background='#036';
}
function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');
  for(var i=0;i<elements.length;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}
window.onload=drag;

function drag(){

  //var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
  //oTitle.onmousedown=fnDown;
  var oTitle=document.querySelector('.login_logo_webqq');
  oTitle.addEventListener('mousedown',e => {
    fnDown(e);
  })

  //关闭
  var oClose=getByClass('ui_boxyClose','loginPanel')[0];
  oClose.addEventListener('click',()=>{
    document.getElementById("loginPanel").style.display="none";
  })

  // 切换状态
  const loginState=document.getElementById('loginState'),
      stateList=document.getElementById('loginStatePanel'),
      lis=document.querySelectorAll('.statePanel_li'),
      stateTxt=document.getElementById('login2qq_state_txt'),
      loginStateShow=document.getElementById('loginStateShow');
  loginState.addEventListener('click',(e)=>{
      e.stopPropagation();
      stateList.style.display="block";
  })

  //鼠标滑过，离开和点击状态列表时候
  lis.forEach(i=>{
    i.addEventListener('mouseover',()=>{
      i.style.background='#567';
    })
    i.addEventListener('mouseout',()=>{
      i.style.background='#FFF';
    })
    i.addEventListener('click',(e)=>{
      e.stopPropagation();
      stateList.style.display="none";
      var ids=document.getElementById(i.id);
      stateTxt.innerHTML=ids.querySelector('.stateSelect_text').innerHTML;
      loginStateShow.className='';
      loginStateShow.className='login-state-show '+i.id;
    })
  })
  
  //点击其他地方隐藏
  document.addEventListener('click',()=>{
    stateList.style.display="none";
  })
}

function fnDown(event){
  var oDrag=document.getElementById('loginPanel'),
      disx=event.clientX-oDrag.offsetLeft,
      disy=event.clientY-oDrag.offsetTop;
  document.onmousemove=function(e){
    var dx=e.clientX-disx,
        dy=e.clientY-disy,
        winW=document.documentElement.clientWidth;//并非document.boby.clientWidth
        winH=document.documentElement.clientHeight;//
        maxW=winW-oDrag.offsetWidth,
        maxH=winH-oDrag.offsetHeight;
    if(dx<0)
    {
      dx=0;
    }
    else if(dx>maxW)
    {
      dx=maxW;
    }
    if(dy<0)
    {
      dy=0;
    }
    else if(dy>maxH)
    {
      dy=maxH;
    }
    oDrag.style.left=dx+'px';
    oDrag.style.top=dy+'px';
  }
  //释放鼠标
  document.onmouseup=function(){
    document.onmousemove=null;
    document.onmouseup=null;
  }

}
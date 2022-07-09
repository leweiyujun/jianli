// var button =document.getElementById("button")
var i=1;
function  aaa(){
 var talk=document.getElementById("talk")
 console.log(talk)
talk.style.display="none";
document.getElementById("bg1").style.display="none";
}
function qq(){
    document.getElementById("title").innerHTML="扫码添加"
    document.getElementById("bg1").style.display="unset"
    document.getElementById("bg1").style.paddingTop="200px"
    document.getElementById("notice-id").style.display="none"
    document.getElementById("loveimg").style.display="unset"
    document.getElementById("loveimg").src="./images/qq.jpg"
    document.getElementById("show-model").setAttribute("class","showmodel")

}
function Init(){
    // console.log(t)
    setInterval(() => {
        // console.log("test")
        loveappimg()
        diantiimg()
        i++;
        if(i==4){i=1}
    }, 2000);
}
function loveappimg(){
    document.getElementById("loveapp").src="./images/showloveapp-"+i+".jpg";
    // console.log(i)
    
}
function diantiimg(){
    document.getElementById("dianti").src="./images/showdianti-"+i+".jpg";
    // console.log(i)
    
}
var btn=document.getElementById("show-project-love")
btn.onclick =function(){
    console.log("show")
    document.getElementById("title").innerHTML="扫码预览"
    document.getElementById("bg1").style.display="unset"
    document.getElementById("bg1").style.paddingTop="200px"
    document.getElementById("notice-id").style.display="none"
    document.getElementById("loveimg").style.display="unset"
    document.getElementById("show-model").setAttribute("class","showmodel")
    document.getElementById("loveimg").src="./images/loveapp.jpg"

}
var btn2=document.getElementById("show-project-dianti")
btn2.onclick =function(){
    console.log("show")
    document.getElementById("title").innerHTML="提示"
    document.getElementById("bg1").style.display="unset"
    document.getElementById("bg1").style.paddingTop="200px"
    document.getElementById("show-model").setAttribute("class","showmodel")
    document.getElementById("notice-id").style.display="flex"
    document.getElementById("loveimg").style.display="none"
    document.getElementById("notice-id").innerHTML="因这款小程序需要参加比赛，且其服务器限制，所以不开放预览！"
    document.getElementById("notice-id").style.top="60px"
}
var btn3=document.getElementById("myhtml-id")
btn3.onclick = function(){
    console.log(999)
    window.open("./index.html")
}
function hideshow(){
    console.log("hide")
    document.getElementById("lovetext").style.removeProperty("display")
    document.getElementById("loveimg").style.display="none"
}
var sure=document.getElementById("sure-click")
sure.onclick = function(){
    console.log("jkwbdjkwfb")
    document.getElementById("bg1").style.display="none"
}
var downimg=document.getElementById("down")
downimg.onclick=function(){
    // var images=document.getElementById("loveimg").src
    // console.log(99)
    // var a = document.createElement('a')
    // a.download ='下载图片'
    
    // // alert(images)
    // a.href = images
    // console.log(a.href)
    downloadIamge("loveimg","test")
}

var btn4=document.getElementById("cx")
btn4.onclick=function(){
    var hero=document.getElementById("input-value").value
    var type=document.getElementById("selectid").value
    console.log(type)
    $.get('https://api.wzxzs.cn/api/select',
    {
        hero:hero,
        type:type,
    },
    function(data,status){
        console.log(data.data,status)
        if(data.data==null){
            document.getElementById("notice-id").innerHTML="你输入的英雄名称不对或者不能为空"
            document.getElementById("title").innerHTML="提示"
            document.getElementById("bg1").style.display="unset"
            document.getElementById("bg1").style.paddingTop="200px"
            document.getElementById("show-model").setAttribute("class","showmodel")
            document.getElementById("notice-id").style.display="flex"
            document.getElementById("loveimg").style.display="none"
        }else{
            document.getElementById("notice-id").style.fontSize="18px"
            document.getElementById("notice-id").innerText= "查询英雄:"+data.data.name+"\n"+
            "最低区级地区:"+data.data.area+"\n"+"最低区级战力:"+data.data.areaPower+"\n"+"最低市级地区:"+data.data.city+
            "\n"+"最低市级战力:"+data.data.cityPower+"\n"+"最低省级地区:"+data.data.province+"\n"+"最低省级战力:"+data.data.provincePower+"\n"
            +"更新时间:"+data.data.updatetime
            document.getElementById("title").innerHTML="提示"
            document.getElementById("bg1").style.display="unset"
            document.getElementById("bg1").style.paddingTop="200px"
            document.getElementById("show-model").setAttribute("class","showmodel")
            document.getElementById("notice-id").style.display="flex"
            document.getElementById("loveimg").style.display="none"
            document.getElementById("notice-id").style.justifyContent="center"
        }
    });
    // document.getElementById("jlindex").style.display="none"
}
var btnjlindex=document.getElementById("grjl")
btnjlindex.onclick=function(){
    console.log("jl")
    document.getElementById("jlindex").style.removeProperty("display")
    document.getElementById("bind-wzzl").style.display="none"
}
var btnwzzl=document.getElementById("wzzl")
btnwzzl.onclick=function(){
    console.log("wz")
    document.getElementById("jlindex").style.display="none"
    document.getElementById("bind-wzzl").style.display="flex"
}

function over1(){
    document.getElementById("grjl").style.background="#fff"
    document.getElementById("grjl").style.color="#000"
}
function out1(){
    document.getElementById("grjl").style.background="#2f2f2f"
    document.getElementById("grjl").style.color="#fff"
}
function over2(){
    document.getElementById("wzzl").style.background="#fff"
    document.getElementById("wzzl").style.color="#000"
}
function out2(){
    document.getElementById("wzzl").style.background="#2f2f2f"
    document.getElementById("wzzl").style.color="#fff"
}
function over3(){
    document.getElementById("ysjx").style.background="#fff"
    document.getElementById("ysjx").style.color="#000"
}
function out3(){
    document.getElementById("ysjx").style.background="#2f2f2f"
    document.getElementById("ysjx").style.color="#fff"
}

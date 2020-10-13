
    //轮播
    var conSortBanner=document.getElementsByClassName('con-sort-banner')[0];
    var bannerImg=document.querySelectorAll('.banner-imgs li');// 图片
    var btnS=document.querySelectorAll('.banner-btn li'); //轮播按钮
    var search1=document.querySelector('.search1');
    var floorNav=document.querySelector(".floor-nav");

//楼层按钮以及楼层内容的对象集合

var floorBtns=document.querySelectorAll(".floor-nav-list");
var floorCons=document.querySelectorAll(".floor-list");

var backTop=document.querySelector(".back-top");
backTop.onclick=function () {
    animate(document.documentElement,{
        scrollTop:0
    },1000,Tween.Linear)
}
// 记录每一个楼层的top值

for(var i=0;i<floorBtns.length;i++){
    floorBtns[i].top=floorCons[i].offsetTop;
    floorBtns[i].height=floorCons[i].offsetHeight;
    floorBtns[i].onclick=function () {

        animate(document.documentElement,{
            scrollTop:this.top
        },1000,Tween.Linear)

    }
}
var region=document.querySelectorAll(".region");
    window.onscroll=function () {
    var st=document.documentElement.scrollTop;
    
    for(var i=0;i<region.length;i++) {
            region[i].top = region[i].offsetTop;

            region[i].height = region[i].offsetHeight;
            if(!region[i].flag){
            if (st >= region[i].top-document.documentElement.clientHeight+300) {
                var imgs = region[i].querySelectorAll('img');
                for (var j = 0; j < imgs.length; j++) {
                    imgs[j].src = imgs[j].getAttribute('imgs');
                }region[i].flag=true;

        }
        }
    }

    //  搜索框
    if(st<400){
        search1.style.top="-50px";
    }else{
        search1.style.top=0;
    }
    if(st<500){
        floorNav.style.opacity=0;
        floorNav.style.transform="scale(0,0)";
    }else{
        floorNav.style.opacity=1;
        floorNav.style.transform="scale(1,1)";
    }

    // 侧边导航的背景

    for(var i=0;i<floorBtns.length;i++){
        if(st>=floorBtns[i].top&&st<floorBtns[i].top+floorBtns[i].height){

            for(var j=0;j<floorBtns.length;j++){
                floorBtns[j].style.background="#999";
            }

            floorBtns[i].style.background=floorBtns[i].getAttribute("color");
        }
    }
}

    banner(conSortBanner,bannerImg,btnS,{
        background: 'black',
        opacity:0.4
    },{
        background:'#fff',
        opacity:1
    })

    //banner侧边选项卡
    var optsBox=document.querySelector('.con-list-bottom');
    var opts=document.querySelectorAll('.con-list-bottom li a');
    var opts1=document.querySelectorAll('.con-list-bottom li span');
    var cons=document.querySelectorAll('.check-con');
    var consBox=document.querySelector('.con-list-content');
    var aa=document.querySelector('.aa');

    optsBox.onmouseover=function(){
        consBox.style.display="block";
    }
    optsBox.onmouseout=function(){
        consBox.style.display="none";
        
    }

    for(var i=0;i<opts.length;i++){
        opts[i].index=i;
        opts[i].onmouseover=function () {
            for (var i=0;i<opts.length;i++){
                opts[i].style.background='none';
                opts1[i].style.color='#fff';
                opts[i].style.color='#fff';
            }
            opts[this.index].style.background='#fff';
            opts1[this.index].style.color=opts[this.index].getAttribute('color');
            opts[this.index].style.color=opts[this.index].getAttribute('color');

            for (var j=0;j<cons.length;j++){
                consBox.style.display='block';
                cons[j].style.display='none';
                cons[this.index].style.display='block';
            }
        }
    }
    
    // optsBox.onmouseout=function () {
    //     for (var i=0;i<opts.length;i++){
    //         opts[i].style.background='none';
    //         opts1[i].style.color='#fff';
    //         opts[i].style.color='#fff';
    //         for (var j=0;j<cons.length;j++){
    //             cons[j].style.display='none';
    //             consBox.style.display='none';
    //         }
    //     }
    // }

    //

    var carbtnOne=document.querySelectorAll(".top-title-one li")
    var carimgOne=document.querySelectorAll(".title-img-one")
    for(var i=0;i<carbtnOne.length;i++){
        carbtnOne[i].index=i;
        carbtnOne[i].onmouseover=function(){
        for(var j=0;j<carbtnOne.length;j++){
            carbtnOne[j].style.background="#f1f1f1"
            carbtnOne[j].style.color="#000"
            carimgOne[j].style.display="none"
        }
        carbtnOne[this.index].style.background="#00b262"
        carbtnOne[this.index].style.color="#fff"
        carimgOne[this.index].style.display='block'
    }
}
    var carbtnTwo=document.querySelectorAll(".top-title-two li")
    var carimgTwo=document.querySelectorAll(".title-img-two")
    for(var i=0;i<carbtnTwo.length;i++){
        carbtnTwo[i].index=i;
        carbtnTwo[i].onmouseover=function(){
        for(var j=0;j<carbtnTwo.length;j++){
            carbtnTwo[j].style.background="#f1f1f1"
            carbtnTwo[j].style.color="#000"
            carimgTwo[j].style.display="none"
        }
        carbtnTwo[this.index].style.background="#00b262"
        carbtnTwo[this.index].style.color="#fff"
        carimgTwo[this.index].style.display='block'
    }
}
var carbtnThree=document.querySelectorAll(".top-title-three li")
    var carimgThree=document.querySelectorAll(".title-img-three")
    for(var i=0;i<carbtnThree.length;i++){
        carbtnThree[i].index=i;
        carbtnThree[i].onmouseover=function(){
        for(var j=0;j<carbtnThree.length;j++){
            carbtnThree[j].style.background="#f1f1f1"
            carbtnThree[j].style.color="#000"
            carimgThree[j].style.display="none"
        }
        carbtnThree[this.index].style.background="#00b262"
        carbtnThree[this.index].style.color="#fff"
        carimgThree[this.index].style.display='block'
    }
}
var carbtnFour=document.querySelectorAll(".top-title-four li")
    var carimgFour=document.querySelectorAll(".title-img-four")
    for(var i=0;i<carbtnFour.length;i++){
        carbtnFour[i].index=i;
        carbtnFour[i].onmouseover=function(){
        for(var j=0;j<carbtnFour.length;j++){
            carbtnFour[j].style.background="#f1f1f1"
            carbtnFour[j].style.color="#000"
            carimgFour[j].style.display="none"
        }
        carbtnFour[this.index].style.background="#00b262"
        carbtnFour[this.index].style.color="#fff"
        carimgFour[this.index].style.display='block'
    }
}
var carbtnFive=document.querySelectorAll(".top-title-five li")
    var carimgFive=document.querySelectorAll(".title-img-five")
    for(var i=0;i<carbtnFive.length;i++){
        carbtnFive[i].index=i;
        carbtnFive[i].onmouseover=function(){
        for(var j=0;j<carbtnFive.length;j++){
            carbtnFive[j].style.background="#f1f1f1"
            carbtnFive[j].style.color="#000"
            carimgFive[j].style.display="none"
        }
        carbtnFive[this.index].style.background="#00b262"
        carbtnFive[this.index].style.color="#fff"
        carimgFive[this.index].style.display='block'
    }
}
var carbtnSix=document.querySelectorAll(".top-title-six li")
    var carimgSix=document.querySelectorAll(".title-img-six")
    for(var i=0;i<carbtnSix.length;i++){
        carbtnSix[i].index=i;
        carbtnSix[i].onmouseover=function(){
        for(var j=0;j<carbtnSix.length;j++){
            carbtnSix[j].style.background="#f1f1f1"
            carbtnSix[j].style.color="#000"
            carimgSix[j].style.display="none"
        }
        carbtnSix[this.index].style.background="#00b262"
        carbtnSix[this.index].style.color="#fff"
        carimgSix[this.index].style.display='block'
    }
}
   

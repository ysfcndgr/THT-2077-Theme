(function() {
    'use strict';
    //document.body.style.textShadow="1px 1px 20px darkcyan";
   try{
for(var post=0;post<10;post++){
    // spe-button1 .spe-button1
      document.getElementsByClassName("postbit-content-bg").item(post).style.background ="radial-gradient(black, maroon)";
       document.getElementsByClassName("postbit-new-top d-flex flex-end npl-postbit-newes-top").item(post).style.background ="radial-gradient(black, teal)";
       document.getElementsByClassName("n-post-leg-bg").item(post).style.background ="radial-gradient(black, teal)";
       document.getElementsByClassName("npl-bigusername").item(post).style.background ="radial-gradient(firebrick, transparent)";
       document.getElementsByClassName("npl-rank-text").item(post).style.background ="radial-gradient(black, gold)";
       document.getElementsByClassName("spe-button10").item(post).style.background ="radial-gradient(transparent, gold)";
       document.getElementsByClassName("npl-buttons-bot").item(post).style.background ="radial-gradient(transparent, darkslategray)";
}
    }
catch (e){

}
 try{

     for (var button=0; button<33;button++){
                  document.getElementsByClassName("spe-button1").item(button).style.background ="radial-gradient(transparent, gold)";

     }
 }
    catch (e){
    }
  
  try{
	  
	  document.getElementsByClassName("ikili-reklamlar").item("0").remove();
  }
  catch(rex){
	  
  }
    /*
     for(var light =0; light<2;light++){

                 document.getElementsByClassName("sn-col").item(light).style.textShadow ="1px 1px 20px darkcyan";

     }*/

     try{
    document.getElementsByClassName("rro-bg").item("0").remove();
    document.getElementsByClassName("rro-col").item("0").style.width ="0%";
    document.getElementsByClassName("rro-col").item("1").style.width ="100%";
    document.getElementsByClassName("forum-system").item("2").style.borderLeft ="blue";
    document.getElementsByClassName("forum-system").item("2").style.borderRight ="blue";
    for (var adim = 0; adim < 22; adim++) {
  document.getElementsByClassName("forum-alls").item(adim).style.color ="#055e68";
    }

  }
    catch(ex){

}
    try{
    for(var govde=0;govde <300;govde++){

    document.getElementsByClassName("alt1").item(govde).style.background ="radial-gradient(firebrick, transparent)";
    document.getElementsByClassName("alt2").item(govde).style.background ="radial-gradient(	#183335, #1a0421)";

    }

    }
    catch(ey){
    }



try{


for (var k=0; k<114;k++){
document.getElementsByClassName("forum-row").item(k).style.background ="radial-gradient(black, transparent)";
document.getElementsByClassName("forum-row").item(k).style.borderBottom ="1px solid #4f8a8b";
    }

}
    catch (e){

    }

  try{
   // document.getElementsByTagName("header")[0].style.textShadow = "2px 2px 5px aquamarine";
    //document.getElementsByTagName("header")[0].style.background = "inherit";
    document.getElementsByTagName("header")[0].style.background = "radial-gradient(darkred, black)";
    document.getElementsByClassName("container").item("0").style.color ="red";
    document.getElementsByClassName("ikili-reklamlar").item("0").remove();
    document.getElementsByClassName("alt1").item("0").style.background ="repeating-linear-gradient(45deg, black, transparent 100px)";
    document.getElementsByClassName("alt1").item("1").style.background ="repeating-linear-gradient(45deg, black, transparent 100px)";
    document.body.style.background="linear-gradient(black, black 0%, #055e68 51%, #343434 75%)";
  }
    catch(e){

    }
try{
 for (var a = 0; a < 12; a++) {
      document.getElementsByClassName("s-profile-bar").item(a).style.background="radial-gradient(firebrick, transparent)";
}

}
    catch (e){

    }
 
    var rastgele = ["https://i2.wp.com/windowscustomization.com/wp-content/uploads/2019/06/Cyberpunk-2077-Audio-Responsive.gif?fit=768%2C432&quality=80&strip=all&ssl=1","https://media3.giphy.com/media/pylNZOmEWUMwGXdzQj/giphy.gif","https://thumbs.gfycat.com/LawfulDampAddax-size_restricted.gif","https://i.hizliresim.com/OoO7on.gif"]
    var item = rastgele[Math.floor(Math.random() * rastgele.length)];
    document.getElementsByClassName("logo").item("0").innerHTML=`<a href="https://www.turkhackteam.org/"> <img src="${item}" width="650" height="200" alt="Cyber - Punk"> </a> `;


})();
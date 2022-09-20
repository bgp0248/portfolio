$(document).ready(function () {

    $('header div').click(function(){

        let i = $(this).index();
        // let scrollTop = $(window).scrollTop()
        console.log(i)

        if(i==0){
            $('html, body').stop().animate({
                scrollTop:1100
            },10000)
            // window.scrollTo(0,1100);
        }
        if(i==2){
            $('html, body').stop().animate({
                scrollTop:19000
            },10000)
            // window.scrollTo(0,19000);
        }
    })

    let pro = 0



    // let ht = $(window).height()
    // $('section').height(ht);

    // $(window).resize(function () {

    //     let ht = $(window).height()
    //     $('section').height(ht)
    // })

    //스크롤이 움직일때 스크롤 위치 찾기
    


    $(window).scroll(function() {

        let scrollTop = $(window).scrollTop()  
            
            $(".scrollTop").text(scrollTop);

        

        if(scrollTop>=0,scrollTop<=1049){            
           
            $('.sec01_banner ul li').stop().animate({'margin-bottom':'0'});           
        }else{}

        if(scrollTop>=50){
            $('.sec01_txt p:nth-child(1)').stop().css({'left':'130px'});
            $('.sec01_txt p:nth-child(2)').stop().css({'left':'1405px'});          
        }else{
            $('.sec01_txt p:nth-child(1)').stop().css({'left':'430px'});
            $('.sec01_txt p:nth-child(2)').stop().css({'left':'1105px'});  
        }

        
        if(scrollTop>=900){
                       
        }
        if(scrollTop>=900){
                       
        }
        
        if(scrollTop>=1000){   
            $('.sec02_A').stop().css({'opacity':'1','transform':'scale(1)'}) 
            $('.sec02').stop().css({'background-color':'#191919'})
        }else{
            $('.sec02_A').stop().css({'opacity':'0','transform':'scale(5)','top':'40vh'})
        }        
        if(scrollTop>=1100){
            
            $('header').stop().css({'top': '0px','opacity':'0.8'})                     
            
        }else{
            $('header').stop().css({'opacity':'0','top': '-20px'}) 
        }        
        if(scrollTop>=1600){
            $('.sec02_A').stop().css({'top':'20vh','opacity':'0'})
            
        }else{
            $('.sec02_A').stop().css({'top':'40vh'})           
        }        
        if(scrollTop>=2000){
            $('.sec02_B').stop().css({'transform':'scale(1)','opacity':'1'})            
        }else{
            $('.sec02_B').stop().css({'opacity':'0','transform':'scale(5)','top':'55vh'})
            
        }        
        if(scrollTop>=2500){
            $('.sec02_B').stop().css({'top':'40vh','opacity':'0'})
            
        }else{
            $('.sec02_B').stop().css({'top':'55vh'})
        }        
        if(scrollTop>=2000){
            
        }
        if(scrollTop>=2050){}
        if(scrollTop>=2100){}
        if(scrollTop>=3000){
            $('.sec02_white').stop().css({'opacity': '1','transform':'scaleX(1)'})
        }else{
            $('.sec02_white').stop().css({'transform':'scaleX(0)'})
        }        
        
        // 레오폴드
        if(scrollTop>=3300){
            $('.sec02 .LEOPOLD img').stop().css({'left': '16vh'})
            $('.sec02 .LEOPOLD img').stop().css({'opacity': '1'})
        }else{
            $('.sec02 .LEOPOLD img').stop().css({'left': '20vh','opacity':'0'})
        }       
        if(scrollTop>=3400){            
            $('.sec02_right').stop().css({'right':'0vh','opacity':'1'})
        }else{
            $('.sec02_right').stop().css({'right':'-20vh','opacity':'0'})
        }
            

        if(scrollTop>=3800){
            $('.sec02 .LEOPOLD img').stop().css({'top': '15vh','opacity':'0'})
            // $('.sec02 .LEOPOLD img').css({'opacity': '0.8'})
        }else{
            $('.sec02 .LEOPOLD img').stop().css({'top': '25vh'})
        }
        
        if(scrollTop>=3600){
            $('.sec02_white').stop().css({'left':'16vh'})
            

        }
        if(scrollTop>=3650){
            $('.sec02_right').stop().css({'z-index':'3'})
            
        }
        if(scrollTop>=4100){
            $('.sec02_white').stop().css({'left':'50vh'})

        }
        if(scrollTop>=4150){}
        if(scrollTop>=4200){
            $('.sec02_white').stop().css({'left':'80vh'})
            
            
        }
        if(scrollTop>=3850){}
        if(scrollTop>=4300){
            $('.sec02_white').stop().css({'left':'110vh','width':'810px'})
            
            
            
        }
        if(scrollTop>=3950){
            
        }
        if(scrollTop>=4400){
            $('.sec02_right').stop().css({'opacity':'0'})
            $('.sec02_white').stop().css({'width':'1920px'})
            
            
            
        }
        if(scrollTop>=4050){
           
        }
        if(scrollTop>=4600){
            $('.sec02_white').stop().css({'left':'0vh'})
            
            
            
        }
        if(scrollTop>=5000){
            // $('.sec02').stop().css({'background-color':'#191919'})
            
            
        }

        //마동석 

        if(scrollTop>=6000){
            $('.sec02').stop().css({'background-color':'#ffffff'})
        } 

        if(scrollTop>=5500 && scrollTop<=6700){            
            $('.sec03_ma').stop().css({'transform':'scale(1)','opacity':'1'})
                      
        }else{            
            $('.sec03_ma').stop().css({'transform':'scale(5)','opacity':'0'})  
        }
        if(scrollTop>=5800 && scrollTop<=6700){            
            $('.sec03_si').stop().css({'transform':'scale(1)','opacity':'1'})
            $('.sec03_ma').stop().css({'top':'20vh'})
        }else{            
            $('.sec03_si').stop().css({'transform':'scale(5)','opacity':'0'})
            $('.sec03_ma').stop().css({'top':'45vh'})
        }
        if(scrollTop>=6100 && scrollTop<=6700){            
            $('.sec03_u').stop().css({'transform':'scale(1)','opacity':'1'})
            $('.sec03_si').stop().css({'top':'35vh'})
                      
        }else{            
            $('.sec03_u').stop().css({'transform':'scale(5)','opacity':'0'})
            $('.sec03_si').stop().css({'top':'40vh'})  
        }
        if(scrollTop>=6400 && scrollTop<=8400){
            $('.sec03_u').stop().css({'top':'50vh'})
        }
        
        if(scrollTop>=6700){
            
            
        }
        
       
        if(scrollTop>=6700 && scrollTop<=8700){
            $('.sec03_inner').stop().css({'left':'-50vh','opacity':'0'})
            $('.sec03_inner').stop().css({'top':'0vh'})
        }
        if(scrollTop>=6750){}
        if(scrollTop>=6800 && scrollTop<=8800){
            $('.sec03_inner').stop().css({'left':'8.3vw','opacity':'1'})
            $('.sec03_inner').stop().css({'top':'-50vh'})
        }

        if(scrollTop>=7300 && scrollTop<=9300){
            $('.sec03_AA').stop().css({'opacity':'0'})
        }

        if(scrollTop>=7400 && scrollTop<=9400){
            $('.sec03_AA').stop().css({'opacity':'1'})
        }

        if(scrollTop>=7400 && scrollTop<=9400){
            $('.sec03_photo2 ul li:nth-child(3)').stop().css({'opacity':'0'})
        }

        if(scrollTop>=7500){
           
        }

        if(scrollTop>=7600 && scrollTop<=9600){
            $('.sec03_photo2 ul li:nth-child(3)').stop().css({'opacity':'1'})
        }
       

        if(scrollTop>=8200){
            
        }
        if(scrollTop>=9000 && scrollTop<=11000){
            $('.sec03_AA').stop().css({'top':'50vh','transform':'scale(0.65)','left':'40vw'})
        }

        if(scrollTop>=9100 && scrollTop<=11100){
            $('.sec03_AA').stop().css({'top':'27vh','z-index':'7'})
        }

        if(scrollTop>=9600 && scrollTop<=11600){
            $('.sec03_AA').stop().css({'transform':'scale(1)'})
            $('.sec03_AA').stop().css({'left':'36.45vw'})
           
        }       

        if(scrollTop>=9800){
            
        }

        if(scrollTop>=9800 && scrollTop<=11800){
            $('.sec03_madong img').stop().css({'opacity':'0','left':'7.3vw'})
        }
        if(scrollTop>=9900 && scrollTop<=11900){
            $('.sec03_madong img').stop().css({'opacity':'1','left':'8.3vw'})
        }
        
        if(scrollTop>=10000 && scrollTop<=12000){
            $('.sec03_madong_txt').stop().css({'opacity':'0','right':'14.83vw'})
        }        
        if(scrollTop>=10500 && scrollTop<=12500){
            $('.sec03_madong_txt').stop().css({'opacity':'1','right':'15.83vw'})
        }
        
        if(scrollTop>=9900){
            $('.sec05_inner').stop().css({'opacity':'1','left':'100vw'})
        }else{
            $('.sec05_inner').stop().css({'opacity':'0'})
        }

        if(scrollTop>=11000 && scrollTop<=13000){
            $('.sec05_inner').stop().css({'left':'91.67vw'})
        } 

        if(scrollTop>=11700 && scrollTop<=13700){
            $('.sec03_AA').stop().css({'opacity':'0'})
            $('.sec03_madong img').stop().css({'opacity':'0','left':'9.3vw'})
            $('.sec03_madong_txt').stop().css({'opacity':'0','right':'16.83vw'})
            $('.sec05_ta>img').stop().css({'opacity':'0'})
            
        } 
        
        if(scrollTop>=12700){
            $('.sec05_inner').stop().css({'left':'0vw'})
            
            
        }
        if(scrollTop>=12800 && scrollTop<=14800){
            $('.sec05_city img').stop().css({'display':'none'})
            
            
        }
        if(scrollTop>=13100 && scrollTop<=15100){
            
            $('.sec05_inner p:nth-child(2) img').stop().css({'opacity':'0','transform':'scale(0)'})
            $('.sec05_inner p:nth-child(1) img').stop().css({'opacity':'0','transform':'scale(3)'})
        }
        if(scrollTop>=13200 && scrollTop<=15200){
            $('.sec05_inner p:nth-child(2) img').stop().css({'opacity':'1','transform':'scale(1)'})
            $('.sec05_inner p:nth-child(1) img').stop().css({'opacity':'0','transform':'scale(1)'})
            
        }
        
        if(scrollTop>=13600 && scrollTop<=15600){
            $('.sec05_inner p:nth-child(3) img').stop().css({'opacity':'0','transform':'scale(3)'})
        }
        if(scrollTop>=13700 && scrollTop<=15700){
            $('.sec05_inner p:nth-child(3) img').stop().css({'opacity':'1','transform':'scale(1)'})
            
        }
        if(scrollTop>=14100 && scrollTop<=16100){
            $('.sec05_inner p:nth-child(1) img').stop().css({'opacity':'0','transform':'scale(3)'})
            $('.sec05_ta>img').stop().css({'opacity':'1'})
        }
        if(scrollTop>=14200 && scrollTop<=16200){
            $('.sec05_city img').stop().css({'display':'block'})
            
            $('.sec05_inner p:nth-child(1) img').stop().css({'opacity':'1','transform':'scale(1)'})
        }
        if(scrollTop>=14600 && scrollTop<=16600){
            
            $('.sec05_inner').stop().css({'width':'100vw','left':'0vw'})
            
            $('.sec05_inner p:nth-child(3) img').stop().css({'opacity':'0','transform':'scale(0.1)'})
            $('.sec05_inner p:nth-child(1) img').stop().css({'opacity':'0','transform':'scale(3)'})
            $('.sec05_inner p:nth-child(2) img').stop().css({'opacity':'0','transform':'scale(0)'})
        }
        if(scrollTop>=14700 && scrollTop<=16700){
            $('.sec05_inner').stop().css({'left':'-91.67vw'})
            $('.sec05_ta>img:nth-child(1)').stop().css({'left': '-10vw'})
            $('.sec05_ta>img:nth-child(2)').stop().css({'left': '-10vw'})
            $('.sec05_ta>img:nth-child(3)').stop().css({'left': '-10vw'})
            $('.sec05_ta>img:nth-child(4)').stop().css({'left': '-10vw'})
            $('.sec05_ta>img:nth-child(5)').stop().css({'left': '-10vw'})
        }
        if(scrollTop>=15100 && scrollTop<=17100){
            $('.sec05_ta>img:nth-child(1)').stop().css({'left': '8.69vw'})
            $('.sec05_ta>img:nth-child(2)').stop().css({'left': '27.08vw'})
            $('.sec05_ta>img:nth-child(3)').stop().css({'left': '45.46vw'})
            $('.sec05_ta>img:nth-child(4)').stop().css({'left': '63.85vw'})
            $('.sec05_ta>img:nth-child(5)').stop().css({'left': '82.18vw'})
            
        }
        if(scrollTop>=15600 && scrollTop<=17600){
            $('.sec05_inner').stop().css({'width':'27.08vw','left':'-21.67vw'})
        }
        if(scrollTop>=16400 && scrollTop<=18400){
            $('.sec05_inner').stop().css({'left':'8.33vw'})
            $('.sec05_ta>img:nth-child(1)').stop().css({'left': '43.49vw'})
            $('.sec05_ta>img:nth-child(2)').stop().css({'left': '52.23vw'})
            $('.sec05_ta>img:nth-child(3)').stop().css({'left': '62.91vw'})
            $('.sec05_ta>img:nth-child(4)').stop().css({'left': '71.66vw'})
            $('.sec05_ta>img:nth-child(5)').stop().css({'left': '82.18vw'})
            $('.sec05_tashu_txt').stop().css({'opacity':'0','left':'12.36vw'})
            
        }
        if(scrollTop>=17200 && scrollTop<=19200){
            $('.sec05_tashu_txt').stop().css({'opacity':'0','left':'12.36vw'})
        }
        if(scrollTop>=17300 && scrollTop<=19300){
            $('.sec05_tashu_txt').stop().css({'opacity':'1','left':'15.36vw'})
        }

        if(scrollTop>=18300 && scrollTop<=20300){
            $('.sec05_tashu_txt').stop().css({'opacity':'0','left':'12.36vw'})
        }

        if(scrollTop>=18400 && scrollTop<=20400){
            $('.sec05_ta>img:nth-child(5)').stop().css({'left': '150vw'})
            
            
        }
        if(scrollTop>=18500){
            $('.sec05_ta>img:nth-child(4)').stop().css({'left': '145vw'})
            
        }
        if(scrollTop>=18600){
            $('.sec05_ta>img:nth-child(3)').stop().css({'left': '135vw'})
            
        }
        if(scrollTop>=18700){
            $('.sec05_ta>img:nth-child(2)').stop().css({'left': '130vw'})
            
        }
        if(scrollTop>=18800){
            $('.sec05_ta>img:nth-child(1)').stop().css({'left': '125vw'})
            $('.sec05_inner').stop().css({'left':'-100vw'})
        }
        

        if(scrollTop>=19000){
            $('header div:nth-child(1)').stop().css({'background-color':'#F7F6F2'})
            $('header div:nth-child(3)').stop().css({'background-color':'#F0E5CF'})
        }else{
            $('header div:nth-child(1)').stop().css({'background-color':'#F0E5CF'})
            $('header div:nth-child(3)').stop().css({'background-color':'#F7F6F2'})
        }

        if(scrollTop>=19500){
            $('.sec06_about').stop().css({'opacity':'1'})
        }else{
            $('.sec06_about').stop().css({'opacity':'0'})
        }

        
        
        if(scrollTop>=20500 && scrollTop<=22000 ){
            pro ++;
            
            $('.sec06_about').stop().css({'left':'0'})
            $('.sec06_box').stop().css({'right':'0','opacity':'1'})
            $('.ui-progressbar').css({'display':'block'})

            // 프로그래스바

            if(pro == 2){ 
                console.log(pro)       
            let total_time = 2000;
            let current_time = 0;
            let refresh_interval = 10;
            let timer;
        
            function refresh_bar() {
            $( ".Ability_P p:nth-child(3)",
            ".Ability_I p:nth-child(3)",
            ".Ability_X p:nth-child(3)",
            ".Ability_H p:nth-child(3)",
            ".Ability_C p:nth-child(3)",
            ".Ability_J p:nth-child(3)").stop().progressbar({ value: current_time });
            
            $(".ui-progressbar-value").css({"background":"#86B6F5"});
            $( ".Ability_P p:nth-child(3)" ).progressbar({ max: total_time, value: current_time });
            $( ".Ability_I p:nth-child(3)" ).progressbar({ max: total_time, value: current_time });
            $( ".Ability_X p:nth-child(3)" ).progressbar({ max: total_time, value: current_time });
            $( ".Ability_H p:nth-child(3)" ).progressbar({ max: total_time, value: current_time });
            $( ".Ability_C p:nth-child(3)" ).progressbar({ max: total_time, value: current_time });
            $( ".Ability_J p:nth-child(3)" ).progressbar({ max: total_time, value: current_time });
        
            current_time += refresh_interval;
            if(current_time > total_time) clearInterval( timer );
        }            
            
            timer = setInterval( refresh_bar, refresh_interval );
        }
        }else{
            pro = 0;
            $('.sec06_about').stop().css({'left':'25.75vw'})
            $('.sec06_box').stop().css({'right':'-70vw','opacity':'0'})
            
        }




    })

    
            
    
    


    
})
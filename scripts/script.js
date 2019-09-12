$(document).ready(()=>{
    svgStatus = 0;
    start();
    scrollBehaviour();
    

    
})

start = ()=>{
    navBehaviour.start();
    about = new SVG('about-svg', "about");
    port = new SVG('portfolio-svg', "portfolio");
    altport = new SVG('portfolio-svg-alt', "portfolio");
    // port.start()
    // port.wiggle('.portfolio-svg-mask');
    off = $("#talk_link").offset();

    

}

// Functions

scrollBehaviour = ()=>{
    $(window).scroll( ()=>{
        pos = $(window).scrollTop();
        
       navBehaviour.show(pos);
    //    mySVG.watch(pos);
    //    port.watch(pos);
    });
    
    
}


navBehaviour = {
    "start": ()=>{
        $("#navbar").hide();
    }, 
    "show": (pos)=>{
        apos = $("#about").offset().top;
        if(pos >= (apos - 80)){
            console.log("showw");
            $("#navbar").show(500);
        } else {
            $("#navbar").hide(500);
        }
    }
}

class SVG {
    constructor (id, name){
        this.name = name;
        this.id = id;
        this.state = 0;
        this.pos = $('#' + id).offset().top - 400;
        this.target;
        //
        //
        this.start();
    }
    start(){
        $('#' + this.id).append(svg[this.name])
        this.target = "#" + this.id + '>svg'
        anime({
            targets: this.target + '>g>g>*',
            // opacity: 0,
            translateY: 0,
            duration: 0
        })
    }
    animate(){
        anime({
            targets: '#' + this.id + '>g>g>*',
            translateY: 0,
            opacity: 1,
            delay: anime.stagger(10),
            easing: 'easeInOutQuad',
            duration: 500
        });
        this.flicker_animate(this.id + '_flicker-ring');
    }
    flicker_animate(id){
        anime({
            targets: ['.' + id, '.' +id + '>*'] ,
            opacity: [0, 1],
            translateY: [0, -10],
            duration: anime.random(2900, 4900),
            delay: anime.stagger(900),
            direction: "alternate", 
            loop: true
        })
    }
    watch(pos){      
          
        if(this.state == 0){
            if(pos >= this.pos){
                this.state = 1;
                this.animate();
            }
        }
    }
    wiggle(id){
        anime({
            targets: id ,
            translateY: [-500, 0],
            duration: 5200,
            direction: "alternate", 
            easing: 'easeInOutCirc',
            delay:80,
            loop: true
        })
    }

}
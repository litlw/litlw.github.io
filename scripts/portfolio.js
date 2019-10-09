$(document).ready(()=>{
    
    $('.img').each( function(){
        var img_url = this.dataset.target;
        $(this).css("background-image", "url(" + img_url + ")");    
    } )
    // $(window).scroll(  (ev)=>{
    //     stop = $(window).scrollTop();
    //     $('div.row.frame').offset({left: 0, top: stop/2});
    // } )
    // svgStatus = 0;
    // start();
    // scrollBehaviour();
})

start = ()=>{
    navBehaviour.start();
    // about = new SVG('about-svg', "about");
    port = new SVG('portfolio-svg', "portfolio");
    // altport = new SVG('portfolio-svg-alt', "portfolio");
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


// var items = {};

// $(document).ready(() => {
//     // timeline();
//     // compose();
//     startPortfolio();
// })

// startPortfolio = ()=>{

// }

// timeline = () => {
//     $('.frame').each(function (x) {
//         var top = $(this).offset()['top']
//         var bottom = $(this).height() + top;
//         var id;
//         if(this.getAttribute('id')){ id = this.getAttribute('id')} 
//         else {id = "p0" + x }
//         $(this).attr('id', id);
//         item = new TimelineItem(id, '#' + id, top, bottom);
//         items[id] = item;
//         $('#nav').append('<a href="#'+id+'"> \
//         <h4 class="rounded">'+x+'</h4> \
//         </a>')
//     })


// }

// compose = () => {
//     $(window).scroll(() => {
//         pos = $(window).scrollTop();
//         for (i in items) {
//             items[i].inRange(pos);
//             items[i].callFamily(pos);
//         }

//     })
// }

// enter = (x) => {
//     $("#" + x.id).css('position', 'fixed');
//     $("#" + x.id).css('top', '0px');
//     $("#" + x.id).animate({
//         'top': '20px'
//     }, 100);
// }
// leave = (x) => {
//     $("#" + x.id).css('position', 'relative');
//     $("#" + x.id).css('bottom', '0px');

// }

// class TimelineItem {

//     constructor(id, target, begin, end) {
//         this.id = id;
//         this.target = target; // the target to be added to the timeline
//         this.begin = begin; // the location to measure the beginning of the animation
//         this.end = end; // the location to measure the end of the animation

//         this.children = {
//             'left': [],
//             'right': []
//         };
//         this.buildFamily();
//         this.show = false;
//     }
//     buildFamily() {
//         this.makeChildren('l', this.id, ' > div.left > .row', this.begin, this.end, (res) => {
//             this.children['left'].push(res);
//         });
//         this.makeChildren('r', this.id, ' > div.right > .row', this.begin, this.end, (res) => {
//             this.children['right'].push(res);
//         });
//     }
//     makeChildren(side, parent_id, t, parent_top, parent_bottom, callback) {
//         $("#" + parent_id + t).each(function (x) {
//             var top = $(this).offset()['top'] + 1;
//             var bottom = $(this).height() * 2 + top;
//             var id = parent_id + '_' + side + '_0' + x;
//             $(this).attr('id', id);
//             callback(new TimelineChild(parent_id, id, top, bottom, parent_top, parent_bottom));
//         });
//     }
//     inRange(pos) {
//         if (pos >= this.begin) {
//             if (pos <= this.end) {
//                 this.show = true;
//             } else {
//                 this.show = false;
//             }
//         } else {
//             this.show = false;
//         }
//     }
//     callFamily(pos) {
//         if (this.show) {
//             this.children.left.every(function (x) {
//                 enter(x);
//             });
//         } else {
//             this.children.left.every(function (x) {
//                 leave(x)
//             });
//         }

//         if (this.show) {
//             this.children.right.every(function (x) {
//                 x.inRange(pos);
//                 if (x.show) {
//                     console.log("child enter " + x.id);
//                     enter(x)
//                 } else {
//                     console.log("child left");
//                     leave(x)
//                 }
//             });
//         }
//     }


// }


// class TimelineChild {
//     constructor(parent_id, id, begin, end, parent_top, parent_bottom) {
//         this.parent_id = parent_id;
//         this.id = id;
//         this.begin = begin;
//         this.end = end;
//         this.parent_top = parent_top;
//         this.parent_bottom = parent_bottom;
//         this.show = false;
//     }
//     inRange(pos) {
//         if (pos >= this.begin) {
//             if (pos <= this.end) {
//                 this.show = true;
//             } else {
//                 this.show = false;
//             }
//         } else {
//             this.show = false;
//         }
//     }
// }
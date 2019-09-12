// THis document is for all the events. YAY
var events = []
class event {
   constructor(data){
     this.t = data['t'];
     this.m = data['m'];
    this.show = true;
   }
   getMessage(){
     return this.m;
   }
  findEvent(time){
     if(time > this.t[0] && time < this.t[1]){
       if(this.show == true){
         console.log(this.m);
         this.show = false;
         return this.m;
       }
     }
   }
}

for(var i = 0; i < e.length; i++){
  events.push(new event(e[i]))
}

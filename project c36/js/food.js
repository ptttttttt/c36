class Food{
    constructor(){
     this.Img = loadImage("Images/Milk.png")
     this.foodStock =0

    }
    display(){
        var x=80;
        var  y = 100;
        imageMode(CENTER);
        image(this.Img,720, 220, 70, 70 );

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.this.Img, x,y, 50,50);
                x=x+30;
            }
        }
    }
    getFoodStock(){
     return this.foodStock

    }
    updateFoodStock(foodStock){
        this.foodStock=foodStock
    }
    deductFood(){
        if(this.foodstock>0){
        
        this.foodstock=this.foodstock-1
    }

}
}

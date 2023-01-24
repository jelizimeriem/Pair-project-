var movies = [
 {
        category:"Horror",
        imgSrc:"./image/horror1.jpg",
        name:"Scream"
    },{
        category:"Horror",
        imgSrc:"./image/horror2.jpg",
        name:"Evil Dead Rise" 
    },{
        category:"Adventures",
        imgSrc:"./image/advnture1.jpg",
        name:"Jumanji"
    },{ 
        category:"Adventures",
        imgSrc:"./image/adventure2.jpg",
        name:"Indiana Jones"
    },{
        category:"Romance",
        imgSrc:"./image/romance1.jpg",
        name: "Notebook"
    },{
        category:"Romance",
        imgSrc:"./image/romance2.jpg",
        name: "A Walk To Remember"
    }
    ];
    var each = function (coll,func){
        if (Array.isArray(coll)){
            for (var i =0;i<coll.length;i++){
            func(coll[i],i)
        }
        }
        else {
            for (var key in coll){
                func(coll[key],key)
            }
        }
    }

    var filter = function(array,predicate){
    var acc = [];
    each(array,function(e,i){
        if (predicate(e,i)){
            acc.push(e)
        }
    })
    return acc;
    }

    each(movies,function(e){

     $(".moviecontainer").append('<div class="grid-item"><img width="400px" src="'+e.imgSrc+'"/></div>')
    })
    

        $(".Horror").click(function(e,i){
            var y =  filter(movies,function(e){
                return e.category==="Horror"
            })
            console.log(y)
            $(".moviecontainer").empty();
            each(y,function(e){
                console.log(e,'the');
            
            $(".moviecontainer").append('<div class="photo1"><img width="200px"src="' + e.imgSrc+ '"  /></div>')
            $(".grid-item").remove();
            })

        })

        $(".Adventure").click(function(e,i){
            var z =  filter(movies,function(e){
                return e.category==="Adventures"
            })
            console.log(z)
            $(".moviecontainer").empty();
            each(z,function(e){
                console.log(e,'the');
            
            $(".moviecontainer").append('<div class="photo2"><img width="200px"src="' + e.imgSrc+ '"  /></div>')
            })

        })

        $(".Romance").click(function(e,i){
            var w =  filter(movies,function(e){
                return e.category==="Romance"
            })
            console.log(w)
            $(".moviecontainer").empty();
            each(w,function(e){
                console.log(e,'the');
            
            $(".moviecontainer").append('<div class="photo3"><img width="200px"src="' + e.imgSrc+ '"  /></div>')
            })

        })
    
        $(".searchButton").click(function (e) { 
            e.preventDefault();
            var t = filter(movies,function(e){
                return e.name.toUpperCase()=== $('.searchTerm').val().toUpperCase()
            })
            $(".moviecontainer").empty();
            each(t,function(e){
                console.log(e,'the');
            
            $(".moviecontainer").append('<div class="photo4"><img width="200px"src="' + e.imgSrc+ '"  /></div>')
            })
            if( $('.searchTerm').val()=== ""){
                $(".moviecontainer").empty();
                
                each(movies,function(e){
                    console.log(e,'the');
                
                $(".moviecontainer").append('<div class="photo4"><img width="200px"src="' + e.imgSrc+ '"  /></div>')
                })}

        })

        $(".reset").click(function(e,i){
           
            $(".moviecontainer").empty();

            $(".moviecontainer").append('<div class="nothing"> <h1>Nothing to show &#128517;</h1> </div>')
                
            
            alert("The page has been reset")

        })

    
        $(".random").click(function(e,i){
           var t = Math.floor(Math.random() * movies.length);
           var r =["./image/horror1.jpg","./image/horror2.jpg","./image/advnture1.jpg","./image/adventure2.jpg","./image/romance1.jpg","./image/romance2.jpg",]
            $(".moviecontainer").empty();
  
    $(".moviecontainer").append('<div class="pick"><img width="400px"src="' + r[t] + '"  /></div>')

  
console.log("thiss is random",t)
        })
let stu = prompt (" درجات الطالب")
if(stu<=0 && stu>50){
    console.log("ض");
}else{
    if(stu>=50 && stu <65){
        console.log("ل")
    }else{
        if (stu>=65 && stu <75){
            console.log("ج")
        }else{
            if (stu>=75 && stu <85){
                console.log(" ج ج")
            }else{
                if ( stu >=85 && stu <100){
                    console.log("م")
                }else{
                    console.log("go out")
                }
            }
        }
    }
        
}

function crop_calculator(){
    //declared variables
    let startyield = 50, yield = null, finalyield = null, type = null;
    
    //Prompt for rain
    let rain = prompt("How much rain fell?");
    console.log("*".repeat(rain))

    //calculate the effect of the rain
    if (rain >= 20){
        yield = (startyield * 0.9);
    }
    else if (rain < 10){
        yield = (startyield * 0.8);
    }
    else {
        yield = startyield;
    }
    
    //Testing log
    //console.log(yield);

    //Promt for fertilizer
    let fert = prompt("Did you use fertilizer?");
    
    //Tesing log
    // console.log(fert);

    //calculate the effect of the rain
    if (fert === "yes" || fert ==="Yes"){
        let type = prompt("Did you use premium or regular fertilizer");
    
        if (type === "premium" || type === "Premium"){
            finalyield = (yield * 1.15);
        }
        else if( type === "regular" || type === "Regular"){
            finalyield = (yield * 1.10);
        }
        else {
            finalyield = yield;
        }
    }
    else {
        finalyield = yield;
    }
    
    //Testing logs
    //console.log(type);
    //console.log(finalyield);    
    
    console.log ("The yield should be " + finalyield.toFixed(2) + " bushels per acre");
    
}
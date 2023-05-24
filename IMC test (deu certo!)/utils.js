function CalculateIMC (height, weight) {
    return (weight / ( (height/100)**2   )).toFixed(2)
    
}

function notANumber(value) {
    return isNaN(value) || value == ""

}

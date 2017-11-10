// Math.floor(Math.random() * (max - min + 1)) + min

var array = [,"Kelvin. P","Brant","Chris Jackson","Chris Yi","Mark","Natalia","Ana","William","Sang","Cody","Travis","Tim","Sean", "Ben","Stephano"]



function getRandom(arr) {
    var copy = arr.slice()
    var number = []
    copy.forEach((item, index, copy) => {
        var ranNum = Math.floor(Math.random() * (array.length))
        if(!number.includes(ranNum)){
            number.push(ranNum)
        } else {
            var i = true
            while(i){
                    var ranNum = Math.floor(Math.random() * (array.length))
                if(!number.includes(ranNum)) {
                    number.push(ranNum)
                    break;
                }
            }
        }
        
        
    })

    return number
}


function getName(arr) {
    var result = arr.map(item => array[item])
    return result
}


console.log(getName(getRandom(array)))




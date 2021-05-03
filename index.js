
function superbowlWin(record){
console.log(record)
let answer = record.find(function(season){
    if(season.result ==='W'){
        return true
    } else {
        return undefined
    }
})
    if (answer !== undefined){
        return answer.year}
    else {
            return undefined
        }

    }


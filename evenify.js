function evenify(age) {
    if (age % 2 == 0) {
        console.log(age , ": is a even number");
    }
    else{
        console.log(age * 2 , ": is an odd number");
    }
}

function evenifyAll(friendsAge) {
    for(i = 0; i < friendsAge.length; i++) {
        var age = friendsAge[i];
        evenify(age);
    }
}

var friendsAge = [12, 43, 32, 17, 18, 19, 20];
var result = evenifyAll(friendsAge);
console.log(result);


var friendsAge2 = [13, 14, 12,21, 17, 19, 18];
var result2 = evenifyAll(friendsAge2);
console.log(result2);
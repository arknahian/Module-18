function callBack(name, age, task) {
    console.log(name);
    console.log(age);
    task();
}
function takeShower() {
    console.log("Take a shower");
}
function handWash() {
    console.log("wash your hand")
}


callBack("Justin", 12, takeShower);

callBack("Bieber", 21, handWash);
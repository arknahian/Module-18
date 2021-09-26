function toDo(name, age, task) {
    console.log('your name is', name);
    console.log('your age is',age);
    task();
}
function washHand(washHand) {
    console.log("wash your hand");
}
function takeBath() {
    console.log("take a shower");
}


toDo("Jeff", 12, washHand);
toDo("Charlie", 18, takeBath);
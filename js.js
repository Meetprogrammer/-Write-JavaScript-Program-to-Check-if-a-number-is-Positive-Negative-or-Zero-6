function result() {
    var first = Number(document.getElementById("number").value);
    var result = document.getElementById("result");
    
    if (first > 0) {
        result.innerHTML = first + ' is a positive number.';
    } else if (first < 0) {
        result.innerHTML = first + ' is a negative number.';
    } else {
        result.innerHTML = first + ' is zero.';
    }
}

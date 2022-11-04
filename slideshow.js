<script>
let index = 0;
showSlides(index);

function clickFunction(n) {
    showSlides(index += n);
}

function dotFunction(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;
    var item = document.getElementsByClassName("itm");
    var dot = document.getElementsByClassName("dot");
    if (n > item.length) {index = 1}
    if (n < 1) {index = item.length}
    for (i = 0 ; i < item.length ; i++) {
        item[i].style.display = "none";
    }
    for (i = 0 ; i < dot.length ; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    item[index-1].style.display = "block";
    dot[index-1].className += " active";
}
</script>

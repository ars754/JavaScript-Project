let count = 0;
function updateCount() { document.getElementById("count").innerHTML = count; }
function increaseCount() {
    count++;
    updateCount();
    }
function decreaseCount() {
    count--;
    updateCount();
    }
function resetCount() {
    count = 0;
    updateCount();
    }
function saveCount() { localStorage.setItem("count", count); }
function loadCount() {
    let saved = localStorage.getItem("count");
    if (saved !== null) { count = Number(saved); }
    updateCount();
    }

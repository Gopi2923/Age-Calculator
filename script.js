let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let bithDate = new Date(userInput.value);

    let d1 = bithDate.getDate();
    let m1 = bithDate.getMonth() + 1;
    let y1 = bithDate.getFullYear();
    
    let today = new Date();

    let d2 = bithDate.getDate();
    let m2 = bithDate.getMonth() + 1;
    let y2 = bithDate.getFullYear();

    let d3, m3
}
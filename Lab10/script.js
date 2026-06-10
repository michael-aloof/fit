let vector = [];

function generateVector(){

    let n = parseInt(
        document.getElementById("size").value
    );

    vector = [];

    for(let i=0;i<n;i++){

        vector.push(
            Math.floor(Math.random()*21)-10
        );

    }

    document.getElementById("vector").innerHTML =
        "Вектор: " + vector.join(" ");
}



function findNorm(){

    if(vector.length===0){

        alert("Спочатку згенеруйте вектор");

        return;
    }

    let sum = 0;

    for(let x of vector){

        sum += x*x;

    }

    let norm = Math.sqrt(sum);

    document.getElementById("norm").innerHTML =
        "Норма = " + norm.toFixed(3);

}



function normalizeVector(){

    if(vector.length===0){

        alert("Спочатку згенеруйте вектор");

        return;
    }

    let sum = 0;

    for(let x of vector){

        sum += x*x;

    }

    let norm = Math.sqrt(sum);

    if(norm===0){

        alert("Неможливо нормувати нульовий вектор");

        return;

    }

    let normalized = [];

    for(let x of vector){

        normalized.push(
            (x/norm).toFixed(3)
        );

    }

    document.getElementById("normalized").innerHTML =
        "Нормований вектор: " +
        normalized.join(" ");

}



function countZeros(){

    if(vector.length===0){

        alert("Спочатку згенеруйте вектор");

        return;
    }

    let count = 0;

    for(let x of vector){

        if(x===0){

            count++;

        }

    }

    document.getElementById("zeros").innerHTML =
        "Кількість нульових координат: " +
        count;

}



function subtractVectors(){

    if(vector.length===0){

        alert("Спочатку згенеруйте вектор");

        return;
    }

    let vector2 =
        document.getElementById("vector2")
        .value
        .split(" ")
        .map(Number);

    if(vector2.length!==vector.length){

        alert(
            "Вектори повинні мати однакову довжину"
        );

        return;
    }

    let difference = [];

    for(let i=0;i<vector.length;i++){

        difference.push(
            vector[i]-vector2[i]
        );

    }

    document.getElementById("difference").innerHTML =
        "Різниця векторів: " +
        difference.join(" ");

}
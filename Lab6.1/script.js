document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnMessage").addEventListener("click", showMessage);
    document.getElementById("btnShowNumber").addEventListener("click", showNumber);
    document.getElementById("btnChangeText").addEventListener("click", changeText);
    document.getElementById("btnConsole").addEventListener("click", consoleExample);
    document.getElementById("btnCalc").addEventListener("click", calculate);
    document.getElementById("btnCheck").addEventListener("click", checkFields);
    document.getElementById("btnChangeColor").addEventListener("click", changeColor);
});

function showMessage()
{
    alert("Привіт!");
}

function showNumber()
{
    const value = document.getElementById("x1").value.trim();

    if (value === "")
    {
        alert("Поле порожнє");
        return;
    }

    alert(value);
}

function changeText()
{
    const value = document.getElementById("x1").value.trim();
    const demo = document.getElementById("demo1");

    if (value === "")
    {
        demo.textContent = "Введіть число у поле вище";
    }
    else
    {
        demo.textContent = "Введене число: " + value;
    }
}

function consoleExample()
{
    console.log("Кнопку натиснуто");

    document.getElementById("consoleText").textContent =
        "Повідомлення відправлено в консоль. Відкрий F12 → Console.";

    alert("Повідомлення виведено в консоль");
}

function calculate()
{
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const resultEl = document.getElementById("result");

    if (Number.isNaN(a) || Number.isNaN(b))
    {
        resultEl.textContent = "Введіть два дійсні числа.";
        return;
    }

    const sum = a + b;
    resultEl.textContent = "Результат = " + sum;
}

function checkFields()
{
    const x = document.getElementById("field1").value.trim();
    const y = document.getElementById("field2").value.trim();

    if (x === "" || y === "")
    {
        alert("Введіть число!");
        return;
    }

    const result = parseFloat(x) + parseFloat(y);

    if (Number.isNaN(result))
    {
        alert("Введіть дійсні числа!");
        return;
    }

    alert(result);
    console.log("Обчислення завершено");
}

function changeColor()
{
    document.getElementById("demo1").style.color = "red";
}
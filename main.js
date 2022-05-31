// variables con los inputs

const salary = inputSalary;

const spends = inputSpends;

const debt = inputDebt;





//buton que calcula la capacidad

function calcularCapacidad() {


    const salaryValue = parseInt(inputSalary.value);
    const spendsValue = parseInt(inputSpends.value);
    const debtValue = parseInt(inputDebt.value);

    //sumar gastos con la deuda


    const debtAndSpends = spendsValue + debtValue;


    //restar gastos mas deuda menos el salario


    const salaryMinusDebtAndSpends = salaryValue - debtAndSpends;

    //multiplicar salario por 0,35

    const result = parseInt(salaryMinusDebtAndSpends * 0.35);





    //llamar <p> donde se mostrara el resultado</p>

    const showResult = document.querySelector(".result");

    const indiceResult = document.querySelector(".indiceDeuda");

    showResult.innerHTML = result;

    //mostrar si tienes buen indice de deuda


    const indiceDeDeuda = parseInt(40 * inputSalary.value)
    const indiceDeDeudaentre100 = indiceDeDeuda / 100;



    if (indiceDeDeudaentre100 >= debtValue) {
        const buenIndice = indiceResult.innerHTML = "Felicidades Tienes buen indice y capacidad de deuda.";
    } else

    if (indiceDeDeudaentre100 <= debtValue) {
        const malIndice = indiceResult.innerHTML = "Tienes mal indice y capacidad de deuda, y no deberias pedir ningun credito."
    } else {
        const nada = indiceResult.innerHTML = "Ingresa la infomracion en la lista"
    };


    //alert in case the form is empty


    var a = document.forms["Form"]["input1"].value;
    var b = document.forms["Form"]["input2"].value;
    var c = document.forms["Form"]["input3"].value;

    if (a == null || a == "", b == null || b == "", c == null || c == "") {
        alert("Please Fill All Required Field");
        showResult.innerHTML = " Ingresa los datos";

    }
};

//reset button

function reset() {

    // get the inputs by their IDS

    const resetInput1 = document.querySelector("#inputSalary");
    const resetInput2 = document.querySelector("#inputSpends");
    const resetInput3 = document.querySelector("#inputDebt");


    //value empty when the reset button is clicked

    resetInput1.value = " ";
    resetInput2.value = " ";
    resetInput3.value = " ";

    //display 0


    const showResult = document.querySelector(".result");


    showResult.innerHTML = "0 ";


    const indiceResult = document.querySelector(".indiceDeuda");

    indiceResult.innerHTML = " ";


}
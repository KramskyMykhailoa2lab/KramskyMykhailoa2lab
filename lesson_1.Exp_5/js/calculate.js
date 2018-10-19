var x, y, result = 0;
function calculate(oper) {
  x = document.getElementById('firstNumber').value
  y = document.getElementById('secondNumber').value
  switch (oper) {
    case 1:
      result = +x + +y;
      document.getElementById("result").value = result;
      document.getElementById("secondNumber").disabled = false;
      break;
    case 2:
      result = +x - +y;
      document.getElementById("result").value = result;
      document.getElementById("secondNumber").disabled = false;
      break;
    case 3:
      result = +x * +y;
      document.getElementById("result").value = result;
      document.getElementById("secondNumber").disabled = false;
      break;
    case 4:
      result = +x / +y;
      document.getElementById("result").value = result;
      document.getElementById("secondNumber").disabled = false;
      break;
    case 5:
      result = Math.sqrt(x);
      document.getElementById("result").value = result;
      document.getElementById("secondNumber").disabled = true;
      break;
    case 6:
    function fact(x)
{
  if(x==0)
    return 1;
  return x* fact(x-1);
}
  document.getElementById("result").value = fact(x);
  document.getElementById("secondNumber").disabled = true;
      break;
    default:
    alert("Вы допустили ошибку");

  }

}

function quadratic_equation() {
  var  a = document.getElementById('arg_a').value;
  var  b = document.getElementById('arg_b').value;
  var  c = document.getElementById('arg_c').value;
  var result = 0;
  var d = b * b - 4 * a * c;
  if (d < 0) {
    alert('Уравнение не имеет действительных корней');
  }else if (d == 0) {
    result = -b / ( 2 * a );
    document.getElementById('x_1').value = result;
    document.getElementById('x_2').value = result;
  } else {
    result = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
    document.getElementById('x_1').value = result;
    result = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
    document.getElementById('x_2').value = result;
  }
}

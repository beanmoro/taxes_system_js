"use strict";

var _client = _interopRequireDefault(require("./client.js"));
var _tax = _interopRequireDefault(require("./tax.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var main = function main() {
  var exit = false;
  var clients = [];
  var _loop = function _loop() {
    var option = parseInt(prompt('XYZ Consultores\nOpciones:\n1.- Registrar Cliente.\n2.- Calcular Impuesto de un cliente.\n3.- Salir.'));
    switch (option) {
      case 1:
        var name = prompt('Ingrese nombre del cliente: ');
        var n_taxes = parseInt(prompt('Indique el numero de impuestos que va a ingresar: '));
        var client = new _client["default"](name);
        for (var i = 0; i < n_taxes; i++) {
          var annualGrossAmount = parseFloat(prompt("Ingrese el monto bruto anual del impuesto ".concat(i, ": ")));
          var deductions = parseFloat(prompt("Ingrese las deducciones del impuesto ".concat(i, ": ")));
          var tax = new _tax["default"](annualGrossAmount, deductions);
          client.salary.push(tax);
          console.log("Impuesto #".concat(i, ":\nIngreso bruto anual: ").concat(annualGrossAmount, "\nDeducciones: ").concat(deductions, "\n"));
        }
        clients.push(client);
        alert("Se ha creado el cliente ".concat(client.name, " con exito!\nLos impuestos se mostraran por consola..."));
        break;
      case 2:
        var clientName = prompt('Indique el nombre del cliente: ');
        var clientFound = clients.find(function (c) {
          return c.name == clientName;
        });
        if (!clientFound) {
          alert("Cliente de nombre ".concat(clientName, " no encontrado!"));
          return 1; // continue
        }
        alert("El impuesto total a pagar del cliente ".concat(clientName, " es: $").concat(clientFound.calculateTax()));
        break;
      case 3:
        exit = confirm('Esta seguro de que quiere salir del programa?');
        break;
      default:
        alert('Ingresaste una opcion no valida! Intente nuevamente...');
    }
  };
  while (!exit) {
    if (_loop()) continue;
  }
};
main();
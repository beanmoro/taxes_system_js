import Client from './client.js';
import Tax from './tax.js';


const main = () => {

    let exit = false;
    const clients = [];

    while (!exit) {

        let option = parseInt(prompt('XYZ Consultores\nOpciones:\n1.- Registrar Cliente.\n2.- Calcular Impuesto de un cliente.\n3.- Salir.'));


        switch (option) {

            case 1:
                let name = prompt('Ingrese nombre del cliente: ');
                let n_taxes = parseInt(prompt('Indique el numero de impuestos que va a ingresar: '));

                const client = new Client(name);
                
                for (let i = 0; i < n_taxes; i++) {
                    let annualGrossAmount = parseFloat(prompt(`Ingrese el monto bruto anual del impuesto ${i}: `));
                    let deductions = parseFloat(prompt(`Ingrese las deducciones del impuesto ${i}: `));
                    const tax = new Tax(annualGrossAmount, deductions);
                    client.salary.push(tax);
                    console.log(`Impuesto #${i}:\nIngreso bruto anual: ${annualGrossAmount}\nDeducciones: ${deductions}\n`);
                }
                clients.push(client);
                alert(`Se ha creado el cliente ${client.name} con exito!\nLos impuestos se mostraran por consola...`);

                break;
            case 2:

                let clientName = prompt('Indique el nombre del cliente: ');
                let clientFound = clients.find(c => c.name == clientName);

                if (!clientFound) {
                    alert(`Cliente de nombre ${clientName} no encontrado!`);
                    continue;
                }

                alert(`El impuesto total a pagar del cliente ${clientName} es: $${clientFound.calculateTax()}`);

                break;
            case 3:
                exit = confirm('Esta seguro de que quiere salir del programa?');
                break;
            default:
                alert('Ingresaste una opcion no valida! Intente nuevamente...');

        }
    }


}



main();
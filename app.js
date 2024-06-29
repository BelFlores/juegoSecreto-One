/*let titulo=document.querySelector('h1');
titulo.innerHTML='Juego de Belén';
let parrafo=document.querySelector('p');
parrafo.innerHTML='Indica un número del 1 al 10';
function intentoUsuario()
{
    alert('click desde el botón');
}*/
let NumeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
CondicionesInicio();
console.log(NumeroSecreto);
            function CondicionesInicio()
            {
                AsignarTextoElemento('h1','Juego de Belén');
                AsignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
                NumeroSecreto=GenerarNumberSecret();
                intentos=1;
            }
            function AsignarTextoElemento(elemento,texto)
            {
            let titulo=document.querySelector(elemento);
            titulo.innerHTML=texto;
            }


            function GenerarNumberSecret()
            {
                let NumeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
                console.log(NumeroGenerado);
                console.log(listaNumerosSorteados);
                //si ya generamos todos los números
                if(listaNumerosSorteados.length==numeroMaximo)
                    {AsignarTextoElemento('p','Ya se sortearon todos los números posibles');}
                else{
                        if(listaNumerosSorteados.includes(NumeroGenerado))
                        {
                            return GenerarNumberSecret();
                        }
                        else
                        {
                            listaNumerosSorteados.push(NumeroGenerado);
                            return NumeroGenerado;

                        }
                    }

            }

            function intentoUsuario()
            {
            /* document.querySelector('input');*/
            let NumeroUsuario=parseInt(document.getElementById('ValorUsuario').value);
            /*console.log(typeof(NumeroUsuario));
            console.log(NumeroUsuario);
            console.log(typeof(NumeroSecreto));
            console.log(NumeroSecreto);
            console.log(NumeroSecreto==NumeroUsuario);
            */
            //ACERTO
            if(NumeroSecreto==NumeroUsuario)
                {
                    AsignarTextoElemento('p',`Acertaste el número secreto es ${NumeroSecreto}. Lo lograste en ${intentos} ${(intentos==1) ? 'intento' : 'intentos'}`);
                    document.getElementById('reiniciar').removeAttribute('disabled');
                }
                //FALLO
                else
                {
                        if(NumeroUsuario<NumeroSecreto)
                        {
                            AsignarTextoElemento('p','El número secreto es mayor');
                        }
                        if(NumeroUsuario>NumeroSecreto)
                        {
                            AsignarTextoElemento('p','El número secreto es menor');
                        }

                }
                intentos++;
                limpiarCaja();
            return;
            }

function limpiarCaja()
{
    /*let valorCaja= document.querySelector('#ValorUsuario');
    valorCaja.value='';*/
    document.querySelector('#ValorUsuario').value='';
}

function reiniciarJuego()
{
    //limpiar caja
    limpiarCaja();
    //mensaje ingresa un numero entre 1 y 10
    //generar el numero secreto
    //reiniciar el numero de intentos
    CondicionesInicio();
    //deshabilitar el boton de reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
/* ARRAYS
let frutas = ["Manzana", "Uva", "Naranja"];
Añadir
frutas.push("Fresa");
console.log(frutas); 
eliminar el ultimo elemento
frutas.pop();
console.log(frutas);
*/
lenguagesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];
let i=0;
function OrdenInverso()
{  
    for (i=lenguagesDeProgramacion.length-1; i>=0; i--)
        {
            console.log(lenguagesDeProgramacion[i]);
        }
}
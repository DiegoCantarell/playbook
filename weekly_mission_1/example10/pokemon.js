/*|Example 9: Ejercicio.

Indicaciones :

Crea el archivo pokemon.js. 3, Crea una clase Pokemon, exportala usando CommonJS, de tal forma que pueda usarse como se indica previamente.

Crea la clase.

Crea un constructor que permita recibir un nombre.

Crea la función sayHello().

Crea la función sayMessage().

Exporta la clase para que pueda ser importada en el archivo main.js.

Este ejercicio es producto de todos los previos ejercicios.
*/

export default class Pokemon {
	constructor (name){
		this.name=name
	}
	
	sayHello  (){
                
                console.log('[' + this.name + '] ' + "IS SAYING HELLO")
        }

	
	sayMessage  (message){
		this.count++
		console.log('[' + this.name + '] ' + message)
	}
}



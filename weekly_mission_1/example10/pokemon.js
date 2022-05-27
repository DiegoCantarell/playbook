//|Example 10: Ejercicio.

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



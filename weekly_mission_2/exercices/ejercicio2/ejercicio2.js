const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("\t*****#1 Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH\n")
explorers.forEach(explorer => console.log(explorer.name))


//Imprime el stack de cada explorer, usa FOR EACH
console.log("\t*****#2 Imprime el stack de cada explorer, usa FOR EACH\n")
explorers.forEach(explorer => console.log(explorer.stack))

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\t*****#3 Crea una nueva lista con las listas de stacks de cada explorer, usa MAP\n")
const explorerStack = explorers.map(function(explorer){return explorer.stack})
console.log(explorerStack)


//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\t*****#4 Obtén la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes)\n" )
const explorersJs = explorers.filter((stackJs) => 
	stackJs.stack.includes('js')
)
console.log(explorersJs)


//Busca el primer explorer que sea de la CDMX, usa FIND
console.log("\t***** #5 Busca el primer explorer que sea de la CDMX, usa FIND \n")
const cityExplorer = explorers.find((explorer) => explorer.city == "CDMX")
console.log(cityExplorer)



//Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("\t*****Obtén la suma de todos los exercises_completed, usa REDUCE\n")

const resultExercisesCompleted = explorers.reduce((acc,element) =>  acc + element.exercises_completed,0)
console.log(resultExercisesCompleted)


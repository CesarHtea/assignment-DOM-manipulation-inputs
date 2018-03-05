document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
	document.querySelector("#reset-field input").value = ""
	
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  	//identificar la caja de entrada
  	let box = document.querySelector("#validate-field input") 
  	// identificar el elemento donde va la respuesta
  	let mensaje = document.querySelector("#validate-field .flash-message")
  	// evaluar si el valor que entra es menor a 6
  	if ( box.value.length < 6 ) {
  		// si el valor que entra es menor a 6, aparece un mensaje backgroundcolor rojo
  		mensaje.textContent = "Input not long enough"
  		mensaje.classList.add("invalid")
  	} else {
  		// si el valor que entra es mayor a 6, aparece un mensaje backgroundcolor verde
  		mensaje.textContent = "Field Valid"
  		mensaje.classList.remove("invalid")
  		mensaje.classList.add("valid")
  	} 


})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  const listItems = document.querySelectorAll("#calculate-items input")
  const arrayOfItems = 	[...listItems]
  let precioFinal = 0
  let precioPantalla = document.querySelector(".sum-total")
  for (i = 0 ; i < arrayOfItems.length ; i++) {
  	if (arrayOfItems[i].checked === true) {
  		precioFinal += parseInt(arrayOfItems[i].value)
  	}
  }
  if (precioFinal > 0) {
  	precioPantalla.textContent = "$ " + precioFinal
  } 
  else {
  	precioPantalla.textContent = "$ 0"
  }

 })


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
  	let listaOpciones = document.querySelector("#select-to-show-more .selection")
  	// console.log(listaOpciones.options[listaOpciones.selectedIndex].textContent)
  	const selected = listaOpciones.options[listaOpciones.selectedIndex]
  	// console.log(selected)
  	
    // targetear el elemento con etiqueta "img-box" e innerHTML una imagen
  	aquiVaLaImagen = document.querySelector("#select-to-show-more .img-box")
  	aquiVaLaImagen.innerHTML = '<img src="./images/' + selected.dataset.img + '" alt="">'
  	  	
    aquiVaMakeModel = document.querySelector("#select-to-show-more .model")
    aquiVaMakeModel.textContent = selected.value

    aquiVaMsrp = document.querySelector("#select-to-show-more .msrp")
  	aquiVaMsrp.textContent = selected.dataset.msrp

    aquiVaMpg = document.querySelector("#select-to-show-more .mpg")
    aquiVaMpg.textContent = selected.dataset.mpg

    aquiVaEd = document.querySelector("#select-to-show-more .edmunds")
    aquiVaEd.textContent = selected.dataset.edmunds

}) 

// TASK #5
document.querySelector("#add-guest input").addEventListener("keypress", function(e) {
		if (e.keyCode === 13) {
			var node = document.createElement("li")
			node.classList = "guest"
			node.textContent = this.value
			document.querySelector("#add-guest ul").appendChild(node)
			this.value = ""
		}
	})

// TASK #6

inputMio = document.querySelector('#add-item-bonus input')
inputMio.addEventListener('keypress', funcionMia)
function funcionMia(e) {
	if (e.keyCode === 13) {
		// valor del input
		textoAgregar = this.value
		console.log(textoAgregar)
		liNuevo = document.createElement('li')
		liNuevo.textContent = textoAgregar
		liNuevo.classList.add('item')
		papa = document.querySelector('#add-item-bonus ul')
		papa.appendChild(liNuevo)
		botonX = document.createElement('button')
		botonX.textContent = 'X'
		botonX.classList.add('remove')
		console.log(botonX)
		liNuevo.appendChild(botonX)
		botonX.addEventListener('click', function(e) {
			e.currentTarget.parentNode.remove()

		})
	}
}


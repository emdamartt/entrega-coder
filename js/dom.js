	// Creamos el nombre de la pagina.

	const title = document.getElementById("title");
	title.innerText = `
						E-Martket`;
	console.log(title, "agregamos titulo de pagina");
	// Creamos en base al header un div contenedor, que contiene a sus hijos div y los mismos a dif etiquetas.
	const header = document.getElementById("header");
	let container = document.createElement("div");
	container.classList.add("container");
	header.appendChild(container);
	console.log(header);

	let row = document.createElement("div");
	row.classList.add("row");
	container.appendChild(row);
	console.log(header);

	let col = document.createElement("div");
	col.classList.add("four");
	col.classList.add("columns");
	col.innerHTML = `<h1>E-Martket</h1>`;
	row.appendChild(col);
	console.log(header);

	let divColumns = document.createElement("div");
	divColumns.classList.add("two");
	divColumns.classList.add("columns");
	divColumns.classList.add("u-pull-right");
	divColumns.innerHTML = `
						<ul>
							<li class="submenu">
								<img src="img/cart.png">
								    <div id="carrito">
										<p class="vacio">carrito vacio</p>
									<table id="lista-carrito" class="u-full-width">
										<thead>
											<tr>
												<th>Imagen</th>
												<th>Productos</th>
												<th>Precio</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
										<a href="#" id="vaciar-carrito" class="button u-full-width">vaciar carrito</a>
								</div>
							</li>
						</ul>`;
	row.appendChild(divColumns);
	console.log(row);

	// Creamos un segundo div en HTML y llamamos a sus hijos.

	const hero = document.getElementById("hero");
	let agrupar = document.createElement("div");
	agrupar.classList.add("container");

	hero.appendChild(agrupar);
	console.log(hero);

	// Creamos un div class row
	let casilla = document.createElement("div");
	casilla.classList.add("row");
	agrupar.appendChild(casilla);
	// agrupar.appendChild(casilla)

	// Creamos el hijo de row
	let divThree = document.createElement("div");
	divThree.classList.add("six");
	divThree.classList.add("columns");

	casilla.appendChild(divThree);
	console.log(casilla);

	// Creamos el hijo del div de class six columns y su contenido.

	let contenido = document.createElement("div");
	contenido.classList.add("contenido-hero");
	contenido.innerHTML = `
							<h2>Tu compra</h2>
							<p>Todos los pedidos con descuento</p>
							<form>
								<input class="u-full-width" type="text" placeholder="¿Que te gustaria comprar?" id="buscador">
								<input type="submit" class="submit-buscador">
							</form>`;
	divThree.appendChild(contenido);
	console.log(divThree, "aaaaaaaaaaa");

	// Creamos los hijos que contiene el div con id barra.
	const barra = document.getElementById("barra");
	let divBarra = document.createElement("div");
	divBarra.classList.add("container");
	barra.appendChild(divBarra);
	console.log(barra);

	// Creamos el hijo de div container.
	// Div Row
	let rowDiv = document.createElement("div");
	rowDiv.classList.add("row");
	divBarra.appendChild(rowDiv);
	console.log(divBarra);
	// Primer columna de row

	let divFour = document.createElement("div");
	divFour.classList.add("four");
	divFour.classList.add("columns");
	divFour.classList.add("icono");
	divFour.classList.add("icono1");
	divFour.innerHTML = `
				<p>100 productos diferentes<br>
				Explora los nuevos productos</p>`;
	rowDiv.appendChild(divFour);
	console.log(rowDiv);

	// Segunda columna de row
	let divFive = document.createElement("div");
	divFive.classList.add("four");
	divFive.classList.add("columns");
	divFive.classList.add("icono");
	divFive.classList.add("icono2");
	divFive.innerHTML = `
						<p>Expertos<br>
						Prueba las nuevas combinaciones</p>`;
	rowDiv.appendChild(divFive);
	console.log(rowDiv);

	// Tercer columna de row
	let divSix = document.createElement("div");
	divSix.classList.add("four");
	divSix.classList.add("columns");
	divSix.classList.add("icono");
	divSix.classList.add("icono3");
	divSix.innerHTML = `
						<p>Envio<br>
						Gratis hasta tu casa</p>`;
	rowDiv.appendChild(divSix);
	console.log(rowDiv);

	// Creamos el div que va a contener la lista del catalogo.
	const lista = document.getElementById("lista-catalogo");
	lista.innerHTML = `<h1 class="encabezado"> Muchos productos </h1>`;
	var rowContainer = document.createElement("div");
	const productosConPrecio = [
		{
		img: "../img/product1.jpg",
		precio: "70.000",
		precioOffer: "55.000",
		},
		{
		img: "../img/product2.jpg",
		precio: "150.000",
		precioOffer: "100.000",
		},
		{
		img: "../img/product3.jpg",
		precio: "120.000",
		precioOffer: "90.000",
		},
	];
	var x = 0;
	for (const p of productosConPrecio) {
	    console.log(p.img);

var fourColumn = document.createElement("div");
	fourColumn.classList.add("four");
	fourColumn.classList.add("columns");
	rowContainer.appendChild(fourColumn);
	rowContainer.classList.add("row");
	rowContainer.classList.add("separaciones");
const productoColocar = p.img;
	fourColumn.innerHTML = `<div class="card">
	<img src=${productoColocar} class="u-full-width">
	<div class="info-card">
		<h4>Pc Gamer Sencilla ${x + 1}</h4>
		<p>Envio Gratis</p>
		<img src="img/estrellas.png">
		<p class="precio">${p.precio}}<span class="u-pull-right">${
		p.precioOffer}</span></p>
		<a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar al carrito</a>
	</div>
</div>`;
	}
for (let x = 0; x < 3; x++) {
	const esto = rowContainer.cloneNode("true");
	lista.appendChild(esto);
	}

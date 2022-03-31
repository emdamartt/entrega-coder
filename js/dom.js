//Array de objetos con su atributo img. Refiere a la seccion de productos. Se recorre el array para mostrar las imagenes correspondientes.

document.addEventListener('DOMContentLoaded',function(){ //Se crea la funcion una vez que el documento haya cargado.
    let productos = [
        {
            id: 1,
            img:'/img gallery/1.jpg'},
        {
            id: 2,
            img:'/img gallery/2.jpg'},
        {
            id: 3,
            img:'/img gallery/3.jpg'},
        {
            id: 4,
            img:'/img gallery/4.jpg'},
        {
            id: 5,
            img:'/img gallery/5.jpg'},
        {
            id: 6,
            img:'/img gallery/6.jpg'},
        {
            id: 7,
            img:'/img gallery/7.jpg'},
        {
            id: 8,
            img:'/img gallery/8.jpg'},
        {
            id: 9,
            img:'/img gallery/9.jpg'},
        {
            id: 10,
            img:'/img gallery/10.jpg'},
        {
            id: 11,
            img:'/img gallery/11.jpg'},
        {
            id: 12,
            img:'/img gallery/12.jpg'},
        {
            id: 13,
            img:'/img gallery/13.jpg'},
        {
            id: 14,
            img:'/img gallery/14.jpg'},
        {
            id: 15,
            img:'/img gallery/15.jpg'},
        {
            id: 16,
            img:'/img gallery/16.jpg'},
        {
            id: 17,
            img:'/img gallery/17.jpg'},
        {
            id: 18,
            img:'/img gallery/18.jpg'},
        {
            id: 19,
            img:'/img gallery/19.jpg'},
        {
            id: 20,
            img:'/img gallery/20.jpg'},
        {
            id: 21,
            img:'/img gallery/21.jpg'},
        {
            id: 22,
            img:'/img gallery/22.jpg'},
        {
            id: 23,
            img:'/img gallery/23.jpg'},
        {
            id: 24,
            img:'/img gallery/24.jpg'},
        {
            id: 25,
            img:'/img gallery/25.jpg'}
    ];

//Creamos el nombre de la pagina. 

const title = document.getElementById('title');
		title.innerText = `
						E-Martket`
console.log(title, "agregamos titulo de pagina")
//Creamos en base al header un div contenedor, que contiene a sus hijos div y los mismos a dif etiquetas. 
const header = document.getElementById('header');
let container = document.createElement('div');
    container.classList.add("container");
header.appendChild(container);
console.log(header);

let row = document.createElement('div');
	row.classList.add('row');
container.appendChild(row);
console.log(header)

let col = document.createElement('div');
	col.classList.add('four');
	col.classList.add('columns');
	col.innerHTML = `<h1>E-Martket</h1>`
row.appendChild(col);
console.log(header)

let divColumns = document.createElement('div');
	divColumns.classList.add('two');
	divColumns.classList.add('columns');
	divColumns.classList.add('u-pull-right');
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
						</ul>`
row.appendChild(divColumns);
console.log(row)

//Creamos un segundo div en HTML y llamamos a sus hijos. 

const hero = document.getElementById('hero');
let agrupar = document.createElement('div');
	agrupar.classList.add('container');

hero.appendChild(agrupar);
console.log(hero);

//Creamos un div class row
let casilla = document.createElement('div');
	casilla.classList.add('row')

agrupar.appendChild(casilla)

//Creamos el hijo de row
let divThree = document.createElement('di');
	divThree.classList.add('six');
	divThree.classList.add('columns');

casilla.appendChild(divThree);
console.log(casilla)	

//Creamos el hijo del div de class six columns y su contenido.

let contenido = document.createElement('div');
	contenido.classList.add('contenido-hero');
	contenido.innerHTML = ` 
							<h2>Tu compra</h2>
							<p>Todos los pedidos con descuento</p>
							<form>
								<input class="u-full-width" type="text" placeholder="¿Que te gustaria comprar?" id="buscador">
								<input type="submit" class="submit-buscador">
							</form>`
divThree.appendChild(contenido);
console.log(divThree);

//Creamos los hijos que contiene el div con id barra.
const barra = document.getElementById('barra')
let divBarra = document.createElement('div');
	divBarra.classList.add("container");
barra.appendChild(divBarra)
console.log(barra)

//Creamos el hijo de div container. 
//Div Row
let rowDiv= document.createElement('div');
	rowDiv.classList.add('row')
divBarra.appendChild(rowDiv)
console.log(divBarra)
//Primer columna de row

let divFour = document.createElement('div');
	divFour.classList.add('four')
	divFour.classList.add('columns');
	divFour.classList.add('icono');
	divFour.classList.add('icono1');
	divFour.innerHTML = `
				<p>100 productos diferentes<br>
				Explora los nuevos productos</p>`
rowDiv.appendChild(divFour);
console.log(rowDiv);

//Segunda columna de row 
let divFive = document.createElement('div');
	divFive.classList.add('four')
	divFive.classList.add('columns');
	divFive.classList.add('icono');
	divFive.classList.add('icono2');
	divFive.innerHTML = `
						<p>Expertos<br>
						Prueba las nuevas combinaciones</p>`
rowDiv.appendChild(divFive);
console.log(rowDiv);

//Tercer columna de row
let divSix = document.createElement('div');
	divSix.classList.add('four')
	divSix.classList.add('columns');
	divSix.classList.add('icono');
	divSix.classList.add('icono3');
	divSix.innerHTML = `
						<p>Envio<br>
						Gratis hasta tu casa</p>`
rowDiv.appendChild(divSix);
console.log(rowDiv);

//Creamos el div que va a contener la lista del catalogo. 

const lista = document.getElementById('lista-catalogo');
		lista.innerHTML = `
						<h1 class="encabezado">Pedidos en linea</h1>`
console.log(lista, "agregamos el titulo de la seccion");




var rowContainer = document.createElement("div");
for (let x = 0; x < 4; x++) {
    console.log("hola");

    var fourColumn = document.createElement("div");
    fourColumn.classList.add("four");
    fourColumn.classList.add("columns");
    rowContainer.appendChild(fourColumn);
    rowContainer.classList.add("row");
    const productoColocar = `../img/product${x + 1}.jpg`;
    fourColumn.innerHTML = `<div class="card">
<img src=${productoColocar} class="u-full-width">
<div class="info-card">
    <h4>Pc Gamer Sencilla</h4>
    <p>Envio Gratis</p>
    <img src="img/estrellas.png">
    <p class="precio">$50<span class="u-pull-right">$15</span></p>
    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar al carrito</a>
</div>
</div>`;
    const lista = document.getElementById("lista-catalogo");
    lista.innerHTML;
    lista.appendChild(rowContainer);
}
})
const foot = document.getElementById('foot');
let navFoot = document.createElement('nav');
	navFoot.classList.add('menu');
	navFoot.innerHTML = `
						<a class="enlace" href="#">Fabrica</a>
						<a class="enlace" href="#">Ubicacion</a>
						<a class="enlace" href="#">Telefono</a>`	
foot.appendChild(navFoot);
console.log(foot)

let divFoot = document.createElement('div')
	divFoot.classList.add('four');
	divFoot.classList.add('columns');
	divFoot.innerHTML = `
						<nav class="menu">
							<a class="enlace" href="#">Fabrica</a>
							<a class="enlace" href="#">Ubicacion</a>
							<a class="enlace" href="#">Telefono</a>
					</nav>`

foot.appendChild(divFoot)
console.log(foot);

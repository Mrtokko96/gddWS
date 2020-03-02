const fs = require( 'fs' )
const path = require( 'path' )

//go to main page
const toMainMenu = document.getElementById( 'toMainMenu' )
toMainMenu.addEventListener( "click", ()=>{
	window.location='../../app/app.html'
} )
var test = window.location.href

console.log( test )

//current project location
// lists all folders
fs.readdir( __dirname, ( err, files ) =>{
	//checks for err
	if ( err ) { return console.log( err ) }
	files.forEach( ( file ) => {
		const projectCategoryList = document.getElementById( 'projectCategoryList' )
		// renders only folders
		if ( !file.includes( '.html' ) && !file.includes( 'icon' ) ) {
			//creating category icons
			const projectCategoryIcon = document.createElement( 'img' )	
			projectCategoryIcon.setAttribute( 'src', `${__dirname}/${file}/icon.png` )
			projectCategoryIcon.setAttribute( 'id', 'projectCategoryIcon' )
			projectCategoryIcon.addEventListener( 'click', () => {
				window.location = `${__dirname}/${file}/index.html`
			} )
			projectCategoryList.appendChild( projectCategoryIcon )
			}	
	} )
} )
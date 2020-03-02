const fs = require( 'fs' )
const path = require( 'path' )

const projectLocation = "./content"
const projectListItemLocation = "../content"
const creationButton = document.getElementById( 'creationButton' )

const newProject = document.getElementById( 'newProject' )
const createNewProject = document.getElementById( 'createNewProject' )
const newProjectModalClose = document.getElementById( 'newProjectModalClose' )

//opens modal box for new project creation
newProject.addEventListener( "click", ()=>{
	createNewProject.style.display = "block"
} )
//cleses modal box for new project creation
newProjectModalClose.addEventListener( 'click', ()=>{
	createNewProject.style.display = "none"
} )

// create new project
creationButton.addEventListener('click', ()=>{
	const newProjectName = document.getElementById( 'projectName' )
	//Create folder name must be more than 3 letter
	if ( newProjectName.value.length >= 3 ) {
		fs.mkdir(`./Content/${newProjectName.value}`, ( err ) => { console.log( "World Folder Created" )}) 
		fs.mkdir(`./Content/${newProjectName.value}/Buildings and Landmark`, ( err ) => {console.log( "Buildings and Landmark Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Character`, ( err ) => {console.log( "Character Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Condition`, ( err ) => {console.log( "Condition Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Conflict`, ( err ) => {console.log( "Conflict Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Country`, ( err ) => {console.log( "Country Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Document`, ( err ) => {console.log( "Document Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Ethnicity`, ( err ) => {console.log( "Ethnicity Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Generic Article`, ( err ) => {console.log( "Generic Article Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Geography`, ( err ) => {console.log( "Geography Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Item`, ( err ) => {console.log( "Item Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Language`, ( err ) => {console.log( "Language Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Material`, ( err ) => {console.log( "Geography Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Military Unit`, ( err ) => {console.log( "Military Unit Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Myth / Legend`, ( err ) => {console.log( "Myth / Legend Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Natural Law`, ( err ) => {console.log( "Natural Law Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Organization`, ( err ) => {console.log( "Oranization Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Profession`, ( err ) => {console.log( "Profession Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Plot`, ( err ) => {console.log( "Plot Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Prose`, ( err ) => {console.log( "Prose Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Religion`, ( err ) => {console.log( "Religion Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Title`, ( err ) => {console.log( "Title Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Session Report`, ( err ) => {console.log( "Session Report Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Settlement`, ( err ) => {console.log( "Settlement Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Species`, ( err ) => {console.log( "Species Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Spell`, ( err ) => {console.log( "Spell Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Tech`, ( err ) => {console.log( "Tech Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Tradition`, ( err ) => {console.log( "Tradition Folder Created" );})
		fs.mkdir(`./Content/${newProjectName.value}/Vehicle`, ( err ) => {console.log( "Vehicle Folder Created" ); })
		// reloads page to show newly created project
		location.reload()
		// create icon for project
		fs.copyFile(`${projectListItemIcon.files[0].path}`, `./content/${newProjectName.value}/icon.png`, (err) => {
  			if (err) throw err;
  			console.log('source.txt was copied to destination.txt');
		});
	}
})
// list all projects
fs.readdir( projectLocation, ( err, files ) => {
	if ( err ) { return console.log( 'error happend: ' + err ) }
	files.forEach( (file)=> {
		// create projects container
		const projectList = document.getElementById( 'projectList' );
		//create projects list name & icon
		const projectListItem = document.createElement( 'a' )
		const projectListItemName = document.createTextNode( file )
		const projectListItemIcon = document.createElement( 'img' )
		const projectListItemIconLocation = `${projectListItemLocation}/${file}/icon/icon.png`
		// set id for list items
		projectListItem.setAttribute( 'id', "projectListItem" )
		// set icons for projects
		projectListItemIcon.setAttribute( 'src', projectListItemIconLocation )
		projectListItemIcon.setAttribute( 'height', "50%" )
		//set link for projects
		// projectListItem.setAttribute( 'href', `${projectListItemLocation}/${file}/index.html` )

		//project onclick
		projectListItem.addEventListener( "click", ()=>{ 
			window.location=`${projectListItemLocation}/${file}/index.html`
		} )


		projectListItem.appendChild( projectListItemName )
		projectListItem.appendChild( projectListItemIcon )
		projectList.appendChild( projectListItem )
	} )
} )



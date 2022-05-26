import style from '../main.css';
import boxFolderLogo from '../assets/bx-folder.svg';
import spaceImage from '../assets/space-project-screen.png';
import galleria from '../assets/galleriaLanding.png';
import archStudio from '../assets/archstudio.png';
import bookApi from '../assets/projectAA.png';
import pet from '../assets/front-display.png';
import imageVault from '../assets/image-vault.png';


/*
*   Panels function component to hold individual project images types
*   types of languages and links to individual projects
*/
function panels(source, name, folderName, anchorTag){
    const panelContainer = document.createElement('div');
    panelContainer.classList.add('project_panel');

    const linkAnchor = document.createElement('a');
    linkAnchor.href = anchorTag;
    linkAnchor.target = "_blank";
    linkAnchor.id = "link_anchor";

    let panelImg = document.createElement('img')
    panelImg.classList.add('panel_img');
    panelImg.id = name;
    panelImg.src = source;

    let folderImg = document.createElement('img');
    folderImg.classList.add('folder_img');
    folderImg.id = folderName;
    folderImg.src = boxFolderLogo;


    panelContainer.append(panelImg);

    linkAnchor.append(panelContainer);

    return linkAnchor;
}

function createProject(){

    const projectWrapper = document.createElement('project');
    projectWrapper.classList.add('project_wrapper');
    projectWrapper.id = "work";

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('project_title_container');

    const title = document.createElement('p');
    title.classList.add('project_title');
    title.innerText = "My Works"

    titleContainer.append(title);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project_container');

    //const panelOne  = panels(spaceImage , 'space_img', 'folder_one', "https://carlosmartinezfiu.github.io/space-tour/");
    //const panelTwo  = panels(galleria, 'galleria_img' , 'folder_two', "https://carlosmartinezfiu.github.io/galleria-beta/");
    //const panelThree  = panels(archStudio, "archstudio_img", "folder_three", "https://carlosmartinezfiu.github.io/archstudios/");
    const panelFour = panels(bookApi, 'react-api', 'folder_four', "https://carlosmartinezfiu.github.io/book-info/");
    const panelFive = panels(pet, 'pet_img', 'folder_five', 'https://node-pet-app-finder.herokuapp.com');
    const panelSix = panels(imageVault, 'image-vault', 'folder_six', 'https://image-vault-insta-app.herokuapp.com');



    const panelProjectContainerOne = document.createElement("div");
    panelProjectContainerOne.classList.add("project-panel-container-one");

    const panelProjectContainerTwo = document.createElement("div");
    panelProjectContainerTwo.classList.add("project-panel-container-two");

    const panelProjectContainerThree = document.createElement("div");
    panelProjectContainerThree.classList.add("project-panel-container-three");

    const panelProjectContainerFour = document.createElement("div");
    panelProjectContainerFour.classList.add("project-panel-container-four");

    const panelProjectContainerFive = document.createElement("div");
    panelProjectContainerFive.classList.add("project-panel-container-five");

    const panelProjectContainerSix = document.createElement("div");
    panelProjectContainerSix.classList.add("project-panel-container-six");

    let languageContainer = document.createElement("div");
    languageContainer.classList.add("language-container");
    let javascriptLanguage = document.createElement("p");
    javascriptLanguage.innerText = "Space-Tour";
    javascriptLanguage.classList.add("javascript-language");
    let htmlLanguage = document.createElement("p");
    htmlLanguage.innerText = "Space tourism multi-page website, challenge from Frontend Mentor. Built with Javscript, Css and Html";
    htmlLanguage.classList.add("html-language");
    languageContainer.append(javascriptLanguage, htmlLanguage);



    let languageContainerTwo = document.createElement("div");
    languageContainerTwo.classList.add("language-container");
    let javascriptLanguageTwo = document.createElement("p");
    javascriptLanguageTwo.innerText = "Galleria";
    javascriptLanguageTwo.classList.add("javascript-language");
    let htmlLanguageTwo = document.createElement("p");
    htmlLanguageTwo.innerText = "This is a multi-page art gallery website. Built with Javascript, Css and Html";
    htmlLanguageTwo.classList.add("html-language");
    languageContainerTwo.append(javascriptLanguageTwo, htmlLanguageTwo);



    let languageContainerThree = document.createElement("div");
    languageContainerThree.classList.add("language-container");
    let javascriptLanguageThree = document.createElement("p");
    javascriptLanguageThree.innerText = "Arch Studio";
    javascriptLanguageThree.classList.add("javascript-language");
    let htmlLanguageThree = document.createElement("p");
    htmlLanguageThree.innerText = "Frontend Mentor 4-page site challenge. Responsive built, built with Javscript Css and Html";
    htmlLanguageThree.classList.add("html-language");
    languageContainerThree.append(javascriptLanguageThree, htmlLanguageThree);

    let languageContainerFour = document.createElement("div");
    languageContainerFour.classList.add("language-container");
    let reactLanguageFour = document.createElement("p");
    reactLanguageFour.innerText = "Google Books API";
    let htmlLanguageFour = document.createElement("p");
    htmlLanguageFour.innerText = "Project tht uses Google's Book Api to retrive and display books by title.";
    htmlLanguageFour.classList.add("html-language");
    reactLanguageFour.classList.add("react-framework");
    languageContainerFour.append(reactLanguageFour, htmlLanguageFour);


    let languageContainerFive = document.createElement("div");
    languageContainerFive.classList.add("language-container");
    let reactLanguageFive = document.createElement("p");
    reactLanguageFive.innerText = "Petfinder API";
    let htmlLanguageFive = document.createElement("p");
    htmlLanguageFive.innerText = "Project tht uses Petfinder's Api to retrive and display pets for adoption. Used Node Js and Express to hide Api Key as well as GET/POST request.";
    htmlLanguageFive.classList.add("html-language");
    reactLanguageFive.classList.add("javascript-language");
    languageContainerFive.append(reactLanguageFive, htmlLanguageFive);



    let languageContainerSix = document.createElement("div");
    languageContainerSix.classList.add("language-container");
    let reactLanguageSix = document.createElement("p");
    reactLanguageSix.innerText = "Image-Vault";
    let htmlLanguageSix = document.createElement("p");
    htmlLanguageSix.innerText = "CRUD project build with React Node js Express  Postegresql and AWS S3. Allows to upload and image with location and description as well as edit a post and deleting.";
    htmlLanguageSix.classList.add("html-language");
    reactLanguageSix.classList.add("javascript-language");
    languageContainerSix.append(reactLanguageSix, htmlLanguageSix);



    //************** */
    //panelProjectContainerOne.append(panelOne, languageContainerThree);
    //panelProjectContainerTwo.append(panelTwo, languageContainerTwo);
    //panelProjectContainerThree.append(panelThree, languageContainer);
    panelProjectContainerFour.append(panelFour, languageContainerFour);
    panelProjectContainerFive.append(panelFive, languageContainerFive);
    panelProjectContainerSix.append(panelSix, languageContainerSix);


    projectContainer.append(panelProjectContainerFour, panelProjectContainerFive, panelProjectContainerSix);

    projectWrapper.append(titleContainer, projectContainer);

    return projectWrapper;

}

function loadProject(){
    const project = createProject();
    const getContent = document.getElementById('content');

    getContent.append(project);

}

export default loadProject;
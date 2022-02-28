import style from '../main.css';
import boxFolderLogo from '../assets/bx-folder.svg';
import spaceImage from '../assets/space-project-screen.png';
import galleria from '../assets/galleriaLanding.png';

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


    panelContainer.append(panelImg, folderImg);

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

    const panelOne  = panels(spaceImage , 'space_img', 'folder_one', "https://carlosmartinezfiu.github.io/space-tour/");
    const panelTwo  = panels(galleria, 'galleria_img' , 'folder_two', "https://carlosmartinezfiu.github.io/galleria-beta/");
    const panelThree  = panels();

    projectContainer.append(panelOne, panelTwo, panelThree);

    projectWrapper.append(titleContainer, projectContainer);

    return projectWrapper;

}

function loadProject(){
    const project = createProject();
    const getContent = document.getElementById('content');

    getContent.append(project);

}

export default loadProject;
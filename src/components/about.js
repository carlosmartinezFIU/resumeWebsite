import style from '../main.css';
import spaceImage from '../assets/space-project-screen.png';
import bugImageLogo from '../assets/bx-bug.svg';

function createAbout(){
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about_container');
    aboutContainer.id = 'about';

    const aboutContainerContent = document.createElement('div');
    aboutContainerContent.classList.add('about_container-content');

    const aboutPara = document.createElement('div');
    aboutPara.classList.add('about_para');

    let contentHeader = document.createElement('h3');
    contentHeader.innerHTML = 'About Me';
    

    let contentAbout = document.createElement('p');
    contentAbout.innerHTML = 'Hello, My name is Carlos and i am excited for my new adventure in this exciting career. My curiosity for coding started in 2015. Coming out of the Marine Corps Service, Ive always wondered how web-development and the inner workings of the engine worked. '

    let contentCont = document.createElement('p');
    contentCont.innerHTML = 'Advancing to now i have complete Univeristy and applying to create an exciting future within my career.'

    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('skills_container');

    let skillsTitle = document.createElement('p');
    skillsTitle.innerHTML = 'Here are some of the skills i have aquired within my studies: '

    let skillsList = document.createElement('ul');
    skillsList.classList.add('skill_list');

    /** 
     * HTML
     * Javascript
     * Java
     * CSS
     * React
     * Git
    */
    let bugImage = document.createElement('img');
    bugImage.src = bugImageLogo;
    bugImage.id = 'bug_image';

    let bugImage1 = document.createElement('img');
    bugImage1.src = bugImageLogo;
    bugImage.id = 'bug_image';

    let bugImage2 = document.createElement('img');
    bugImage2.src = bugImageLogo;
    bugImage.id = 'bug_image';

    let bugImage3 = document.createElement('img');
    bugImage3.src = bugImageLogo;
    bugImage.id = 'bug_image';

    let bugImage4 = document.createElement('img');
    bugImage4.src = bugImageLogo;
    bugImage.id = 'bug_image';

    let bugImage5 = document.createElement('img');
    bugImage5.src = bugImageLogo;
    bugImage.id = 'bug_image';


    let itemOne = document.createElement('li');
    itemOne.id = 'HTML';
    itemOne.innerHTML = 'HTML';

    let itemTwo = document.createElement('li');
    itemTwo.id = 'Javascript';
    itemTwo.innerHTML = 'Javascript';

    let itemThree = document.createElement('li');
    itemThree.id = 'Java';
    itemThree.innerHTML = 'Java';

    let itemFour = document.createElement('li');
    itemFour.id = 'CSS';
    itemFour.innerHTML = 'CSS';

    let itemFive = document.createElement('li');
    itemFive.id = 'React';
    itemFive.innerHTML = 'React';
    
    let itemSix = document.createElement('li');
    itemSix.id = 'Git';
    itemSix.innerHTML = 'Git';

    let imageOne = document.createElement('img');
    imageOne.classList.add('slider_panel');
    imageOne.src = spaceImage;

    
    let itemContainer = document.createElement('div');
    itemContainer.append(bugImage, itemOne);
    itemContainer.classList.add('itemContainer');

    let itemContainerTwo = document.createElement('div');
    itemContainerTwo.append(bugImage1, itemTwo);
    itemContainerTwo.classList.add('itemContainer');
    
    let itemContainerThree = document.createElement('div');
    itemContainerThree.append(bugImage2, itemThree);
    itemContainerThree.classList.add('itemContainer');
    
    let itemContainerFour = document.createElement('div');
    itemContainerFour.append(bugImage3, itemFour);
    itemContainerFour.classList.add('itemContainer');
    
    let itemContainerFive = document.createElement('div');
    itemContainerFive.append(bugImage4, itemFive);
    itemContainerFive.classList.add('itemContainer');
    
    let itemContainerSix = document.createElement('div');
    itemContainerSix.append(bugImage5, itemSix);
    itemContainerSix.classList.add('itemContainer');


    skillsList.append(itemContainer, itemContainerTwo, itemContainerThree, itemContainerFour, itemContainerFive, itemContainerSix);
    skillsContainer.append(skillsTitle, skillsList);

    aboutPara.append(contentAbout, contentCont, skillsContainer,);

    aboutContainerContent.append(aboutPara, imageOne);

    aboutContainer.append(contentHeader, aboutContainerContent);

    return aboutContainer;

}

function loadAbout(){
    const aboutCreated = createAbout();
    const getContent = document.getElementById('content');

    getContent.append(aboutCreated);


}

export default loadAbout;
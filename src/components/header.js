import style from '../main.css';

function createHeader(){
    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header_container');

    const headerContent = document.createElement('div');
    headerContent.classList.add('header_content');

    let intro = document.createElement('h1');
    intro.innerHTML = 'Hello, my name is'

    let introTwo = document.createElement('h2');
    introTwo.innerHTML = 'Carlos Martinez-Cortes.';
    introTwo.classList.add('name');

    let introSep = document.createElement('h2');
    introSep.innerHTML = 'Excited to enter into Web Development';
    introSep.classList.add('header_desc');

    let introThree = document.createElement('p');
    introThree.innerHTML = 'Recent Florida International University Graduate. Currently, Im currently focused on becoming a Fullstack Developer';

    headerContent.append(intro, introTwo,introSep, introThree);
    headerContainer.append(headerContent);

    return headerContainer;

}

function loadHeader(){
    const headerCreated  = createHeader();
    const getContent = document.getElementById('content');

    getContent.append(headerCreated);
}

export default loadHeader;
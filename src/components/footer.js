import style from '../main.css';
import { create } from "lodash";

function createFooter(){
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer_container');
    footerContainer.id = "contact";

    let footerTitle = document.createElement('h2');
    footerTitle.innerHTML = 'Get In Touch';


    let contentContainer = document.createElement('div');
    contentContainer.id = "content_container";

    let footerContent = document.createElement('p');
    footerContent.innerHTML = 'Thank you for coming to my site, I would like to hear from in the near future, my inbox is always open.';
    contentContainer.append(footerContent);


    let emailLink = document.createElement("a");
    emailLink.href = "mailto:martinezcarlosc99@gmail.com";
    emailLink.classList.add("email-link");

    let email = document.createElement('p');
    email.innerText = 'martinezcarlosc99@gmail.com';
    email.id = 'email';
    emailLink.append(email);

    let footerOff = document.createElement('p');
    footerOff.innerHTML = 'Designed and Built by Carlos Maritnez-Cortes';
    footerOff.classList.add('footer_design');


    let div = document.createElement('div');
    div.classList.add('footer_div');
    div.append(footerOff);

    contentContainer.append(emailLink, div);

    footerContainer.append(footerTitle, contentContainer);

    return footerContainer;

}

function loadFooter(){
    const footerCreated = createFooter();
    const getContent = document.getElementById('content');

    getContent.append(footerCreated);
}

export default loadFooter;
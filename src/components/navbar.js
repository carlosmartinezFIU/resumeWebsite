import style from '../main.css';
import navLogo from '../assets/bxs-analyse.svg';
import resumePdf from '../assets/Resume22.pdf';
import menuLogo from '../assets/bx-menu.svg';
import exitLogo from '../assets/bx-exit.svg';

function createNav(){
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav_container');
    navContainer.id = "nav_container";

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn_container');

    const darkLightSwitch = document.createElement('img');
    darkLightSwitch.src = navLogo;
    darkLightSwitch.classList.add('dark-Light_btn');

    const listContainer = document.createElement('ul');
    listContainer.classList.add('list_container')

    /**About Work Experience Contact Resume*/
    let aboutRef = document.createElement('a');
    aboutRef.href = '#about';
    aboutRef.innerHTML = 'About'
    let about = document.createElement('button');
    about.classList.add('about_btn');
    about.append(aboutRef);
    

    let aboutRefWork = document.createElement('a');
    aboutRefWork.href = '#work';
    aboutRefWork.innerHTML = 'Work'
    let work = document.createElement('button');
    work.classList.add('work_btn');
    work.append(aboutRefWork);



    let aboutRefExp = document.createElement('a');
    aboutRefExp.href = '#experience';
    aboutRefExp.innerHTML = 'Experience';
    let exp = document.createElement('button');
    exp.classList.add('exp_btn');
    exp.append(aboutRefExp)


    let aboutRefCon = document.createElement('a');
    aboutRefCon.href = '#contact';
    aboutRefCon.innerHTML = 'Contact'
    let contact = document.createElement('button');
    contact.classList.add('contact_btn');
    contact.append(aboutRefCon);


    let aboutRefRes = document.createElement('a');
    aboutRefRes.href = resumePdf;
    aboutRefRes.innerHTML = 'Resume'
    let resume = document.createElement('button');
    resume.classList.add('resume_btn');
    resume.append(aboutRefRes);

    listContainer.append(about, work, exp, contact);
    buttonContainer.append(listContainer, resume);

    let menuBtn = document.createElement('img');
    menuBtn.src = menuLogo;
    menuBtn.id = "mobile_menu_btn";

    const mobileBar = createMobileNav();


    navContainer.append(darkLightSwitch, buttonContainer, menuBtn, mobileBar);

    return navContainer;

}



function createMobileNav(){
    const mobileContainer = document.createElement('div');
    mobileContainer.id = "mobile_container";

    const exitBtn = document.createElement('img');
    exitBtn.id = "exit_btn";
    exitBtn.src = exitLogo;

    let buttonMobileContainer = document.createElement("div");
    buttonMobileContainer.id = "mobile_button_container";

    let about = createButton("#about", "About", "about_mobile_btn");
    let work = createButton("#work", "Work", "work_mobile_btn");
    let experience = createButton("#experience", "Experience", "experience_mobile_btn");
    let contact = createButton("#contact", "Contact", "contact_mobile_btn");
    let resume = createButton(resumePdf, "Resume", "resume_mobile_btn");

    buttonMobileContainer.append(about, work, experience, contact, resume);
    mobileContainer.append(exitBtn, buttonMobileContainer);

    return mobileContainer;

}


function createButton(refrence, inner, divName){
    let aboutRef = document.createElement('a');
    aboutRef.href = refrence;
    aboutRef.innerHTML = inner;
    let about = document.createElement('button');
    about.classList.add(divName);
    about.append(aboutRef);

    return about;
}

function loadNav(){
    const navCreated = createNav();
    const getContent = document.getElementById('content');

    getContent.append(navCreated);

    let getMenu = document.getElementById("mobile_menu_btn");
    getMenu.addEventListener("click", function(){
        displayMobileNav();
    
    });

    let getClose = document.getElementById('exit_btn');
    getClose.addEventListener('click', function(){
       closeNav();
    });

}

function displayMobileNav(){
    const getcontainer = document.getElementById('mobile_container');
    getcontainer.style.display = "flex";
}

function closeNav(){
    const getcontainer = document.getElementById('mobile_container');
    getcontainer.style.display = "none";
}

export default loadNav;

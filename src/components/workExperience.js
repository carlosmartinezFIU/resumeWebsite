import style from '../main.css';
import bugImageLogo from '../assets/bx-bug.svg';


function createWork(){
    const workContainer = document.createElement('div');
    workContainer.classList.add('work_container');
    workContainer.id = "experience";

    const jobsContainer = document.createElement('div');
    jobsContainer.classList.add('jobs_container');


    /**Job Title Buttons Top & Container ***********/
    const jobsTabsContainer = document.createElement('div');
    jobsTabsContainer.classList.add('jobs_tabs-container');

    let marineCorps = document.createElement('button');
    marineCorps.classList.add("marine_btn");
    marineCorps.innerHTML = 'Marine Corps';
    marineCorps.id = 'marine_btn';

    let plantDesign = document.createElement('button');
    plantDesign.classList.add("plant_btn");
    plantDesign.innerHTML = 'Planst In Design';
    plantDesign.id = 'plant_btn';


    let a1aSodSand = document.createElement('button');
    a1aSodSand.classList.add("a1a_btn");
    a1aSodSand.innerHTML = 'A1A Sod Sand & Soil';
    a1aSodSand.id = 'a1a_btn';

    let kendallBaptist = document.createElement('button');
    kendallBaptist.classList.add("kendall_btn");
    kendallBaptist.innerHTML = 'Kendall Baptist Hospital';
    kendallBaptist.id = 'kendall_btn';

    let malibuClubhouse = document.createElement('button');
    malibuClubhouse.classList.add("malibu_btn");
    malibuClubhouse.innerHTML = 'Malibu Clubhouse';
    malibuClubhouse.id = 'malibu_btn';
    malibuClubhouse.classList.add("active_panel_btn");

    let workTitle = document.createElement('h3');
    workTitle.classList.add('work_title');
    workTitle.innerHTML = 'Work Experience';

    jobsTabsContainer.append(malibuClubhouse, kendallBaptist, a1aSodSand, plantDesign, marineCorps);



    /**Panel Description Container ***************************/
    const panelContainer = document.createElement('div');
    panelContainer.classList.add('panel_container');
    panelContainer.id = 'panel_container';

    /**Panel 0 *************/
    let panel0 = document.createElement('div');
    panel0.classList.add('panel_0');
    panel0.id = 'panel_0';

    let workTitle0 = document.createElement('h3');
    workTitle0.innerHTML = 'Front Desk/Pool Attendant';

    let jobDate = document.createElement('p');
    jobDate.innerHTML = 'November 2019 - January 2021';

    let jobDesContainer = document.createElement('div');
    jobDesContainer.classList.add('job_description_container');

    let jobDesList = document.createElement('ul');
    jobDesList.classList.add('job_description_list');


    let itemOne = document.createElement('li');
    itemOne.innerHTML = "Supervising facilities that include pool, fitness area, grand room.";

    let itemTwo = document.createElement('li');
    itemTwo.innerHTML = "Administering paperwork such as applications for clubhouse use.";

    let itemThree = document.createElement('li');
    itemThree.innerHTML = "Assist with functions at the clubhouse reserved by residents";

    let bug1 = document.createElement('img');
    bug1.src = bugImageLogo;

    let bug2 = document.createElement('img');
    bug2.src = bugImageLogo;

    let bug3 = document.createElement('img');
    bug3.src = bugImageLogo;

    let itemsContainer = document.createElement('div');
    itemsContainer.classList.add('work_items');
    itemsContainer.append(bug1, itemOne);

    let itemsContainer1 = document.createElement('div');
    itemsContainer1.classList.add('work_items');
    itemsContainer1.append(bug2, itemTwo);

    let itemsContainer2 = document.createElement('div');
    itemsContainer2.classList.add('work_items');
    itemsContainer2.append(bug3, itemThree);


    jobDesList.append(itemsContainer, itemsContainer1, itemsContainer2);
    jobDesContainer.append(jobDesList);
    panel0.append(workTitle0, jobDate, jobDesContainer);



    /**Panel 1 *************/
    let panel1 = document.createElement('div');
    panel1.classList.add('panel_1');
    panel1.id = 'panel_1';

    let workTitle1 = document.createElement('h3');
    workTitle1.innerHTML = 'Environmental Technician 2';

    let jobDate1 = document.createElement('p');
    jobDate1.innerHTML = 'July 2017 - December 2018';

    let jobDesContainer1 = document.createElement('div');
    let jobDesList1 = document.createElement('ul');
    jobDesContainer1.classList.add('job_description_container');
    jobDesList1.classList.add('job_description_list');


    let itemOne1 = document.createElement('li');
    itemOne1.innerHTML = "Took over supervisor’s responsibilities if the supervisor was absent or if was told to.";

    let itemTwo1 = document.createElement('li');
    itemTwo1.innerHTML = "Disposal of hazard waste, radioactive waste, sharp, container, and boxes from the building.";

    let itemThree1 = document.createElement('li');
    itemThree1.innerHTML = "Help the other associates on my team, and other department with any of their duties.";

    let bug4 = document.createElement('img');
    bug4.src = bugImageLogo;

    let bug5 = document.createElement('img');
    bug5.src = bugImageLogo;

    let bug6 = document.createElement('img');
    bug6.src = bugImageLogo;

    let itemsContainer4 = document.createElement('div');
    itemsContainer4.classList.add('work_items');
    itemsContainer4.append(bug4, itemOne1);

    let itemsContainer5 = document.createElement('div');
    itemsContainer5.classList.add('work_items');
    itemsContainer5.append(bug5, itemTwo1);

    let itemsContainer6 = document.createElement('div');
    itemsContainer6.classList.add('work_items');
    itemsContainer6.append(bug6, itemThree1);

    jobDesList1.append(itemsContainer4, itemsContainer5, itemsContainer6);
    jobDesContainer1.append(jobDesList1);
    panel1.append(workTitle1, jobDate1, jobDesContainer1);


    /**Panel 2 *************/
    let panel2 = document.createElement('div');
    panel2.classList.add('panel_2');
    panel2.id = 'panel_2';

    let workTitle2 = document.createElement('h3');
    workTitle2.innerHTML = 'Cashier/Administrative Clerk';

    let jobDate2 = document.createElement('p');
    jobDate2.innerHTML = 'April 2017 - July 2017';

    let jobDesContainer2 = document.createElement('div');
    let jobDesList2 = document.createElement('ul');
    jobDesContainer2.classList.add('job_description_container');
    jobDesList2.classList.add('job_description_list');


    let itemOne2 = document.createElement('li');
    itemOne2.innerHTML = "Set up appointments, operated cash register at check out, and other related duties.";

    let itemTwo2 = document.createElement('li');
    itemTwo2.innerHTML = "Balanced cash drawers, prepared store deposits, completed necessary paperwork for closing.";

    let itemThree2 = document.createElement('li');
    itemThree2.innerHTML = "Guided and solved queries of customers.";

    let bug7 = document.createElement('img');
    bug7.src = bugImageLogo;

    let bug8 = document.createElement('img');
    bug8.src = bugImageLogo;

    let bug9 = document.createElement('img');
    bug9.src = bugImageLogo;

    let itemsContainer7 = document.createElement('div');
    itemsContainer7.classList.add('work_items');
    itemsContainer7.append(bug7, itemOne2);

    let itemsContainer8 = document.createElement('div');
    itemsContainer8.classList.add('work_items');
    itemsContainer8.append(bug8, itemTwo2);

    let itemsContainer9 = document.createElement('div');
    itemsContainer9.classList.add('work_items');
    itemsContainer9.append(bug9, itemThree2);



    jobDesList2.append(itemsContainer7, itemsContainer8, itemsContainer9);
    jobDesContainer2.append(jobDesList2);
    panel2.append(workTitle2, jobDate2, jobDesContainer2);



    /**Panel 3 *************/
    let panel3 = document.createElement('div');
    panel3.classList.add('panel_3');
    panel3.id = 'panel_3';

    let workTitle3 = document.createElement('h3');
    workTitle3.innerHTML = 'Data/Inventory Control';

    let jobDate3 = document.createElement('p');
    jobDate3.innerHTML = 'November 2016 - April 2017';

    let jobDesContainer3 = document.createElement('div');
    let jobDesList3 = document.createElement('ul');
    jobDesContainer3.classList.add('job_description_container');
    jobDesList3.classList.add('job_description_list');


    let itemOne3 = document.createElement('li');
    itemOne3.innerHTML = "Maintained daily inventory of various variety of plants, accurately entering data into various computer programs.";

    let itemTwo3 = document.createElement('li');
    itemTwo3.innerHTML = "Entered monthly shipments, recorded data for future sales, as well composed excel spreadsheets of inventory.";

    let itemThree3 = document.createElement('li');
    itemThree3.innerHTML = "Item Three Description";


    let bug10 = document.createElement('img');
    bug10.src = bugImageLogo;

    let bug11 = document.createElement('img');
    bug11.src = bugImageLogo;

    let bug12 = document.createElement('img');
    bug12.src = bugImageLogo;

    let itemsContainer10 = document.createElement('div');
    itemsContainer10.classList.add('work_items_data');
    itemsContainer10.append(bug10, itemOne3);

    let itemsContainer11 = document.createElement('div');
    itemsContainer11.classList.add('work_items_data');
    itemsContainer11.append(bug11, itemTwo3);

    let itemsContainer12 = document.createElement('div');
    itemsContainer12.classList.add('work_items_data');
    itemsContainer12.append(bug12, itemThree3);



    jobDesList3.append(itemsContainer10, itemsContainer11, itemsContainer12);
    jobDesContainer3.append(jobDesList3);
    panel3.append(workTitle3, jobDate3, jobDesContainer3);



    /**Panel 4 *************/
    let panel4 = document.createElement('div');
    panel4.classList.add('panel_4');
    panel4.id = 'panel_4';

    let workTitle4 = document.createElement('h3');
    workTitle4.innerHTML = 'Armory Supervisor';

    let jobDate4 = document.createElement('p');
    jobDate4.innerHTML = 'September 2011 - September 2015';

    let jobDesContainer4 = document.createElement('div');
    let jobDesList4 = document.createElement('ul');
    jobDesContainer4.classList.add('job_description_container');
    jobDesList4.classList.add('job_description_list');


    let itemOne4 = document.createElement('li');
    itemOne4.innerHTML = "Performed maintenance and corrective maintenance on all weaponry in the armory.";

    let itemTwo4 = document.createElement('li');
    itemTwo4.innerHTML = "Composed inventory tracking system for all weapons and gar within the armory.";

    let itemThree4 = document.createElement('li');
    itemThree4.innerHTML = "Devised inventory system for weapon/optics issued to customer, applied modification to more than 1000 weapons.";


    let bug13 = document.createElement('img');
    bug13.src = bugImageLogo;

    let bug14 = document.createElement('img');
    bug14.src = bugImageLogo;

    let bug15 = document.createElement('img');
    bug15.src = bugImageLogo;

    let itemsContainer13 = document.createElement('div');
    itemsContainer13.classList.add('work_items_armory');
    itemsContainer13.append(bug13, itemOne4);

    let itemsContainer14 = document.createElement('div');
    itemsContainer14.classList.add('work_items_armory');
    itemsContainer14.append(bug14, itemTwo4);

    let itemsContainer15 = document.createElement('div');
    itemsContainer15.classList.add('work_items_armory');
    itemsContainer15.append(bug15, itemThree4);



    jobDesList4.append(itemsContainer13, itemsContainer14, itemsContainer15);
    jobDesContainer4.append(jobDesList4);
    panel4.append(workTitle4, jobDate4, jobDesContainer4);

    panelContainer.append(panel0, panel1, panel2, panel3, panel4);

    jobsContainer.append(jobsTabsContainer, panelContainer);

    workContainer.append(workTitle, jobsContainer);

    return workContainer;

}


function loadWork(){
    const workCreated = createWork();
    const getContent = document.getElementById('content');

    getContent.append(workCreated);
    const getPanel = document.getElementById('panel_container');

    let panel = document.getElementById('panel_0');

    
    
    showPanel();
    //getPanel.append(panel);

    //getContent.append(workCreated);
}

function showPanel(){
    const malibuClubhouse = document.getElementById('malibu_btn');
    const kendallBaptist = document.getElementById('kendall_btn');
    const a1aSodSand = document.getElementById('a1a_btn');
    const plantDesign = document.getElementById('plant_btn');
    const marineCorps = document.getElementById('marine_btn');


    const panel0 = document.getElementById('panel_0');
    const panel1 = document.getElementById('panel_1');
    const panel2 = document.getElementById('panel_2');
    const panel3 = document.getElementById('panel_3');
    const panel4 = document.getElementById('panel_4');

    const getPanel = document.getElementById('panel_container');
    getPanel.textContent = '';
    getPanel.append(panel0);

    malibuClubhouse.addEventListener('click', function(){
        getPanel.textContent = '';
        getPanel.append(panel0);
        malibuClubhouse.classList.add("active_panel_btn");
        plantDesign.classList.remove("active_panel_btn");
        kendallBaptist.classList.remove("active_panel_btn");
        a1aSodSand.classList.remove("active_panel_btn");
        marineCorps.classList.remove("active_panel_btn");
    });

    kendallBaptist.addEventListener('click', function(){
        getMalibuBtn();
        getPanel.textContent = '';
        getPanel.append(panel1);
        kendallBaptist.classList.add("active_panel_btn");
        plantDesign.classList.remove("active_panel_btn");
        malibuClubhouse.classList.remove("active_panel_btn");
        a1aSodSand.classList.remove("active_panel_btn");
        marineCorps.classList.remove("active_panel_btn");
    });

    a1aSodSand.addEventListener('click', function(){
        getMalibuBtn();
        getPanel.textContent = '';
        getPanel.append(panel2);
        a1aSodSand.classList.add("active_panel_btn");
        kendallBaptist.classList.remove("active_panel_btn");
        malibuClubhouse.classList.remove("active_panel_btn");
        plantDesign.classList.remove("active_panel_btn");
        marineCorps.classList.remove("active_panel_btn");
    });

    plantDesign.addEventListener('click', function(){
        getMalibuBtn();
        getPanel.textContent = '';
        getPanel.append(panel3);
        plantDesign.classList.add("active_panel_btn");
        kendallBaptist.classList.remove("active_panel_btn");
        malibuClubhouse.classList.remove("active_panel_btn");
        a1aSodSand.classList.remove("active_panel_btn");
        marineCorps.classList.remove("active_panel_btn");
    });

    marineCorps.addEventListener('click', function(){
        getMalibuBtn();
        getPanel.textContent = '';
        getPanel.append(panel4);
        marineCorps.classList.add("active_panel_btn");
        kendallBaptist.classList.remove("active_panel_btn");
        malibuClubhouse.classList.remove("active_panel_btn");
        a1aSodSand.classList.remove("active_panel_btn");
        plantDesign.classList.remove("active_panel_btn");
    });

}

function getMalibuBtn(){
    let getMalibu = document.getElementById("malibu_btn");
    getMalibu.classList.remove("active_panel_btn");
}



export default loadWork;
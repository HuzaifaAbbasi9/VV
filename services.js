const hide_it = document.getElementsByClassName('hide-it')
// for (let i = 0; i < hide_it.length; i++) {
//   collection[i].style.display= "block";
// }


// _________________SERVICES__________________________
const serv_box = document.getElementById('serv-box');
const show_div = document.getElementById('show_div');
const hide_all_sm = document.getElementById('hide_all_sm');
const mobile_div = document.getElementById('mobile_div');
const serv_btn = document.getElementById('serv-btn');
const booking_f = document.getElementById('booking_f');

// large screen
const hide_supervised = document.getElementById('hide_supervised');
const hide_comm = document.getElementById('hide_comm');
const hide_new = document.getElementById('hide_new');
const hide_free = document.getElementById('hide_free');
const hide_covid = document.getElementById('hide_covid');
const hide_emergency = document.getElementById('hide_emergency');
const hide_disposal = document.getElementById('hide_disposal');
const hide_smoking = document.getElementById('hide_smoking');



// _________________FORMS__________________________________
const calendy_nhs = document.getElementById('calendy_nhs');
const book_nhs = document.getElementById('book_nhs');
const book_p = document.getElementById('book_p');
const book_pc = document.getElementById('book_pc');

//DESCRIPTION DIVS
const smoking_div = document.getElementById('smoking_div');
const disposal_div = document.getElementById('disposal_div'); 
const div_comm_dos = document.getElementById('div_comm_dos');
const div_newmed = document.getElementById('div_newmed');
const div_supervised = document.getElementById('div_supervised');
const div_hormonal = document.getElementById('div_hormonal');
const div_free = document.getElementById('div_free');
const div_covid = document.getElementById('div_covid');

const smoking_div2 = document.getElementById('smoking_div2');
const disposal_div2 = document.getElementById('disposal_div2'); 
const div_comm_dos2 = document.getElementById('div_comm_dos2');
const div_newmed2 = document.getElementById('div_newmed2');
const div_supervised2 = document.getElementById('div_supervised2');
const div_hormonal2 = document.getElementById('div_hormonal2');
const div_free2 = document.getElementById('div_free2');
const div_covid2 = document.getElementById('div_covid2');







// mobile_div.addEventListener('click', () => {
//   // 👇️ hide button
//   mobile_div.style.display = 'none';


//   // 👇️ show div
  
//   serv_box.style.display = 'block';
  
// });


//___________BACK BUTTON on click__________________
serv_btn.addEventListener('click', () => {
  // 👇️ hide button
 
  // serv_btn.style.display = 'none';

  // 👇️ show div
  hide_all_sm.style.display = 'block';
  mobile_div.style.display = 'none';

  
});



//SUPERVISED CONSUMPTION
hide_supervised.addEventListener('click', () => {
    // 👇️ hide button
    hide_all_sm.style.display = 'none';
    mobile_div.style.display = 'block';
    smoking_div.style.display = 'none';
    smoking_div2.style.display = 'none';
    div_supervised.style.display = 'block'; 
    div_supervised2.style.display = 'block';
    disposal_div.style.display = 'none';
    disposal_div2.style.display = 'none';
    div_comm_dos.style.display = 'none';
    div_comm_dos2.style.display = 'none';
    div_newmed.style.display = 'none';
    div_newmed2.style.display = 'none';
    div_hormonal.style.display = 'none';
    div_hormonal2.style.display = 'none';
    div_free.style.display = 'none';
    div_free2.style.display = 'none';
    div_covid.style.display = 'none';
    div_covid2.style.display = 'none';
});


// COMMUNITY DOSAGE
hide_comm.addEventListener('click', () => {
  // 👇️ hide button
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'none';
  smoking_div2.style.display = 'none';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'none';
  disposal_div2.style.display = 'none';
  div_comm_dos.style.display = 'block';
  div_comm_dos2.style.display = 'block';
  div_newmed.style.display = 'none';
  div_newmed2.style.display = 'none';
  div_hormonal.style.display = 'none';
  div_hormonal2.style.display = 'none';
  div_free.style.display = 'none';
  div_free2.style.display = 'none';
  div_covid.style.display = 'none';
  div_covid2.style.display = 'none';
});

// NEW MEDICINE SERVICE
hide_new.addEventListener('click', () => {
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'none';
  smoking_div2.style.display = 'none';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'none';
  disposal_div2.style.display = 'none';
  div_comm_dos.style.display = 'none';
  div_comm_dos2.style.display = 'none';
  div_newmed.style.display = 'block';
  div_newmed2.style.display = 'block';
  div_hormonal.style.display = 'none';
  div_hormonal2.style.display = 'none';
  div_free.style.display = 'none';
  div_free2.style.display = 'none';
  div_covid.style.display = 'none';
  div_covid2.style.display = 'none';
});

// FREE BLOOD PRESSURE
hide_free.addEventListener('click', () => {
  // 👇️ hide button
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'none';
  smoking_div2.style.display = 'none';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'none';
  disposal_div2.style.display = 'none';
  div_comm_dos.style.display = 'none';
  div_comm_dos2.style.display = 'none';
  div_newmed.style.display = 'none';
  div_newmed2.style.display = 'none';
  div_hormonal.style.display = 'none';
  div_hormonal2.style.display = 'none';
  div_free.style.display = 'block';
  div_free2.style.display = 'block';
  div_covid.style.display = 'none';
  div_covid2.style.display = 'none';
});

// COVID & FLU JABS
hide_covid.addEventListener('click', () => {
  // 👇️ hide button
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'none';
  smoking_div2.style.display = 'none';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'none';
  disposal_div2.style.display = 'none';
  div_comm_dos.style.display = 'none';
  div_comm_dos2.style.display = 'none';
  div_newmed.style.display = 'none';
  div_newmed2.style.display = 'none';
  div_hormonal.style.display = 'none';
  div_hormonal2.style.display = 'none';
  div_free.style.display = 'none';
  div_free2.style.display = 'none';
  div_covid.style.display = 'block';
  div_covid2.style.display = 'block';
});

// EMERGENCY HORMONAL CONTRACEPTIVES
hide_emergency.addEventListener('click', () => {
  // 👇️ hide button
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'none';
  smoking_div2.style.display = 'none';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'none';
  disposal_div2.style.display = 'none';
  div_comm_dos.style.display = 'none';
  div_comm_dos2.style.display = 'none';
  div_newmed.style.display = 'none';
  div_newmed2.style.display = 'none';
  div_hormonal.style.display = 'block';
  div_hormonal2.style.display = 'block';
  div_free.style.display = 'none';
  div_free2.style.display = 'none';
  div_covid.style.display = 'none';
  div_covid2.style.display = 'none';
});

// DISPOSAL OF UNWANTED MEDICINES
hide_disposal.addEventListener('click', () => {
  // 👇️ hide button
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'none';
  smoking_div2.style.display = 'none';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'block';
  disposal_div2.style.display = 'block';
  div_comm_dos.style.display = 'none';
  div_comm_dos2.style.display = 'none';
  div_newmed.style.display = 'none';
  div_newmed2.style.display = 'none';
  div_hormonal.style.display = 'none';
  div_hormonal2.style.display = 'none';
  div_free.style.display = 'none';
  div_free2.style.display = 'none';
  div_covid.style.display = 'none';
  div_covid2.style.display = 'none';
});

// SMOKING CESSATION
hide_smoking.addEventListener('click', () => {
  // 👇️ hide button
  hide_all_sm.style.display = 'none';
  mobile_div.style.display = 'block';
  smoking_div.style.display = 'block';
  smoking_div2.style.display = 'block';
  div_supervised.style.display = 'none'; 
  div_supervised2.style.display = 'none';
  disposal_div.style.display = 'none';
  disposal_div2.style.display = 'none';
  div_comm_dos.style.display = 'none';
  div_comm_dos2.style.display = 'none';
  div_newmed.style.display = 'none';
  div_newmed2.style.display = 'none';
  div_hormonal.style.display = 'none';
  div_hormonal2.style.display = 'none';
  div_free.style.display = 'none';
  div_free2.style.display = 'none';
  div_covid.style.display = 'none';
  div_covid2.style.display = 'none';
});


// _____________________________________MOBILE VIEW____________________________________________________

const sm_supervised = document.getElementById('sm_supervised');
const sm_comm = document.getElementById('sm_comm');
const sm_newmed = document.getElementById('sm_newmed');
const sm_free = document.getElementById('sm_free');
const sm_covid = document.getElementById('sm_covid');
const sm_emergency = document.getElementById('sm_emergency');
const sm_disposal = document.getElementById('sm_disposal');
const sm_smoking = document.getElementById('sm_smoking');

const sm_supervised2 = document.getElementById('sm_supervised2');
const sm_comm2 = document.getElementById('sm_comm2');
const sm_newmed2 = document.getElementById('sm_newmed2');
const sm_free2 = document.getElementById('sm_free2');
const sm_covid2 = document.getElementById('sm_covid2');
const sm_emergency2 = document.getElementById('sm_emergency2');
const sm_disposal2 = document.getElementById('sm_disposal2');
const sm_smoking2 = document.getElementById('sm_smoking2');


//    CLOSE_BOX BUTTONS
const close_box = document.getElementById('close_box');
const close_box2 = document.getElementById('close_box2');
const close_box3 = document.getElementById('close_box3');
const close_box4 = document.getElementById('close_box4');
const close_box5 = document.getElementById('close_box5');
const close_box6 = document.getElementById('close_box6');
const close_box7 = document.getElementById('close_box7');
const close_box8 = document.getElementById('close_box8');





// close sm_newmed->

function close1(){
  if (sm_newmed.onclick == true) {
    sm_newmed2.style.display = 'none';
  } else {
    sm_newmed2.style.display = 'block';
  }
  // sm_newmed.addEventListener('click', () => {

  //   sm_newmed2.style.display = 'none';
    
  // });
}

// function tgl() {
//   if(sm_newmed.style.display = 'block'){
//     sm_newmed2.style.display = 'none'
//   } else {
//     sm_newmed2.style.display = 'block'
//   }
// }


//_______________sm_supervised_________________

sm_supervised.addEventListener('click', () => {

  sm_supervised2.style.display = 'block';
  
});

//close_box

close_box.addEventListener('click', () => {

  sm_supervised2.style.display = 'none';

});
// ____________________________________________


//_______________sm_comm_______________________

sm_comm.addEventListener('click', () => {

  sm_comm2.style.display = 'block';
  
});

//close_box
close_box2.addEventListener('click', () => {

  sm_comm2.style.display = 'none';

});
// ____________________________________________

//_______________sm_newmed______________________

sm_newmed.addEventListener('click', () => {

  sm_newmed2.style.display = 'block';
  
  
});

//close_box
close_box3.addEventListener('click', () => {

  sm_newmed2.style.display = 'none';

});
// ____________________________________________


//_______________sm-free______________________

sm_free.addEventListener('click', () => {

  sm_free2.style.display = 'block';
  
});

//close_box
close_box4.addEventListener('click', () => {

  sm_free2.style.display = 'none';

});
// ____________________________________________


//_______________sm-covid______________________

sm_covid.addEventListener('click', () => {

  sm_covid2.style.display = 'block';
  
});

//close_box
close_box5.addEventListener('click', () => {

  sm_covid2.style.display = 'none';

});
// ____________________________________________


//_______________sm-emergency______________________

sm_emergency.addEventListener('click', () => {

  sm_emergency2.style.display = 'block';
  
});

//close_box
close_box6.addEventListener('click', () => {

  sm_emergency2.style.display = 'none';

});
// ____________________________________________

//_______________sm-disposal______________________

sm_disposal.addEventListener('click', () => {

  sm_disposal2.style.display = 'block';
  
});

//close_box
close_box7.addEventListener('click', () => {

  sm_disposal2.style.display = 'none';

});
// ____________________________________________

//_______________sm-smoking______________________

sm_smoking.addEventListener('click', () => {

  sm_smoking2.style.display = 'block';
  
});

//close_box
close_box8.addEventListener('click', () => {

  sm_smoking2.style.display = 'none';

});
// ____________________________________________






// //BACK BUTTON on click
// close_box1.addEventListener('click', () => {

//   sm_supervised2.style.display = 'block';
//   sm_supervised2.style.display = 'block';


  
// });


/*

 <div class="item gold-bg" id="sm-newmed">
                            <img src="images/new_medicine.svg" class="img-fluid slide-img" alt="">
                            <h5 class="slide-text"> New Medicine Service (N.M.S) </h5>
                        </div>
                        <div class="item greens-bg" id="sm-free">
                            <img src="images/blood_pressure.svg" class="img-fluid slide-img" alt="">
                            <h5 class="slide-text"> Free BLOOD PRESSURE CHECKS+NHS CHECKS </h5>
                        </div>
                        <div class="item gold-bg" id="sm-covid">
                            <img src="images/covid_flu.svg" class="img-fluid slide-img" alt="">
                            <h5 class="slide-text"> COVID & FLU<br> Jabs </h5>
                        </div>
                        <div class="item greens-bg" id="sm-emergency">
                            <img src="images/emergency_hormonal.svg" class="img-fluid slide-img" alt="">
                            <h5 class="slide-text"> EMERGENCY HORMONAL CONTRACEPTIVES </h5>
                        </div>
                        <div class="item gold-bg" id="sm-disposal">
                            <a href="#"><img src="images/disposal_of.svg" class="img-fluid slide-img" alt=""></a>
                            <h5 class="slide-text"> Disposal of 
                                Unwanted Medicines </h5>
                        </div>
                        <div class="item greens-bg" id="sm-smoking">
                            <img src="images/smoking.svg" class="img-fluid slide-img" alt="">
                            <h5 class="slide-text"> Smoking<br> Cessation </h5>
                        </div>


*/

  
/* 
DESCRIPTION DIVS
  smoking_div
  disposal_div
  div_comm_dos
  div_newmed
  div_supervised
  div_hormonal
  div_free
  div_covid


  const hide_comm = document.getElementById('hide_comm');
const hide_new = document.getElementById('hide_new');
const hide_free = document.getElementById('hide_free');
const hide_covid = document.getElementById('hide_covid');
const hide_emergency = document.getElementById('hide_emergency');
const hide_disposal = document.getElementById('hide_disposal');
const hide_smoking = document.getElementById('hide_smoking');
  */
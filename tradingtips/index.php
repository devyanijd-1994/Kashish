<?php
session_start();

// Check for error message in the session
if (isset($_SESSION['error_message'])) {
    echo $_SESSION['error_message'];
    unset($_SESSION['error_message']); // Clear the error message after displaying it
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./assets/images/Favicon-Icon1.png">
    <link href="./assets/output.css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <script src="script.js" defer></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <title>kashish Joshi Research</title>

   <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16690661395"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16690661395');
</script>
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1096724585197717'); 
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" 
  src="https://www.facebook.com/tr?id=1096724585197717&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->


<style>
        #whatsapp-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000; /* Ensures it appears above other content */
        }


        #whatsapp-icon:hover img {
            transform: scale(1.1); /* Optional: enlarges the icon on hover */
        }
    </style>
    
  </head>
  <body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
       <a href="https://wa.link/iw4ct4" id="whatsapp-icon" target="_blank">
        <img src="./assets/images/whatapp.png"  width="70px"  alt="WhatsApp" />
    </a>
   
    <section
      class="sm:h-auto lg:px-10 flex sm:justify-between md:py-7 items-center h-auto flex-col mb:items-center justify-center mb:py-7 mb:px-2 lg:h-auto lg:flex-row lg:justify-around gap-10 overflow-hidden"
      id="contact"
    >
      <div
        class="h-auto w-auto flex flex-col justify-center mb:h-auto mb:space-y-10 md:space-y-4"
      >
        <div class="lg:pl-10 mb:pl-5">
          <a href="/">
          <!--  <img-->
          <!--    class="sm:h-32 h-16 lg:h-28 mx-auto sm:mx-0 my-8 sm:my-0"-->
          <!--    src="./assets/images/hero_logo.png"-->
          <!--    alt=""-->
          <!--/>-->
          
             <img
              class="sm:h-32 h-16 lg:h-28 mx-auto sm:mx-0 my-8 sm:my-0"
              src="./assets/images/logoo3.png"
              alt=""
          />
        </div>
        <div class="text lg:space-y-12 lg:pt-12 lg:pl-10 mb:space-y-3 mb:pl-3 flex flex-col items-center sm:items-start">
          <p
            class="font-Poppins text-center sm:text-start text-xl leading-6  lg:text-[1.8rem] sm:leading-7 font-semibold w-[30rem] text-[#000000] mb:text-lg mb:w-[20rem] lg:w-[30rem] "
          >
            Get a Free Trial<br />98% Accuracy Share Market Tips
          </p>
        <!--  <p
            class="lg:text-[4.5rem] text-xl py-1 sm:py-0 font-Poppins font-bold text-[#224072] mb:text-4xl md:text-sm md:w-[40rem]"
          >
            Apex Capital
          </p> -->
          <p class="font-Poppins text-lg">Nifty/Banknifty Option Tips Specialist</p>
          <p class="font-Poppins text-lg">15+ year Experience in Option Tips & Trading</p>
          <p class="font-Poppins text-lg">Intraday Trading Strategy with low Risk</p>
          <div class="space-x-4 mb:flex py-3 sm:py-0">
            <!--<a href="#Contactform"-->
            <!--  ><button-->
            <!--    class="lg:py-[0.7rem]  px-4 py-2 sm:py-3 mb:px-2 bg-[#02B58B] rounded-3xl font-Poppins text-white font-[500] mb:text-sm lg:text-lg"-->
            
            <!--    Send Enquiry-->
            <!--  </button></a-->
            
           <button
              class="lg:py-[0.7rem] px-4 mb:px-2 bg-[#02B58B] rounded-3xl font-Poppins text-white font-[500] mb:text-sm py-2 sm:py-3 lg:text-lg"
            >
              <a href="https://wa.link/iw4ct4" target="_blank">
                WhatsApp Now</a
              >
            </button>
          </div>
        </div>
      </div>
      <div
        class="h[70vh] heroimg lg:pt-0 h-auto bg-cyan400 mb:h-auto mb:w-auto mb:pt-5 lg:h-auto lg:w-auto lg:flex lg:justify-center"
      >
        <div class="Toastify"></div>
     <form
    action="https://kashishjoshiresearch.com/tradingtips/submit.php"
    method="POST"
    name="Contactform"
    id="Contactform"
    class="h-full lg:h-auto md:w-auto md:px-4 lg:w-auto rounded-3xl bg-[#224072] bgopacity-75 flex items-center flex-col justify-center space-y-4 py-10 w-96 lg:py-5 md:h-auto"
    data-gtm-form-interact-id="0"
    onsubmit="submitForm(event)"
  >
    <div
            class="flex justify-center items-center flex-col space-y-2 mb:flex mb:justify-center mb:items-center mb:py-2 mb:px-3 mb:text-center"
          >
            <h2
              class="font-Poppins md:text-xl lg:text-2xl font-semibold text-white mb:text-center mb:text-xl"
            >
              Book your Free Trial &amp;   Start Profit Booking
            </h2>
          </div>
          <p
            class="font-Poppins text-white bg-black p-2 sm:px-2 px-6 bg-opacity-50 rounded-xl"
          >
            SEBI Registration :
            <span class="font-Poppins font-semibold">INH000017240</span>
          </p>
         <!-- <p
            class="font-Poppins text-white bg-black p-2 sm:px-2 px-6 bg-opacity-50 rounded-xl m-2"
          >
            CIN :
            <span class="font-Poppins font-semibold">
              U65999GJ2018PTC105068</span
            >
          </p> -->
    <input
      type="text"
      class="font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-10 w-80 mb:text-base"
      name="name"
      required=""
      id="Name"
      placeholder="Your Name"
    />
    <input
      type="tel"
      class="font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-10 w-80 mb:text-base"
   minlength="10"
  maxlength="10"
  name="number"
  required=""
  id="Number"
  placeholder="Your Number"
    />
    

    <input
      type="email"
      class="font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-10 w-80 mb:text-base"
      name="email"
      required=""
      id="Email"
      placeholder="Your Email"
    />
    <select
      name="segment"
      required=""
      id="Segment"
      class="font-Poppins rounded-3xl py-3 px-6 text-lg lg:w-96 border-[0.6px] outline-none border-[#224072] mb:py-0 mb:px-6 w-80 mb:text-base"
      placeholder="Choose Segment"
      data-gtm-form-interact-field-id="0"
    >
      <option value="Select Your Segment">Select Your Segment</option>
      <option value="Stock Services - Cash, Future, Option">
        Stock Services - Cash, Future, Option
      </option>
      <option value="Nifty/Bank Nifty Services - Option Future">
        Nifty/Bank Nifty Services - Option Future
      </option>
      <option value="Advance Trading Plan (ATP) Services">
        Advance Trading Plan (ATP) Services
      </option>
      <option value="Commodity Services">Commodity Services</option>
    </select>
    <button
      type="submit"
      name="submit;"
      class="py-2 px-10 bg-[#02B58B] font-[500] rounded-3xl font-Poppins text-black text-xl border-2 border-white mb:text-sm md:text-base"
    >
      Submit
    </button>
  </form>
      </div>
    </section>
    <section class="h-auto mb:py-10 md:py-10 overflow-hidden">
      <div class="flex justify-center flex-col items-center">
        <h2 class="font-Poppins mt-10 sm:mt-0 font-[1000] text-3xl text-[#224072]">
          Start Making Profit with Service Package
        </h2>
      </div>
      <div
        class="wrapper flex justify-evenly gap-2 py-10 flex-col mb:items-center mb:gap-6 lg:flex-row lg:justify-evenly lg:gap-2 lg:py-10 h-auto w-auto"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="sm:w-[26vw] h-auto flex flex-col items-center w-full  md:w-auto lg:w-[26vw] aos-init aos-animate"
        >
          <h3
            class="py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center"
          >
            Equity Services
          </h3>
          <div
            class="py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center flex justify-center items-center gap-2"
          >
            <h3 class="animate-bounce">₹4,500</h3>
            <p class="line-through font-Poppins font-extralight text-base">
              ₹7,999/-
            </p>
          </div>
          <div
            class="md:px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem] mb:px-1"
          >
            <div
              class="w-full flex flex-col justify-start space-y-7 px-4 mb:px-0 mb:text-sm md:text-base"
            >
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >24/7 customer support.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Get 1-2 Calls on intraday basis through dedicated expert.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Complete Resistance &amp; Support on daily basis.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Proper follow up through SMS.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >All important news and economy updates.
              </p>
            </div>
            <div class="w-full gap-5 py-2 flex justify-center">
              <!--<a href="#Contactform"><button class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base mb:px-1 md:px-0">-->
              <!--    Enquiry Now-->
              <!--  </button></a>-->
              <button
                class="py-2 px-4 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base mb:px-1"
              >
                <a href="https://wa.link/iw4ct4" target="_blank">
                  WhatsApp Now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="sm:w-[26vw] flex flex-col items-center w-full lg:w-[26vw] aos-init aos-animate"
        >
          <h3
            class="py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center"
          >
            Options Services
          </h3>
          <div
            class="py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center flex justify-center items-center gap-2"
          >
            <h3 class="animate-bounce">₹4,500</h3>
            <p class="line-through font-Poppins font-extralight text-base">
              ₹7,999/-
            </p>
          </div>
          <div
            class="md:px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem] mb:px-1"
          >
            <div
              class="w-full flex flex-col justify-start space-y-7 px-3 mb:px-0 mb:text-sm md:text-base"
            >
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >24/7 customer support.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Get 1-2 Calls on intraday basis through dedicated expert.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                Complete Resistance &amp; Support on daily basis.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Proper follow up through SMS.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >All important news and economy updates.
              </p>
            </div>
            <div class="w-full gap-5 py-2 flex justify-center">
              <!--<a href="#Contactform"><button class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base">-->
              <!--    Enquiry Now-->
              <!--  </button></a>-->
               <button
                class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base"
              >
                <a href="https://wa.link/iw4ct4" target="_blank">
                  WhatsApp Now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="sm:w-[26vw] flex flex-col items-center mb:w-full lg:w-[26vw] aos-init aos-animate"
        >
          <h3
            class="py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center"
          >
            Future Services
          </h3>
          <div
            class="py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center flex justify-center items-center gap-2"
          >
            <h3 class="animate-bounce">₹4,500</h3>
            <p class="line-through font-Poppins font-extralight text-base">
              ₹7,999/-
            </p>
          </div>
          <div
            class="px-4 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]"
          >
            <div
              class="w-full flex flex-col justify-start space-y-7 md:px-3 mb:text-sm md:text-base mb:px-0"
            >
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >24/7 customer support.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                All important news and economy updates.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                Proper follow up through SMS.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                Complete Resistance &amp; Support on daily basis.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                Get 1-2 Calls on intraday basis through dedicated expert.
              </p>
            </div>
            <div class="w-full gap-5 py-2 flex justify-center">
              <!--<a href="#Contactform"><button-->
              <!--    class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base">-->
              <!--    Enquiry Now-->
              <!--  </button></a>-->
              <button
                class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base"
              >
                <a href="https://wa.link/iw4ct4" target="_blank">
                  WhatsApp Now</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="wrapper flex justify-center gap-16 py-10 mb:py-0 flex-col mb:items-center mb:gap-6 lg:flex-row lg:py-10 lg:gap-16"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="sm:w-[26vw] flex flex-col items-center mb:w-full lg:w-[26vw] aos-init aos-animate"
        >
          <h3
            class="py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center"
          >
            Commodity Services
          </h3>
          <div
            class="py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center flex justify-center items-center gap-2"
          >
            <h3 class="animate-bounce">₹4,500</h3>
            <p class="line-through font-Poppins font-extralight text-base">
              ₹7,999/-
            </p>
          </div>
          <div
            class="md:px-4 mb:px-2 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]"
          >
            <div
              class="flex flex-col justify-start space-y-7 md:px-3 mb:px-0 mb:text-sm md:text-base"
            >
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >24/7 customer support.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >All important news and economy updates.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                Proper follow up through SMS.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                Complete Resistance &amp; Support on daily basis.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                High Reward Ratio with Low Risk.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                All Segment Calls from NISM Certified.
              </p>
            </div>
            <div class="w-full gap-5 py-2 flex justify-center">
              <!--<a href="#Contactform" ><button-->
              <!--    class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base">-->
              <!--    Enquiry Now-->
              <!--  </button></a>-->
              
              <button
                class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base"
              >
                <a href="https://wa.link/iw4ct4" target="_blank">
                  WhatsApp Now</a
                >
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="sm:w-[26vw] flex flex-col items-center w-full lg:w-[26vw] aos-init aos-animate"
        >
          <h3
            class="py-4 bg-[#224072] text-white font-Poppins text-[1.4rem] font-semibold w-full text-center"
          >
            Systematic trading plan (Premium)
          </h3>
          <div
            class="py-3 text-black bg-opacity-50 bg-[#02B58B] font-Poppins text-xl font-semibold w-full text-center flex justify-center items-center gap-2"
          >
            <h3 class="animate-bounce">₹15,000</h3>
            <p class="line-through font-Poppins font-extralight text-base">
              ₹25,500/-
            </p>
          </div>
          <div
            class="md:px-4 mb:px-0 py-9 space-y-7 text-start bg-opacity-10 bg-[#02B58B] w-full rounded-b-[3rem]"
          >
            <div
              class="w-full flex flex-col justify-start space-y-7 md:px-3 mb:px-1 mb:text-sm md:text-base"
            >
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >24/7 customer support.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                All important news and economy updates.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Proper follow up through SMS.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt="" /></span
                >Complete Resistance &amp; Support on daily basis.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                High Reward Ratio with Low Risk.
              </p>
              <p class="flex space-x-2 justify-start items-center font-Poppins">
                <span
                  ><img
                    class="h-7 pr-2"
                    src="\Images\Hero_Imgs\done.png"
                    alt=""
                /></span>
                All Segment Calls from NISM Certified.
              </p>
            </div>
            <div class="w-full gap-5 py-2 flex justify-center">
              <!--<a href="#Contactform"><button-->
              <!--    class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base">-->
              <!--    Enquiry Now-->
              <!--  </button></a>-->
              <button
                class="py-2 px-3 rounded-3xl bg-[#02B58B] text-white font-Poppins mb:text-sm lg:text-base"
              >
                <a href="https://wa.link/iw4ct4" target="_blank">
                  WhatsApp Now</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        style="background-image: url(./assets/images/banner_bg.jpg)"
        class="sm:h-56 h-full lg:h-56 overflow-hidden"
      >
        <div
          class="h-full flex py-10 sm:py-0 space-y-8 sm:space-y-0  justify-evenly text-white items-center bg-[#224072] bg-opacity-60 mb:flex flex-col mb:py-10 mb:space-y-12 lg:py-0 lg:space-y-0 lg:flex-row"
        >
          <div class="flex flex-col justify-center items-center space-y-2">
            <p class="text-5xl font-[700]">11k+</p>
            <p class="font-Poppins text-lg text-[#0AD5A5]">Trading Tips</p>
          </div>
          <div class="flex flex-col justify-center items-center space-y-2">
            <p class="text-5xl font-[700]">05+</p>
            <p class="font-Poppins text-lg text-[#0AD5A5]">Year Experience</p>
          </div>
          <div class="flex flex-col justify-center items-center space-y-2">
            <p class="text-5xl font-[700]">15+</p>
            <p class="font-Poppins text-lg text-[#0AD5A5]">Trade Specialist</p>
          </div>
          <div class="flex flex-col justify-center items-center space-y-2">
            <p class="text-5xl font-[700]">3000+</p>
            <p class="font-Poppins text-lg text-[#0AD5A5]">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="flex justify-center flex-col items-center py-8 space-y-5 overflow-hidden"
      >
        <h2 class="sm:text-3xl text-2xl text-[#224072] font-Poppins font-semibold">
          About Us
        </h2>
        <div class="lg:px-36 space-y-5">
          <p
            class=" font-Poppins text-center mb:text-base px-2 lg:text-lg lg:px-0"
          >
            kashish Joshi Research is regarded as the most trustable financial firm by
            traders. We offer expert services in Equity and Commodity trading.
          </p>
          <p
            class="font-Poppins text-center mb:text-base px-5 lg:text-lg lg:px-0"
          >
            We have served 3,000+ happy clients with more than 5 years of
            experience in the stock market. Our advisors give tips in Nifty
            &amp;Banknifty F&amp;O, Stock Cash Future, and Option.
          </p>
        </div>
        <div class="pt-3">
          <a href="https://wa.link/iw4ct4">
            <button
              class="rounded-3xl px-10 font-Poppins text-[#ffffff] font-[500] py-2 bg-[#02B58B] text-lg"
            >
              GET A FREE TRIAL
            </button></a
          >
        </div>
      </div>
    </section>
    <section class="h-auto py-10 overflow-hidden">
      <h2
        class="text-3xl text-center text-[#224072] font-Poppins font-semibold"
      >
        Why Choose Us?
      </h2>
      <div
        class="wrapper sm:py-12 flex justify-center items-center sm:gap-12 gap-6 flex-col lg:flex-row"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[3rem] lg:w-80 bg-[#224072] bg-opacity-5 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-44 mb:h-32"
            src="./assets/images/why_images.png"
            alt="img"
          />
          <p
            class="lg:text-[1.6rem] text-[#224072] w-56 font-semibold font-Poppins text-center mb:text-xl"
          >
            Complete Support on Daily Basis
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#02B58B] bg-opacity-5 pt-4 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-36 mb:h-32"
            src="./assets/images/happy_custombers.png"
            alt="img"
          />
          <p
            class="lg:text-[1.5rem] text-[#224072] w-60 font-semibold font-Poppins text-center mb:text-xl"
          >
            Catered 50000+ active clients during 8 Years of Experience
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#224072] bg-opacity-5 pt-4 mb:h-56 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-48 mb:h-32"
            src="./assets/images/highly_reward.png"
            alt="img"
          />
          <p
            class="lg:text-[1.6rem] text-[#224072] w-56 font-semibold font-Poppins text-center mb:text-xl"
          >
            Risk Managed Calls
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#02B58B] bg-opacity-5 pt-3 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-44 mb:h-32"
            src="./assets/images/proffesor.png"
            alt="img"
          />
          <p
            class="lg:text-[1.6rem] text-[#224072] w-64 font-semibold font-Poppins text-center pt-3 mb:text-xl"
          >
            SEBI Registered Registration Number
          </p>
        </div>
      </div>
      <div
        class="wrapper py-3 flex justify-center items-center sm:gap-12 gap-6 flex-col lg:flex-row"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-evenly items-center rounded-[3rem] lg:w-80 bg-[#02B58B] bg-opacity-5 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-40 mb:h-32"
            src="./assets/images/why_images.png"
            alt="img"
          />
          <p
            class="lg:text-[1.6rem] text-[#224072] w-64 font-semibold font-Poppins text-center mb:text-xl"
          >
            Award Winning Research and Advice
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#224072] bg-opacity-5 pt-6 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-44 mb:h-32"
            src="./assets/images/happy_custombers.png"
            alt="img"
          />
          <p
            class="lg:text-[1.7rem] text-[#224072] w-64 font-semibold font-Poppins text-center pt-4 mb:text-xl"
          >
            Happy Customers
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#02B58B] bg-opacity-5 pt-4 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-44 mb:h-32"
            src="./assets/images/happy_custombers.png"
            alt="img"
          />
          <p
            class="lg:text-3xl text-[#224072] w-64 font-semibold font-Poppins text-center pt-2 mb:text-xl"
          >
            High Reward Low Risk Ratio
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          class="lg:h-80 flex flex-col justify-start items-center rounded-[2rem] lg:w-80 bg-[#224072] bg-opacity-5 pt-5 mb:h-60 mb:w-72 aos-init aos-animate"
        >
          <img
            class="lg:h-30 mb:h-32"
            src="./assets/images/proffesor.png"
            alt="img"
          />
          <p
            class="lg:text-[1.6rem] text-[#224072] w-64 font-[600] font-Poppins text-center pt-3 mb:text-xl"
          >
            Certified Professional Advisor
          </p>
        </div>
      </div>
    </section>
    <div
      style="background-image: url(./assets/images/e_book_bg.jpg)"
      class="e_book_bg lg:h-[23rem] h-full py-6 sm:py-0 overflow-hidden"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        class="h-full lg:flex flex-col lg:justify-center lg:items-end lg:pr-20 space-y-7 mb:flex mb:justify-center mb:items-center mb:bg-black mb:bg-opacity-50 aos-init aos-animate"
      >
        <h2
          class="font-Poppins text-white lg:text-5xl lg:w-[28rem] text-center mb:text-2xl mb:w-80"
        >
          Bank Nifty Option Tips &amp; Strategies
        </h2>
        <div class="w-[27rem] flex justify-center">
          <button
            class="py-3 rounded-[2.5rem] font-semibold px-8 font-Poppins text-white bg-[#02B58B]"
          >
            <a href="#contact">Get A Free Trial</a>
          </button>
        </div>
      </div>
    </div>

    <div
      class="lg:h-96 flex justify-around items-center mb:h-auto flex-col-reverse mb:py-7 mb:px-5 lg:flex-row overflow-hidden"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        class="text space-y-6 mb:px-5 lg:px-0 aos-init aos-animate"
      >
        <h2
          class="font-Poppins text-center sm:text-start lg:w-[32rem] lg:text-4xl font-semibold text-[#224072] mb:text-2xl mb:w-auto"
        >
          Grow Your Profit with our Bank Nifty Advisory Services
        </h2>
        <p class="font-Poppins text-center sm:text-start lg:text-xl lg:w-[32rem] mb:w-auto mb:text-base">
          Get reliable stock market trading tips with research and telephonic
          support in India
        </p>
        <button
          class="py-2 px-10 rounded-3xl bg-[#02B58B] text-white font-Poppins font-[500] text-xl flex justify-center mx-auto sm:mx-0"
        >
          <a href="#Contactform"> Get Free Trial</a>
        </button>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        class="img mb:pb-5 lg:pb-0 aos-init aos-animate"
      >
        <img
          class="lg:h-[20rem] h-36 my-12 sm:my-0"
          src="./assets/images/free_trial_bg.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="flex justify-center py-10 flex-col items-center space-y-5 overflow-hidden"
    >
      <h2 class="font-Poppins sm:text-3xl text-2xl font-semibold text-[#224072] pb-3">
        Our Previous Performance
      </h2>
      <img
        class="h-full w-auto rounded-3xl"
        src="./assets/images/cells.jpg"
        alt="img"
      />
    </div>

    <div
      style="background-image: url(./assets/images/started_bg.jpg)"
      class="lg:h-[24rem] bg-green-500 h-full overflow-hidden"
    >
      <div
        class="h-full sm:space-y-9 space-y-5 py-6 sm:py-0 flex items-center flex-col justify-center bg-[#02B58B] lg:bg-opacity-50 mb:py-5 lg:py-0 mb:bg-opacity-30 mb:px-5 lg:px-0"
      >
        <p
          data-aos="zoom-out"
          data-aos-duration="1500"
          class="lg:text-2xl font-Poppins text-white mb:text-xl lg:text-start px-12 sm:px-0 text-center aos-init aos-animate"
        >
          Make you earn with kashish Joshi Research index option &amp; future tips
        </p>
        <h2
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="lg:text-5xl font-semibold font-Poppins text-white lg:w-[35rem] mb:text-2xl mb:w-auto mb:text-center lg:text-start aos-init aos-animate"
        >
          We Are With You Every Step Get Started Easily
        </h2>
        <div data-aos="zoom-out" data-aos-duration="1500" class="aos-init">
          <button
            class="py-2 px-10 rounded-3xl font-Poppins text-white bg-black font-[550] text-lg"
          >
            <a href="https://wa.link/iw4ct4"> Get Started Now!</a>
          </button>
        </div>
      </div>
    </div>

    <!--<div-->
    <!--  class="lg:h-auto bg-[#224072] bg-opacity-10 flex justify-center items-center flex-col mb:h-auto mb:py-5 lg:py-5 overflow-hidden"-->
   
      <!--<div class="py-1">-->
      <!--  <h2 class="font-Poppins sm:text-3xl text-2xl py-6 sm:py-0 font-semibold text-[#224072]">-->
      <!--    Enquiry Form-->
      <!--  </h2>-->
      <!--</div>-->
      
    <!--<div class="Toastify">-->
    <!--<form-->
    <!--    action="submit.php"-->
    <!--    method="POST"-->
    <!--    name="Contactform"-->
    <!--    id="Contactform"-->
    <!--    class="h-full lg:h-auto md:w-auto md:px-4 lg:w-auto rounded-3xl bg-[#224072] bg-opacity-75 flex items-center flex-col justify-center space-y-4 py-10 w-96 lg:py-5 md:h-auto"-->
    <!--    data-gtm-form-interact-id="0"-->
    <!--    onsubmit="submitForm(event)"-->
    <!-->
    <!--    <div-->
    <!--        data-aos="fade-right"-->
    <!--        data-aos-duration="1500"-->
    <!--        class="flex lg:space-x-14 lg:flex-row mb:flex flex-col mb:items-center mb:justify-center space-y-3 mb:space-x-0 lg:space-y-0 aos-init aos-animate"-->
    <!--    >
    <!--        <input-->
    <!--            type="text"-->
    <!--            class="font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]"-->
    <!--            name="name"-->
    <!--            required=""-->
    <!--            id="Name"-->
    <!--            placeholder="Your Name"-->
    <!--        />-->
    <!--        <input-->
    <!--            type="tel"-->
    <!--            class="font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]"-->
    <!--            minlength="10"-->
    <!--            maxlength="10"-->
    <!--            name="number"-->
    <!--            required=""-->
    <!--            id="Number"-->
    <!--            placeholder="Your Number"-->
    <!--        />-->
    <!--        <input-->
    <!--            type="email"-->
    <!--            class="font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]"-->
    <!--            name="email"-->
    <!--            required=""-->
    <!--            id="Email"-->
    <!--            placeholder="Your Email"-->
    
    <!--        <select-->
    <!--            name="segment"-->
    <!--            required=""-->
    <!--            id="Segment"-->
    <!--            class="font-Poppins rounded-3xl py-3 px-6 text-lg w-80 border-[0.6px] outline-none border-[#224072]"-->
    <!--            placeholder="Choose Segment"-->
    
    <!--            <option value="Select Your Segment">Select Your Segment</option>-->
    <!--            <option value="Stock Services - Cash, Future, Option">-->
    <!--                Stock Services - Cash, Future, Option-->
    <!--            </option>-->
    <!--            <option value="Nifty/Bank Nifty Services - Option Future">-->
    <!--                Nifty/Bank Nifty Services - Option Future-->
    <!--            </option>-->
    <!--            <option value="Advance Trading Plan (ATP) Services">-->
    <!--                Advance Trading Plan (ATP) Services-->
    <!--            </option>-->
    <!--            <option value="Commodity Services">Commodity Services</option>-->
    <!--        </select>-->
    <!--    </div>-->
    <!--    <input type="hidden" id="userNumber" name="userNumber" />-->
    <!--    <button-->
    <!--        type="submit"-->
    <!--        data-aos="zoom-in"-->
    <!--        data-aos-duration="1500"-->
    <!--        class="py-2 px-10 bg-[#224072] font-[500] rounded-3xl font-Poppins text-white text-xl aos-init mb-5 sm:mb-0"-->
    
    <!--        Submit-->
    <!--    </button>-->
    <!--</form>-->
    <!--</div>-->
    
    <!--</div>-->
    <div
        class="lg:h-full bg-[#224072] flex justify-around items-center h-full flex-col mb:py-10 mb:space-y-8 mb:justify-start mb:items-center lg:py-0 lg:space-y-0 lg:justify-around lg:flex-row overflow-hidden"
    >
        <div class="logo space-y-1 mt-6">
             <!--<img class="h-32 mt-6 sm:mt-0 " src="./assets/images/footer_logo.png" alt="" />-->
             
              <!--<img class="h-32 mt-6 sm:mt-0 " src="./assets/images/logoo4.png" alt="" />-->
            <p class="lg:text-2xl py-2 font-Poppins text-white mb:text-xl lg:text-start px-12 sm:px-0 text-center aos-init mt-2">
                Connect With Us
            </p>
            <!--<p class="font-Poppins text-white text-center lg:text-start py-1">-->
            <!--    Contact Numbers-->
            <!--</p>-->
            <div class="flex gap-5">
                <!--<p class="font-Poppins text-white text-center lg:text-start">-->
                <!--    SEBI Registered Research Analyst Details-->
                <!--</p>  <br>-->
                <!--<p class="font-Poppins text-white text-center lg:text-start">-->
                <!--    Contact Name: Kashish Joshi-->
                <!--</p>  <br>-->
                <!--<p class="font-Poppins text-white text-center lg:text-start">-->
                <!--    Contact Number: +919079096751-->
                <!--</p>  <br>-->
                <!--<p class="font-Poppins text-white text-center lg:text-start">-->
                <!--    Email Address: kashishjoshi49@gmail.com-->
                <!--</p>  -->
            </div>
            <div class="flex gap-5">
                <!--<p class="font-Poppins text-white text-center lg:text-start">-->
                <!--    Principal Officer : +919171718451-->
                <!--</p>  -->
            </div>
            <!--<p class="font-Poppins text-white text-center lg:text-start">-->
            <!--    Compliance Officer : +919171718451-->
            <!--</p>-->
            <p class="font-Poppins text-white text-center lg:text-start">
                Inquiry Contact : +919171718451
            </p>
            <p class="font-Poppins text-white text-center lg:text-start">
                Email 
            </p>
            <p class="font-Poppins text-white text-center lg:text-start">
                info@kashishjoshiresearch.com
            </p>
            <div>
                <!--<p class="font-Poppins text-white text-center lg:text-start">-->
                <!--    Social-->
                <!--</p>-->
                <!--<div-->
                <!--    class="flex space-x-5 pt-3 mb:text-center mb:flex justify-center lg:text-start lg:justify-start"-->
                
                    <!--<a href="https://api.whatsapp.com/send?phone=919171718451&text=Book%20My%20Trading%20Slot" target="_blank">-->
                <!--        <a href="https://wa.link/iw4ct4" target="_blank">-->
                <!--        <img class="h-6" src="./assets/images/whatsapp_icons.png" alt="" />-->
                <!--    </a>-->
                <!--    <a href="https://www.instagram.com/apexcapitalresearch/?hl=hi" target="_blank">-->
                <!--        <img class="h-6" src="./assets/images/instagram_icons.png" alt="" />-->
                <!--    </a>-->
                <!--    <a href="#" target="_blank">-->
                <!--        <img class="h-6" src="./assets/images/instagram_icons.png" alt="" />-->
                <!--    </a>-->
                <!--    <a href="#" target="_blank">-->
                <!--        <img class="h-6" src="./assets/images/linkedin_icons.png" alt="" />-->
                <!--    </a>-->
                <!--</div>-->
            </div>
        </div>
        <!--<div class="links">-->
        <!--    <p-->
        <!--        class="font-Raleway text-[#02B58B] text-2xl font-semibold my-2 sm:my-0 text-center lg:text-start"-->
        <!--    >-->
        <!--        Quick Links-->
        <!--    </p>-->
        <!--    <div-->
        <!--        class="font-Poppins px-4 sm:px-0 sm:space-x-0 space-x-6 sm:justify-start space-y-3 pt-3 text-white text-lg mb:text-center lg:flex lg:flex-col mb:flex mb:flex-col"-->
        <!--    >-->
        <!--        <a href="#" target="_blank">About Us</a>-->
        <!--        <a href="#" target="_blank">Contact Us</a>-->
        <!--        <a href="#" target="_blank">Services</a>-->
        <!--        <a href="#Contactform">Enquiry Form</a>-->
        <!--    </div>-->
        <!--</div>-->
        <!--<div class="links">-->
        <!--    <p-->
        <!--        class="font-Raleway text-[#02B58B] text-2xl font-semibold my-2 sm:my-0 text-center lg:text-start"-->
        <!--    >-->
        <!--        Quick Links-->
        <!--    </p>-->
        <!--    <div-->
        <!--        class="font-Poppins px-4 sm:px-0 sm:space-x-0 space-x-6 space-y-3 pt-3 text-white text-lg mb:text-center lg:text-start lg:flex lg:flex-col mb:flex mb:flex-col"-->
        <!--    >-->
        <!--        <a href="#" target="_blank">Equity Services</a>-->
        <!--        <a href="#" target="_blank">Options Services</a>-->
        <!--        <a href="#" target="_blank">Future Services</a>-->
        <!--        <a href="#" target="_blank">Commodity Services</a>-->
        <!--        <a href="#" target="_blank">Systematic trading plan (Premium)</a>-->
        <!--    </div>-->
        <!--</div>-->
        <hr class="h-9 bg-white" />
    </div>
    <div class="text-center bg-[#224072] text-white">
        <span class="font-bold text-center">DISCLAIMER</span>
    </div>
    <div class="bg-[#224072] pb-4 mb:px-5 md:px-16 text-white w-full px-4 sm:px-0">
        <br />kashish Joshi Research (SEBI Registration : INH000017240) is not responsible for the information and conclusions of
        the analysis available on it. Although all the information on the Web site
        is presented with utmost care, we do not hold any responsibility for the
        information provided. Customers and visitors should not depend on analysis
        for making an investment, the analysis should be considered as a first
        step to further their awareness of the subject. They must consult a
        financial advisor. None of our expert analysts should be relied upon as
        a financial advisor. Visitors to the Web site must go through the Terms
        and Conditions and Disclaimer section of the site for more details.
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tw-elements@1.0.0-beta8/dist/js/index.min.js"></script>
    <script>
        AOS.init();
        function submitForm(event) {
            event.preventDefault();
            var name = document.getElementById('Name').value;
            var number = document.getElementById('Number').value;
            var email = document.getElementById('Email').value;
            var segment = document.getElementById('Segment').value;

            if (name && number && email && segment) {
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('number', number);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('segment', segment);
                document.getElementById('Contactform').submit();
            } else {
                alert('Please fill all the fields.');
            }
        }
    </script>
</body>
</html>

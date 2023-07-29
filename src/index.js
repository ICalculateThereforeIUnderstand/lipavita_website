import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { Obracun } from "./obracun.js";
import { NotFound, Loading } from "./notFound.js";
import { Testimonial } from "./testimonial.js";
import { Kartica2 } from "./kartica.js";
import { ModalSlika } from "./modalSlika.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiDutchBike } from "react-icons/gi";

import { BsPersonAdd, BsPersonLock, BsBicycle } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { MdElectricBike } from "react-icons/md";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const ADRESA = "";
//export const ADRESA = "/lipavita";

export const Kontekst = React.createContext();

function Glavna() {

  const [brSlika, setBrSlika] = React.useState(0);
  const { lang } = React.useContext(Kontekst);

  const [loadSw, setLoadSw] = React.useState(false);
  const [brUcitanih, setBrUcitanih] = React.useState(0);

  const r = React.useRef();
  const r1 = React.useRef();
  const r2 = React.useRef();
  const r3 = React.useRef();
  const r4 = React.useRef();

  const p = React.useRef();

  function loadedPicFun() {
    setBrUcitanih((prev)=>{return prev+1});
  }

  React.useEffect(()=>{
    if (brUcitanih === 3) {
      setLoadSw(true);
    }
    
  },[brUcitanih]);

  React.useEffect(()=>{
    r.current = setInterval(()=>{setBrSlika((prev)=>{return (prev+1)%3})}, 5000);
    r4.current.style.top = "0";

    return ()=>{clearInterval(r.current)};
  }, []);

  React.useEffect(()=>{
    if (loadSw) {
      p.current.style.display = "block";
    } else {
      p.current.style.display = "block";
    }
  }, [loadSw]);

  React.useEffect(()=>{
    if (brSlika === 0) {
      r3.current.style.opacity = "0";
      r1.current.style.opacity = "1";
    } else if (brSlika === 1) {
      r1.current.style.opacity = "0";
      r2.current.style.opacity = "1";
    } else {
      r2.current.style.opacity = "0";
      r3.current.style.opacity = "1";
    }
  }, [brSlika]);

  return (
    <>
    <Loading sw={!loadSw}/>
    <div ref={p} className="glavna">
      <Navbar current={1}/>
      {false ? <>
      <div ref={r1} id="slika1" className="slika"></div>
      <div ref={r2} id="slika2" className="slika"></div>
      <div ref={r3} id="slika3" className="slika"></div>
      </> : <>
      <img ref={r1} onLoad={loadedPicFun} src="slike/uber.png" id="slika1-img" className="slika-img"/>
      <img ref={r2} onLoad={loadedPicFun} src="slike/bolt.png" id="slika2-img" className="slika-img"/>
      <img ref={r3} onLoad={loadedPicFun} src="slike/dostavljaci.jpg" id="slika3-img" className="slika-img"/>
      </>}
      <div ref={r4} className="natpis">
        <div className="pomak"></div>
        <p className="natpis-el">{lang === "hr" ? "Zapošljavamo u mnogim gradovima Hrvatske" : "We are employing accross many cities in Croatia"}</p>
        <RotirajuciNatpisi/>
      </div>
      <main className="main">
        <h2 className="naslov">{lang === "hr" ? "Naši partneri" : "Our partners"}</h2>
        <div className="partneri">
          <img className="logo-img" alt="Wolt logo" src="slike/wolt.png"/>
          <img className="logo-img" alt="Glovo logo" src="slike/glovo.png"/>
          <img className="logo-img" alt="Bolt food logo" src="slike/boltFood.png"/>
          <img className="logo-img" alt="Uber logo" src="slike/uberLogo.png"/>
          <img className="logo-img" alt="Bolt logo" src="slike/boltLogo.png"/>
        </div>
        <h2 className="naslov1">{lang === "hr" ? "Želite li raditi kao dostavljač?" : "You want to work as a delivery man?"}</h2>
        <div className="el1">
          <div className="lijeva-ploca">
            <img className="slika1" alt="slika dostavljača" src="slike/foodDelivery.png"/>
            <img className="slika2" alt="slika dostavljača Glova, Bolta i Wolta na biciklima" src="slike/dostavljaci.jpg"/>
            <div className="oglas-elektricni-bicikli">
              <p className="oglas-tekst">{lang === "hr" ? "Nudimo najam električnih bicikala!" : "We offer electric bicycle rental!"}</p>
            </div>
          </div>  
          <div className="ploca">
            <Kartica naslov={lang === "hr" ? "uvjeti" : "conditions"} extraHeight={100} tekst={
               <ul className="lista1">
                 <li>{lang === "hr" ? "18+ godina" : "18+ years old"}</li>
                 <li>{lang === "hr" ? "potvrda o nekažnjavanju (e-građani servis)" : "criminal record certificate (e-citizen service)"}</li>
               </ul> 
            }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ikona bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>
            </Kartica>
            <Kartica naslov={lang === "hr" ? "tko sve može" : "who can apply"} extraHeight={180} tekst={
               <ul className="lista1">
                 <li>{lang === "hr" ? "Nezaposleni - ugovor o radu, 2 sata dnevno ili više" : "Unemployed - employment contract, 2 hours a day or more"}</li>
                 <li>{lang === "hr" ? "Zaposleni - ugovor o dodatnom radu, 2. posao" : "Employed - contract on second job"}</li>
                 <li>{lang === "hr" ? "Umirovljenici" : "Retired people"}</li>
                 <li>{lang === "hr" ? "Studenti - studentski ugovor" : "Students - student contract"}</li>
                 {lang === "hr" ? <li>Blokirani - imamo rjesenje i za vas!</li> : null}
               </ul> 
            }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ikona bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
              </svg>
            </Kartica>
            <Kartica naslov={lang === "hr" ? "prijava" : "your application"} tekst={
               <p className="kartica-tekst">{lang === "hr" ? "Na našoj " : "On our "}<Link to={ADRESA+"/kontakt"}>{lang === "hr" ? "kontakt" : "contact"}</Link> {lang === "hr" ? "stranici možete nam poslati poruku, email ili nazvati nas telefonom. Dogovorit ćemo termin kada nas možete posjetiti u uredu radi daljnje procedure. Možete i nas samoinicijativno posjetiti u uredu svaki radni dan od 9 do 16." : "page, you can send us a message, email or call us by phone. We will arrange an appointment when you can visit us in the office for further procedures. You can also visit us on your own initiative in the office every working day from 9 am to 4 pm."}</p> 
            }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ikona bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
              </svg>
            </Kartica>

            <Kartica naslov={lang === "hr" ? "edukacija" : "education"} extraHeight={150} tekst={
               <p className="kartica-tekst">{lang === "hr" ? "Edukacija se sastoji od gledanja uvodnih videa u kojima se objašnjava sama aplikacija, izračun zarade, način samog rada, itd. Svaka firma ima svoja videa, a od nas ćete dobiti link" : "The education consists of watching introductory videos that explain mobile application, the calculation of earnings, the way job is done, etc. Each company has its own videos whose links you will receive from us."}</p> 
            }>
              <MdCastForEducation className="ikona"/>
            </Kartica>

            <Kartica naslov={lang === "hr" ? "posjet uredu" : "office visit"} tekst={
               <p className="kartica-tekst">{lang === "hr" ? "Vrijeme je da nas posjetite u našem uredu. Ponesite sa sobom sljedeće dokumente: osobnu iskaznicu, potvrdu o nekažnjavanju (mlađu od 6 mjeseci), vozačku dozvolu (ako planirate koristiti vozilo), osiguranje vozila (u slučaju korištenja vlastitog vozila)" : "It's time to visit us in our office. Bring the following documents with you: identity card, criminal record certificate (younger than 6 months), driver's license (if you plan to use a vehicle), vehicle insurance (in case of using your own)"}</p> 
            }>
              <HiOutlineBuildingOffice2 className="ikona"/>
            </Kartica>

            <Kartica naslov={lang === "hr" ? "oprema" : "equipment"} extraHeight={160} tekst={
               <p className="kartica-tekst">{lang === "hr" ? "U ovom koraku vi zadužujete radnu opremu. Od nas ćete dobiti dostavljačku torbu, vanjsku veliku bateriju za mobitel i eventualno radno vozilo (nudimo električne bicikle, skutere i vozila)" : "In this step, you get the work equipment. From us you will receive a delivery bag, a power bank for a mobile phone and possibly a vehicle (we offer electric bicycles, scooters and cars)."}</p> 
            }>
              <GiDutchBike className="ikona"/>
            </Kartica>

            <Kartica naslov={lang === "hr" ? "počinjete sa radom" : "you start working"} extraHeight={140} tekst={
               <p className="kartica-tekst">{lang === "hr" ? "Napokon, krećete sa radom. Želimo Vam sve najbolje i da se družimo dugo vremena. Sretno!" : "Finally, you start working. We wish you all the best and that we stay together for a long time. Good luck!"}</p> 
            }>
              <GiDutchBike className="ikona"/>
            </Kartica>
          </div>
        </div>
        <h2 className="naslov1 naslov2">{lang === "hr" ? "Želite li taksirati na Uberu i/ili Boltu?" : "Do you want to drive taxi on Uber and/or Bolt?"}</h2>
        <div className="slika2">
          <div className="plast">
            <Link to={ADRESA+"/taksi"} style={{ textDecoration:'none' }}>
              <div className="gumb">
                <p className="gumb-p">{lang === "hr" ? "Želim taksirati" : "I want to drive"}</p>
              </div>
            </Link>
          </div>
        </div>
        <Testimonial/>
      </main>
      <Footer/>
    </div>
    </>
  )
}

function Kartica({children, extraHeight=200, naslov="naslov", tekst="neki tekst"}) {
  const [sw, setSw] = React.useState(false);
  const r = React.useRef();
  const r1 = React.useRef();

  const karticaHeight = 100;

  React.useEffect(()=>{
    r.current.style.height = extraHeight + "px";
  }, []);

  React.useEffect(()=>{
    if (sw) {
      r1.current.style.height = (karticaHeight+extraHeight) + "px";
    } else {
      r1.current.style.height = karticaHeight + "px";
    }
  }, [sw]);

  return (
    <div ref={r1} onClick={()=>{setSw((prev)=>{return !prev})}} className="kartica">
      <div className="kartica-el1">
        {children}
      </div>
      <div className="kartica-el2">
        <p className="nas">{naslov}</p>
      </div>
      <div ref={r} className="kartica-el3">
        {tekst}
      </div>
    </div>
  )
}

function Kontakt() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [swModal, setSwModal] = React.useState(false);
  const [pomak, setPomak] = React.useState(0);
  const { lang } = React.useContext(Kontekst);
  const [loadSw, setLoadSw] = React.useState(false);
  const [brUcitanih, setBrUcitanih] = React.useState(0);

  const r = React.useRef();
  const r4 = React.useRef();
  
  function loadedPicFun() {
    setBrUcitanih((prev)=>{return prev+1});
  }

  React.useEffect(()=>{
    if (brUcitanih === 1) {
      setLoadSw(true);
    }
    
  },[brUcitanih]);

  React.useEffect(()=>{
    r4.current.style.top = "0";
  }, []);

  React.useEffect(()=>{
    if (swModal) {
      
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setPomak(scrollTop);

      let element = r.current;
      let cssObj = window.getComputedStyle(element, null);
      let svojstvo = cssObj.getPropertyValue("top");
      console.log("svojstvo:");
      console.log(svojstvo);

      let svojstvo1 = cssObj.getPropertyValue("height");
      console.log("height:");
      console.log(svojstvo1);

      r.current.style.position = "fixed";
      r.current.style.top = -1*scrollTop + "px";
      
      
    } else {
      
      let element = r.current;
      let cssObj = window.getComputedStyle(element, null);
      let svojstvo = cssObj.getPropertyValue("height");
      console.log("svojstvo1:");
      console.log(svojstvo);

      
      r.current.style.top = "0px";
      r.current.style.position = "relative";
      window.scrollTo(0, pomak);
    }
  }, [swModal]);

  function submitFun(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
  }
  function provjeriBroj(str) {
    if (str.length === 0) return true;
    switch (str.at(-1)) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case " ":
        return true;
      default:
        return false;
    }
  }
  return (
    <>
    <Loading sw={!loadSw}/>
    <div className="kontakt">
      <div ref={r} className="holder">
      <Navbar current={3}/>
      <Modal swModal={swModal} setSwModal={(sw)=>{setSwModal(sw)}}/>
      {false ? <div className="slika"></div> :
           <img onLoad={loadedPicFun} src="slike/contact.jpg" className="slika-img"/>
      }
      <div ref={r4} className="natpis">
        <div className="pomak"></div>
        <p className="natpis-el">{lang === "hr" ? "Kontakt stranica" : "Contact Page"}</p>
      </div>
      <main className="tijelo">
        <aside className="lijeva">
          <div className="element">
            <div className="ikona">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ikona-el bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </div>
            <div className="sadrzaj">
              <p className="naslov">E-mail</p>
              <a className="email" href="mailto: lipa.vita@gmail.com">lipa.vita@gmail.com</a>
            </div>
          </div>
          <div className="element">
            <div className="ikona">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ikona-el1 bi bi-envelope-at-fill" viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
              </svg>
            </div>
            <div className="sadrzaj">
              <p className="naslov">{lang === "hr" ? "Telefon" : "Telephone"}</p>
              <p className="tekst">012 345 6789</p>
            </div>
          </div>
          <div className="element hove" onClick={()=>{setSwModal(true)}}>
            <div className="ikona">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ikona-el2 bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
            </div>
            <div className="sadrzaj">
              <p className="naslov">{lang === "hr" ? "Lokacija" : "Location"}</p>
              <p className="tekst">Kruge 12, Zagreb</p>
              <p className="upozorenje">{lang === "hr" ? "Kliknite za prikaz mape" : "Click to see map"}</p>
            </div>
          </div>
        </aside>
        <section className="desna">
          <p className="forma-naslov">{lang === "hr" ? "Kontaktirajte nas" : "Contact us"}</p>
          <div className="div-forma">
            
            
            <form onSubmit={submitFun} className="forma-el" method="post" id="form-el4" action="http://slobodansavic.com/procesirajEmail/proces_email.php">
              <label for="Name">{lang === "hr" ? "Ime i prezime" : "First and last name"}</label>
              <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" className="forma-input1" id="Name" name="Name" placeholder={lang === "hr" ? "Unesite ime i prezime" : "Enter first and last name"} required/>
              <label for="Email">Email</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className="forma-input1" id="Email" name="Email" placeholder={lang === "hr" ? "Unesite email" : "Enter email"} required/>
              <label for="Phone">{lang === "hr" ? "Mobitel" : "Mobile phone"}</label>
              <input onChange={(e)=>{if (provjeriBroj(e.target.value)) setPhone(e.target.value)}} value={phone} type="tel" className="forma-input1" id="Phone" name="Phone" placeholder={lang === "hr" ? "Unesite broj mobitela" : "Enter mobile phone"} required/>
              <label for="Message">{lang === "hr" ? "Vasa poruka" : "Your message"}</label>
              <textarea  onChange={(e)=>{setMessage(e.target.value)}} value={message} id="Message" name="Message" className="forma-input1" rows="8" maxlength="3000" placeholder={lang === "hr" ? "Vaša poruka" : "Your message"} required/>
              <button type="submit" id="button" className="forma-button">{lang === "hr" ? "Posaljite poruku" : "Send message"}</button>
            </form>
            
          </div>
        </section>
      </main>
      <Footer/>
      </div>
    </div>
    </>
  )
}


function Kartica1({tipIkone=1, broj=100, tekst="neki tekst..."}) {
  return (
    <div className="kartica-brojka">
      <div className="el1">
        {tipIkone === 1 ? <BsPersonAdd className="ikona"/> : null}
        {tipIkone === 2 ? <BsPersonLock className="ikona"/> : null}
        {tipIkone === 3 ? <AiOutlineCar className="ikona"/> : null}
        {tipIkone === 4 ? <BsBicycle className="ikona"/> : null}
        {tipIkone === 5 ? <MdElectricBike className="ikona"/> : null}
      </div>
      <div className="el2">
        <p className="boldano">{broj}+</p>  
        <p className="tekst">{tekst}</p>
      </div>
    </div>
  )
}

function ONama() {
  const [loadSw, setLoadSw] = React.useState(false);
  const [brUcitanih, setBrUcitanih] = React.useState(0);
  const [swModal, setSwModal] = React.useState(false);
  const [pomak, setPomak] = React.useState(0);
  const { lang } = React.useContext(Kontekst);

  const r = React.useRef();

  function loadedPicFun() {
    setBrUcitanih((prev)=>{return prev+1});
  }

  React.useEffect(()=>{
    if (brUcitanih === 7) {
      setLoadSw(true);
    }
    
  },[brUcitanih]);

  /*sljedeci react.useEffect blokira scroll kada se modal otvori, zadaca div-a klase holder je da
    se mjenja iz position fixed u relative i obrnuto, te se pozicionira ovisno o trenutnom scrollu*/
  React.useEffect(()=>{  
    if (swModal) {
      
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setPomak(scrollTop);

      let element = r.current;
      let cssObj = window.getComputedStyle(element, null);
      let svojstvo = cssObj.getPropertyValue("top");

      let svojstvo1 = cssObj.getPropertyValue("height");

      console.log("modal je otvoren");
      console.log(svojstvo);
      console.log(svojstvo1);

      r.current.style.position = "fixed";
      r.current.style.top = -1*scrollTop + "px";
    } else {      
      let element = r.current;
      let cssObj = window.getComputedStyle(element, null);
      let svojstvo = cssObj.getPropertyValue("height");
      
      r.current.style.top = "0px";
      r.current.style.position = "relative";
      window.scrollTo(0, pomak);

      console.log("modal je zatvoren");
      console.log(svojstvo);
      
    }
  }, [swModal]);

  return (
    <>
    <Loading sw={!loadSw}/>
    <div className="onama">
     <div ref={r} className="holder">
      <Navbar current={2}/>
      <img onLoad={loadedPicFun} src="slike/aboutUs.png" className="slika-img"/>
      <main className="main">
        <div className="el1">
          <div className="lijeva">
            <h2 className="naslov">{lang === "hr" ? "Tko smo mi?" : "Who are we?"}</h2>
            <p className="p-el">{lang === "hr" ? "Mi smo najstarija firma za dostave u Hrvatskoj. Poslujemo kontinuirano od 2018. godine. Bili smo prvi partner Glovu i Woltu. Naša misija je Vama omogućiti savršene uvjete za rad u dostavama i taksiju. Kod nas ćete uvijek imati redovite tjedne isplate, vrlo brzo rješavanje bilo kakvog problema oko registracija i papirologije, te osiguravamo radna vozila i opremu. Kroz našu firmu je do sada prošlo 4000+ radnika, trenutno imamo zaposleno 500+ ljudi, 100+ vozila u taksi floti, 100+ bicikala, 40+ električnih bicikala" : "We are the oldest food delivery company in Croatia. We have been operating continuously since 2018. We were the first partner of Glovo and Wolt. Our mission is to provide you with perfect conditions for work in deliveries and taxi driving. With us, you will always have regular weekly payments, very quick resolution of any problem with registration and paperwork, and we provide work vehicles and equipment. 4000+ workers have passed through our company so far, we currently have 500+ people employed, 100+ vehicles in the taxi fleet, 100+ bicycles, 40+ electric bicycles."}</p>
          </div>
          <div className="desna">
            <img alt="'why choose us' picture" onLoad={loadedPicFun} src="slike/whyChooseUs.png" className="slika1"/>
          </div>
        </div>
        <h3 className="partneri-naslov">{lang === "hr" ? "Naši partneri:" : "Our partners:"}</h3>
        <div className="partneri">
          <img onLoad={loadedPicFun} className="logo-img" alt="Wolt logo" src="slike/wolt.png"/>
          <img onLoad={loadedPicFun} className="logo-img" alt="Glovo logo" src="slike/glovo.png"/>
          <img onLoad={loadedPicFun} className="logo-img" alt="Bolt food logo" src="slike/boltFood.png"/>
          <img onLoad={loadedPicFun} className="logo-img" alt="Uber logo" src="slike/uberLogo.png"/>
          <img onLoad={loadedPicFun} className="logo-img" alt="Bolt logo" src="slike/boltLogo.png"/>
        </div>

        <h3 className="partneri-naslov">{lang === "hr" ? "Naše brojke" : "Our numbers"}</h3>

        <div className="el2">
          <Kartica2 broj={4000} tekst={lang === "hr" ? "do sada zaposlenih" : "cumulatively employed"}/>
          <Kartica2 tipIkone={2} broj={500} tekst={lang === "hr" ? "trenutno zaposlenih" : "currently employed"}/>
          <Kartica2 tipIkone={3} broj={100} tekst={lang === "hr" ? "vozila u floti" : "vehicles in fleet"}/>
          <Kartica2 tipIkone={4} broj={100} tekst={lang === "hr" ? "bicikala" : "bicycles"}/>
          <Kartica2 tipIkone={5} broj={100} tekst={lang === "hr" ? "električnih bicikala" : "electric bicycles"}/>
        </div> 

        <div className="el3">
          <h3 className="partneri-naslov">{lang === "hr" ? "Neka od vozila koja možete dobiti kod nas:" : "Some of the vehicles you can get from us:"}</h3>
          <div className="vozila">
            <ModalSlika path="slike/vozila/vw_up_2019_free.jpg" model="VW UP 2019" setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/skoda_rapid_spaceback_2019_free.jpg" model="Škoda Rapid Spaceback 2019" setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/mg_zs_2023_free.jpg" model="MG ZS 2023" setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/dacia_sandero_2022_free.jpg" model="Dacia Sandero 2022" setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/dacia_logan_2019_free.jpg" model="Dacia Logan 2019" setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/citroen_celysee_2019_free.jpg" model="Citroen C-Elysee 2019" setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/scooter_peogeot_free.jpg" model={lang === "hr" ? "Skuter Peugeot novi" : "new Peugeot scooter"} setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/scooter_yamaha_free.JPG" model={lang === "hr" ? "Skuter Yamaha nova" : "new Yamaha scooter"} setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/kross_bicycle_free.jpg" model={lang === "hr" ? "Kross bicikl" : "Kross bicycle"} setSwModal={setSwModal}/>
            <ModalSlika path="slike/vozila/ado_bike_a20_free.webp" model="ADO A20 e-bike" setSwModal={setSwModal}/>
          </div>  
        </div>  
        <div className="buffer"></div>
      </main>

     

      <Footer/>
     </div> 
    </div>
    </>
  )
}

function RotirajuciNatpisi() {
  const [elementi, setElementi] = React.useState(["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Varaždin", "Karlovac", "Pula", "Dubrovnik", "Rovinj", "Poreč", "Koprivnica", "Križevci", "Sisak", "Virovitica"]);
  const [br, setBr] = React.useState(0);

  const r = React.useRef();

  React.useEffect(()=>{
    r.current = setInterval(()=>{setBr((prev)=>{return (prev+1)%(elementi.length)})}, 1500);

    return ()=>{clearInterval(r.current)};
  }, []);

  return (
    <div className="rotirajuci">
      {elementi.map((el, index)=>{
        if (index === br) {
          //console.log("upravo stavljamo trenutni " + Math.random());
          return <div key={index} className="element trenutni">{el}</div>; 
        } else if (index === (br+(elementi.length)-1)%(elementi.length)) {
          return <div key={index} className="element prethodni">{el}</div>  
        }
        //console.log("upravo stavljamo sljedeci " + Math.random());
        return <div key={index} className="element sljedeci">{el}</div>
      })}
    </div>
  )
}

function Modal({swModal=false, setSwModal=()=>{return false}}) {
  const [sw, setSw] = React.useState(false);
  const p = React.useRef();

  React.useEffect(()=>{
    setSw(swModal);
  }, [swModal])

  React.useEffect(()=>{
    console.log(sw);

    if (sw) {
      p.current.style.display = "flex";
      //setToggle(false);
    } else {
      p.current.style.display = "none";
      //setToggle(true);
    }
  }, [sw]);
  return (
    
      <div ref={p} className="plast">
        <div className="modal">
          <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.7642736135358!2d15.988072296408623!3d45.798228003551934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7ec61390cb1%3A0x9ce790f15211b8c2!2sLipa%20Vita!5e0!3m2!1sen!2shr!4v1687784653648!5m2!1sen!2shr" 
           allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="krizic" onClick={()=>{setSwModal(false)}}>
            <div className="el1"></div>
            <div className="el2"></div>
          </div>
        </div>
      </div>
  )
}

function Taksi() {

  const [brSlika, setBrSlika] = React.useState(0);
  const { lang } = React.useContext(Kontekst);

  const [loadSw, setLoadSw] = React.useState(false);
  const [brUcitanih, setBrUcitanih] = React.useState(0);

  const r = React.useRef();
  const r1 = React.useRef();
  const r2 = React.useRef();

  const p = React.useRef();

  function loadedPicFun() {
    setBrUcitanih((prev)=>{return prev+1});
  }

  React.useEffect(()=>{
    if (brUcitanih === 2) {
      setLoadSw(true);
    }
    
  },[brUcitanih]);

  React.useEffect(()=>{
    r.current = setInterval(()=>{setBrSlika((prev)=>{return (prev+1)%2})}, 5000);

    return ()=>{clearInterval(r.current)};
  }, []);

  React.useEffect(()=>{
    if (brSlika === 0) {
      r2.current.style.opacity = "0";
      r1.current.style.opacity = "1";
    } else {
      r1.current.style.opacity = "0";
      r2.current.style.opacity = "1";
    } 
  }, [brSlika]);

  return (
    <>
    <Loading sw={false}/> 
    <div className="taksi">
      <Navbar current={-1}/>
      {false ? <>
        <div ref={r1} id="slika1" className="slika"></div>
        <div ref={r2} id="slika2" className="slika"></div> </> : <>
        <img ref={r1} onLoad={loadedPicFun} src="slike/uber.png" className="slika-img"/>
        <img ref={r2} onLoad={loadedPicFun} src="slike/bolt.png" id="druga-slika" className="slika-img"/>    

        </>}
      <main className="main">
        <div className="el">
          <h2 className="el-h2">{lang === "hr" ? "Kako poceti taksirati na Uberu i/ili Boltu" : "How to start driving for Uber and/or Bolt?"}</h2>
          <h3 className="el-h3">{lang === "hr" ? "Uvjeti" : "Conditions"}</h3>
          <ul className="lista1">
            <li>{lang === "hr" ? "21+ godina starosti" : "21+ years old"}</li>
            <li>{lang === "hr" ? "polozen ispit za taksi vozaca (ako nemate, mozemo to rijesiti za tri dana)" : "passed exam for taxi driver (if you don't have it, we can arrange exam in three days)"}</li>
            <li>{lang === "hr" ? "potvrda o nekaznjavanju mlada od 6 mjeseci (moze se dobiti na e-gradanin ili na sudu)" : "criminal record certificate younger then 6 months (you can get it at e-citizen service or at court)"}</li>
            <li>{lang === "hr" ? "vazeca osobna iskaznica" : "valid identity card"}</li>
            <li>{lang === "hr" ? "vazeca vozacka dozvola" : "valid driver's license"}</li>
            <li>{lang === "hr" ? "prometna dozvola + osiguranje (ako cete koristiti vlastito vozilo)" : "vehicle’s registration card + insurance (in case you plan to use your own car)"}</li>
          </ul> 
          <h3 className="el-h3">{lang === "hr" ? "Kategorije kandidata" : "Categories of candidates"}</h3>
          <ul className="lista1">
            <li>{lang === "hr" ? "Nezaposleni - ugovor o radu, dva ili vise sata dnevno" : "Unemployed - employment contract, 2 hours a day or more"}</li>
            {lang === "hr" ? <li>Blokirani - imamo rjesenje i za vas</li> : null}
            <li>{lang === "hr" ? "Studenti - preko studenskog ugovora" : "Students - student contract"}</li>
            <li>{lang === "hr" ? "Zaposleni - ugovor o dodatnom radu, mozda ce Vam biti potrebna suglasnost poslodavca" : "Employed - contract on second job, you may need consent of your first employer"}</li>
            <li>{lang === "hr" ? "Umirovljenici - ugovor o dodatnom radu" : "Retired people - contract on second job"}</li>
          </ul>
          <h3 className="el-h3">{lang === "hr" ? "Sto nudimo" : "What do we offer"}</h3>
          <ul className="lista1">
            <li>{lang === "hr" ? "Bolt i Uber uzimaju 25% bruto prometa" : "Bolt and Uber take 25% of gross revenue"}</li>
            <li>{lang === "hr" ? "Nasa provizija je 10% neto prometa (nakon ovih prvih 25%)" : "our commission is 10% of net revenue (after previous 25% is taken)"}</li>
            <li>{lang === "hr" ? "Dobijate povrat troska goriva od 5% (nakon sto prilozite R1 racune goriva)" : "You get a 5% fuel refund (after you bring R1 fuel bills)"}</li>
            <li>{lang === "hr" ? "Imate dodatni trosak doprinosa" : "you have additional government taxes (pension and healthcare)"}</li>
            <li>{lang === "hr" ? "Ako ne planirate koristiti vlastito vozilo, mi Vam ga osiguravamo. U tom slucaju placate i tjedni najam vozila" : "If you don't plan to use your own vehicle, we provide it for you. In that case, you also pay the weekly rental of the vehicle"}</li>
            <li>{lang === "hr" ? "Depozit za iznajmljeno vozilo je 200eu" : "The one-time deposit for the rented vehicle is 200eu"}</li>
            <li>{lang === "hr" ? "Isplate su na tjednoj bazi, svaki cetvrtak" : "Payments are made on weekly basis, every Thursday."}</li>
          </ul>
        </div>
        <Link to={ADRESA+"/kontakt"} style={{ textDecoration:'none' }}>
          <div className="gumb">
            <p className="gumb-p">{lang === "hr" ? "Kontakt" : "Contact"}</p>
          </div>
        </Link>
      </main>
      <Footer/>
    </div>
    </>
  )
}


function Application() {
  const [lang, setLang] = React.useState("hr");
  const [loadSw, setLoadSw] = React.useState(false);
  const [brUcitanih, setBrUcitanih] = React.useState(0);
  

  React.useEffect(()=>{
    loadFun();
  },[]); 

  function loadFun() {
    console.log("Cijela stranica je potpuno ucitana... " + Math.random());
    //setLoadSw(true);

    // helper kod za dizajn stranice
    document.addEventListener("keydown", (e) => {pritisakGumba(e)});
    let ell = document.querySelector("html");
    function pritisakGumba(e) {
      if (e.code === "KeyS") {
        console.log("sirina/visina prozora su " + ell.clientWidth + " / " + ell.clientHeight);
        console.log(Math.random());
      }
    }
  }

  function loadedPicFun() {
    setBrUcitanih((prev)=>{return prev+1});
  }

  React.useEffect(()=>{
    if (brUcitanih === 3) {
      setLoadSw(true);
    }
    console.log("NOVI broj ucitanih je " + brUcitanih);

  },[brUcitanih]);

  React.useEffect(()=>{
    console.log("Jezik je postavljen na " + lang);
  }, [lang]);

  return (
    <Kontekst.Provider value={{loadSw, loadedPicFun, lang, setLang}}>
      <Router>
        <Routes>
          <Route path={ADRESA+"/"} element={<Glavna />} />
          <Route path={ADRESA+"/kontakt"} element={<Kontakt/>} />
          <Route path={ADRESA+"/onama"} element={<ONama/>} />
          <Route path={ADRESA+"/taksi"} element={<Taksi/>} />
          <Route path={ADRESA+"/obracun"} element={<Obracun/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </Kontekst.Provider>
  )
}

root.render(
  
    <Application />
  
);



import React from "react";
import ReactDOM from 'react-dom/client';
import "./navbar.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";
import { ADRESA, Kontekst} from "./index.js";

export function Navbar({current=0}) {
    const [expand, setExpand] = React.useState(false);
    const {lang, setLang} = React.useContext(Kontekst);
    
    const r = React.useRef();
  
    const r1 = React.useRef();
    const r2 = React.useRef();
    const r3 = React.useRef();
    const r1a = React.useRef();
    const r2a = React.useRef();
    const r3a = React.useRef();

    const r4a = React.useRef();
    const r4b = React.useRef();

    const r5a = React.useRef();
    const r5b = React.useRef();
  
    React.useEffect(()=>{
      if (current === 1) {
        r1.current.style.color = "#2070fa";
        r1a.current.style.color = "#2070fa";
      } else if (current === 2) {
        r2.current.style.color = "#2070fa";
        r2a.current.style.color = "#2070fa";
      } else if (current === 3) {
        r3.current.style.color = "#2070fa";
        r3a.current.style.color = "#2070fa";
      }
    }, []);

    React.useEffect(()=>{
      if (lang === "hr") {
        r5a.current.classList.add("odabrana");
        r5b.current.classList.remove("odabrana");
      } else {
        r5a.current.classList.remove("odabrana");
        r5b.current.classList.add("odabrana");
      }
    }, [lang]);
  
    React.useEffect(()=>{
      console.log(expand);
      if (expand) {
        r.current.style.height = "250px";
      } else {
        r.current.style.height = "150px";
      }
    }, [expand]);

    function hover(str) {
      if (str === "hr") {
        r4a.current.style.display = "flex";
      } else {
        r4b.current.style.display = "flex";
      }
    }

    function unhover(str) {
      if (str === "hr") {
        r4a.current.style.display = "none";
      } else {
        r4b.current.style.display = "none";
      }
    }
  
    return (
      <nav ref={r} className="navbar">
        <img src="lipaVitaLogo.jpg" className="logo" alt="logo slika" />
        <div className="zastavice">
         <img ref={r5a} src="slike/croatia.png" className="zastava croatia" alt="hrvatska zastava za hrvatski"
            onClick={()=>{setLang("hr")}} onMouseEnter={()=>{hover("hr")}} onMouseLeave={()=>{unhover("hr")}}/>
         <img ref={r5b} src="slike/britain.png" className="zastava britain" alt="britanska zastava za engleski"
            onClick={()=>{setLang("en")}} onMouseEnter={()=>{hover("en")}} onMouseLeave={()=>{unhover("en")}}/>
         <div ref={r4a} className="natpis hrvatski">Hrvatski</div>
         <div ref={r4b} className="natpis engleski">English</div>
        </div>
        {!expand ?
        <div className="gumb" onClick={()=>{setExpand((prev)=>{return !prev})}}>
          <div className="crtica"></div>
          <div className="crtica"></div>
          <div className="crtica"></div>
        </div> : 
        <div className="krizic" onClick={()=>{setExpand((prev)=>{return !prev})}}>
          <div className="el1"></div>
          <div className="el2"></div>
        </div>
        }
        <div className="link-traka">
          <Link ref={r1} className="link" to={ADRESA+"/"}>{lang === "hr" ? "Naslovna" : "Main"}</Link>
          <Link ref={r2} className="link" to={ADRESA+"/onama"}>{lang === "hr" ? "O nama" : "About us"}</Link>
          <Link ref={r3} className="link" to={ADRESA+"/kontakt"}>{lang === "hr" ? "Kontakt" : "Contact"}</Link>
        </div>
        <div className="link-traka1">
          <Link ref={r1a} className="link" to={ADRESA+"/"}>{lang === "hr" ? "Naslovna" : "Main"}</Link>
          <Link ref={r2a} className="link" to={ADRESA+"/onama"}>{lang === "hr" ? "O nama" : "About us"}</Link>
          <Link ref={r3a} className="link" to={ADRESA+"/kontakt"}>{lang === "hr" ? "Kontakt" : "Contact"}</Link>
        </div>
      </nav>
    )
  }
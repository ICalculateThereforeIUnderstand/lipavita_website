import React from "react";
import ReactDOM from 'react-dom/client';
import "./testimonial.scss";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Kontekst } from "./index.js";

const podaci = [["nepoznataOsoba1.png", "Ivan Kaparić", "Glovo", "Najbolji i najpravedniji Uber / Bolt / Glovo partner u Zagrebu. Također imaju vrlo jeftine i nove aute za rentanje"],
["nepoznataOsoba1.png", "Igor Veselica", "Bolt", "Vrlo dobra firma. Surađujemo dulji niz godina. Uvijek su točni i brzi kod isplata. Za svaku preporuku."],
["myPic1.jpg", "Slobodan Savić", "Uber/Bolt", "Nema boljeg agregatora u Zagrebu. Jako dobri uvjeti za vozače, jeftina vozila i sjajna višegodišnja reputacija."]];

const podaci1 = [["nepoznataOsoba1.png", "Ivan Kaparić", "Glovo", "The best and fairest Uber / Bolt / Glovo partner in Zagreb. They also have very cheap and new cars for rent"],
["nepoznataOsoba1.png", "Igor Veselica", "Bolt", "Very good company. We have been cooperating for many years. They are always accurate and fast with payouts. For every recommendation."],
["myPic1.jpg", "Slobodan Savić", "Uber/Bolt", "There is no better aggregator in Zagreb. Very good conditions for drivers, cheap vehicles and a great long-standing reputation."]];

const brSlika = podaci.length;

const intervalTime = 5000;

function Element({poz=0, slika="neka slika", ime="neko ime", zanimanje="neko zanimanje", tekst="neki tekst"}) {
  const [br, setBr] = React.useState(1);
  const r = React.useRef();
  const r1 =React.useRef();

  React.useEffect(()=>{
    if (br === -1) {
      if (poz === 0) {
        r.current.style.opacity = "1";
      } else {
        r.current.style.opacity = "0";
      }
      setBr(poz);
    } else {
      if (br === 0) {
        r1.current = setTimeout(()=>{r.current.style.opacity = "0"}, 1000);
      } else if (br === 1 && poz === 0) {
        r.current.style.opacity = "1";
      } else if (br === -1 && poz === 0) {
        r.current.style.opacity = "1";
      } else {
        r.current.style.opacity = "0";
      }
      setBr(poz);
      clearTimeout(r1.current);
    }
  }, [poz])

  React.useEffect(()=>{
    return ()=>{clearTimeout(r1.current)};
  }, [])

  function klasa(p) {
    if (p === 0) {
        return "el trenutni";
    } else if (p === -1) {
        return "el prethodni";
    } else {
        return "el sljedeci";
    }
  }
  
  return (
    <div ref={r} className={klasa(br)}>
      <div className="gornja-ploca">
        <img src={"slike/"+slika} className="slika" alt="slika zaposlenika"/>
        <div className="podaci">
          <p className="ime">{ime}</p>
          <p className="posao">{zanimanje}</p>
        </div>
      </div>
      <div className="donja-ploca">
        <p className="p-el">{tekst}</p>
      </div>
    </div>
  )
}

export function Testimonial() {
    const [br, setBr] = React.useState(0);
    const [sw, setSw] = React.useState(true);
    const [pod, setPod] = React.useState([]);
    const { loadSw, lang } = React.useContext(Kontekst);
    //const [sw1, setSw1] = React.useState(true);
  
    const r = React.useRef();
    const r1 = React.useRef();
  
    React.useState(()=>{
      r1.current = setInterval(skrolaj, intervalTime);
  
      return ()=>{clearInterval(r1.current)};
    }, []);

    React.useEffect(()=>{
      if (lang === "hr") {
        setPod(podaci);
      } else {
        setPod(podaci1);
      }
    }, [lang]);
  
    React.useEffect(()=>{
      console.log("Novi broje je " + br + "  -  " + Math.random());
  
    }, [br]);
  
  
  
    function skrolaj() {
      if (sw) {
        setBr((prev)=>{return (prev+brSlika+1)%brSlika});
        stopScroll();
      }
    }
  
    function stopScroll() {
      clearTimeout(r.current);
      setSw(false);
      r.current = setTimeout(()=>{setSw(true)}, 1000);
    }
  
    return (
      <>
      <div className="testimonial hover-device-block"  onMouseEnter={()=>{clearInterval(r1.current)}} onMouseLeave={()=>{r1.current = setInterval(skrolaj, intervalTime)}}>
        <div className="gumb lijevi" onClick={()=>{if (sw) {setBr((prev)=>{return (prev+brSlika+1)%brSlika}); stopScroll()}}}>
          <FcPrevious className="ikona"></FcPrevious>
        </div>
        <div className="gumb desni" onClick={()=>{if (sw) {setBr((prev)=>{return (prev+brSlika-1)%brSlika}); stopScroll()}}}>
          <FcNext className="ikona"></FcNext>
        </div>
        {pod.map((el, index)=>{
          let kod = 1;
          if (index === br)  kod = 0;
          if ((index+1)%brSlika === br) kod = -1; 
          return <Element poz={kod} key={index} slika={el[0]} ime={el[1]} zanimanje={el[2]} tekst={el[3]}/>})}
      </div>    
      <div className="testimonial nehover-device-block" >
        <div className="gumb lijevi" onClick={()=>{if (sw) {setBr((prev)=>{return (prev+brSlika+1)%brSlika}); stopScroll()}}}>
          <FcPrevious className="ikona"></FcPrevious>
        </div>
        <div className="gumb desni" onClick={()=>{if (sw) {setBr((prev)=>{return (prev+brSlika-1)%brSlika}); stopScroll()}}}>
          <FcNext className="ikona"></FcNext>
        </div>
        {pod.map((el, index)=>{
          let kod = 1;
          if (index === br)  kod = 0;
          if ((index+1)%brSlika === br) kod = -1; 
          return <Element poz={kod} key={index} slika={el[0]} ime={el[1]} zanimanje={el[2]} tekst={el[3]}/>})}
      </div> 
      </>
    )
  }
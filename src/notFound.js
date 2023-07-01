import React from "react";
import ReactDOM from 'react-dom/client';
import {
    Link
} from "react-router-dom";
import { ADRESA, Kontekst} from "./index.js";
import "./notFound.scss";

export function NotFound() {
  return (
    <div className="not-found">
      <p className="p-el1">Ooops...</p>
      <p className="p-el2">It seems you left our site. Nobody wants to do that.</p>
      <p className="p-el3">Did you really mean it?</p>
      <Link className="link" to={ADRESA+"/"}>No, we did not think so. Welcome back!</Link>
    </div>
  )
}

export function Loading({sw=false}) {
  const [br, setBr] = React.useState(0);

  const r = React.useRef();
  const r1 = React.useRef();
  const r2 = React.useRef();
  const r3 = React.useRef();
  const r4 = React.useRef();
  const r5 = React.useRef();

  const p = React.useRef();

  React.useEffect(()=>{
    r.current = setInterval(()=>{setBr((prev)=>{return (prev+1)%5})}, 600);

    return ()=>{clearInterval(r.current);};
  }, []);

  React.useEffect(()=>{
    if (sw) {
        p.current.style.display = "flex";
    } else {
        p.current.style.display = "none";
    }
  }, [sw]);

  React.useEffect(()=>{
    let defaul = "#999";
    let boja = "black";

    r1.current.style.backgroundColor = defaul;
    r2.current.style.backgroundColor = defaul;
    r3.current.style.backgroundColor = defaul;
    r4.current.style.backgroundColor = defaul;
    r5.current.style.backgroundColor = defaul;

    switch (br) {
      case 0:
        r1.current.style.backgroundColor = boja;
        break;
      case 1:
        r2.current.style.backgroundColor = boja;
        break;
      case 2:
        r3.current.style.backgroundColor = boja;
        break;
      case 3: 
        r4.current.style.backgroundColor = boja;
        break;
      case 4:
        r5.current.style.backgroundColor = boja;
    }
  }, [br]);

  return (
    <div ref={p} className="loading">
      <p className="p-el">Loading
        <span className="p-span">
          <div ref={r1} className="el el1"></div>
          <div ref={r2} className="el el2"></div>
          <div ref={r3} className="el el3"></div>
          <div ref={r4} className="el el4"></div>
          <div ref={r5} className="el el5"></div>
        </span>
      </p>  
    </div>
  )
}
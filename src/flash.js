import React from 'react';
import ReactDOM from 'react-dom/client';
import './flash.scss';

export function Flash({id=null, setFlashPoruke=()=>{return true}, poruka="nesto", 
    tip="success", kod1=null, kod2=null}) {
    const [tip1, setTip1] = React.useState("invisible");
    const [poruka1, setPoruka1] = React.useState("-");
  
    React.useEffect(()=>{
      if (kod1 !== null && kod1 !== kod2) {
        setTip1("invisible");
      } else if (tip === "success") {
        setTip1("success");
        setPoruka1(poruka);
      } else if (tip === "danger") {
        setTip1("danger");
        setPoruka1(poruka);
      } else {
        setTip1("danger");
        setPoruka1("ERROR in code! Krivi tip.");
      }
  
      setTimeout(()=>{
        setFlashPoruke((prev)=>{return prev.filter((el)=>{if (el.id === id) return false; return true;})})
      }, 7500);
  
    }, [tip, poruka, kod1, kod2]);
  
    function klik() {
        setFlashPoruke((prev)=>{return prev.filter((el)=>{if (el.id === id) return false; return true;})})
    }
  
    return (
      <div className={"alert alert-"+tip1}>
        <p>{poruka1}</p>
        <div className="alert-close" onClick={klik}>
            <div className="alert-close-el1">
                <div className="alert-close-el2"></div>
                <div className="alert-close-el3"></div>
            </div>
        </div>
      </div>
    )
  }

  export function Spinner({kut=90}) {
    const [rez, setRez] = React.useState("");
  
    React.useEffect(()=>{
  
      let s = Math.pow(2, 0.5) * Math.sin(3.14159/180*kut/2);
      let c = Math.pow(2, 0.5) * Math.cos(3.14159/180*kut/2)
      let fak = 1.03;
      setRez("polygon(" + 50*fak*(1-s) + "% " + 50*fak*(1-c) + "%, " + "50% 50%, " + 50*fak*(1+s) + "% " + 50*fak*(1-c) + "%)");
  
    }, [kut]);
  
    return (
      <div className="spinner">
        <div style={{"clipPath":rez}} className="spinner-el">
        </div>
        <div className="spinner-el1"></div>
      </div>
    )
  }

import React from 'react';
import ReactDOM from 'react-dom/client';
import './modalSlika.scss';

export function ModalSlika({path="", model="", setSwModal=()=>{}}) {
    const [sw, setSw] = React.useState(false);
    const p = React.useRef();
    
    React.useEffect(()=>{
      console.log(sw);
  
      if (sw) {
        p.current.style.display = "flex";
        setSwModal(true);
        //setToggle(false);
      } else {
        p.current.style.display = "none";
        setSwModal(false);
        //setToggle(true);
      }
    }, [sw]);
    return (
      <>
        <div className="img-cont">
          <img alt={"slika voznog parka - " + model} src={path} className="img" onClick={()=>{setSw(true)}}/>
          <div className="el" onClick={()=>{setSw(true)}}>
            <p className="el-p">{model}</p>
          </div>
        </div>
        <div ref={p} className="plast-auto">
          <div className="modal-auto">
            <img alt={"slika voznog parka -" + model} src={path} className="img1"/>
            <div className="krizic-auto" onClick={()=>{setSw(false)}}>
              <div className="el1a"></div>
              <div className="el2a"></div>
            </div>
            <div className="model">
              <p className="natpis">{model}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
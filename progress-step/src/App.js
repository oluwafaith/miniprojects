import { useState, useRef, } from "react";
import { links } from "./data";

function App() {
  const ref = useRef(null);
  const [btn, setActiveBtn] = useState({
    activeObject: 1,
    links,
  });

  const total = btn.links.length
  let active =  btn.activeObject

  function toggleActiveStyles(id) {
    if (btn.activeObject === id) {
      return "active";
    } else {
      return "";
    }
  }

  function toggleActive(id) {
    setActiveBtn({ ...btn, activeObject: id });
  }

  function handlePrev(e){
   active--
  
   if(active < 1){
    active = 1
  }
  if (e.currentTarget.classList.contains('progress')) {
    console.log('Element contains class');
  }
  update()
  }

  function handleNext(e){
    active++
   
    if(active > total){
      active = total
    }
    if (e.currentTarget.classList.contains('circle')) {
      console.log('Element contains id');
    }
    update()
  }

  function update(e){
    console.log(e);
    btn.links.forEach((item, index)=>{

      if(index < active) {
        item.active = true
    } else {
      item.active = false
    }
    })

    
  }

  return (
    <div className="container" >
       <div ref={ref} className="progress-container">
       <div className="progress" id="progress"></div>
      {
        btn.links.map((item,index )=>{
         return(       

          <div className="circle active">{item.name}</div>     
         )
        })
      }
      </div>

    <button className="btn" id="prev" disabled onClick={handlePrev}>Prev</button>
    <button className="btn" id="next" onClick={handleNext}>Next</button>
  </div>
  );
}

export default App;

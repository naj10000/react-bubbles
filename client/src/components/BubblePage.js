import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import   axiosWithAuth   from "./axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then( res => {
      console.log('the data',res.data)
      setColorList(res.data)
    })

    .catch(err => console.log(err))
  },[])

  return (
    <div>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

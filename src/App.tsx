
import "./App.css";

import { useState } from "react";
import Postcode from "react-daum-postcode";

function App() {
  const [isPostOpen, setIsPostOpen] = useState(false); 

  const handleModal = () => {
    setIsPostOpen(true);
  }

  const handleAddress = (data) => {
    document.getElementById('input').value = data.address;
    document.getElementById('post_code').value = data.zonecode; // 우편번호
    setIsPostOpen(false);
  }

  return (
    <>
      <input id="post_code" type="text" disabled/>   
      <input id="input" type="text" disabled/>
      <button type="button" onClick={handleModal}>검색</button>
      {isPostOpen && (
      <div className="card">
        <Postcode onComplete={handleAddress}/>
      </div>
      )}
    </>
  )
}

export default App

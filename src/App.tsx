
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  // 바텀시트 켜기
  const handleSheet = () => {
    setSheetOpen(true);
  }

  useEffect(() => {
    if (isSheetOpen) {
      document.querySelector('.bottom_sheet').classList.remove('anim_down');
      document.querySelector('.bottom_sheet').classList.add('anim_up');
    }
  }, [isSheetOpen]);

  // 바텀시트 끄기
  const handleSheetOff = () => {
    document.querySelector('.bottom_sheet').classList.remove('anim_up');
    document.querySelector('.bottom_sheet').classList.add('anim_down');
    setTimeout(()=> {
      setSheetOpen(false);
    },[500])
  }

  return (
    <>
      <button onClick={handleSheet}>바텀시트</button>
      {isSheetOpen && (
        <div>
          <div id="bottom_sheet_bg" onClick={handleSheetOff}></div>
          <div className="bottom_sheet">
            <button className="close_btn" onClick={handleSheetOff}>X</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App

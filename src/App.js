import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

function App() {
  const [page, setPage] = useState(0);
  const componentList = [
    <Step1 
      page={page}
      setPage={setPage}
    />,
    <Step2 
      page={page}
      setPage={setPage}
    />,
    <Step3 
      page={page}
      setPage={setPage}
    />,
    <Step4 
      page={page}
      setPage={setPage}
    />
  ]
  return (
    <>  
      <div>{componentList[page]}</div>
    </>
  );
}

export default App;
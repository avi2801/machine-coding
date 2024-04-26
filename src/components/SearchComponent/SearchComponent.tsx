import React,{useState} from "react";
import styles from "./SearchComponent.module.css";
import { debounce, fetchApiData } from "./searchService";



const SearchComponent = () => {
    const [counter,setCounter] = useState<number>(0);
    const [inputValue,setInputValue] = useState<string>('');

//debounce
  const handleOnChange = async (event:any) => {
    const value =event?.target.value
    console.log('!@# value',value)
    const getData = await fetchApiData(value);
    console.log('!@# get', getData)
    
  };

  const deBounce = debounce(handleOnChange,1000)
  return (
    <div className={styles.mainContainer}>
      <h2>Enter the name of Pokemon below</h2>
      <h4> See the console for the results</h4>
      <input
        type="text"
        placeholder="Enter the name"
        className={styles.inputClass}
        onChange={(e)=>deBounce(e)}
      />
    </div>
  );
};

export default SearchComponent;

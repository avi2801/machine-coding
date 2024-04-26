export const fetchApiData = async (value:string) =>{
    if(value){
        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const pokenmonData = await response.json();
        return pokenmonData
    }
    
}

export const debounce = (callBack: Function, d: number) => {
    let timer: any;
    return function(...args: any) {
    
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        callBack(...args);
      }, d);
    };
  };
  

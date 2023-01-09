import { createContext, useContext} from "react";
const END_POINT = "http://localhost:4000/pic/create";
// const END_POINT_ALL = "http://localhost:4000/pic/all";

const ContextControllers = createContext();
const ContextsetTodoList = createContext()


export function UseContextControllers() {
    return useContext(ContextControllers);
}

export function UseContextSetTodoList() {
    return useContext(ContextsetTodoList);
}

const Context = ({children}) => {

    // const getAllPic = async () =>{

    //     try {
    //       const res =  await fetch(END_POINT_ALL, {
    //         header: {'content-type': 'appliction/json'}
    //     });
    //       const data = await res.json();
    //       return data;
    //     } catch (error) {
            
    //     }
        
    // }


    const createPic = async (Values) => {
    
        try {
            const res = await fetch(END_POINT, {method: 'POST', headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify(Values),
    });
    const data = await res.json();
    console.log(data);
        } catch (error) {
            
        }
    }





  return (
<ContextControllers.Provider value={{createPic}}>

{children}

</ContextControllers.Provider>
  )
}

export default Context
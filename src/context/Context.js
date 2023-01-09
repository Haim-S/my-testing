import { createContext, useContext} from "react";
const END_POINT_CREATE = "http://localhost:4000/pic/create";
const END_POINT_DEL = "http://localhost:4000/pic/del";


const ContextControllers = createContext();
const ContextsetTodoList = createContext()


export function UseContextControllers() {
    return useContext(ContextControllers);
}

export function UseContextSetTodoList() {
    return useContext(ContextsetTodoList);
}

const Context = ({children}) => {




    const createPic = async (Values) => {
    
        try {
            const res = await fetch(END_POINT_CREATE, {method: 'POST', headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify(Values),
    });
    const data = await res.json();
    console.log(data);
        } catch (error) {
            
        }
    }

const deleteOne = async (id)=> {

  try {
   const res = fetch(END_POINT_DEL + `/${id}`, {
      method: "DELETE",
  })
  const data = await res.json();
  console.log(data);
  return data;
  } catch (error) {
    
  }
 
}



  return (
<ContextControllers.Provider value={{createPic, deleteOne}}>

{children}

</ContextControllers.Provider>
  )
}

export default Context
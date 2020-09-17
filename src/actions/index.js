import axios from "axios";
const apiUrl = "http://localhost:4000";
  
 
  export const commonApi = (endPoint,data,method, Type = null) => async dispatch =>
  {
     // Api calling
     let url = `${apiUrl}/${endPoint}`
     return new Promise((resolve, reject) => {
       axios({ method, url, data })
           .then(response => {
             console.log(response)
              if( response.status === 200)
              {
                 if(Type !== null)
                 {
                   let payload = {data:response.data};
                   dispatch({ type: Type, payload });
                 }
              }
              resolve(response)
            })
           .catch((error) => {
             console.log("error is ", error);
             reject(error);
         });
       })
     
   }
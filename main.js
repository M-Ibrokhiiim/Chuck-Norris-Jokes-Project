async function callingToApi(){
  try{
    const response=await fetch('https://api.chucknorris.io/jokes/random')
    const data=await response.json()

    const appealToApi=document.getElementById('joke-section-p')
    appealToApi.innerText=data.value
     
   }
    catch(error){
        error="404 Not Found"
         alert(error)
        
    }
    
}


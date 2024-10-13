import { useState } from "react"
export default function Passwordgenblock(){
    const [password, setPassword] = useState()
    const [valuestring, setValuestring] = useState(0)
    function passwordGeneratorFunction() {
        const newPass = randomStringGen(valuestring); 
        setPassword(newPass); 
      }
    function handlevaluechange(event){
        setValuestring(Number(event.target.value))
    }
    
      function randomStringGen(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-=+[]/.,~`";
        let password = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          password += chars[randomIndex];
        }
        return password; 
      }return(
        <>
        <div className="passWrapper">
          <section id="textPortion">
              <p>Press the respective buttons below to generate a new password or to clear the password</p> 
              <p id="genPassString">Generated Password: {password}</p>
          </section>
          <section id="logicPortion">
              <input 
              type="text" //Changed from number to text to remove the up/down scrolls for a better design
              onChange={handlevaluechange} 
              name="Length" id="passwordLengthInput" 
              value={valuestring}
              />
            <div className="buttonWrapperLogic">
              <button type="button" onClick={passwordGeneratorFunction}>Generate Password</button>
              <button type="button"onClick={()=> setPassword("")}>Clear Password</button>
            </div>
          </section>
        </div>
        </>
    )
}
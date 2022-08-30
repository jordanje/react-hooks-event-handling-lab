// Code Keypad Component Here

function Keypad (){
    function passwordChange(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={passwordChange}/>
        </div>
    )
}

export default Keypad;
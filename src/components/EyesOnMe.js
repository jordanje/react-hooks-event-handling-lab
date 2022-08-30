// Code EyesOnMe Component Here

function EyesOnMe(){
    function focusButton(event){
        console.log("Good!")
    }

    function blurButton(event){
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={focusButton} onBlur={blurButton}>Eyes on me</button>
        </div>
    )
}


export default EyesOnMe
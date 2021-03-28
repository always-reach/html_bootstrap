let dom =document.querySelector("#root")
let title ="React page"
let message="メッセージを表示"
var counter=0
let in_val=""
/**
setInterval(()=>{
    counter++
    let ele=(
        <div>
            <h4>{title}</h4>
            <h6>{message}</h6>
            <h5 className="alert alert-primary">count:{counter}</h5>
        </div>
    )
    ReactDOM.render(ele,dom)
},1000)**/


let doChange=(event)=>{
    in_val=event.target.value
    message=in_val+'さん！'
}

let doAction =(event)=>{
    counter++
    let el=(
        <div>
        <h4>{title}</h4>
        <h6>{message}</h6>
        <div className="alert alert-primary">
            <div className="form-group">
                <label>Input:</label>
                <input type="text" className="form-control" id="input" onChange={doChange}></input>
            </div>
            <button onClick={doAction} className="btn btn-primary">Click</button>
        </div>
        </div>
    )
    ReactDOM.render(el,dom)
}
doAction()
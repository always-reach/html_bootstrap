let dom=document.querySelector('#root')
let message='メッセージが表示されます'

function Welcome(props){
    return (
        <div className="alert alert-primary">
            <Calc classes={props.classes} number={props.number}/>
        </div>
    )
}

function Calc(props){
    let total=0
    for(let i=0;i<=props.number;i++){
        total+=1
    }
    return(<p className={props.classes}> 1から{props.number}までの合計は「{total}」です。</p>)
}


let el=(
    <div>
        <h5 className="mb-4">{message}</h5>
        <Welcome number="10" classes="h3"/>
        <Welcome number="100" classes="h5"/>
        <Calc number="50" classes="h4"/>
        <Calc number="500" classes="h6"/>
    </div>
)

ReactDOM.render(el,dom)
let dom=document.querySelector('#root')
let message="React component page"

class Rect extends React.Component{
    x=0
    y=9
    width=0
    height=0
    color="white"
    style={}
    constructor(props){
        super(props)
        this.x=props.x
        this.y=props.y
        this.width=props.w
        this.height=props.h
        this.color=props.c
        this.style={
            backgroundColor:this.color,
            position:"absolute",
            left:this.x+"px",
            top:this.y+"px",
            width:this.width+"px",
            height:this.height+"px"
        }
    }

    render(){
        return <div style={this.style}></div>
    }
}

let el=(
    <div>
        <h5>{message}</h5>
        <div>
            <Rect x="200" y="200" w="200" h="200" c="cyan"/>
            <Rect x="300" y="300" w="200" h="200" c="magenta"/>
        </div>
    </div>
)

ReactDOM.render(el,dom)
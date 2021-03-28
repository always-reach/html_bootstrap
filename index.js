let dom=document.querySelector("#root")
let title="React Page"
let message="メッセージを表示"
let data={url:'http://google.com',
        title:'Google',
        caption:"Googleの検索サイトです"}

let el=(
    <div>
    <h4>{title}</h4>
    <h6>{message}</h6>
    {(()=>
        <div className='card mt-4'>
          <div className='card-header'>
            {data.title}
          </div>
          <div className='card-body'>
            {data.caption}
          </div>
          <div className='card-footer'>
            <a href={data.url}>Googleのリンクです</a>
          </div>
        </div>
      )()}
    </div>
  )
ReactDOM.render(el,dom)
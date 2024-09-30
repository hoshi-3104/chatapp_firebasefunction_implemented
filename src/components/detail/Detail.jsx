import "./detail.css"
const Detail = () => {
    return (
      <div className='detail'>
        <div className="user">
          <img src="./avatar.png" alt="" />
          <h2>Jane Doe</h2>
          <p>どうもこんにちは</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy % help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="https://www.hiroshima-cu.ac.jp/img/ph/uid000211_201608171537002fa58172.jpg" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="" className="icon"/>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button>Block User</button>
        </div>
      </div>
    )
  }
  
  export default Detail
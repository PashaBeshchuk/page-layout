import React, {useState} from 'react';
import './App.css';
import './Style.css'
import './Media.css'
import logo from './images/logo.jpg'
import star from './images/Star.jpg'
import shape from './images/Shape.jpg'
import vectorOne from './images/Vector (1).jpg'
import vector from './images/Vector.jpg'

function App() {
  const [ showNeuralgia, setShowNeuralgia ] = useState(false)
  const [ showMassage, setShowMassage ] = useState(false)
  const [ showRheumatology, setShowRheumatology ] = useState(true)
  const [ showContent, setShowContent ] = useState(true)
  const [ showSmallMenu, setShowSmallMenu ] = useState(false)
  const show = (e) =>{
    switch(e.target.className) {
      case "neuralgia":
        setShowNeuralgia(true)
        setShowMassage(false)
        setShowRheumatology(false)
        break
      case "massage":
        setShowMassage(true)
        setShowNeuralgia(false)
        setShowRheumatology(false)
        break
      case "rheumatology":
        setShowMassage(false)
        setShowNeuralgia(false)
        setShowRheumatology(true)
        break
      case "show-menu":
        setShowSmallMenu(!showSmallMenu)
          break
      case "small-menu show-menu":
        setShowSmallMenu(!showSmallMenu)
          break
    }
  }
 
  return (
    <div className="App">
        <div className="header">
          <div className="body__nav">
            <nav>
              <div className="logo">
                <img src={logo}/>
              </div>
              <div className="small-menu show-menu" onClick={show}>
                <span className="show-menu"></span>
                <span className="show-menu"></span>
                <span className="show-menu"></span>
                {showSmallMenu &&
                  <div className="small-menu__contant">
                    <ul>
                      <li>ПЕРЕВАГИ</li>
                      <li>ЦІНИ</li>
                      <li>ЛІКУВАННЯ</li>
                      <li>КОНТАКТИ</li>
                    </ul>
                  </div>
                }
              </div>
              
              <div className="menu">
                <ul>
                  <li>ПЕРЕВАГИ</li>
                  <li>ЦІНИ</li>
                  <li>ЛІКУВАННЯ</li>
                  <li>КОНТАКТИ</li>
                </ul>
              </div>
              
              <div><button>ЗАПИСАТИСЬ НА ПРИЙОМ</button></div>
            </nav>
          </div>

          <div className="header__contant">
            <h1>ПОВНИЙ КОМПЛЕКС МЕДИЧНИХ ПОСЛУГ</h1>
            <h2>Європейські стандарти медичної допомоги</h2>
            <button>ПРО КЛІНІКУ</button>
          </div>
        </div>

        {/* CONTACTS */}

        <div className="contacts">
          <div className="contacts__container">
            <div className="address">м. Київ, вул. Еленівська, 8</div>
            <hr/>
            <div>
              <ul>
                <li>(095) 222 22 22</li>
                <li>(068) 222 22 22</li>
                <li>(063) 222 22 22</li>
              </ul>
            </div>
            <hr/>
            <div className="email">info@clinic.com </div>
          </div>
        </div>

        {/* SERVICES */}

        <div className="services">
          <h2>КОМПЛЕКСНИЙ ПІДХІД ДО ВАШОГО ЗДОРОВ'Я</h2>
          <h3>Ключові напрамки</h3>
          <div className="box-star">
            <hr/><img src={star}/><hr/>
          </div>
         <div className="services__list">
            <div onClick={show} className="neuralgia">
              <img src={shape} className="neuralgia"/>
              <p className="neuralgia">НЕВРОЛГИЯ</p>
            </div>
            <hr/>
            <div onClick={show} className="massage">
              <img src={vector} className="massage"/>
              <p className="massage">МАССАЖ</p>
            </div>
            <hr/>
            <div onClick={show} className="rheumatology">
                <img src={vectorOne} className="rheumatology"/>
                <p className="rheumatology">РЕВМАТОЛОГИЯ</p>
            </div>
         </div>
        </div>

        {/* CONTENT */}
        { showContent &&
          <div className="content">
            <div className="content__box">
              <div className="text">
                {showNeuralgia && <h1>НЕВРОЛГИЯ</h1>}
                {showMassage && <h1>МАССАЖ</h1>}
                {showRheumatology && <h1>РЕВМАТОЛОГИЯ</h1>}
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum. 
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat.
                </p>
                <button>Деталі</button>
              </div>
              {showNeuralgia && <div className="image"></div> }
              {showMassage && <div className="image-mass"></div> }
              {showRheumatology && <div className="image-rheum"></div> }
            </div>  
          </div>
        }
    </div>
  );
}

export default App;

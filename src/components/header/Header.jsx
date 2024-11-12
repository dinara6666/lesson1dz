import React, { useState } from 'react';
import './header.css';

function Header() {
    
    const [cartCount, setCartCount] = useState(0);

    
    const addToCart = () => {
        setCartCount(cartCount + 1); 
    };

    return (
        <header className="container">
            <div className="left">
               
                <div className="logo"></div>

                <div className="img">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFk7WXfMr2c7ZIKabg_AHBtAksIpnjXL33ag&s"
                        alt="Logo"
                    />
                </div>

                <a href="/contact">Завтраки</a>
                <a href="/contact">Пицца</a>
                <a href="/contact">Комбо</a>
                <a href="/contact">Закуски</a>
                <a href="/contact">Десерты</a>
                <a href="/contact">Кофе</a>
                <a href="/contact">Напитки</a>
                <a href="/contact">Соусы</a>
                <a href="/contact">Другие товары</a>
                <a href="/contact">Акции</a>
            </div>

            <div className="right">
               
                <button className="btn log-in">
                    Корзина ({cartCount})
                </button>
            </div>
        </header>
    );
}

export default Header;
































// import React from 'react';
// import './header.css';

// function Header() {


//     return (
//         <header className="container">
//             <div className="left">
               
//                 <div className="logo">
               
//                 </div>


//                  <div className="img">
//                 <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFk7WXfMr2c7ZIKabg_AHBtAksIpnjXL33ag&s" alt="" />
//                 </div>

//                 <a href="/contact">Завтраки</a>
//                 <a href="/contact">Пицца</a>
//                 <a href="/contact">Комбо</a>
//                 <a href="/contact">Закуски</a>
//                 <a href="/contact">Десерты</a>
//                 <a href="/contact">Кофе</a>
//                 <a href="/contact">Напитки</a>
//                 <a href="/contact">Соусы</a>
//                 <a href="/contact">Другие товары</a>
//                 <a href="/contact">Акции</a>
//             </div>

//             <div className="right">
//                 <button className="btn log-in">Корзина</button>
//             </div>
//         </header>
//     );
// }

// export default Header;






























// import './header.css'


// //component Header

// function Header  (){
// return (
//     <header className="container">
//         <div className="left">
            
//             <div>C</div>
//             <h3>Capi <span>to</span></h3>
//             <a href="">Home</a>
//             <a href="">Menu</a>
//      </div>

//         <div className="right">
//             <button className='btn log-in'>log in</button>

//         </div>

  
//       </header>
//   )

// }

// export default Header;

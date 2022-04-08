import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Thêm sản phẩm',
        to: '/product/add',
        exact: false
    }
];

// const MenuLink = (label, to, activeOnlyWhenExact) => {
//     return (
//       <Routes>
//         <Route
//             path={to}
//             exact={activeOnlyWhenExact}
//             children={( match ) => {
//                 var active = match ? 'active' : '';
//                 return (
//                     <li className={active}>
//                         <Link to={to}>
//                             {label}
//                         </Link>
//                     </li>
//                 );
//             }}
//         />
//       </Routes>
        
//     );
// };

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                    {/* <li class="active">
                    <Link to='/'>Trang chủ</Link>
                    </li>
                    <li>
                    <Link to='/product-list'>DS Sản phẩm</Link>
                    </li>  
                    <li>
                    <Link to='/product/add'>Thêm sản phẩm</Link>
                    </li>
                    
                    <li>
                    <Link to='/product/:id/edit'>Sửa sản phẩm</Link>
                    </li> */}
                </ul>
            </div>
            
       
            
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <li>
                        <Link 
                        key={index}
                        to={menu.to}
                        exact={menu.exact}
                         >{menu.name}</Link>

                    </li>
                    
                );
            });
        }
        return result;
    }

}

export default Menu;

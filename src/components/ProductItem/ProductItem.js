import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
      var {product, index}=this.props;
      var statusName=product.status ? "Còn hàng" : "Hết hàng";
      var statusClass=product.status ? "warning" : "default";
        return (
          // product, index là các prop truyền từ trang ProductLisstPage.js
                 <tr>
                   <td>{index+1}</td>
                   <td>{product.id}</td>
                   <td>{product.name}</td>
                   <td>{product.price}</td>
                   <td> 
                   <span className={`label label-${statusClass}`}>{statusName}</span>
                    </td>
                   <td> 
                   
                   <button type="button" className="btn btn btn-success mr-10">Sửa</button>
                   
                   <button type="button" className="btn btn-sm btn-warning">Xóa</button>
                   
                   
                   </td>
                 </tr>
          
        );
    }
}

export default ProductItem;
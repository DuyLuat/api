import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
           
                 <tr>
                   <td>1</td>
                   <td>1</td>
                   <td>SamSung Galaxy S11</td>
                   <td>2500</td>
                   <td> 
                   <span class="label label-warning">Còn hàng</span>
                    </td>
                   <td> 
                   
                   <button type="button" class="btn btn btn-success mr-10">Sửa</button>
                   
                   <button type="button" class="btn btn-sm btn-warning">Xóa</button>
                   
                   
                   </td>
                 </tr>
          
        );
    }
}

export default ProductItem;
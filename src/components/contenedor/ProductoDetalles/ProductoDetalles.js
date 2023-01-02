import './ProductoDetalles.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = ({item})=>{
    return(
        <div class="container">
        
        <div class="card float-left">
          <div class="row ">
      
            <div class="col-sm-7">
              <div class="card-block">
            
                <p>{item.title}</p>
                <p>Change around the content for awsomenes</p>
              <Button > Detalle</Button>
              </div>
            </div>
      
            <div class="col-sm-5">
            <img className="d-block" src="" alt="" />
            </div>
          </div>
        </div>
      
       
        </div>
       
     
    )
}
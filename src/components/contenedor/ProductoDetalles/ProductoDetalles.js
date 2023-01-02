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
            
                <p>Wetgple text to build your own card.</p>
                <p>Change around the content for awsomenes</p>
                <a href="#" class="btn btn-primary btn-sm">Read More</a>
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
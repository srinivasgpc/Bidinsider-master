import React, { Component } from 'react';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/style.scss';
import '../../assets/css/style.css';
import '../../assets/css/responsive.scss';
import DownloadsAll from './DownloadsAll';

class Downloads extends Component {
   

    componentDidMount() {
        let elementId = document.getElementById("navbar");
                elementId.classList.add("back-black");
    }
    componentWillUnmount(){
        let elementId = document.getElementById("navbar");
                elementId.classList.remove("back-black");
    }
  

    render() {
        return (
            <div className="col-md-12 pt-4 d-main" >
               <div className="container">
         
              <DownloadsAll />
            
               </div>
            </div>
        );
    }
}

export default Downloads;
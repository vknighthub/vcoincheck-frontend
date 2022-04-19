import { Component } from "react";
import Rte from "./Rte";

class Summernote extends Component {
   render() {
      return (
         <div className="h-80">
            <div className="row">
               <div className="col-xl-12 col-xxl-12">
                  <div className="card">
                     <div className="card-header">
                        <h4 className="card-title">{this.props.title}</h4>
                     </div>
                     <div className="card-body">
                        <div className="summernote">
                           <Rte disabled = {this.props.disabled} contents = {this.props.contents}/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Summernote;

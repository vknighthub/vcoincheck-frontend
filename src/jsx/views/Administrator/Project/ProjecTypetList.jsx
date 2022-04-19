import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Editable from './Editable';



const ProjecTypetList = () =>{
	
	const tableList = [
		{
			id:"1", name:'Dex',
		},
		{	
			id:"2", name:'Lending & borrowing',
		},
		{	
			id:"3", name:'Yeild farming',
		},
		{	
			id:"4", name:'Wallet',
		},
		{
			id:"5", name:'Payment',
		},
		{	
			id:"6", name:'Synthetic', 
		},
	]; 

	const [contents, setContents] = useState(tableList);
	// delete data  
    const handleDeleteClick = (contentId) => {
        const newContents = [...contents];    
        const index = contents.findIndex((content)=> content.id === contentId);
        newContents.splice(index, 1);
        setContents(newContents);
    }
	
	//Modal box
	const [addCard, setAddCard] = useState(false);
	//Add data 
    const [addFormData, setAddFormData ] = useState({
        name:'',
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.name === ""){
            error = true;
			errorMsg = 'Please fill  name';
		}
        if(!error){
            const newContent = {
                id: nanoid(),
                name: addFormData.name,
			};
            
            const newContents = [...contents, newContent];
            setContents(newContents);
            setAddCard(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.name  = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    };
	
	//Edit start 
	//const [editModal, setEditModal] = useState(false);	
	// Edit function editable page loop
    const [editContentId, setEditContentId] = useState(null);

    // Edit function button click to edit
    const handleEditClick = ( event, content) => {
        event.preventDefault();
        setEditContentId(content.id);
        const formValues = {
            name: content.name,
        }
        setEditFormData(formValues);
        //setEditModal(true);
    };

    // edit  data  
    const [editFormData, setEditFormData] = useState({
        name:'',
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContent = {
            id: editContentId,
            name: editFormData.name,
        }
        const newContents = [...contents];
        const index = contents.findIndex((content)=> content.id === editContentId);
        newContents[index] = editedContent;
        setContents(newContents);
        setEditContentId(null);
       // setEditModal(false);
    }
	//Cencel button to same data
    const handleCancelClick = () => {
        setEditContentId(null);    
    };
	
	return(
		<>
			<div className="col-12">
				<Modal className="modal fade"  show={addCard} onHide={setAddCard} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Add Contact</h4>
									<button type="button" className="btn-close" onClick={()=> setAddCard(false)} data-dismiss="modal"><span></span></button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="form-group mb-3">
												<label className="text-black font-w500">Name</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="name" required="required"
														onChange={handleAddFormChange}
														placeholder="name"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>   
									<button type="button" onClick={()=> setAddCard(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
								</div>
							</form>
							
						</div>
					</div>
				</Modal>
				<div className="card">
					<div className="card-body">
						<div className="w-100 table-responsive">
							<div id="example_wrapper" className="dataTables_wrapper">
								<form onSubmit={handleEditFormSubmit}>
									<table id="example" className="display w-100 dataTable">
										<thead>
											<tr>
												<th>Icon</th>
												<th>Name</th>
											</tr>
										</thead>
										<tbody>
											{contents.map((content)=>(
												<>
													{editContentId === content.id ? 
														( 
															<Editable editFormData={editFormData} 
																handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> 
																) : 
														( 
															<tr>
																<td><img className="rounded-circle" width="35" alt="" /></td>
																<td>{content.name}</td>
																<td>
																	<div className="d-flex">
																		<Link className="btn btn-primary shadow btn-xs sharp mr-2"
																			onClick={()=> setAddCard(true)}
																		>
																			<i className="fa fa-plus"></i>
																		</Link>
																		<Link  className="btn btn-secondary	shadow btn-xs sharp mr-2"
																			onClick={(event) => handleEditClick(event, content)}
																		>
																			<i className="fa fa-edit"></i>
																		</Link>
																		<Link  className="btn btn-danger shadow btn-xs sharp" 
																			onClick={()=>handleDeleteClick(content.id)}
																		> 
																			<i className="fa fa-trash"></i>
																		</Link>
																			
																	</div>												
																</td>			
															</tr>   
														)
													}
												</>    
											))}
										</tbody>
									</table>
								</form>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProjecTypetList;
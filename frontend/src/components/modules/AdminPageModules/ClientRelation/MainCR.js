import React,{Component} from 'react';
import axios from 'axios';



export default class MainCR extends Component{

    constructor(props){
        super(props);

        this.state={
            posts:[]
        };
    }

    componentDidMount(){
        this.retrieveDebtors();
    }

    retrieveDebtors(){
        axios.get("/postsd").then(res =>{
            if(res.data.success){
                this.setState({
                    posts:res.data.existingDebtor
                });
                console.log(this.state.posts);
            }
        });
    }

    filterData(posts,searchKey){
        const result = posts.filter((post)=>
        post.name.toLowerCase().includes(searchKey)||
        post.contact.includes(searchKey)||
        post._id.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})

    }

    handleSearchArea = (e)=>{
       const searchKey = e.currentTarget.value;

       axios.get("/postsd").then(res =>{
        if(res.data.success){
            this.filterData(res.data.existingDebtor, searchKey)
            
        }
    });

    } 

    onDelete = (id) =>{
        axios.delete(`/postd/delete/${id}`).then((res)=>{
            alert("Deleted Successfully");
            this.retrieveDebtors();
        })

    }

    render(){

        return(
            
            <div className="card" style={{backgroundColor: ' #D3D3D3',backgroundImage: ' #D3D3D3'}}>
                {/* <div className="col-lg-9 mt-2 mb-2"> */}
                {/* </div> */}
                <div className='row'>
                  <div className="col-lg-9 mt-2 mb-2"><br/>
                     &nbsp;&nbsp;
                        <button className="btn-grad4">
                                <a href="/preorders" style={{color:'white', textDecoration:'none'}}>View Pre-Orders</a>
                            </button>&nbsp;&nbsp;
                        <button className="btn-grad4">
                                <a href="/addDebt" style={{color:'white', textDecoration:'none'}}>Add New Debtor</a>
                            </button>&nbsp;&nbsp;
                  </div>
                </div>
                    <div className='row'>
             <div className="col-lg-9 mt-2 mb-2">
                <br/><h4 style={{color:'black', paddingLeft:"20px"}}>All Debtors</h4><br/>
                </div>
               <div className='col-lg-3 mt-2 mb-2'>
                        <input style={{borderColor: 'red'}}
                               className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}>
                        </input>
                    </div>
                </div>
                <table class="table"  style={{backgroundColor:'#D1CCCC'}} >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Guarantor</th>
                            <th scope="col">Credit Limit</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((posts,index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/postd/${posts._id}`} style={{ textDecoration: 'none' }}>
                                {posts._id}
                                </a>
                            </td>
                            <td>{posts.name}</td>
                            <td>{posts.contact}</td>
                            <td>{posts.address}</td>
                            <td>{posts.guarantor}</td>
                            <td>{posts.creditLimit}</td>
                            <td>
                                <button type="button"  className="btn-grad1" style={{width:"45px"}}>
                                    <a href={`/editDebt/${posts._id}`} style={{textDecoration:'none',color:"white"}}>
                                    <i className="fas fa-edit"></i></a>
                                    </button>
                                
                                <button onClick={()=>this.onDelete(posts._id)} type="button" className="btn-grad2" style={{width:"45px",color:'white'}} >

                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                    </table>
                    
                </div>
        )
    }

}
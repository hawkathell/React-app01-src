import {Component} from 'react';

class Contacts extends Component{
    constructor(props){
        super(props);
        this.state ={
            contacts:[
                {id:1,fullName:"suyog",mobile:"9822408841",mailId:"gmail"},
                {id:2,fullName:"Amol",mobile:"2",mailId:"gmail"},
                {id:3,fullName:"Vinay",mobile:"3",mailId:"gmail"},
                {id:4,fullName:"Vijay",mobile:"4",mailId:"gmail"}
            ]
        };
    }

    delBtnClicked  = id  => {
        this.setState({ contacts: this.state.contacts.filter( c => c.id!=id)});
    };

    render(){
        return(
            <section>
                <h3>Contact List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Contacts#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Mail ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map( c=> (
                                <tr key={c.id}>
                                    <td>{c.id}</td>  
                                    <td>{c.fullName}</td>    
                                    <td>{c.mobile}</td>    
                                    <td>{c.mailId}</td>   
                                    <td>
                                        <button type='button' onClick={ event => this.delBtnClicked(c.id)}>DELETE</button>
                                    </td>  
                               </tr>
                            )
                            )
                        }
                    </tbody>

                </table>
            </section>

       );
    }
}

export default Contacts;
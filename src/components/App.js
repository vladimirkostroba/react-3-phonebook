import React, {Component} from "react";
import { nanoid } from 'nanoid'

import Layout from "./Layout/Layout";
import SearchForm from "./SearchForm/SearchForm";
import PhoneList from "./PhoneList/PhoneList";

class App extends Component {
     state = {
        contacts:[],
     }


     handleAddContact = ({name,number}) => {

        const contact = {
            name:name,
            number:number,
            id:nanoid(),
        }

        this.setState(prevState => {
            return{
                contacts:[...prevState.contacts,contact]
            }
        })
     }


     render(){
        const {contacts} = this.state;
        return(
            <Layout>
              <SearchForm onAddContact={this.handleAddContact}/>
              <PhoneList contacts={contacts}/>
            </Layout>
        )
     }
        
     
}

export default App;
import React, {Component} from "react";
import { nanoid } from 'nanoid'

import Layout from "./Layout/Layout";
import SearchForm from "./SearchForm/SearchForm";
import PhoneList from "./PhoneList/PhoneList";
import Filter from "./Filter/Filter";

class App extends Component {
     state = {
        contacts:[],
        filter:'',
     }

     

     componentDidMount(){
        const persistedContacts = localStorage.getItem('contacts');
        
        if(persistedContacts){
            this.setState({
                contacts:JSON.parse(persistedContacts)
            })
        }
     }

     componentDidUpdate(prevProps,prevState){
        if(prevState.contacts !== this.state.contacts){
            localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
        }
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

    //  remove

    removeContact = contactId => {
        this.setState(prevState => {
          return {
            contacts:prevState.contacts.filter(({id}) => id !== contactId)
          }
          
        })
      }

    //  Filter

    handleChangeFilter = text => {
          this.setState({
            filter:text
          })
    }

    getWisibleContact = () => {
        const {contacts,filter} = this.state;

        return(contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase())
        ))
    }


     render(){
        const{filter} = this.state;
        const wisibleContact = this.getWisibleContact();
       

        return(
            <Layout>
              <SearchForm onAddContact={this.handleAddContact}/>
              {wisibleContact.length > 1 && <Filter onChangeFilter ={this.handleChangeFilter} value={filter}/>}
              <PhoneList contacts={wisibleContact}
              onRemove={this.removeContact}/>
            </Layout>
        )
     }
        
     
}

export default App;
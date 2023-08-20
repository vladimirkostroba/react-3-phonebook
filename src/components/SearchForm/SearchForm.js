import React,{Component} from "react";
import Layout from "../Layout/Layout";
import "./SearchForm.css"

class SearchForm extends Component {
    state = {
        name:'',
        number:'',
    }

    changeName = e => {
        this.setState({
            name:e.target.value
        })
    }

    changeNumber = e => {
        this.setState({
            number:e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.onAddContact(this.state)

        this.setState({
            name:'',number:''
        })
    }

    // handleChange = e => {
    //     const name = e.target.name;

    //     this.setState({
    //         [name]:e.target.value,
    //     })
    // }

    render(){
        const {name,number} = this.state;
        return(
            <Layout>
                <form className="SearchForm" onSubmit={this.onSubmit}>
                     <label className="label">
                        <input
                        type="text"
                        onChange={this.changeName}
                        name='name'
                        value={name}

                        />
                         Name
                     </label>

                     <br></br>

                     <label className="label">
                        <input
                        type="number"
                        onChange={this.changeNumber}
                        name='number'
                        value={number}

                        />
                         Number
                     </label>

                     <br></br>

                     <button type="submit">Submit</button>
                </form>
            </Layout>
        )
    }
}

export default SearchForm;
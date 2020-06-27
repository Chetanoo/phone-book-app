import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from "../../components/Input";
import { search } from '../../actions/search.actions'

class SearchForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            requestData: {
                firstName: '',
                secondName: '',
                phoneNumber: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { requestData } = this.state;

        this.setState({
            requestData: {
                ...requestData,
                [name]: value
            }
        });
    };

    handleSearch = () => {
        const { requestData } = this.state;

        this.props.search(requestData);
    };

    render() {
        const { searchResults } = this.props;

        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Input htmlFor="firstName" type="text" placeholder="First Name" onChange={this.handleChange}/>
                        </div>
                        <div className="col">
                            <Input htmlFor="secondName" type="text" placeholder="Second Name" onChange={this.handleChange}/>
                        </div>
                        <div className="col">
                            <Input htmlFor="phoneNumber" type="number" placeholder="Phone Number" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        Results:
                    </div>
                    <div className="row">
                        <ul>
                            {
                                searchResults.map(
                                    (item, index) => <li key={index}>{item.firstName}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.search.searchResults
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            search,
            changePage: () => push('/about-us')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)

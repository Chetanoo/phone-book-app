import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { search } from '../../actions/subscriber.actions'
import './Search.css'
import Loading from '../../components/Loading'
import Input from '../../components/Input'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      requestData: {
        firstName: '',
        secondName: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange = e => {
    const { name, value } = e.target
    const { requestData } = this.state

    this.setState({
      requestData: {
        ...requestData,
        [name]: value
      }
    })
  }

  handleSearch = () => {
    const { firstName, secondName } = this.state.requestData

    this.props.search({
      firstName: firstName.toLowerCase().trim(),
      secondName: secondName.toLowerCase().trim()
    })
  }

  render() {
    const { searchResults, loading } = this.props

    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col">
              <Input
                htmlFor="firstName"
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <Input
                htmlFor="secondName"
                type="text"
                placeholder="Second Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row mt-5">
            <button
              className="btn btn-primary search-btn"
              disabled={loading}
              onClick={this.handleSearch}>
              Search
            </button>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <div className="row justify-content-center mt-5">
              <ul className="list-group">
                {searchResults.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    First name: <strong>{item.firstName.toUpperCase()}</strong>
                    <br />
                    Second name: <strong>{item.secondName.toUpperCase()}</strong>
                    <br />
                    Phone number: <strong>{item.phoneNumber}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.subscriber.searchResults,
  loading: state.subscriber.loading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Search)

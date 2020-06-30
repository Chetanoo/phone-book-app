import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'
import { create } from '../../actions/subscriber.actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Loading from '../../components/Loading'

function CreateSubscriber(props) {
  const [newSubscriber, setNewSubscriber] = useState({
    firstName: '',
    secondName: '',
    phoneNumber: ''
  })
  const [submitted, setSubmitted] = useState(true)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const { firstName, secondName, phoneNumber } = newSubscriber

    setIsValid(!firstName || !secondName || !phoneNumber)
  }, [newSubscriber])

  const handleChange = e => {
    const { name, value } = e.target

    setNewSubscriber({
      ...newSubscriber,
      [name]: value
    })
  }

  const handleCreate = () => {
    const { firstName, secondName, phoneNumber } = newSubscriber

    setSubmitted(true)

    props.create({
      firstName: firstName.toLowerCase().trim(),
      secondName: secondName.toLowerCase().trim(),
      phoneNumber
    })
  }

  const { loading, created, error } = props

  return (
    <div className="container">
      <Input
        htmlFor="firstName"
        type="text"
        placeholder="First Name"
        valueData={newSubscriber.firstName}
        submitted={submitted}
        onChange={handleChange}
        required
      />
      <Input
        htmlFor="secondName"
        type="text"
        placeholder="Second Name"
        valueData={newSubscriber.secondName}
        submitted={submitted}
        onChange={handleChange}
        required
      />
      <Input
        htmlFor="phoneNumber"
        type="number"
        placeholder="Phone Number"
        valueData={newSubscriber.phoneNumber}
        submitted={submitted}
        onChange={handleChange}
        required
      />
      <button
        className="btn btn-primary search-btn mt-3"
        disabled={isValid}
        onClick={handleCreate}>
        Create
      </button>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row justify-content-center mt-5">
            <strong>{created && `Subscriber has been created`}</strong>
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  )
}

const mapStateToProps = state => ({
  createdSubscriber: state.subscriber.createdSubscriber,
  loading: state.subscriber.loading,
  created: state.subscriber.created,
  error: state.subscriber.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      create
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(CreateSubscriber)

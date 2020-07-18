import React, { useEffect } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { create } from '../../actions/subscriber.actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'react-notifications/lib/notifications.css'

function Notificator({ children, alertQueue }) {
  useEffect(() => {
    if (alertQueue.length > 0) {
      const notification = alertQueue.pop()

      if (notification.type === 'success') {
        NotificationManager.success(
          `Subscriber ${notification.message} has been created`,
          'Success!',
          3000
        )
      } else if (notification.type === 'error') {
        NotificationManager.error(notification.message, 'Error!', 3000)
      }
    }
  }, [alertQueue])

  return (
    <div>
      <NotificationContainer />
      {children}
    </div>
  )
}

const mapStateToProps = state => ({
  alertQueue: state.alert.alertQueue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      create
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Notificator)

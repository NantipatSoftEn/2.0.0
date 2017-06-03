import Countdown from 'react-countdown-now'
import React from 'react'

class CountdownContainer extends React.Component {
  state = {
    mounted: false
  }
  componentDidMount () {
    this.setState({ mounted: true })
  }
  render () {
    if (this.state.mounted) {
      return <Countdown date={'3 June 2017 10:00:00'} renderer={renderCountdown} />
    } else {
      return renderCountdown({
        days: '…',
        hours: '…',
        minutes: '…',
        seconds: '…',
        completed: false
      })
    }
  }
}

function renderCompleted () {
  return (
    <span>
      Enjoy the event!
      <style jsx>{`
        span {
          font-size: 36px;
          display: block;
        }
        @media (max-width: 399px) {
          span {
            font-size: 24px;
          }
        }
      `}</style>
    </span>
  )
}

function renderCountdown ({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return renderCompleted()
  } else {
    return (
      <div className='countdown'>
        <span>The event will begin in</span>
        <div>
          <p className='countdown-text'>
            {days}
            <small>Day</small>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {hours}
            <small>Hour</small>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {minutes}
            <small>Minute</small>
          </p>
          <p>:</p>
          <p className='countdown-text'>
            {seconds}
            <small>Second</small>
          </p>
        </div>
        <br />
        <style jsx>{`
          span {
            font-size: 26px;
            opacity: 0.3;
          }
          p {
            position: relative;
            font-size: 40px;
            font-weight: bold;
            display: inline-block;
            margin: 0 8px;
          }
          p.countdown-text {
            width: 40px;
          }
          p > small {
            position: absolute;
            right: 0;
            bottom: -12px;
            left: 0;
            display: block;
            font-size: 18px;
            text-align: center;
          }
          @media (max-width: 399px) {
            p {
              font-size: 28px;
              margin 0 4px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default CountdownContainer

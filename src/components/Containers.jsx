import React from 'react'

const Statistics = () => (
  <React.Fragment>
    <div style={{ marginRight: 10 }}>
      <div>0</div>
      <div>votes</div>
    </div>
    <div style={{ marginRight: 10 }}>
      <div>0</div>
      <div>answers</div>
    </div>
    <div style={{ marginRight: 10 }}>
      <div>2</div>
      <div>views</div>
    </div>
  </React.Fragment>
)

const Tags = () => (
  <React.Fragment>
    <div style={{ backgroundColor: 'grey', marginRight: 10, padding: 3, fontSize: 13 }}>
      html
    </div>
    <div style={{ backgroundColor: 'grey', marginRight: 10, padding: 3, fontSize: 13 }}>
      css
    </div>
    <div style={{ backgroundColor: 'grey', marginRight: 10, padding: 3, fontSize: 13 }}>
      google-chrome
    </div>
  </React.Fragment>
)

const Metadata = () => (
  <React.Fragment>
    <div style={{ fontSize: 13 }}>
      asked 18 mins ago
    </div>
    <div style={{ fontSize: 13 }}>
      weng tee
    </div>
    <div style={{ fontSize: 13 }}>
      139
    </div>
  </React.Fragment>
)

const QuestionTitle = () => (
  <div style={{ marginBottom: 5, textAlign: 'left' }}>
    search input field shrinks on user engagement on android
  </div>
)

export default class Containers extends React.Component {
  render() {
    return (
      <div style={{ width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <img src={require('../images/SO.jpg')} alt="" />
        </div>
        <div style={{ display: 'flex', border: '1px solid black', padding: 15 }}>
          <div style={{ display: 'flex' }}>
            <Statistics />
          </div>
          <div style={{ width: 530 }}>
            <QuestionTitle />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Tags />
              </div>
              <div style={{ display: 'flex' }}>
                <Metadata />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

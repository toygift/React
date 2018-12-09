import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MyComponent extends Component {
  state = {
    number : 0
  }//state값을 업데이트 할때는 언제나 .setState로만 해야함!
  static defaultProps = {
    name: '기본이름'
  }//props로 전달되는 값이 없을때 기본으로 들어감
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  }//props 검증 swift의 타입지정 같은것?
    render() {
        return (
            <div>
              <p>안녕하세요 제이름은 {this.props.name}입니다</p>
              <p>저는 {this.props.age}입니다</p>
              <p>저는 {this.state.number}입니다</p>
              <button onClick={()=> {
                this.setState({
                  number : this.state.number + 1 
                })
              }}>더하기</button>
            </div>
        );
    }
}

export default MyComponent;//다른파일에서 이 파일을 import할때 불러오도록 설정
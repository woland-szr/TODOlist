import React from 'react';
import Item from '../Item';
import Alert from '../Alert';
import Button from '../Button';
import './index.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: ['Дело №1', 'Дело №2', 'Дело №3'],
      checked: [false, false, false],
      changeTime: ['', '', ''],
      alert: '',
    }
  }
  
  changeAlert = (index) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timezone: 'UTC'
    };
  
    let now = new Date();
    now = now.toLocaleString("ru", options)

    const {checked} = this.state;
    const {changeTime} = this.state;

    checked[index] ? checked[index] = false : checked[index] = true;
    this.setState({checked: checked});
      
    changeTime[index] = now;
    this.setState({changeTime: changeTime});
    this.setState({alert: `Вы изменили задачу '${this.state.todoItems[index]}' ${now}`});
  }

  onClickBtn = () => {
    let doneItems = 0;
    this.state.checked.forEach((item) => {
      if(item === true) {doneItems++};
      })
    this.setState({alert: `Выполнено дел: ${doneItems}`});
  }

  render() {
    return (
      <div className='wrapper'>     
        <h2>Список дел:</h2>
        <ul>
          {this.state.todoItems.map((item, index) => {
            return (
              <Item
                index = {index}
                key = {item}
                changeTime = {this.state.changeTime[index]}
                changeAl = {this.changeAlert}
                itemName = {item}
              />
            );
          })
          }
        </ul>
        <div className='info'>
        <span>Инфо:&nbsp;</span>
          <Alert message = {this.state.alert} />
        </div>
          <Button onClickBtn = {this.onClickBtn} />
      </div>    
    )
  }
}

export default List;
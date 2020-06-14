import React from 'react';
import Item from '../Item';
import Alert from '../Alert';
import Button from '../Button';
import './index.css';

class List extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        items: [
          {id: 1, title: 'Дело №1', checked: false, changeTime: ''}, 
          {id: 2, title: 'Дело №2', checked: false, changeTime: ''},
          {id: 3, title: 'Дело №3', checked: false, changeTime: ''}
        ],
        alert: '',
      }

  }
  
  changeAlert = (id) => {
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

    const currentItem = this.state.items.find(tmp => tmp.id === id)
    
    const itemsArr = this.state.items.map(item => item.id === id ? {...item, checked: !currentItem.checked, changeTime: now} : item)
    
    this.setState({items: itemsArr})
    
    this.setState({alert: `Вы изменили задачу '${currentItem.title}' ${now}`});
  }

  onClickBtn = () => {
    const doneItems = this.state.items.filter(el => el.checked === true)
    this.setState({alert: `Выполнено дел: ${doneItems.length}`});
  }

  render() {
    return (
      <div className='wrapper'>     
        <h2>Список дел:</h2>
        <ul>
          {this.state.items.map((item) => {
            return (
              <Item
                id = {item.id}
                key = {item.id}
                changeTime = {item.changeTime}
                changeAl = {this.changeAlert}
                itemName = {item.title}
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
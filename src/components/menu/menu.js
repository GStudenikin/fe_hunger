import { render } from 'pug';
import React from 'react'
import ReactDOM from 'react-dom'

const types = ['soupe', 'pizza', 'pasta', 'bruschetta', 'desert', 'wine', 'beer'];
const ing = "Integer ullamcorper neque eu purus euismod"

class Menu extends React.Component {
    state = {
        items: types.map((n, i) => ({ text: n, id: i + 1 })),
        active: 0,
    }
  
    onClick = e => {
        this.setState({
            active: +e.target.dataset.index,
        });
    }
  
    render() {
        const { items, active } = this.state;
        var dishesActive = this.state.active;
        return (
            <React.Fragment>
                <div className="menu__list__control">
                    {items.map((n, i) => (
                        <div
                            key={n.id}
                            data-index={i}
                            className={i === active ? 'menu__list__control__item active' : 'menu__list__control__item'}
                            onClick={this.onClick}
                        >{n.text}</div>
                    ))}        
                </div>
                <Dishes active={dishesActive} />
            </React.Fragment>
      );
    }
}

function Dishes(props) {
    var dishes = []
    for(let i = 0; i < 21; i++) {
        let item = [types[props.active]+" "+i, Math.floor(Math.random() * 100)];
        dishes.push(item);
    }
    console.log(dishes);
    var renderDishes = dishes.map((elem, i) => (
        <div className='menu__list__dishes__item' key={elem[0]}>
            <div className='menu__list__dishes__item__title'>
                <div className='menu__list__dishes__item__title__name'>{types[props.active]} {i}</div>
                <div className="menu__list__dishes__item__title__decoration"></div>
                <div className="menu__list__dishes__item__title__cost">{elem[1]}</div>
            </div>
            <div className='menu__list__dishes__item__ing'>{ing}</div>
        </div>
    ));
    
    return(<div className="menu__list__dishes">{renderDishes}</div>);
}
  
ReactDOM.render(
    <Menu /> ,
    document.getElementById('menu')
);
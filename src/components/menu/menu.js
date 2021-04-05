import { render } from 'pug';
import React from 'react'
import ReactDOM from 'react-dom'

const types = ['soupe', 'pizza', 'pasta', 'bruschetta', 'desert', 'wine', 'beer'];
const ing = "Integer ullamcorper neque eu purus euismod"
const dishes = [
    [
        ["soupe1", 10],
        ["soupe2", 10],
        ["soupe3", 10],
        ["soupe4", 10],
        ["soupe5", 10],
        ["soupe6", 10],
        ["soupe7", 10],
        ["soupe8", 10],
        ["soupe9", 10],
        ["soupe10", 10],
        ["soupe11", 10],
        ["soupe12", 10],
        ["soupe13", 10],
        ["soupe14", 10],
        ["soupe15", 10],
        ["soupe16", 10],
        ["soupe17", 10],
        ["soupe18", 10],
        ["soupe19", 10],
        ["soupe20", 10],
        ["soupe21", 10]
    ],
    [
        ["pizza1", 21],
        ["pizza2", 21],
        ["pizza3", 21],
        ["pizza4", 21],
        ["pizza5", 21],
        ["pizza6", 21],
        ["pizza7", 21],
        ["pizza8", 21],
        ["pizza9", 21],
        ["pizza10", 21],
        ["pizza11", 21],
        ["pizza12", 21],
        ["pizza13", 21],
        ["pizza14", 21],
        ["pizza15", 21],
        ["pizza16", 21],
        ["pizza17", 21],
        ["pizza18", 21],
        ["pizza19", 21],
        ["pizza20", 21],
        ["pizza21", 21]
    ],
    [
        ["pasta1", 18],
        ["pasta2", 18],
        ["pasta3", 18],
        ["pasta4", 18],
        ["pasta5", 18],
        ["pasta6", 18],
        ["pasta7", 18],
        ["pasta8", 18],
        ["pasta9", 18],
        ["pasta10", 18],
        ["pasta11", 18],
        ["pasta12", 18],
        ["pasta13", 18],
        ["pasta14", 18],
        ["pasta15", 18],
        ["pasta16", 18],
        ["pasta17", 18],
        ["pasta18", 18],
        ["pasta19", 18],
        ["pasta20", 18],
        ["pasta21", 18]
    ],
    [
        ["bruschetta1", 7],
        ["bruschetta2", 7],
        ["bruschetta3", 7],
        ["bruschetta4", 7],
        ["bruschetta5", 7],
        ["bruschetta6", 7],
        ["bruschetta7", 7],
        ["bruschetta8", 7],
        ["bruschetta9", 7],
        ["bruschetta10", 7],
        ["bruschetta11", 7],
        ["bruschetta12", 7],
        ["bruschetta13", 7],
        ["bruschetta14", 7],
        ["bruschetta15", 7],
        ["bruschetta16", 7],
        ["bruschetta17", 7],
        ["bruschetta18", 7],
        ["bruschetta19", 7],
        ["bruschetta20", 7],
        ["bruschetta21", 7]
    ],
    [
        ["desert1", 23],
        ["desert2", 23],
        ["desert3", 23],
        ["desert4", 23],
        ["desert5", 23],
        ["desert6", 23],
        ["desert7", 23],
        ["desert8", 23],
        ["desert9", 23],
        ["desert10", 23],
        ["desert11", 23],
        ["desert12", 23],
        ["desert13", 23],
        ["desert14", 23],
        ["desert15", 23],
        ["desert16", 23],
        ["desert17", 23],
        ["desert18", 23],
        ["desert19", 23],
        ["desert20", 23],
        ["desert21", 23]
    ],
    [
        ["wine1", 45],
        ["wine2", 45],
        ["wine3", 45],
        ["wine4", 45],
        ["wine5", 45],
        ["wine6", 45],
        ["wine7", 45],
        ["wine8", 45],
        ["wine9", 45],
        ["wine10", 45],
        ["wine11", 45],
        ["wine12", 45],
        ["wine13", 45],
        ["wine14", 45],
        ["wine15", 45],
        ["wine16", 45],
        ["wine17", 45],
        ["wine18", 45],
        ["wine19", 45],
        ["wine20", 45],
        ["wine21", 45]
    ],
    [
        ["beer1", 5],
        ["beer2", 5],
        ["beer3", 5],
        ["beer4", 5],
        ["beer5", 5],
        ["beer6", 5],
        ["beer7", 5],
        ["beer8", 5],
        ["beer9", 5],
        ["beer10", 5],
        ["beer11", 5],
        ["beer12", 5],
        ["beer13", 5],
        ["beer14", 5],
        ["beer15", 5],
        ["beer16", 5],
        ["beer17", 5],
        ["beer18", 5],
        ["beer19", 5],
        ["beer20", 5],
        ["beer21", 5]
    ]
]

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
    var renderDishes = dishes[props.active].map((elem, i) => (
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
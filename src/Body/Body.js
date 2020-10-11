import React from 'react';
import classes from './Body.module.css';
import PriceBlock from './PriceBlock/PriceBlock';

const Body = (props) => {
    return (
        <div className={classes.MainBody}>
            <div className={classes.IncBody}>
                <h2 className={classes.incHeading}>income</h2>
                {props.income.map((arr, index) => (
                    <PriceBlock
                        FontColor={{ color: '#28b9b5' }}
                        crossColor={{ fill: '#28b9b5' }}
                        key={Math.floor(Math.random() * 10000)}
                        title={arr.title}
                        price={arr.price}
                        ID={arr.id}
                        delete={() => props.deleteEvent(index, arr.id)}
                    />
                ))}
            </div>
            <div className={classes.ExpBody}>
                <h2 className={classes.exp}>expense</h2>
                {props.expense.map((arr, index) => (
                    <PriceBlock
                        FontColor={{ color: '#ff5049' }}
                        crossColor={{ fill: '#ff5049' }}
                        key={`inc ${Math.floor(Math.random() * 10000)}`}
                        title={arr.title}
                        price={arr.price}
                        ID={arr.id}
                        delete={() => props.deleteEvent(index, arr.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;

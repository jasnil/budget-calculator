import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.BgTop}>
            <div className={classes.TextTop}>
                <p className={classes.Heading}>Budget October 2020</p>
                <div className={classes.Total}>&#8377; {props.total ? props.total : '0.00'}</div>
                <div className={[classes.IncExpBox, classes.Income].join(' ')}>
                    <div className={classes.TotalTitle}>income</div>
                    <div className={classes.IncExpPrice}>
                        &#8377;{props.inc.total ? props.inc.total : '0.00'}
                    </div>
                </div>
                <div className={[classes.IncExpBox, classes.Expense].join(' ')}>
                    <div className={classes.TotalTitle}>expense</div>
                    <div className={classes.IncExpPrice}>
                        &#8377;{props.exp.total ? props.exp.total : '0.00'}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

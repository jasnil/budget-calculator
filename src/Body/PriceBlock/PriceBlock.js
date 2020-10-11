import classes from './PriceBlock.module.css';
import React from 'react';

const PriceBlock = (props) => {
    return (
        <div className={classes.Item}>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Price} style={props.FontColor}>
                {props.ID === 'inc' ? '+' : '-'} {props.price}
            </div>
            <button className={classes.Delete} onClick={props.delete}>
                <svg
                    style={props.crossColor}
                    id="Outlined"
                    className={classes.CrossIcon}
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title />
                    <g id="Fill">
                        <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                        <polygon points="19.54 11.05 16 14.59 12.46 11.05 11.05 12.46 14.59 16 11.05 19.54 12.46 20.95 16 17.41 19.54 20.95 20.95 19.54 17.41 16 20.95 12.46 19.54 11.05" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default PriceBlock;

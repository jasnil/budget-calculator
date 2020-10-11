import React, { useState } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    const [input, setInput] = useState('');
    const handleDesChange = (event) => {
        setInput(event.target.value);
    };

    const [price, setPrice] = useState('');
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const [operator, setOperator] = useState('addition');
    const handleOperator = (event) => {
        setOperator(event.target.value);
    };

    const formReset = () => {
        setInput('');
        setPrice('');
    };

    return (
        <div className={classes.Add}>
            <div className={classes.AddContainier}>
                <form action="#" onSubmit={(event) => props.submit(input, price, operator, formReset, event)}>
                    <select
                        name="add_type"
                        id="add_type"
                        className={classes.DropDown}
                        value={operator}
                        onChange={handleOperator}
                    >
                        <option value="addition">+</option>
                        <option value="substract">-</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Description"
                        value={input}
                        onChange={handleDesChange}
                        className={classes.Description}
                    />
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Value"
                        value={price}
                        onChange={handlePriceChange}
                        className={classes.ValueInput}
                    />

                    <button className={classes.CheckMark}>
                        <svg
                            className={classes.CheckMarkIcon}
                            height="30px"
                            viewBox="0 0 512 512"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Input;

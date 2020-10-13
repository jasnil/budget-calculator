import React, { useState, useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Header from './Header/Header';
import Input from './Input/Input';
import Body from './Body/Body';

WebFont.load({
    google: {
        families: ['Ubuntu', 'sans-serif'],
    },
});

const App = () => {
    const [income, setIncome] = useState([]);

    const [expense, setExpense] = useState([]);

    const [incTotal, setIncTotal] = useState({ total: 0, totalUnformatted: 0 });

    const [expTotal, setExpTotal] = useState({ total: 0, totalUnformatted: 0 });

    const [grandTotal, setGrandTotal] = useState(0);

    const numberFormater = (number) => {
        let numberFormatter = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 });
        return numberFormatter.format(number);
    };

    const submitHandler = (desInput, priceInput, operatorInput, reset, event) => {
        event.preventDefault();

        if (desInput && priceInput && operatorInput) {
            let numberFormated = numberFormater(parseFloat(priceInput).toFixed(2));
            let newNumFormatted = numberFormated;
            if (!numberFormated.includes('.')) {
                newNumFormatted = numberFormated.concat('.00');
            }

            if (operatorInput === 'addition') {
                const oldState = [...income];
                oldState.push({
                    title: desInput,
                    price: newNumFormatted,
                    priceUnformatted: parseFloat(priceInput).toFixed(2),
                    id: 'inc',
                });
                setIncome(oldState);
            } else {
                const oldState = [...expense];
                oldState.push({
                    title: desInput,
                    price: newNumFormatted,
                    priceUnformatted: parseFloat(priceInput).toFixed(2),
                    id: 'exp',
                });
                setExpense(oldState);
            }
            reset(); // reset state in Input compopnent
        }
    };

    useEffect(() => {
        let incSum = 0;
        income.forEach((arr) => {
            incSum += parseFloat(arr.priceUnformatted);
        });
        setIncTotal({ total: numberFormater(incSum), totalUnformatted: incSum });
    }, [income]);

    useEffect(() => {
        let expSum = 0;
        expense.forEach((arr) => {
            expSum += parseFloat(arr.priceUnformatted);
        });
        setExpTotal({ total: numberFormater(expSum), totalUnformatted: expSum });
    }, [expense]);

    useEffect(() => {
        let sum = incTotal.totalUnformatted - expTotal.totalUnformatted;
        setGrandTotal(numberFormater(sum));
    }, [incTotal, expTotal]);

    const deleteEventHandler = (index, id) => {
        if (id === 'inc') {
            const oldState = [...income];
            oldState.splice(index, 1);
            setIncome(oldState);
        } else {
            const oldState = [...expense];
            oldState.splice(index, 1);
            setExpense(oldState);
        }
    };

    return (
        <>
            <Header inc={incTotal} exp={expTotal} total={grandTotal} />
            <Input submit={submitHandler} />
            <Body income={income} expense={expense} deleteEvent={deleteEventHandler} />
        </>
    );
};

export default App;

import React from 'react';

const Hire = (props) => {
    const hire = props.hire;
    const totalSalary = hire.reduce( (sum, player) => sum + player.Salary, 0)
    const hiredPlayer = hire.reduce( (sum, player) => sum + player.name + ' * ' , 0)

    // const tax = totalSalary / 10
    const totalBudget = hire.reduce( (sum, player) => sum + player.Salary, 0)
    return (
        <div>
            <h2>Name of Player Selected: {hiredPlayer}</h2>
            <h2>Total Salary: {totalSalary}</h2>
            <h1>Total Budget: {totalBudget}</h1>
        </div>
    );
};

export default Hire;
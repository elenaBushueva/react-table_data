import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {nanoid} from "nanoid";
import randomHexColor from "random-hex-color";

const initiaData = [
    {id: nanoid(), columns: [{id: nanoid(), color: randomHexColor()}]}
]

const App1 = () => {

    const [tableData, setTableData] = useState(initiaData);
    const [row, setRow] = useState(1);
    const [col, setCol] = useState(1);

    const generateTableData = (r, c) => {
        const table = [];
        for (let row = 1; row <= r; row++) {
            const cols = [];
            for (let col = 1; col <= c; col++) {
                cols.push({id: nanoid(), color: randomHexColor()})
            }
            table.push({id: nanoid(), columns: cols});
        }
        setTableData(table);
    }

    const minRow = () => {
        if (row > 1) {
            setRow(row - 1)
        }
        ;
        generateTableData(row - 1, col);
    };

    const addRow = () => {
        setRow(row + 1);
        generateTableData(row + 1, col);
    };

    const minCol = () => {
        if (col > 1) {
            setCol(col - 1)
        }
        ;
        generateTableData(row, col - 1);
    };

    const addCol = () => {
        setCol(col + 1);
        generateTableData(row, col + 1);
    };


    return (
        <div>
            <button onClick={minRow} type="button" className="btn btn-success">Min Row</button>
            {row}
            <button onClick={addRow} type="button" className="btn btn-success">Add Row</button>
            <hr/>
            <button onClick={minCol} type="button" className="btn btn-success">Min Col</button>
            {col}
            <button onClick={addCol} type="button" className="btn btn-success">Add Col</button>
            <hr/>


            <table border={1}>
                <tbody>
                {tableData.map(row => <tr key={row.id}>
                        {row.columns.map(col => <td key={col.id} style={{backgroundColor: col.color}}>
                            ***
                        </td>)}
                    </tr>
                )}
                </tbody>
            </table>


        </div>
    );
};

export default App1;
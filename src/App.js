import React, {useState} from 'react';
import {nanoid} from "nanoid";
import randomHexColor from "random-hex-color";


// const initialTableData = [
//     [{id: nanoid()}, {id: nanoid()}],
//     [{id: nanoid()}, {id: nanoid()}],
//     [{id: nanoid()}, {id: nanoid()}]
// ];

const initialTableData2 = [
    {id: nanoid(), cols: [{id: nanoid(), color: randomHexColor()}]},
];

const App = () => {

    const [columns, setColumns] = useState(1);
    const [rows, setRows] = useState(1);
    const [tableData, setTableData] = useState(initialTableData2);


    // const generateTableData = (c, r) => {
    //     const table = [];
    //     for (let row = 1; row <= r; row++) {
    //         const tempRow = [];
    //         for (let col = 1; col <= c; col++) {
    //             tempRow.push({id: nanoid()})
    //         }
    //         table.push(tempRow);
    //     }
    //     setTableData(table);
    // };

    const generateTableData = (c, r) => {
        const table = [];
        for (let row = 1; row <= r; row++) {
            const tempRow = [];
            for (let col = 1; col <= c; col++) {
                tempRow.push({id: nanoid(), color: randomHexColor()})
            }
            table.push({id: nanoid(), cols: tempRow});
        }
        setTableData(table);
    };

    const minusColumns = () => {
        if (columns > 1) {
            setColumns(columns - 1);
            generateTableData(columns - 1, rows);
        }
    };
    const plusColumns = () => {
        setColumns(columns + 1);
        generateTableData(columns + 1, rows);
    };

    const minusRows = () => {
        if (rows > 1) {
            setRows(rows - 1)
        }
        ;
        generateTableData(columns, rows - 1);
    };
    const plusRows = () => {
        setRows(rows + 1);
        generateTableData(columns, rows + 1);
    };

    return (
        <div>
            <button onClick={minusRows}>Minus rows</button>
            {rows}
            <button onClick={plusRows}>Plus rows</button>
            <hr/>
            <button onClick={minusColumns}>Minus col</button>
            {columns}
            <button onClick={plusColumns}>Plus col</button>
            <hr/>

            <table border={1}>
                <tbody>
                {/*{tableData.map((row, index) => <tr key={index}>*/}
                {/*    {row.map(col => <td key={col.id}>***</td>)}*/}
                {/*</tr>)}*/}

                {tableData.map(row =>
                    <tr key={row.id}> {row.cols.map(col =>
                        <td key={col.id} style={{backgroundColor: col.color}}>***</td>)}
                    </tr>)}

                </tbody>
            </table>

        </div>
    );
};

export default App;
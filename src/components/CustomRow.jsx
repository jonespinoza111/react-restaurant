import React from 'react';

const cells = [
    {
        title: "",
    },
    {
        title: "Name",
    },
    {
        title: "Price",
    },
    {
        title: "Quantity",
    },
    {
        title: "Actions",
    },
];

const CustomRow = ({ alt = false }) => {
    return (
        <table className={`row-table ${alt ? 'alt' : 'normal'}`}>
            <thead className="ant-table-thead">
                <tr>
                    {cells.map(cell => (
                        <th key={cell.title} className="ant-table-cell cell-title" style={{ width: '180px' }}>
                            {cell.title}
                        </th>
                    ))}
                </tr>
            </thead>
        </table>
    )
}

export default CustomRow;
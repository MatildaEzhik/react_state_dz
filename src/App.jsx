import  { useState } from 'react';

const CustomChart = () => {
    const [data, setData] = useState([12, 19, 3, 5, 2, 3]);
    const [colors, setColors] = useState([
        '#FF5733',
        '#33FF57',
        '#3357FF',
        '#F5C542',
        '#8E44AD',
        '#16A085',
    ]);
    const [barWidth, setBarWidth] = useState(50);

    const handleDataChange = (index, value) => {
        const newData = [...data];
        newData[index] = Number(value);
        setData(newData);
    };

    const handleColorChange = (index, color) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Custom Chart Constructor</h2>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-around',
                    height: '300px',
                    border: '1px solid #ccc',
                    padding: '10px',
                    margin: '20px 0',
                }}
            >
                {data.map((value, index) => (
                    <div
                        key={index}
                        style={{
                            width: `${barWidth}px`,
                            height: `${value * 10}px`,
                            backgroundColor: colors[index],
                            textAlign: 'center',
                            color: '#fff',
                            lineHeight: `${value * 10}px`,
                            margin: '0 5px',
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>

            <div>
                <h3>Customize Bars</h3>
                {data.map((value, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <label>
                            Value for Bar {index + 1}:{' '}
                            <input
                                type="number"
                                value={value}
                                onChange={(e) => handleDataChange(index, e.target.value)}
                                style={{ width: '50px', marginRight: '10px' }}
                            />
                        </label>
                        <label>
                            Color:{' '}
                            <input
                                type="color"
                                value={colors[index]}
                                onChange={(e) => handleColorChange(index, e.target.value)}
                            />
                        </label>
                    </div>
                ))}

                <label style={{ marginTop: '20px', display: 'block' }}>
                    Bar Width:{' '}
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={barWidth}
                        onChange={(e) => setBarWidth(e.target.value)}
                    />
                    <span> {barWidth}px</span>
                </label>
            </div>
        </div>
    );
};

export default CustomChart;

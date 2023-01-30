import React, { useState } from 'react';
import {Link} from 'react-router-dom'


let cars = [
    {
        "Id": 1,
        "Name": "chevrolet chevelle malibu",
        "Top": require('./assets/green/car1_top.png'),
        "back": require('./assets/green/car1_back.png'),
        "side": require('./assets/green/car1_side.png'),
        "front": require('./assets/green/car1_front.png'),
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA",
        "status": "select"
    },
    {
        "Id": 2,
        "Name": "buick skylark 320",
        "Top": require('./assets/blue/car2_top.png'),
        "back": require('./assets/blue/car2_back.png'),
        "side": require('./assets/blue/car2_side.png'),
        "front": require('./assets/blue/car2_front.png'),
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 3693,
        "Acceleration": 11.5,
        "Year": "1970-01-01",
        "Origin": "USA",
        "status": "select"
    },
    {
        "Id": 3,
        "Name": "plymouth satellite",
        "Top": require('./assets/cream/car3_top.png'),
        "back": require('./assets/cream/car3_back.png'),
        "side": require('./assets/cream/car3_side.png'),
        "front": require('./assets/cream/car3_front.png'),
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 318,
        "Horsepower": 150,
        "Weight_in_lbs": 3436,
        "Acceleration": 11,
        "Year": "1970-01-01",
        "Origin": "USA",
        "status": "buy"
    },
    {
        "Id": 4,
        "Name": "amc rebel sst",
        "Top": require('./assets/orange/car4_top.png'),
        "back": require('./assets/orange/car4_back.png'),
        "side": require('./assets/orange/car4_side.png'),
        "front": require('./assets/orange/car4_front.png'),
        "Miles_per_Gallon": 16,
        "Cylinders": 8,
        "Displacement": 304,
        "Horsepower": 150,
        "Weight_in_lbs": 3433,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA",
        "status": "buy"
    },
    {
        "Id": 5,
        "Name": "ford torino",
        "Top": require('./assets/black/car5_top.png'),
        "back": require('./assets/black/car5_back.png'),
        "side": require('./assets/black/car5_side.png'),
        "front": require('./assets/black/car5_front.png'),
        "Miles_per_Gallon": 17,
        "Cylinders": 8,
        "Displacement": 302,
        "Horsepower": 140,
        "Weight_in_lbs": 3449,
        "Acceleration": 10.5,
        "Year": "1970-01-01",
        "Origin": "USA",
        "status": "buy"
    }
];

function Cars() {
    const [selected, setSelected] = useState(null);

    return (
        <div div className=' bg-gradient-to-br from-blue-34 to-blue-35 h-screen'>
            {/* list of cars */}
            <ul className=' flex '>
                {cars.map(car => (
                    <li key={car.Id} className=" p-[2%] m-2 flex  justify-center  flex-col border-8 border-black w-fit h-96 rounded-3xl" onClick={() => setSelected(car)}>
                        <img className=" m-auto w-fill" alt="..." src={car.Top} />
                        <p className=" font-semibold  text-2xl text-center"> {car.Name}</p>
                        <button className=" m-auto bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded">
                            {car.status}
                        </button>

                    </li>
                ))}
            </ul>

            {selected && (
                <div className=" flex justify-around border-2 border-white m-4 rounded-2xl">
                    <div className='grid grid-flow-row grid-cols-2'>
                        <img className=" m-auto w-2/3" alt="..." src={selected.Top} />
                        <img className=" m-auto w-2/3" alt="..." src={selected.side} />
                        <img className=" m-auto w-2/3" alt="..." src={selected.back} />
                        <img className=" m-auto w-2/3" alt="..." src={selected.front} />
                    </div>
                    <div className='text-lg text-white p-5'>
                        <p className=' p-1 font-mono font-semibold'>Name: {selected.Name}</p>
                        <p className=' p-1 font-mono font-semibold'>Miles per Gallon: {selected.Miles_per_Gallon}</p>
                        <p className=' p-1 font-mono font-semibold'>Cylinders: {selected.Cylinders}</p>
                        <p className=' p-1 font-mono font-semibold'>Displacement: {selected.Displacement}</p>
                        <p className=' p-1 font-mono font-semibold'>Horsepower: {selected.Horsepower}</p>
                        <p className=' p-1 font-mono font-semibold'>Weight in lbs: {selected.Weight_in_lbs}</p>
                        <p className=' p-1 font-mono font-semibold'>Acceleration: {selected.Acceleration}</p>
                        <p className=' p-1 font-mono font-semibold'>Year: {selected.Year}</p>
                        <p className=' p-1 font-mono font-semibold'>Origin: {selected.Origin}</p>
                    </div>
                    <button>
                        {/* <Link to='/race'> */}
                        <Link to={{ pathname: '/race', state: { selectedCar: selected } }}>
                        <ul className=' w-fit h-auto text-4xl bg-white border-2 rounded-2xl border-red-300 p-10 my-3 font-semibold'>
                            <li>S</li>
                            <li>T</li>
                            <li>A</li>
                            <li>R</li>
                            <li>T</li>
                        </ul></Link>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cars;

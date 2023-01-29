import React, { useState } from 'react';


let cars = [
    {
        "Id": 1,
        "Name": "chevrolet chevelle malibu",
        "Image": require('./assets/car2.png'),
        "back": require('./assets/car2.png'),
        "side": require('./assets/car2.png'),
        "front": require('./assets/car2.png'),
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
        "Image": require('./assets/car3.png'),
        "back": require('./assets/car3.png'),
        "side": require('./assets/car3.png'),
        "front": require('./assets/car3.png'),
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
        "Image": require('./assets/car4.png'),
        "back": require('./assets/car4.png'),
        "side": require('./assets/car4.png'),
        "front": require('./assets/car4.png'),
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
        "Image": require('./assets/car5.png'),
        "back": require('./assets/car5.png'),
        "side": require('./assets/car5.png'),
        "front": require('./assets/car5.png'),
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
        "Image": require('./assets/car6.png'),
        "back": require('./assets/car6.png'),
        "side": require('./assets/car6.png'),
        "front": require('./assets/car6.png'),
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
        <>
            {/* list of cars */}
            <ul className=' flex '>
                {cars.map(car => (
                    <li key={car.Id} className=" p-[2%] m-3 flex  justify-center  flex-col border-8 border-black w-fit h-96 rounded-3xl" onClick={() => setSelected(car)}>
                        <img className=" m-auto w-fill" alt="..." src={car.Image} />
                        <p className=" font-semibold  text-2xl text-center"> {car.Name}</p>
                        <button className=" m-auto bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded">
                            {car.status}
                        </button>

                    </li>
                ))}
            </ul>

            {selected && (
                <div className="">
                    <h2>Selected Car</h2>
                    <p>Name: {selected.Name}</p>
                    <p>Miles per Gallon: {selected.Miles_per_Gallon}</p>
                    <p>Cylinders: {selected.Cylinders}</p>
                    <p>Displacement: {selected.Displacement}</p>
                    <p>Horsepower: {selected.Horsepower}</p>
                    <p>Weight in lbs: {selected.Weight_in_lbs}</p>
                    <p>Acceleration: {selected.Acceleration}</p>
                    <p>Year: {selected.Year}</p>
                    <p>Origin: {selected.Origin}</p>
                </div>
            )}
        </>
    );
}

export default Cars;

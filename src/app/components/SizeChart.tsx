"use client";
import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";

const SizeChart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [age, setAge] = useState<number | null>(null);
    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [view, setView] = useState<'chart' | 'calculator'>('chart');  

    const toggleModal = () => setIsOpen(!isOpen);

    const handleCalculateSize = () => {
        if (age && weight && height) {
            alert(`Calculating size for Age: ${age}, Weight: ${weight}kg, Height: ${height}cm.`);
        } else {
            alert("Please fill out all fields to calculate size.");
        }
    };

    return (
        <div>
            {/* Button to open the modal */}
            <button
                onClick={toggleModal}
                className="underline text-[14px] tracking-wide"
            >
                Size Chart 
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white sm:p-6 p-4 rounded-md shadow-lg w-[90%] max-w-3xl relative">
                        {/* Close Button */}
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-[25px]  text-[#111111]"
                        >
                          <CgClose  />
                        </button>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-4 text-center">Size Chart & Calculator</h2>

                        <div className='w-full h-[1px] bg-black'></div>

                        {/* Tab Navigation */}
                        <div className="flex">
                            <button
                                onClick={() => setView('calculator')}
                                className={`w-1/2 text-[#a1a1a1] sm:text-[18px] text-[14px] py-2 text-center 
                               ${view === 'calculator' ? 'border-b-4 border-[#4C9CEF]' : ''}`}
                            >
                                Calculate My Size
                            </button>
                            <button
                                onClick={() => setView('chart')}
                                className={`w-1/2 text-[#a1a1a1] sm:text-[18px] text-[14px] py-2 text-center  
                              ${view === 'chart' ? 'border-b-4 border-[#4C9CEF]' : ''}`}
                            >
                                Size Chart
                            </button>
                        </div>
                        <div className='w-full h-[1px] bg-black opacity-35'></div>


                        {/* Conditional Rendering of Size Chart or Calculator */}
                        {view === 'chart' ? (
                            <div className='mt-4'>
                                {/* Size Chart */}
                                <h3 className="text-lg font-semibold mb-4">Size Chart</h3>
                                <table className="w-full border-collapse border border-gray-300 mb-6">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 text-[12px] sm:text-[17px] px-1 sm:px-4 py-2">Size</th>
                                            <th className="border border-gray-300 text-[12px] sm:text-[17px] px-1 sm:px-4 py-2">CHEST WIDTH</th>
                                            <th className="border border-gray-300 text-[12px] sm:text-[17px] px-1 sm:px-4 py-2">SLEEVE LENGTH</th>
                                            <th className="border border-gray-300 text-[12px] sm:text-[17px] px-1 sm:px-4 py-2">BODY LENGTH</th>
                                            <th className="border border-gray-300 text-[12px] sm:text-[17px] px-1 sm:px-4 py-2">SHOULDER</th>
                                        </tr>
                                    </thead>  
                                    <tbody>
                                        {[
                                            { size: 'XS', chest: 58.4, sleeve: 78.7, body: 58.4, shoulder: 63.5 },
                                            { size: 'S', chest: 61, sleeve: 81.3, body: 61, shoulder: 66 },
                                            { size: 'M', chest: 63.5, sleeve: 83.8, body: 63.5, shoulder: 68.6 },
                                            { size: 'L', chest: 66, sleeve: 86.4, body: 66, shoulder: 71.1 },
                                            { size: 'XL', chest: 68.6, sleeve: 88.9, body: 68.6, shoulder: 73.7 },
                                        ].map((row, index) => (
                                            <tr key={index} className="text-center">
                                                <td className="border border-gray-300 text-[12px] sm:text-[16px] sm:px-4 px-1 py-2">{row.size}</td>
                                                <td className="border border-gray-300 text-[12px] sm:text-[16px] sm:px-4 px-1 py-2">{row.chest}</td>
                                                <td className="border border-gray-300 text-[12px] sm:text-[16px] sm:px-4 px-1 py-2">{row.sleeve}</td>
                                                <td className="border border-gray-300 text-[12px] sm:text-[16px] sm:px-4 px-1 py-2">{row.body}</td>
                                                <td className="border border-gray-300 text-[12px] sm:text-[16px] sm:px-4 px-1 py-2">{row.shoulder}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className='mt-4'>
                                {/* Size Calculator */}
                                <h3 className="text-lg font-semibold mb-4">Calculate My Size</h3>
                                <div className="flex flex-col gap-4">
                                    {/* Age Input */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Age</label>
                                        <input
                                            type="number"
                                            value={age || ''}
                                            onChange={(e) => setAge(Number(e.target.value))}
                                            placeholder="Enter your age"
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-black"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Age affects how weight is distributed.</p>
                                    </div>

                                    {/* Weight Input */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                                        <input
                                            type="number"
                                            value={weight || ''}
                                            onChange={(e) => setWeight(Number(e.target.value))}
                                            placeholder="Enter your weight in kg"
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-black"
                                        />
                                    </div>

                                    {/* Height Input */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Height (cm)</label>
                                        <input
                                            type="number"
                                            value={height || ''}
                                            onChange={(e) => setHeight(Number(e.target.value))}
                                            placeholder="Enter your height in cm"
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-black"
                                        />
                                    </div>

                                    {/* Calculate Button */}
                                    <button
                                        onClick={handleCalculateSize}
                                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                                    >
                                        Calculate My Size
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SizeChart;

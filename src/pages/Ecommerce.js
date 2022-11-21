import React from 'react';
import { Lines, Button } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';
import { GoPrimitiveDot } from 'react-icons/go';
import { useStateContext } from '../contexts/ContextProvider';
import banner from '../data/banner.png';
import './ecommerce.css';
import Sparkline from '../components/Sparkline';
import Stacked from '../components/Stacked';

const Ecommerce = () => {
    return (
        <div className='mt-4 md:mt-6 sm:mt-16 max-sm:mt-14'>

            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white h-40 rounded-lg w-full div1 p-8 pt-4 m-3 bg-center flex justify-between'>
                    <div className=''>
                        <div className='flex flex-wrap justify-between items-center'>
                            <div>
                                <p className='font-bold text-gray-400'>
                                    Earnings
                                </p>
                                <p className='font-bold text-2xl'>
                                    $14,00,000
                                </p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Button
                                color='white'
                                bgColor='#0483fc'
                                text='Download'
                                borderRadius='6px'
                                size='md'
                            />
                        </div>
                    </div>
                    <div >
                        <img className='img1' src={banner} />
                    </div>
                </div>

            </div>
            <div className='flex m-14 mt-4 flex-wrap lg:flex-nowrap justify-center gap-1 '>
                {earningData.map((item) => (
                    <div key={item.title}
                        className='bg-white cards md:w-60 max-sm:w-full m-2 p-4 pt-3 rounded-md h-40'>
                        <p className='mt-3'>
                            <span className='text-lg font-bold'>{item.amount}</span>
                            <span className={`text-sm text-gray-400 ml-4`}>{item.percentage}</span>
                        </p>
                        <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                        <div className='hover:drop-shadow-xl p-4 ml-24 max-sm:ml-12'> {item.icon}
                        </div>

                    </div>
                ))}
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='bg-white p-4 rounded-md w-full revenue'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Revenue Updates</p>
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-2 text-gray-400 hover:drop-shadow-xl'>
                                <span className='text-gray-400'><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p className='flex items-center gap-2 text-gray-400 hover:drop-shadow-xl'>
                                <span className='clr'><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-wrap gap-10 justify-center'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div>
                                <p>
                                    <span className='text-2xl font-bold'>$93,438</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full
                        text-white bg-green-400 ml-3 text-xs'>23%</span>
                                </p>
                                <p className='text-gray-400 mt-1'>
                                    Budget
                                </p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-2xl font-bold'>$48,438</span>

                                </p>
                                <p className='text-gray-400 mt-1'>
                                    Expense
                                </p>
                            </div>
                            <div className='mt-5'>
                                <Sparkline
                                    currentColor="aqua"
                                    id="line-sparkline"
                                    type="Line"
                                    height="80px"
                                    width="250px"
                                    data={SparklineAreaData}
                                    color="aqua"
                                />
                            </div>
                            <div className='mt-10'>
                                <Button color="white"
                                    bgColor="#0483fc"
                                    text="Download Report"
                                    borderRadius='5px'
                                />
                            </div>
                        </div>
                        <div>
                            <Stacked width="320px" height="360px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce
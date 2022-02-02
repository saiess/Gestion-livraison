import React from 'react';

interface StatisticProps {
    
}

const Statistic: React.FC<StatisticProps> = () => {
  return (

            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Dashboard</h1>

                {/* <!-- Content goes here! 😁 --> */}
                <div className="flex flex-wrap mt-6">
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-plus mr-3" /> Monthly Reports
                        </p>
                        <div className="p-6 bg-white">
                            <canvas width="400" height="200" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-check mr-3" /> Resolved Reports
                        </p>
                        <div className="p-6 bg-white">
                            <canvas width="400" height="200" />
                        </div>
                    </div>
                </div>
            </main>

  );
};

export default Statistic;
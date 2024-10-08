import React from 'react'
import {TabView, TabPanel} from 'primereact/tabview';
import { BsClock } from 'react-icons/bs';
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Divider } from 'primereact/divider';
import MyCustomTable from './MyCustomTable';


export default function PackageTabView({packageData}) {
    if(!packageData) {
        return <></>;
    }
    const {includes, address, age, months, offerAvailable,description ,departureLocation, returnLocation, departureTime, returnTime, wearing } = packageData;
    const customData = {
        departureLocation: departureLocation,
        returnLocation: returnLocation,
        departureTime: departureTime,
        returnTime: returnTime,
        includes: [includes],
        wear:wearing,
    }
  return (
    <div>
        <TabView>
            <TabPanel header="Detail">
                <div className='flex flex-column md:flex-row gap-2'>
                    <div className='p-4 border-1 border-200 border-round-sm flex flex-column align-items-center flex-1'>
                        <div className='p-2 bg-blue-100 border-round-20 flex justify-content-center align-items-center border-circle'>
                            <BsClock className='text-primary-800' />
                        </div>
                        <span className='text-sm font-semibold text-center'>Duration</span>
                        <span className='text-xs text-color-secondary text-center'>{includes.days} Days</span>

                    </div>
                    <div className='p-4 border-1 border-200 border-round-sm flex flex-column align-items-center flex-1'>
                        <div className='p-2 bg-blue-100 border-round-20 flex justify-content-center align-items-center border-circle'>
                                <IoLocationOutline className='text-primary-800' />
                            </div>
                            <span className='text-sm font-semibold text-center'>Location</span>
                            <span className='text-xs text-color-secondary text-center'>{address}</span>
                        </div>
                    <div className='p-4 border-1 border-200 border-round-sm flex flex-column align-items-center flex-1'>
                        <div className='p-2 bg-blue-100 border-round-20 flex justify-content-center align-items-center border-circle'>
                            <FaRegUser className='text-primary-800'/>
                        </div>
                        <span className='text-sm font-semibold text-center'>Age</span>
                        <span className='text-xs text-color-secondary text-center'>{age}+</span>

                    </div>
                    <div className='p-4 border-1 border-200 border-round-sm flex flex-column align-items-center flex-1'>
                    <div className='p-2 bg-blue-100 border-round-20 flex justify-content-center align-items-center border-circle'>
                            <LuCalendarDays className='text-primary-800'/>
                        </div>
                        <span className='text-sm font-semibold text-center'>Months</span>
                        <span className='text-xs text-color-secondary text-center'>
                            {
                                months.map((month, index) => (
                                    <span key={index}>{month}{index < months.length - 1 ? ', ' : ''}</span>
                                ))
                            }
                        </span>

                        
                    </div>
                    <div className='p-4 border-1 border-200 border-round-sm flex flex-column align-items-center flex-1'>
                        <div className='p-2 bg-blue-100 border-round-20 flex justify-content-center align-items-center border-circle'>
                            <FaRegCalendarCheck className='text-primary-800'/>
                        </div>
                        <span className='text-sm font-semibold text-center'>Available</span>
                        <span className='text-xs text-color-secondary text-center'>
                            {
                                offerAvailable ? "Offer is available": "Offer is not available"
                            }
                        </span>
                    </div>
                </div>
                <p className="m-0 mt-4 text-color-secondary">
                    {description}{' '}{description}
                </p>
                <Divider />
                <MyCustomTable customData={customData}/>
                <div className='mt-6 mb-4'>
                    <p className='text-red-400 text-xs md:text-sm'>NOTE: lobortis, amet, dui luctus malesuada lorem. tortor. cursus placerat. dui. faucibus convallis. ex orci porta elementum leo.</p>
                </div>
            </TabPanel>


            <TabPanel header="Itinerary">
                <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.
                </p>
            </TabPanel>
            <TabPanel header="Location">
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa

                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
            </TabPanel>
            <TabPanel header="Photos">
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa

                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
            </TabPanel>
        </TabView>
      
    </div>
  )
}

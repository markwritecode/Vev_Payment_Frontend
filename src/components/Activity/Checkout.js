const Checkout = () => {
    return (
        <div className='grid grid-cols-2'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Checkout

const LeftSide = () => {

    const data = [
        { name: 'Collection 01', price: '$29.00', description: '10 x Presets. Released in 2018' },
        { name: 'Collection 02', price: '$29.00', description: '10 x Presets. Released in 2020', active: true },
        { name: 'Collection 01 + 02', price: '$48.00', description: 'Buy both collections. 20 x Presets in total' }
    ]

    return (
        <div className='bg-[#F5F5F7] w-full'>
            <div className='w-2/4 mx-auto h-full py-32 space-y-6'>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Lightroom Presets</h3>
                    <h5 className="text-base font-light">$29.00+</h5>
                </div>
                <img src='/images/01.jpg' className="rounded-lg" alt='' />
                <p className="text-gray-600 text-justify">This pack contains a variety of different styles ranging from minimalist and sterile to colourful and summery. Perfect for product photography, lifestyle and landscapes.</p>
                {
                    data.map(item => {
                        return (
                            <div className={`bg-gray-200 p-4 rounded-lg ${item.active && 'border-2 border-[#1eabe7e3]'}`} key={item.name}>
                                <div className="flex items-baseline justify-between">
                                    <div className="flex items-baseline gap-4">
                                        <input type='radio' />
                                        <div className="space-y-4">
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-gray-500">{item.description}.</p>
                                        </div>
                                    </div>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const RightSide = () => {
    return (
        <div className="w-full h-screen">
            <div className='w-2/4 mx-auto py-32 space-y-8'>
                <div>
                    <h3 className='text-lg font-medium'>Payment Details</h3>
                    <h5 className='text-gray-500 text-xs'>Complete your purchase by providing your payment details.</h5>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-3'>
                        <label className='block text-sm text-gray-00 font-semibold' htmlFor='email'>Email address</label>
                        <input className='w-full pl-2 py-1 text-gray-700 border-[1px] border-[#9B9DA5] rounded-md' id='email' type='email' required />
                    </div>
                    <div className='space-y-3'>
                        <label className='block text-sm text-gray-00 font-semibold' htmlFor='card_details'>Card details</label>
                        <input className='w-full pl-2 py-1 text-gray-700 border-[1px] border-[#9B9DA5] rounded-md' id='card_details' type='number' required />
                    </div>
                    <div className='space-y-3'>
                        <label className='block text-sm text-gray-00 font-semibold' htmlFor='cardholder_name'>Cardholder name</label>
                        <input className='w-full pl-2 py-1 text-gray-700 border-[1px] border-[#9B9DA5] rounded-md' id='cardholder_name' type='text' required />
                    </div>
                    <div className='space-y-3'>
                        <label className='block text-sm text-gray-00 font-semibold' htmlFor='vat_number'>Billing address</label>
                        <select className='w-full pl-2 py-1 text-gray-700 border-[1px] border-[#9B9DA5] rounded-md'>
                            <option>United States</option>
                            <option>Nigeria</option>
                        </select>
                    </div>
                    <div className='space-y-3'>
                        <label className='block text-sm text-gray-00 font-semibold' htmlFor='vat_number'>VAT Number</label>
                        <input className='w-full pl-2 py-1 text-gray-700 border-[1px] border-[#9B9DA5] rounded-md' id='vat_number' type='number' required />
                    </div>
                    <div>
                        <div className='w-full flex mb-3 items-center'>
                            <div className='flex-grow'>
                                <span className='text-gray-600'>Subtotal</span>
                            </div>
                            <div className='pl-3'>
                                <span>$29.00</span>
                            </div>
                        </div>
                        <div className='w-full flex mb-3 items-center'>
                            <div className='flex-grow'>
                                <span className='text-gray-600'>VAT (20%)</span>
                            </div>
                            <div className='pl-3'>
                                <span>$5.80</span>
                            </div>
                        </div>
                        <div className='w-full flex mb-3 items-center'>
                            <div className='flex-grow'>
                                <span className='text-gray-600 font-semibold'>Total</span>
                            </div>
                            <div className='pl-3'>
                                <span className='font-semibold'>$34.80</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className='text-center w-full bg-gradient-to-r from-[#1eabe7e3] to-cyan-300 rounded-lg py-2 font-semibold text-white'>Pay $34.80</button>
                    </div>
                    {/* <div className='text-gray-400 flex items-center gap-1 w-full'>
            <FaLock /> 
            <span>Payments are secured and encrypted</span>
        </div> */}
                </div>
            </div>
        </div>
    )
}
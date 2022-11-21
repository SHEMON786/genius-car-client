import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if (phone.length < 11) {
        //     alert('Phone Number should be 11 or more characters.')
        // }
        fetch(`http://localhost:7007/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='my-16 w-[90%] mx-auto'>
            <form onSubmit={handlePlaceOrder}>
                <div className='mb-8'>
                    <h2 className="text-3xl font-medium mb-2">You are about to order: <span className='text-stone-600 font-bold'>{title}</span></h2>
                    <h4 className='text-2xl font-medium'>Price: <span className='text-orange-600 font-bold text-3xl'>${price}</span></h4>
                </div>
                <div className='grid grid-cols-1 gap-7 lg:grid-cols-2'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="mt-7 textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
                <div className='w-2/4 mx-auto'>
                    <input type='submit' className="btn btn-outline btn-success w-full mt-7 normal-case text-xl font-bold" value='Place Your Order' />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
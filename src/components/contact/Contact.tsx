import React, { useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/solid';

export const Contact = () => {
    const [reason, setReason] = useState('');
    const [salaryRange, setSalaryRange] = useState('');

    const onReasonChange = (reason: string) => {

    }

    const onReasonChangeKeyUp = (event: React.KeyboardEvent, reason: string) => { 
        if (event.key) {
            onReasonChange(reason);
        }
    }

  return (
    <section className='flex-auto m-6'>
        <span>
            Interested in contacting me?
        </span>
        <form>
            <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>First name</label>
                <input type='text' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='John' required/>
            </div>
            <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Correo</label>
                <input type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='mail@xyz.com' required/>
            </div>
            <div>
                <label htmlFor='reason' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Reason htmlFor contacting</label>
                <input id='reason' type='text' value={reason} className='hidden' tabIndex={-1} disabled />

                <div title='Reason of contact'>
                    <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300' tabIndex={0} onClick={() => {onReasonChange('Recruiting1')}} onKeyUp={(e) => { onReasonChangeKeyUp(e, 'Recruiting1')}}>
                        <BriefcaseIcon className='w-16 h-16'/>
                        Recruiting 1
                    </span>
                    <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300' tabIndex={0} onClick={() => {onReasonChange('Recruiting2')}} onKeyUp={(e) => { onReasonChangeKeyUp(e, 'Recruiting2')}}>
                        <BriefcaseIcon className='w-16 h-16'/>
                        Recruiting 2
                    </span>
                    <span className='bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300' tabIndex={0} onClick={() => {onReasonChange('Recruiting3')}} onKeyUp={(e) => { onReasonChangeKeyUp(e, 'Recruiting3')}}>
                        <BriefcaseIcon className='w-16 h-16'/>
                        Recruiting 3
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor='money-range' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Default range</label>
                <input id='money-range' type='range' value={salaryRange} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />                
            </div>
            <div>
                <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Your message</label>
                <textarea id='message' rows={4} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Your message...'></textarea>
            </div>
        </form>
    </section>
  )
}

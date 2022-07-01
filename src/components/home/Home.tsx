import React from 'react'

export const Home = () => {
  return (
    <section className='container flex flex-wrap flex-row relative'>
        <div title='profile-avatar' className='w-1/2'>

        </div>
        <div title='Profile explanation' className='flex-auto w-1/2 gap-6 text-white'>
            <div title='Profile name' className=''>
                <span className='text-2xl font-bold'>
                    My name is <br/>
                    Carlos Garcia
                </span>
            </div>
            <div title='Profile details'>
                <span className='text-lg font-medium'>
                    I am a full-stack web developer with a strong bias for JavaScript and React.
                </span>
                <button className='btn btn-primary mr-2'>See my work</button>
                <button className='btn btn-secondary'>See my work</button>
                <button className='btn btn-tertiary'>See my work</button>
            </div>
        </div>
    </section>
  )
}

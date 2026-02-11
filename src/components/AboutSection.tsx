import { Coffee, Utensils } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id='about' className='py-20 px-4'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12'>
        <div className='w-full md:w-1/2'>
          <img
            src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80'
            className='rounded-lg shadow-2xl'
            alt='About us'
          />
        </div>
        <div className='w-full md:w-1/2'>
          <span className='text-orange-800 font-bold tracking-widest uppercase text-sm'>
            Our Story
          </span>
          <h2 className='text-3xl sm:text-4xl font-serif mt-2 mb-6 text-orange-950'>
            Where Culture Meets Caffeine
          </h2>
          <p className='text-gray-600 leading-relaxed mb-6'>
            Founded in 2018, XYZ Cafe was born out of a passion for
            high-altitude beans and Rajasthan's rich hospitality. Every corner
            of our restro is designed to be your "third space"—the place between
            home and work.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center gap-2'>
              <Coffee className='text-orange-800' size={18} /> Fresh Brews
            </div>
            <div className='flex items-center gap-2'>
              <Utensils className='text-orange-800' size={18} /> Artisan Kitchen
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

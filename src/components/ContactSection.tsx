import { Clock, Facebook, Instagram, MapPin, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id='contact' className='py-20 bg-orange-950 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div>
            <h2 className='text-4xl font-serif mb-8'>Visit Our Sanctuary</h2>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <MapPin className='text-orange-400' />
                <p>123 Anasagar Link Road, Ajmer, Rajasthan, 305001</p>
              </div>
              <div className='flex items-center gap-4'>
                <Phone className='text-orange-400' />
                <p>+91 98765 43210</p>
              </div>
              <div className='flex items-center gap-4'>
                <Clock className='text-orange-400' />
                <p>Daily: 8:00 AM - 11:30 PM</p>
              </div>
            </div>

            <div className='mt-12 flex space-x-6'>
              <Instagram className='cursor-pointer hover:text-orange-400' />
              <Facebook className='cursor-pointer hover:text-orange-400' />
            </div>
          </div>

          <form className='bg-white p-8 rounded-sm'>
            <div className='grid grid-cols-1 gap-4 text-black'>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full p-3 border border-gray-200 focus:outline-orange-800'
              />
              <input
                type='email'
                placeholder='Email Address'
                className='w-full p-3 border border-gray-200 focus:outline-orange-800'
              />
              <textarea
                placeholder='Message'
                rows={4}
                className='w-full p-3 border border-gray-200 focus:outline-orange-800'
              ></textarea>
              <button className='bg-orange-800 text-white py-3 hover:bg-orange-700 transition'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

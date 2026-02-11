export default function HeroSection() {
  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center overflow-hidden'
    >
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80'
          alt='Cafe Interior'
          className='w-full h-full object-cover brightness-50'
        />
      </div>
      <div className='relative z-10 text-center px-4 max-w-4xl'>
        <h1 className='text-4xl sm:text-6xl lg:text-8xl font-serif text-white mb-6'>
          Savor the Soul of{' '}
          <span className='text-orange-400 italic font-light'>Ajmer</span>
        </h1>
        <p className='text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto'>
          Crafting artisanal coffee and authentic fusion cuisine in the heart of
          Rajasthan. Experience the perfect blend of tradition and taste.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='#menu'
            className='bg-orange-800 text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-orange-700 transition w-full sm:w-auto text-center'
          >
            View Menu
          </a>
          <a
            href='#contact'
            className='border-2 border-white text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-white hover:text-black transition w-full sm:w-auto text-center'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

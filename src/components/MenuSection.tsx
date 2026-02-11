export default function MenuSection() {
  const menu = [
    {
      name: 'Masala Chai Latte',
      price: 180,
      description:
        'Locally sourced spices, steamed milk, and a hint of vanilla bean essence.',
    },
    {
      name: 'Ajmeri Pulao',
      price: 350,
      description:
        'Aromatic rice cooked with local spices and served with a side of yogurt.',
    },
    {
      name: 'Rajasthani Thali',
      price: 450,
      description:
        'A traditional Rajasthani thali with dal, roti, and seasonal vegetables.',
    },
    {
      name: 'Gulab Jamun',
      price: 120,
      description: 'Soft, spongy milk balls soaked in sugar syrup.',
    },
    {
      name: 'Kesar Kulfi',
      price: 150,
      description: 'Creamy kulfi infused with saffron and cardamom.',
    },
    {
      name: 'Saffron Lassi',
      price: 100,
      description:
        'A traditional yogurt-based drink infused with saffron and cardamom.',
    },
  ]
  return (
    <section id='menu' className='py-20 bg-[#FDFBF7]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-5xl font-serif text-orange-950 mb-4'>
            Our Curated Menu
          </h2>
          <div className='w-24 h-1 bg-orange-800 mx-auto'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {menu.map((item, index) => (
            <div key={index} className='group cursor-pointer'>
              <div className='flex justify-between items-baseline border-b border-orange-200 pb-2 mb-2 group-hover:border-orange-800 transition'>
                <h3 className='text-xl font-medium text-gray-900'>
                  {item.name}
                </h3>
                <span className='text-orange-900 font-bold'>₹{item.price}</span>
              </div>
              <p className='text-gray-600 text-sm italic'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

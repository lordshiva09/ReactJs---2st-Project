import 'remixicon/fonts/remixicon.css'

const stats = [
  { value: '4.8M+', label: 'Active users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '120+', label: 'Countries' },
  { value: '$12B', label: 'Processed monthly' }
]

const features = [
  { icon: 'ri-bank-card-line', title: 'Smart Cards', desc: 'Virtual and physical cards with real-time controls and instant freezing.' },
  { icon: 'ri-wallet-3-line', title: 'Digital Wallet', desc: 'Send, receive and manage money seamlessly from a single app.' },
  { icon: 'ri-exchange-funds-line', title: 'Instant Transfers', desc: 'Move money in seconds with zero hidden fees across the globe.' },
  { icon: 'ri-shield-check-line', title: 'Bank-grade Security', desc: 'Encrypted by default with biometric authentication and fraud alerts.' },
  { icon: 'ri-line-chart-line', title: 'Smart Insights', desc: 'Understand your spending with beautiful, actionable analytics.' },
  { icon: 'ri-smartphone-line', title: 'Mobile First', desc: 'Full banking in your pocket, built for speed on every device.' }
]

const Section2 = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center px-18 pt-28 pb-16 bg-gray-50'>
      <div className='flex items-start justify-between mb-14'>
        <div>
          <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full w-fit mb-6'>Our platform</h4>
          <h2 className='text-6xl font-bold max-w-xl leading-tight'>Everything your money needs, in one place</h2>
        </div>
        <p className='max-w-sm text-lg font-medium text-gray-600 pt-4'>From everyday spending to long-term growth, our digital banking platform is built for every segment of your audience.</p>
      </div>

      <div className='grid grid-cols-4 gap-8 border-y border-gray-200 py-10 mb-14'>
        {stats.map((s, i) => (
          <div key={i}>
            <p className='text-5xl font-bold'>{s.value}</p>
            <p className='text-gray-500 font-medium mt-2'>{s.label}</p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-3 gap-6'>
        {features.map((f, i) => (
          <div key={i} className='group rounded-3xl border border-gray-200 p-8 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>
            <i className={`${f.icon} text-4xl mb-6 inline-block`}></i>
            <h3 className='text-2xl font-semibold mb-3'>{f.title}</h3>
            <p className='text-gray-500 group-hover:text-gray-300 font-medium leading-relaxed'>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center gap-2 mt-16 text-gray-400'>
        <span className='w-24 h-px bg-gray-300'></span>
        <p className='text-sm font-medium tracking-wide uppercase'>Made with <i className="ri-heart-3-fill text-red-500"></i> by Pawan Kumar (Lordshiva)</p>
        <span className='w-24 h-px bg-gray-300'></span>
      </div>
    </div>
  )
}

export default Section2

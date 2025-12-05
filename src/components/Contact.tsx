import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Merci ${formData.name}, votre message a été envoyé !`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Votre email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
              placeholder="Votre message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          >
            Envoyer
          </button>
        </form>

        <div className="mt-10 text-center space-y-3">
          <p className="text-gray-300">
            Email: <a className="underline hover:text-blue-400" href="mailto:contact@atelierdessin.com">yvovami@gmail.com</a>
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://www.instagram.com/freedyvo?igsh=NmNlcXRwc2ZyOWhw&utm_source=qr" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="https://www.snapchat.com/add/yvoreed?share_id=01oPr3DPRcuUH-tZxrtjLA&locale=en_CA" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">snapchat</a>
            <a href="https://www.facebook.com/share/1AeRPBLT2x/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">facebook</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

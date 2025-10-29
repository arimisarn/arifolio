"use client"

import type React from "react"
import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Html } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, XCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

interface ToastProps {
  message: string
  type: "success" | "error"
  onClose: () => void
}

function Toast({ message, type, onClose }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm ${type === "success" ? "bg-green-300/90 text-green-900" : "bg-red-300/90 text-red-900"
        }`}
    >
      {type === "success" ? (
        <CheckCircle size={24} className="flex-shrink-0" />
      ) : (
        <XCircle size={24} className="flex-shrink-0" />
      )}
      <p className="font-medium">{message}</p>
      <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity" aria-label="Fermer">
        ✕
      </button>
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: "success" | "error"
  } | null>(null)

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 5000) // Auto-dismiss after 5 seconds
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        showToast("Message envoyé avec succès!", "success")
        setForm({ name: "", email: "", message: "" })
        setIsSubmitting(false)
      })
      .catch((err) => {
        console.error(err)
        showToast("Erreur lors de l'envoi du message", "error")
        setIsSubmitting(false)
      })
  }

  return (
    <section
      id="contact"
      className="relative bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500 py-24 px-6 sm:px-10 md:px-16 lg:px-[190px]"
    >
      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* --- FORMULAIRE --- */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-bold mb-4">Entrons en contact 👋</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Tu as un projet, une idée ou tu veux simplement discuter ? Envoie-moi un message, je te répondrai
            rapidement.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi..." : "Envoyer"} <Send size={18} />
            </button>
          </form>
        </div>

        {/* --- SCÈNE 3D --- */}
        <div className="flex-1 w-full h-[400px]">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
              <mesh>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
              </mesh>
              <Html distanceFactor={10} position={[0, -1.8, 0]}>
                <div className="text-sm text-center text-gray-400">#Arifolio 👩🏻‍💻💻</div>
              </Html>
            </Float>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </motion.div>
    </section>
  )
}

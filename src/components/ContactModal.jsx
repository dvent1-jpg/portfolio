import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass = `w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground
        placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#bfa2f6]
        transition-colors duration-200 text-base`;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[300] flex items-center justify-center p-6"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-white border border-border rounded-3xl p-10 md:p-14 w-full max-w-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <p className="text-4xl mb-6">✌️</p>
                                    <h2 className="text-2xl font-semibold text-foreground mb-3">Message sent.</h2>
                                    <p className="text-muted-foreground">I'll be in touch soon.</p>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <h2 className="text-2xl font-semibold text-foreground mb-2">Get in touch</h2>
                                    <p className="text-muted-foreground mb-10">
                                        I'm currently open to new opportunities.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                        />
                                        <textarea
                                            name="message"
                                            placeholder="What's on your mind?"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className={`${inputClass} resize-none`}
                                        />

                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm">
                                                Something went wrong. Try emailing me directly at dennis.ventrello@gmail.com
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full border-2 border-[#bfa2f6] text-foreground font-semibold
                                                px-8 py-3 rounded-full hover:bg-[#bfa2f6]/10 transition-all duration-300
                                                disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'sending' ? 'Sending…' : 'Send message'}
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;

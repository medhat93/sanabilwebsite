import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, Instagram, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", projectType: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "Our team will reach out within 2 hours." });
    setForm({ name: "", email: "", phone: "", company: "", projectType: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm";

  return (
    <section id="contact" ref={ref} className="py-24 gradient-navy relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to Build Something <span className="text-gradient-gold">Exceptional</span>?
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto text-lg">
            Schedule a free consultation with one of our experts. Let's discuss your project and explore how Sanabil Technologies can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className={inputClass} placeholder="Full Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input className={inputClass} placeholder="Email Address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className={inputClass} placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <input className={inputClass} placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
            </div>
            <select
              className={`${inputClass} appearance-none`}
              value={form.projectType}
              onChange={e => setForm({ ...form, projectType: e.target.value })}
            >
              <option value="">Select Project Type</option>
              <option value="web">Web App</option>
              <option value="mobile">Mobile App</option>
              <option value="enterprise">Enterprise System</option>
              <option value="ai">AI/ML Solution</option>
              <option value="design">UI/UX Design</option>
              <option value="other">Other</option>
            </select>
            <textarea className={`${inputClass} min-h-[120px] resize-none`} placeholder="Message / Project Brief *" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="w-full gradient-gold py-4 rounded-xl font-bold text-accent-foreground hover:scale-[1.02] transition-transform duration-200 gold-glow text-base">
              Request a Meeting
            </button>
            <p className="text-center text-xs text-primary-foreground/40">We typically respond within 2 hours</p>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "contact@sanabiltechnologies.com" },
              { icon: Phone, label: "+1 (555) 123-4567" },
              { icon: MapPin, label: "Dubai, UAE | Cairo, Egypt" },
              { icon: Clock, label: "Sun–Thu, 9AM–6PM (GMT+3) | 24/7 Emergency" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <span className="text-sm text-primary-foreground/70">{item.label}</span>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-all duration-200">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-200 text-sm font-medium mt-4">
              <Calendar size={18} />
              Schedule on Calendly
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react';
import { Mail, ArrowRight, Check, Compass } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function Newsletter() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="enquire" className="relative overflow-hidden py-28 md:py-40">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12877922/pexels-photo-12877922.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/80" />
      </div>

      <div
        ref={ref}
        className={`container-lux relative z-10 max-w-3xl text-center reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-coral-400/50 text-coral-300">
          <Compass size={26} strokeWidth={1.5} />
        </div>
        <p className="eyebrow mb-4">Embark on your next adventure</p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
          Begin your voyage with
          <span className="italic text-coral-300"> Kudanil Explorer</span>
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-white/80">
          Sign up to receive expedition updates, new itineraries, and stories
          from the remote corners of the Indonesian archipelago.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 border border-white/20 bg-ocean-950/60 px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-coral-400"
            />
            <button type="submit" className="btn-coral whitespace-nowrap">
              {submitted ? (
                <>
                  <Check size={16} />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-xs font-light text-white/40">
            By entering your email, you agree to our Privacy Policy, including
            receipt of emails and promotions.
          </p>
        </form>
      </div>
    </section>
  );
}

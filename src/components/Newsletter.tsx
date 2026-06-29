import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';
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
    <section id="enquire" className="bg-sand-100 py-24 md:py-32">
      <div
        ref={ref}
        className={`container-lux max-w-3xl text-center reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400 text-gold-500">
          <Mail size={26} strokeWidth={1.5} />
        </div>
        <p className="eyebrow mb-4">Stay Inspired</p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl">
          Sign up to our newsletter
        </h2>
        <p className="mt-5 text-lg font-light leading-relaxed text-ink-600">
          Be the first to hear about new journeys, exclusive offers, and travel inspiration
          from our experts.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 border border-ink-200 bg-white px-5 py-4 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-gold-500"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
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
          <p className="mt-4 text-xs font-light text-ink-400">
            By entering your email, you agree to our Privacy Policy, including receipt of
            emails and promotions.
          </p>
        </form>
      </div>
    </section>
  );
}

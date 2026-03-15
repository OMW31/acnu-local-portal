import React from 'react';
import { PageHero } from '../components/PageHero';
import { DonationWidget } from '../components/DonationWidget';
import { ShieldCheck, Heart, Users, Globe } from 'lucide-react';

export function DonationPage() {
  return (
    <main className="pb-24">
      <PageHero 
        title="Soutenir l'ACNU" 
        subtitle="Donner pour la paix"
        description="Votre contribution financière est le moteur de nos actions. Chaque franc investi est un pas de plus vers un Cameroun plus solidaire et informé."
      />
      
      <section className="py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Donation Form */}
          <div className="order-2 md:order-1">
            <DonationWidget />
          </div>

          {/* Reassurance & Info */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-display font-bold mb-8">Pourquoi donner à l'ACNU ?</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-10">
              En tant qu'association à but non lucratif, l'ACNU repose sur la générosité de ses membres et de ses partenaires pour maintenir son indépendance et la gratuité de ses programmes éducatifs.
            </p>

            <div className="space-y-8">
              {[
                { 
                  title: 'Transparence Totale', 
                  desc: 'Chaque année, nous publions un rapport financier détaillé accessible à tous nos donateurs.',
                  icon: ShieldCheck 
                },
                { 
                  title: 'Impact Direct', 
                  desc: '90% de vos dons sont directement injectés dans nos projets de terrain (Maison des Jeunes, ACNU Media).',
                  icon: Heart 
                },
                { 
                  title: 'Éducation Civique', 
                  desc: 'Vous financez la formation de milliers de jeunes camerounais aux enjeux de demain.',
                  icon: Globe 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-brand-secondary/30 border border-brand-border">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-brand-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-[2rem] border-2 border-dashed border-brand-border text-center">
              <p className="text-sm font-mono uppercase tracking-widest text-brand-text-muted mb-4">Besoin d'aide ?</p>
              <p className="font-bold">Contactez notre service donateurs :</p>
              <p className="text-brand-accent text-xl font-display">donations@acnu-cameroon.org</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Sectors from '@/components/Sectors';
import Markets from '@/components/Markets';
import Escrow from '@/components/Escrow';
import FAQ from '@/components/FAQ';
import RequestForm from '@/components/RequestForm';
import Footer from '@/components/Footer';
import { FormProvider } from '@/lib/FormContext';

export default function Home() {
  return (
    <FormProvider>
      <main className="relative min-h-screen overflow-x-hidden bg-white">
        <Header />
        <Hero />
        <Process />
        <Sectors />
        <Markets />
        <Escrow />
        <FAQ />
        <RequestForm />
        <Footer />
      </main>
    </FormProvider>
  );
}

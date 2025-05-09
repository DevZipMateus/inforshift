import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const Partner = () => {
  const navigate = useNavigate();
  return <section id="partner" className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div className="w-full lg:w-1/2" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkgray-700">
              Nossa <span className="text-turquoise">Parceira</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Conheça a Premium Contábil, nossa parceira estratégica que oferece serviços contábeis de qualidade para complementar nossas soluções tecnológicas.
            </p>
            <Button onClick={() => navigate('/parceiro')} className="bg-turquoise hover:bg-turquoise-600 text-white">
              Saiba Mais
            </Button>
          </motion.div>
          
          <motion.div className="w-full lg:w-1/2 flex justify-center" initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <img alt="Premium Contábil" className="max-w-full h-auto max-h-80 object-contain" src="/lovable-uploads/b5a81fce-c066-407a-98ee-db22e2901c07.png" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Partner;
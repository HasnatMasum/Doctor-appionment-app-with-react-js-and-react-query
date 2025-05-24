import { motion, useScroll, useTransform } from "framer-motion";
const Doctor = ({ img, name, speciality }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col border-2 border-violet-200 rounded-md"
    >
      <img src={img} alt={name} className="bg-violet-200" />
      <div className="p-3">
        <p className="text-sm text-green-500">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>
          Available
        </p>
        <h3 className="text-lg mt-2">{name}</h3>
        <p className="text-gray-500">{speciality}</p>
      </div>
    </motion.div>
  );
};

export default Doctor;

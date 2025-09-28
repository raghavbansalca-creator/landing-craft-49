import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    name: "CA Raghav Bansal",
    role: "Ex-KPMG & Grant Thornton",
    credentials: "Chartered Accountant",
    description: "Decade long experience in audit and transaction advisory. Industries catered includes Aviation, Food & Beverage, Consumer markets, Infrastructure and Real Estate, Industrial markets etc. Has expertise in Corporate structuring, IFC, Assurance, Financial Modelling",
    linkedin: "#",
    email: "raghav@company.com"
  },
  {
    name: "CA Sashank Tiwari",
    role: "FCA, DISA",
    credentials: "Fellow Chartered Accountant", 
    description: "He is a distinguished Chartered Accountant, boasts over a decade of expertise in government and bank audits. With a career kickstarted in 2008 he has specialised in direct and Indirect taxation with core focus on litigation on GST matters.",
    linkedin: "#",
    email: "sashank@company.com"
  }
];

const TeamLeads = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-secondary rounded-full px-4 py-1.5 text-primary text-sm font-medium mb-6">
            Our Leadership
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Experienced professionals dedicated to driving your business forward with innovative solutions and strategic insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl shadow-lg p-8 border border-border transition-all duration-300"
            >            
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.credentials}</p>
                <p className="text-muted-foreground font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{member.description}</p>
                
                <div className="flex justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={member.linkedin}
                    className="p-2 bg-secondary text-primary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${member.email}`}
                    className="p-2 bg-secondary text-primary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamLeads;
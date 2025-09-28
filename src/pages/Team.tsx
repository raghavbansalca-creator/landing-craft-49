import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';

const TeamLeads = () => {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Chief Executive Officer",
            description: "15+ years in strategic consulting with Fortune 500 companies. Led transformative initiatives across multiple industries.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
        },
        {
            name: "Michael Chen",
            role: "Chief Technology Officer",
            description: "Former Silicon Valley tech executive with expertise in digital transformation and enterprise systems.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
        },
        {
            name: "Emily Rodriguez",
            role: "Chief Financial Officer",
            description: "CPA with 12+ years in corporate finance and business optimization. Expert in financial modeling and analysis.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];

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
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
                        <Users className="w-4 h-4 inline mr-2" />
                        Leadership Team
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Meet Our Leaders
                    </h2>
                    <p className="text-xl text-gray-600">
                        Experienced professionals dedicated to driving your business success through strategic insights and innovative solutions.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <div className="relative">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-600 mb-6">{member.description}</p>
                                
                                <div className="flex space-x-3">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TeamLeads;
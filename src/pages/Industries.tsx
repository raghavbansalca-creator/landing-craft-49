import { motion } from 'framer-motion';
import { 
    Building, 
    ShoppingCart, 
    Stethoscope, 
    GraduationCap, 
    Wrench, 
    Truck,
    Banknote,
    Zap
} from 'lucide-react';

const IndustriesSection = () => {
    const industries = [
        {
            icon: <Building className="w-12 h-12 text-blue-500" />,
            title: "Real Estate",
            description: "Property management optimization, investment analysis, and portfolio growth strategies."
        },
        {
            icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
            title: "E-commerce & Retail",
            description: "Supply chain optimization, inventory management, and digital transformation initiatives."
        },
        {
            icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
            title: "Healthcare",
            description: "Operational efficiency, compliance management, and technology integration solutions."
        },
        {
            icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
            title: "Education",
            description: "Institution management, process automation, and financial planning for educational organizations."
        },
        {
            icon: <Wrench className="w-12 h-12 text-blue-500" />,
            title: "Manufacturing",
            description: "Production optimization, quality control systems, and lean manufacturing implementation."
        },
        {
            icon: <Truck className="w-12 h-12 text-blue-500" />,
            title: "Logistics & Transportation",
            description: "Route optimization, fleet management, and supply chain efficiency improvements."
        },
        {
            icon: <Banknote className="w-12 h-12 text-blue-500" />,
            title: "Financial Services",
            description: "Risk management, compliance systems, and operational process improvements."
        },
        {
            icon: <Zap className="w-12 h-12 text-blue-500" />,
            title: "Technology",
            description: "Startup scaling, operational frameworks, and growth strategy implementation."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block bg-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
                        Industries We Serve
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Expertise Across Industries
                    </h2>
                    <p className="text-xl text-gray-600">
                        Our diverse experience spans multiple sectors, allowing us to bring cross-industry insights to every engagement.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.02,
                                transition: { duration: 0.3 } 
                            }}
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 cursor-pointer group"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                                className="mb-4 group-hover:scale-110 transition-transform duration-300"
                            >
                                {industry.icon}
                            </motion.div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {industry.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                {industry.description}
                            </p>
                            
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors ml-auto"
                            >
                                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl border border-gray-100">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                                <div className="text-gray-600">Industries Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">335+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                                <div className="text-gray-600">Countries Reached</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default IndustriesSection;
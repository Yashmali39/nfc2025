import { motion } from "framer-motion";
import { Shield, Heart, Calendar, Phone } from "lucide-react";

// Import all images from assets
import doctorPatientConsultation from "../assets/doctor-patient-consultation.png";
import healthcareServices from "../assets/hero.jpg";
import colorfulProduce from "../assets/colorful-produce.png";
import outdoorExercise from "../assets/outdoor-exercise.png";
import peacefulBedroom from "../assets/peaceful-bedroom.png";
import healthcareCollaboration from "../assets/healthcare-collaboration.png";
import smilingBusinessman from "../assets/smiling-businessman.png";
import placeholder from "../assets/placeholder.png";

const Home = () => {
  const NewsCard = ({ image, category, title, readTime }) => (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={image || placeholder}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-blue-600 font-semibold text-sm">{category}</span>
          <span className="text-gray-500 text-sm">{readTime}</span>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h4>
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition">Read More →</button>
      </div>
    </motion.div>
  );
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Shield className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">CERTIFIED HEALTHCARE PARTNER</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Expert Health Consultations <span className="text-blue-600">Anytime, Anywhere</span>
            </motion.h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Access top-tier health care, advice from the comfort of your home or on the go. Our platform offers 24/7
              consultations with certified healthcare professionals.
            </p>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={doctorPatientConsultation}
                alt="Doctor consultation"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">24/7 Available</p>
                    <p className="text-gray-500 text-xs">Instant consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src={healthcareServices}
                alt="Family Health Dashboard"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <div className="lg:w-1/2">
              <div className="mb-4">
                <span className="text-blue-600 font-semibold">FAMILY HEALTH CARE</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Centralized Health Dashboard for Your Entire Family
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Manage medical records, track vitals, set medication reminders, and connect with doctors—all in one secure space. Empower every family member with AI-driven health agents for smarter, preventive care.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Health Agents</h4>
                  <p className="text-gray-600 text-sm">
                    Each family member is paired with an AI assistant to monitor vitals, medications, and raise proactive alerts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Reminders & Reports</h4>
                  <p className="text-gray-600 text-sm">
                    Stay updated on medication doses, appointments, and view health trends with visual insights.
                  </p>
                </div>
              </div>

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Explore Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Health News Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Health News and Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest health advice, expert articles, and practical tips to keep you and your
              family healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              image={colorfulProduce}
              category="Nutrition"
              title="Boost Your Immunity with These Superfoods"
              readTime="5 min read"
            />
            <NewsCard
              image={outdoorExercise}
              category="Exercise"
              title="The Benefits of Regular Exercise for Mental Health"
              readTime="7 min read"
            />
            <NewsCard
              image={peacefulBedroom}
              category="Wellness"
              title="Healthy Sleep Habits: Tips for a Restful Night"
              readTime="4 min read"
            />
          </div>
        </div>
      </section>

      {/* Wellness Together Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Creating Wellness Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of healthcare professionals and patients working together to build a healthier future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={healthcareCollaboration}
              alt="Healthcare collaboration"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover Our Collaborations</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Together, we work to bring the health care industry, providers and patients together, and to expand access
              and improve health outcomes. Discover how we're building a healthier future through innovative
              partnerships and community-focused health care.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">Learn More →</button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <img
                src={smilingBusinessman}
                alt="John Dayne testimonial"
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="mb-4">
                <span className="text-blue-600 font-semibold">OUR TESTIMONIALS</span>
              </div>
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                "HealTrust Has Been A Lifesaver For Me. The Ability To Consult With A Doctor Anytime, Anywhere Has Made
                Managing My Health So Much Easier. The Doctors Are Professional And Compassionate, And Always Take The
                Time To Answer All My Questions."
              </blockquote>
              <div>
                <p className="font-bold text-gray-900">John Dayne</p>
                <p className="text-gray-600">Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Master Your Wellness, Live Fully</h3>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            By combining healthy habits and embracing positive lifestyle goals, you can achieve optimal wellness and
            live your best life.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg">
            Discover Your Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">HealTrust</span>
              </div>
              <p className="text-gray-400 mb-4">Supporting Your Wellness Journey</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">About HealTrust</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Employees</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Employee Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-HEALTRUST</li>
                <li>support@healtrust.com</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HealTrust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default Home;
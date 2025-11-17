import React from 'react';
import { Users, Calendar, CheckSquare, BarChart3, Bell, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const WhyThisApp = () => {
  const features = [
    {
      icon: Cloud,
      title: "All Data in Cloud",
      description: "Access your college data anytime, anywhere. No more paperwork or lost records.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Stay updated with real-time alerts about club events, announcements, and important updates.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckSquare,
      title: "Smart Attendance",
      description: "Teachers can mark attendance digitally. Students can track their attendance in real-time.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Never miss a club event or competition. Get reminders and register with a single tap.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Customized dashboards for students, teachers, and administrators. Everyone gets what they need.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Principals can monitor college performance, attendance trends, and student engagement instantly.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      {/* navbar */}
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why This App?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A unified cloud-based solution that connects students, teachers, and administrators
              for seamless college management
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:shadow-2xl transition-shadow duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Role-Specific Benefits */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Built For Everyone
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">For Students</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Check attendance instantly</li>
                  <li>Discover club events</li>
                  <li>Receive important alerts</li>
                  <li>Access resources 24/7</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">For Teachers</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Mark attendance digitally</li>
                  <li>Track student performance</li>
                  <li>Share announcements</li>
                  <li>Manage class schedules</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-4">
                  <span className="text-2xl">👔</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">For Principals</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Monitor college operations</li>
                  <li>View analytics dashboards</li>
                  <li>Track attendance trends</li>
                  <li>Make data-driven decisions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-8">
              Join the future of college management
            </p>
            <Link to={"/"} className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
      </>
      );
};

      export default WhyThisApp;
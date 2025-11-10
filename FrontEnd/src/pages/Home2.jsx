import React, { useEffect, useState, useRef } from 'react'
import { Loader } from 'lucide-react'
import Navbar from '../components/Navbar';

const Home2 = () => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: ""
  });

  // Interactive Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceX = dx / distance;
          const forceY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          
          this.x -= forceX * force * 5;
          this.y -= forceY * force * 5;
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles
    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 - distance / 600})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#e0e7ff');
      gradient.addColorStop(0.5, '#f3e8ff');
      gradient.addColorStop(1, '#fae8ff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connect();
      requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handle_change = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handle_submit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef}
        className='fixed top-0 left-0 w-full h-full -z-10'
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className='w-full h-screen fixed z-50 bg-white/20 backdrop-blur-md flex items-center justify-center'>
          <Loader className='w-16 h-16 animate-spin text-indigo-600' />
        </div>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className='w-full flex px-4 py-8 flex-col items-center'>
        {/* College Info */}
        <div className='w-full max-w-md py-8 mt-3 rounded-2xl bg-white/60 backdrop-blur-lg shadow-2xl'>
          <div className='w-32 h-32 mx-auto overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl flex items-center justify-center'>
            <span className='text-6xl overflow-hidden'>
                <img className='w-full h-full' src="/images/arya.webp" alt="arya" />
            </span>
          </div>
          <div className='text-center font-bold text-2xl mt-6 text-gray-800 px-4'>
            Arya College Of Engineering and I.T.
          </div>
        </div>

        {/* Login Form */}
        <div className='w-full max-w-md my-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-2xl overflow-hidden'>
          <div className='flex justify-center'>
            <span className='bg-indigo-600 text-white rounded-b-3xl font-bold px-8 py-3 shadow-lg'>
              Log In
            </span>
          </div>

          <div className='p-8'>
            <div className='space-y-6'>
              {/* Role Selection */}
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>You are a</label>
                <select 
                  className='w-full border-2 border-indigo-300 rounded-xl px-4 py-3 bg-white/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all' 
                  name="role" 
                  id="role"
                  value={formData.role}
                  onChange={handle_change}
                >
                  <option value="none">Select Role</option>
                  <option value="student">Student</option>
                  <option value="manager">Manager</option>
                  <option value="principal">Principal</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>

              {/* Username */}
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>Username</label>
                <input 
                  className='w-full border-2 border-indigo-300 rounded-xl px-4 py-3 bg-white/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all' 
                  name='username' 
                  type="text" 
                  placeholder='Enter username'
                  value={formData.username}
                  onChange={handle_change}
                />
              </div>

              {/* Password */}
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>Password</label>
                <input 
                  className='w-full border-2 border-indigo-300 rounded-xl px-4 py-3 bg-white/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all' 
                  name='password' 
                  type="password" 
                  placeholder='Enter password'
                  value={formData.password}
                  onChange={handle_change}
                />
              </div>

              {/* Submit Button */}
              <div className='flex justify-center pt-2'>
                <button 
                  onClick={handle_submit}
                  className='px-8 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200'
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900/90 backdrop-blur-sm text-gray-400 text-sm py-4 text-center mt-auto">
        © {new Date().getFullYear()} MyCollegeApp · All rights reserved
      </footer>
    </div>
  );
};

export default Home2;
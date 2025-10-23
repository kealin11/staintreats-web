import { useNavigate } from 'react-router-dom';
import { FaBrain } from 'react-icons/fa';
import { BicepsFlexed, ClockAlert, Frown, Speech } from 'lucide-react';

const Strokes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F9FF]">
      {/* WELCOME BANNER */}
      <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/work 2.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Small Label */}
          <span className="bg-white text-black text-sm md:text-base font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-8 inline-block">
            <div>
              <FaBrain className="w-8 h-8 mx-auto" />
            </div>
          </span>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Understanding Stroke
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Comprehensive information about stroke prevention, symptoms, and treatment
          </p>
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-colors duration-200 flex items-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto">

      <div className="space-y-16">
        {/* What is a Stroke Section */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
              <FaBrain className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What is a Stroke?</h2>
          </div>
          <div className="prose max-w-none text-gray-600 text-lg leading-relaxed">
            <p>
              A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes, making stroke a medical emergency that requires prompt treatment.
            </p>
          </div>
        </section>

        {/* Types of Stroke Section */}
        <section>
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-lg font-semibold">
              Types of Stroke
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                <h3 className="text-xl font-bold text-white">Ischemic Stroke</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  The most common type, accounting for about 87% of all strokes. Occurs when a blood clot blocks or narrows an artery leading to the brain, cutting off blood flow to brain tissue.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <h3 className="text-xl font-bold text-white">Hemorrhagic Stroke</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  Occurs when a blood vessel in the brain leaks or ruptures, often due to uncontrolled high blood pressure or aneurysms, leading to bleeding in or around the brain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAST Warning Signs Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Warning Signs</h2>
            <div className="text-4xl font-extrabold text-blue-700">Remember FAST</div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0"><Frown /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Face Drooping</h3>
                <p className="text-gray-600">Does one side of the face droop or is it numb? Ask the person to smile.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0"><BicepsFlexed /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Arm Weakness</h3>
                <p className="text-gray-600">Is one arm weak or numb? Ask the person to raise both arms.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0"><Speech /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Speech Difficulty</h3>
                <p className="text-gray-600">Is speech slurred, are they unable to speak, or hard to understand?</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <div className="bg-red-100 text-red-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0"><ClockAlert /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Time to Act Fast</h3>
                <p className="text-gray-600">If someone shows any of these symptoms, call emergency services immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Factors Section */}
        <section className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Risk Factors</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Lifestyle Factors
              </h3>
              <ul className="space-y-3">
                {['High blood pressure', 'Smoking or exposure to secondhand smoke', 'High cholesterol', 'Diabetes', 'Obesity', 'Physical inactivity'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Other Factors
              </h3>
              <ul className="space-y-3">
                {['Age (55 or older)', 'Family history of stroke', 'Prior stroke, TIA, or heart attack', 'COVID-19 infection'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Prevention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Take control of your health with these preventive measures</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Blood Pressure', 
                items: ['Monitor regularly', 'Follow treatment plans', 'Reduce sodium intake'] 
              },
              { 
                title: 'Healthy Diet', 
                items: ['Eat more fruits/vegetables', 'Choose whole grains', 'Limit saturated fats'] 
              },
              { 
                title: 'Active Lifestyle', 
                items: ['30 min exercise daily', 'Take walking breaks', 'Stay active daily'] 
              },
              { 
                title: 'Healthy Habits', 
                items: ['Quit smoking', 'Limit alcohol', 'Manage stress'] 
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Information Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Emergency Information</h2>
                  <p className="text-red-100 text-lg mb-6">
                    If you or someone else is experiencing stroke symptoms, call emergency services immediately. Every minute counts in stroke treatment.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="tel:10177" 
                      className="inline-flex items-center bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Ambulance: 10177
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-3">Recognize the Signs</h3>
                  <ul className="space-y-2 text-red-100">
                    <li className="flex items-start">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">!</span>
                      <span>Sudden numbness or weakness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">!</span>
                      <span>Confusion or trouble speaking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">!</span>
                      <span>Vision problems in one or both eyes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">!</span>
                      <span>Severe headache with no known cause</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Strokes;

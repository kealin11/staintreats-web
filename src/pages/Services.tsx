import { FaBrain, FaHeartbeat, FaEye, FaSearch, FaShieldAlt, FaClock, FaStethoscope } from 'react-icons/fa';
import { SiSpine } from "react-icons/si";
import { Link } from 'react-router-dom';

const Services = () => {
    const brainServices = [
      {
        title: 'Brain Aneurysm Coiling & Flow Diversion',
        description: 'Balloon-like bulges in brain arteries can rupture and cause life-threatening bleeding. We offer minimally invasive treatment using coils or flow diverters to safely seal off aneurysms and prevent rupture.',
        icon: <FaBrain className="w-8 h-8" style={{ color: 'var(--color-error-500)' }} />,
        features: [
          'Minimally Invasive Coiling',
          'Flow Diversion Technology'
        ],
        category: 'brain'
      },
      {
        title: 'Arteriovenous Malformations (AVM)',
        description: 'AVMs are abnormal tangles of arteries and veins that disrupt normal blood flow. Embolization is performed to block off these vessels, either as standalone therapy or as preparation for surgery or radiosurgery.',
        icon: <FaHeartbeat className="w-8 h-8" style={{ color: 'var(--color-primary-600)' }} />,
        features: [
          'Endovascular Embolization',
          'Pre-surgical Preparation'
        ],
        category: 'brain'
      },
      {
        title: 'Ischemic Stroke Intervention',
        description: 'When a blood clot blocks a brain artery, every minute counts. Our stroke team performs mechanical thrombectomy to rapidly remove the clot and restore brain perfusion, significantly improving outcomes.',
        icon: <FaClock className="w-8 h-8" style={{ color: 'var(--color-warning-500)' }} />,
        features: [
          'Emergency Thrombectomy',
          'Rapid Clot Removal'
        ],
        category: 'brain'
      },
      {
        title: 'Carotid Artery Stenting',
        description: 'Narrowing of the carotid artery increases the risk of stroke. We place a stent to open the artery and maintain blood flow to the brain, reducing the chance of future strokes.',
        icon: <FaShieldAlt className="w-8 h-8" style={{ color: 'var(--color-primary-500)' }} />,
        features: [
          'Stroke Prevention',
          'Arterial Stenting'
        ],
        category: 'brain'
      },
      {
        title: 'Venous Sinus Stenting for IIH',
        description: 'Patients with Idiopathic Intracranial Hypertension (IIH) may experience vision loss or headaches due to narrowed brain venous sinuses. A venous stent restores proper drainage and lowers pressure.',
        icon: <FaEye className="w-8 h-8" style={{ color: 'var(--color-success-600)' }} />,
        features: [
          'Vision Preservation',
          'Pressure Relief'
        ],
        category: 'brain'
      }
    ];

    const spinalServices = [
      {
        title: 'Spinal Dural Arteriovenous Fistula (SDAVF)',
        description: 'This rare condition causes abnormal blood flow in the spinal cord, leading to weakness or numbness. Endovascular embolization or surgery is used to disconnect the fistula and restore normal circulation.',
        icon: <SiSpine className="w-8 h-8" style={{ color: 'var(--color-primary-700)' }} />,
        features: [
          'Fistula Disconnection',
          'Circulation Restoration'
        ],
        category: 'spinal'
      },
      {
        title: 'CSF-Venous Fistula Embolization',
        description: 'In cases of persistent spinal CSF leaks causing debilitating headaches, we use advanced imaging to localize the leak and embolize the fistula, offering long-term relief.',
        icon: <FaSearch className="w-8 h-8" style={{ color: 'var(--color-success-500)' }} />,
        features: [
          'Advanced Leak Localization',
          'Long-term Relief'
        ],
        category: 'spinal'
      }
    ];

    const additionalServices = [
      {
        title: 'Dural Arteriovenous Fistula (dAVF)',
        description: 'This condition involves abnormal artery-to-vein connections in the brain lining (dura). Left untreated, it may lead to hemorrhage or neurological symptoms. Endovascular embolization safely seals off these connections.',
        icon: <FaStethoscope className="w-8 h-8" style={{ color: 'var(--color-error-600)' }} />,
        features: [
          'Hemorrhage Prevention',
          'Neurological Protection'
        ],
        category: 'brain'
      }
    ];


    return (
      <div className="min-h-screen bg-[#F4F9FF] section-spacing">
        {/* WELCOME BANNER */}
        <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/candit 3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <span className="bg-white text-black text-sm md:text-base font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-8 inline-block">
            <div>
              <FaBrain className="w-8 h-8" />
            </div>
          </span>

          <div className="text-center mb-16">
            <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
              Advanced Neurovascular & Spinal Interventions
            </h1>
            <p className="text-xl text-navy-100 max-w-4xl mx-auto">
              Delivering cutting-edge, minimally invasive treatments for complex neurological conditions with precision, expertise, and compassionate care for optimal patient outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="container-medical">
        {/*Button to Strokes Page*/}
        <div className="w-full flex justify-center mb-16 mt-8">
          <Link
            to="/strokes"
            className="relative inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:from-blue-700 hover:to-blue-600"
          >
            <FaHeartbeat className="w-6 h-6 mr-3 animate-pulse" />
            Learn More About Stroke 
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-25 transition-opacity"></span>
          </Link>
        </div>

        {/* Brain Interventions Section */}
        <div className="section-spacing-sm">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center px-6 py-3 rounded-full" 
                 style={{ background: `linear-gradient(135deg, var(--color-error-500), var(--color-error-600))`, color: 'white' }}>
              <FaBrain className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Brain Interventions</h2>
            </div>
          </div>
          
          <div className="space-y-8">
            {brainServices.concat(additionalServices.filter(s => s.category === 'brain')).map((service, index) => (
              <div key={index} className="card-service">
                <div className="flex flex-col lg:flex-row">
                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="service-icon mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-medical-primary">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-medical-secondary mb-8 text-lg">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-medical-primary mb-3 text-lg">Key Procedures</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-medical-secondary">
                              <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0 bg-medical-gradient"></div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-medical-primary mb-3 text-lg">Benefits</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center text-medical-secondary">
                            <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0" 
                                 style={{ background: `linear-gradient(135deg, var(--color-success-500), var(--color-success-600))` }}></div>
                            <span className="font-medium">Minimally Invasive Approach</span>
                          </li>
                          <li className="flex items-center text-medical-secondary">
                            <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0" 
                                 style={{ background: `linear-gradient(135deg, var(--color-success-500), var(--color-success-600))` }}></div>
                            <span className="font-medium">Faster Recovery Time</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Image section removed */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spinal Interventions Section */}
        <div className="section-spacing-sm">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center px-6 py-3 rounded-full" 
                 style={{ background: `linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700))`, color: 'white' }}>
              <SiSpine className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Spinal Interventions</h2>
            </div>
          </div>
          
          <div className="space-y-8">
            {spinalServices.map((service, index) => (
              <div key={index} className="card-service">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="service-icon mr-4">{service.icon}</div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-medical-primary">{service.title}</h3>
                    </div>
                    <p className="text-medical-secondary mb-8 text-lg">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-medical-primary mb-3 text-lg">Key Procedures</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-medical-secondary">
                              <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0 bg-medical-gradient"></div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-medical-primary mb-3 text-lg">Benefits</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center text-medical-secondary">
                            <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0" 
                                 style={{ background: `linear-gradient(135deg, var(--color-success-500), var(--color-success-600))` }}></div>
                            <span className="font-medium">Advanced Imaging Guidance</span>
                          </li>
                          <li className="flex items-center text-medical-secondary">
                            <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0" 
                                 style={{ background: `linear-gradient(135deg, var(--color-success-500), var(--color-success-600))` }}></div>
                            <span className="font-medium">Precise Treatment Delivery</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Image section removed */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Specialized Services Section */}
        <div className="section-spacing-sm">
          <div className="text-center mb-12">
            <h2 className="text-medical-primary mb-4">Specialized Treatments</h2>
            <p className="text-lg text-medical-secondary max-w-3xl mx-auto">
              Advanced interventions for complex neurological conditions requiring specialized expertise and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 border border-orange-100" 
                 style={{ borderRadius: 'var(--radius-3xl)', background: `linear-gradient(135deg, var(--color-warning-50), var(--color-warning-100))` }}>
              <div className="flex items-center mb-4">
                <FaClock className="w-6 h-6 mr-3" style={{ color: 'var(--color-warning-600)' }} />
                <h3 className="text-xl font-bold text-medical-primary">Treatment of Low Pressure Headaches</h3>
              </div>
              <p className="text-medical-secondary mb-4">
                Caused by cerebrospinal fluid (CSF) leaks, these headaches worsen when upright. We identify the leak and use targeted fibrin glue or embolization techniques to seal it and relieve symptoms.
              </p>
              <div className="flex items-center font-semibold" style={{ color: 'var(--color-warning-600)' }}>
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--color-warning-500)' }}></div>
                Targeted CSF Leak Repair
              </div>
            </div>

            <div className="p-8 border" 
                 style={{ borderRadius: 'var(--radius-3xl)', background: `linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100))`, borderColor: 'var(--color-primary-200)' }}>
              <div className="flex items-center mb-4">
                <FaHeartbeat className="w-6 h-6 mr-3" style={{ color: 'var(--color-primary-600)' }} />
                <h3 className="text-xl font-bold text-medical-primary">Chronic Subdural Hematoma Embolization</h3>
              </div>
              <p className="text-medical-secondary mb-4">
                A buildup of blood under the brain's surface can cause chronic symptoms, especially in the elderly. Middle meningeal artery embolization (MMAE) reduces recurrence risk after surgery or may prevent surgery altogether.
              </p>
              <div className="flex items-center font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--color-primary-500)' }}></div>
                Surgery-Sparing Treatment
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20">
          <div className="w-full">
            <div className="hero-gradient p-8 md:p-16 text-center text-white relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Expert Care for Complex Conditions
                </h2>
                <p className="text-xl mb-10" style={{ color: 'var(--color-primary-100)' }}>
                  Our specialized team combines advanced imaging technology with minimally invasive techniques to provide world-class neurovascular care. Every treatment is tailored to your unique condition for the best possible outcomes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/contact">
                    <button className="btn-primary transform hover:scale-105 shadow-lg">
                      Schedule Consultation
                    </button>
                  </Link>
                </div>
                
                <div className="mt-12 p-6 rounded-2xl backdrop-blur-sm" 
                     style={{ backgroundColor: 'color-mix(in oklch, white 20%, transparent)' }}>
                  <p className="text-lg font-semibold mb-2 text-white text-shadow-lg">24/7 Emergency Stroke & Aneurysm Care</p>
                  <p style={{ color: 'var(--color-primary-100)' }}>
                    Our interventional neuroradiology team is available around the clock for urgent cases requiring immediate intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 text-center">
          <h2 className="text-medical-primary mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-card">
              <div className="service-icon mx-auto mb-4">
                <FaStethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-medical-primary mb-3">Multidisciplinary Expertise</h3>
              <p className="text-medical-secondary">Collaboration between neurologists, neurosurgeons, and interventional radiologists for comprehensive patient care.</p>
            </div>
            
            <div className="stat-card">
              <div className="service-icon mx-auto mb-4" 
                   style={{ background: `linear-gradient(135deg, var(--color-success-50), var(--color-success-100))` }}>
                <FaShieldAlt className="w-8 h-8" style={{ color: 'var(--color-success-600)' }} />
              </div>
              <h3 className="text-xl font-bold text-medical-primary mb-3">Minimally Invasive</h3>
              <p className="text-medical-secondary">Faster recovery times and fewer complications through advanced endovascular techniques.</p>
            </div>
            
            <div className="stat-card">
              <div className="service-icon mx-auto mb-4" 
                   style={{ background: `linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100))` }}>
                <FaSearch className="w-8 h-8" style={{ color: 'var(--color-primary-600)' }} />
              </div>
              <h3 className="text-xl font-bold text-medical-primary mb-3">State-of-the-Art Technology</h3>
              <p className="text-medical-secondary">High-resolution imaging and precision navigation systems for optimal treatment accuracy.</p>
            </div>

            <div className="stat-card">
              <div className="service-icon mx-auto mb-4" 
                   style={{ background: `linear-gradient(135deg, var(--color-success-50), var(--color-success-100))` }}>
                <FaHeartbeat className="w-8 h-8" style={{ color: 'var(--color-success-600)' }} />
              </div>
              <h3 className="text-xl font-bold text-medical-primary mb-3">Patient-Centered Care</h3>
              <p className="text-medical-secondary">Individualized assessment and long-term follow-up to ensure the best possible outcomes.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

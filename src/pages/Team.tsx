
const Team = () => {
  const doctors = [
    { 
      name: "Dr. Moaaz Valli Omar", 
      title: "Neuroradiologist", 
      img: "/IMG_4687.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Nomfundo Matebula", 
      title: "Interventional Radiographer", 
      img: "/IMG_4712.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Tshepo Tladi", 
      title: "Interventional Radiographer", 
      img: "/IMG_4749.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Lerato Dontsa", 
      title: "Clinical Associate", 
      img: "/IMG_4729.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Mpufmelo Rikhotso", 
      title: "Interventional Radiographer", 
      img: "/IMG_4701.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Monique Daniels", 
      title: "Interventional Radiographer", 
      img: "/Monique 1.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Celenkosi Malinga", 
      title: "Interventional Radiographer", 
      img: "/IMG_4771.jpg",
      linkedin: "https://www.linkedin.com/in/celenkosini-malinga-33a527184/"
    },
    { 
      name: "Sjabuliso Mavuso", 
      title: "Interventional Radiographer", 
      img: "/IMG_4719.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
    { 
      name: "Nompumelelo Dube", 
      title: "Anesthticist Nurse", 
      img: "/IMG_4778.jpg",
      linkedin: "https://www.linkedin.com/company/milpark-radiology-inc/"
    },
  ];

  return (
    <div className="pt-24 bg-[#F9FAFB]">
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1E293B] mb-12">
          Meet Our Team of{" "}
          <span className="text-[#2563EB]">Health Professionals</span>
        </h2>

        {/* Wider, shorter cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doc, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              {/* Shorter, wider image */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              {/* Text Box */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-sm md:text-base font-medium text-[#2563EB] mb-5">{doc.title}</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1E293B]">{doc.name}</h3>

                {/* LinkedIn Link */}
                <div className="mt-4">
                  <a 
                    href={doc.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2563EB] hover:underline font-medium"
                  >
                    View LinkedIn Profile →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;

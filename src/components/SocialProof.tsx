// src/components/SocialProof.tsx
import React from 'react';

interface LinkedInCardProps {
  author: string;
  profilePic: string;
  content: string;
  date: string;
  postUrl: string;
}

const LinkedInCard: React.FC<LinkedInCardProps> = ({ author, profilePic, content, date, postUrl }) => {
  return (
    <a 
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-lg p-6 h-fit cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl hover:bg-gray-50"
    >
      {/* Author info */}
      <div className="flex items-center mb-3">
        <img 
          src={profilePic} 
          alt={author} 
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{author}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      {/* Post content */}
      <p className="text-gray-800 mb-3 whitespace-pre-line">{content}</p>
      
      {/* LinkedIn icon */}
      <div className="flex justify-end mt-auto">
        <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      </div>
    </a>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
    <div className="container mx-auto px-4">
        {/* Central message */}
        <div className="text-center mb-12 sm:mb-20 px-4">
          <h2 className="text-3xl sm:text-5xl text-gray-700 font-medium mb-4 sm:mb-6">
            Want Morocco to accelerate?<br />
            Remove Friction!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Simplify building in Morocco and see a generation of ambition flourish
          </p>
        </div>

        {/* LinkedIn posts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto px-4">
          <LinkedInCard 
            author="Amine Aboulfeth"
            profilePic="/images/amine-aboulfeth.jpeg"
            content={"Our system is completely broken.\n\nA tous les niveaux.\n\nJe n'en dirais pas plus."}
            date="October 21, 2024"
            postUrl="https://www.linkedin.com/posts/aboulfeth_our-system-is-completely-broken-a-tous-activity-7247266027766476803-ekAJ"
          />
          <LinkedInCard 
            author="Ghita Mezzour, PhD"
            profilePic="/images/ghita-mezzour.jpeg"
            content={"المقاولات المغربية الناشئة هي المحرك الأساسي لعصر جديد شعاره الابتكار. لنعمل جميعاً من أجل تألق إمكانيات وكفاءات بلادنا.\n\nMoroccan startups are the driving force of a new era, an era of innovation. Let us all work together to strengthen our country's potentials and talents."}
            date="September 17, 2024"
            postUrl="https://www.linkedin.com/posts/ghita-mezzour-phd-a6b1225_digitalmorocco2030-techforgood-innovationmaroc-activity-7242215840366931968-44K_"
          />  
          <LinkedInCard 
            author="Faycal CHRAIBI"
            profilePic="/images/faycal-chraibi.jpeg"
            content={"Les entrepreneurs marocains doivent s'ériger la mission de prouver l'attractivité du pays, de ses entreprises et de ses startups.\n\n[...] Portons haut nos étendards et montrons, à travers nos créations, la marque Maroc 🇲🇦."}
            date="September 14, 2024"
            postUrl="https://www.linkedin.com/posts/fchraibi_agenceecofin-activity-7238463229759270912-amBT"
          />
          <LinkedInCard 
            author="Hicham CHIGUER"
            profilePic="/images/hicham-chiguer.jpeg"
            content={"[...] I emphasize that a solid strategy on paper is not enough — execution is key to truly transform Morocco's digital landscape."}
            date="March 19, 2024"
            postUrl="https://www.linkedin.com/posts/hicham-chiguer-03a00723_maroc-digital-activity-7272249557302886400-MXCf"
          />
          <LinkedInCard
            author="Youssef TABALI"
            profilePic="/images/youssef-tabali.jpeg"
            content={"يجب أن نكون أكثر تواضعاً ونعترف بوجود مشاكل جوهرية في كل القطاعات، بدءاً بالتعليم والصحة. فبعد الاعتراف بالمشكلة، يبدأ الطريق الحقيقي نحو الإصلاح. وما يثير الاستغراب أن حتى المسؤولين بدأوا يتبنون هذا الخطاب السطحي، حيث يفضلون التركيز على الإنجازات بدلاً من مواجهة التحديات التي تتطلب حلولاً جذرية"}
            date="August 09, 2024"
            postUrl="https://www.linkedin.com/posts/youssef-tabali-7170071a5_%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%A6%D9%84-%D8%A7%D9%84%D8%AC%D9%88%D9%87%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D9%8A-%D8%A3%D8%B9%D8%AA%D9%82%D8%AF-%D8%A3%D9%86%D9%87%D8%A7-%D8%A8%D8%AD%D8%A7%D8%AC%D8%A9-activity-7228722931571314688-BKBy?utm_source=social_share_send&utm_medium=member_desktop_web"
          />  
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
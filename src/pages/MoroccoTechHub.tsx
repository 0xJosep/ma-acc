import React from 'react';
import { Link } from 'react-router-dom';

const MoroccoTechHub: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/articles" className="text-white hover:text-gray-300">← Back to Articles</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl py-8 md:py-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-16">Morocco's Innovation Renaissance: The 'Morocco Tech Hub' Framework</h1>

        {/* Article Content */}
        <section className="mb-8 md:mb-16">
          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">Vision</h2>
            <p className="mb-4 md:mb-6">
              Transform Morocco into North Africa's premier innovation hub by adapting successful startup frameworks from the US while incorporating Morocco's unique advantages as a gateway between Africa, Europe, and the Middle East.
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">Key Proposal: The 'Morocco Tech Hub' Framework</h2>
            <p className="mb-4 md:mb-6">
              A standardized, nationwide company formation and funding system that simplifies capital raising while leveraging Morocco's strategic position, established free trade agreements, and growing tech talent pool.
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">Core Components</h2>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">1. Morocco Digital Enterprise (MDE):</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Introduce a new legal entity type, supported by the Moroccan Investment and Export Development Agency (AMDIE)</li>
              <li>Provide investor-friendly governance rules aligned with international standards</li>
              <li>Offer tax incentives through existing frameworks like Casablanca Finance City (CFC)</li>
              <li>Standardize founder equity structures with protection for both local and international investors</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">2. Morocco SAFE Agreement (M-SAFE):</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Develop a Moroccan version of the SAFE instrument, compliant with local laws</li>
              <li>Simplify early-stage investments through standardized documentation in Arabic, French, and English</li>
              <li>Create templates that work for both local and international investors</li>
              <li>Ensure Sharia compliance options for Islamic investors</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">3. Multi-Tier Funding Ecosystem:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li><strong>Pre-Seed:</strong>
                <ul className="list-disc pl-4 md:pl-6 mt-2 text-sm md:text-base">
                  <li>Establish government-backed accelerators in partnership with established players</li>
                  <li>Leverage existing programs like Maroc PME and CCG (Central Guarantee Fund)</li>
                  <li>Create links with diaspora mentors and investors</li>
                </ul>
              </li>
              <li><strong>Seed:</strong>
                <ul className="list-disc pl-4 md:pl-6 mt-2 text-sm md:text-base">
                  <li>Attract angel investors through tax incentives</li>
                  <li>Partner with successful Moroccan business leaders</li>
                  <li>Create co-investment programs with international accelerators</li>
                </ul>
              </li>
              <li><strong>Series A-C:</strong>
                <ul className="list-disc pl-4 md:pl-6 mt-2 text-sm md:text-base">
                  <li>Foster partnerships with MENA region VCs</li>
                  <li>Create special investment zones with tax benefits</li>
                  <li>Establish relationships with European and African VC networks</li>
                </ul>
              </li>
              <li><strong>Exit:</strong>
                <ul className="list-disc pl-4 md:pl-6 mt-2 text-sm md:text-base">
                  <li>Modernize Casablanca Stock Exchange (CSE) listing requirements for tech companies</li>
                  <li>Create special tech board similar to China's STAR Market</li>
                  <li>Facilitate dual listings with African and European exchanges</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">4. Strategic Exit Framework:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Streamline M&A processes for tech companies</li>
              <li>Create clear pathways for international acquisitions</li>
              <li>Establish secondary market mechanisms for private shares</li>
              <li>Partner with international investment banks for exit support</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">5. Digital Registry Platform:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Create an online platform in partnership with the Moroccan Office of Industrial and Commercial Property (OMPIC)</li>
              <li>Offer multilingual support (Arabic, French, English)</li>
              <li>Integrate with Africa's emerging blockchain networks</li>
              <li>Provide digital signatures and smart contracts support</li>
            </ul>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">Benefits</h2>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">For Startups:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Fast-track company registration and fundraising</li>
              <li>Access to both local and international funding</li>
              <li>Benefits from Morocco's free trade agreements with EU, US, and African countries</li>
              <li>Support for expansion into African markets</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">For Investors:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Clear legal framework aligned with international standards</li>
              <li>Protection of minority shareholder rights</li>
              <li>Easy repatriation of profits</li>
              <li>Access to startups targeting African markets</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">For Morocco's Economy:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Attraction of regional tech talent</li>
              <li>Position as Africa's startup hub</li>
              <li>Job creation in high-value sectors</li>
              <li>Knowledge transfer from international markets</li>
            </ul>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">Implementation Strategy</h2>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">1. Legislative Framework:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Work with Parliament to create the MDE legal structure</li>
              <li>Coordinate with Ministry of Industry and Digital Economy</li>
              <li>Align with existing investment promotion laws</li>
              <li>Create special provisions within Casablanca Finance City framework</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">2. Pilot Program:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Launch in key cities: Casablanca, Rabat, Tangier, Agadir</li>
              <li>Partner with established tech parks and universities</li>
              <li>Create sandbox environments for testing new frameworks</li>
              <li>Focus on sectors aligned with Morocco's Industrial Acceleration Plan</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">3. Marketing Strategy:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Target Moroccan diaspora in tech hubs globally</li>
              <li>Showcase Morocco's strategic position and stability</li>
              <li>Highlight success stories of existing Moroccan startups</li>
              <li>Create roadshows in key MENA and African markets</li>
            </ul>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">4. Continuous Improvement:</h3>
            <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base">
              <li>Establish a public-private task force for oversight</li>
              <li>Regular consultation with startup founders and investors</li>
              <li>Annual review and adjustment of frameworks</li>
              <li>Benchmark against other emerging startup hubs</li>
            </ul>

            <p className="mb-4 md:mb-6">
              This framework aims to position Morocco as Africa's leading tech hub while creating sustainable economic growth through innovation and entrepreneurship.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MoroccoTechHub; 
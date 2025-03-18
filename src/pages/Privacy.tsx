
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="text-gray-700 font-medium">Privacy Policy</span>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Privacy Policy</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="md:w-1/4">
            <nav className="sticky top-24">
              <ul className="space-y-3 border-l-0 md:border-l border-gray-200">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block pl-4 py-2 border-l-4 w-full text-left ${
                        activeSection === item.id
                          ? "border-blue-500 text-blue-600 font-medium"
                          : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="prose max-w-none">
              <p className="text-gray-500 mb-4">Last updated: September 6, 2024</p>
              
              <p className="text-lg mb-6">
                This privacy policy ("Policy") will explain how Presidency Solutions uses the personal data ("data") 
                we collect from you when you use our website.
              </p>
              
              <hr className="my-8" />
              
              <section id="section1" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">1. What data do we collect?</h2>
                <p className="mb-4">Presidency Solutions collects the following data:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>General data</strong> such as your full name, title, marital status, date of birth, race, and gender
                  </li>
                  <li>
                    <strong>Contact data</strong> such as your email address, telephone number and physical address
                  </li>
                  <li>
                    <strong>Profile data</strong> such as your social media usernames and passwords, feedback and survey responses
                  </li>
                  <li>
                    <strong>Recruitment data</strong> such as job applications and recordings of assessments
                  </li>
                  <li>
                    <strong>Marketing and communications data</strong> including details about your preferences in receiving 
                    marketing from us and, where relevant, from our third parties, and your communication preferences
                  </li>
                  <li>
                    <strong>Technical data</strong> such as your internet protocol (IP) address, cookie ID, login data, browser type 
                    and version, time zone and geographic location and online use of our services
                  </li>
                  <li>
                    <strong>Other data</strong> including any other information you provide visiting our website and any other 
                    information provided to us by you or on your behalf by a third party
                  </li>
                </ul>
              </section>
              
              <section id="section2" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">2. How do we collect your data?</h2>
                <p className="mb-4">You directly provide Presidency Solutions with most of the data we collect. We collect data and process data when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register online or place an order for any of our products or services</li>
                  <li>Voluntarily complete a customer survey or provide feedback via email or our website</li>
                  <li>Use or view our website via your browser's cookies</li>
                  <li>Submit a job application or participate in recruitment activities</li>
                  <li>Sign up for our newsletter or marketing communications</li>
                  <li>Contact us through our contact forms, email, or phone</li>
                </ul>
                
                <p className="mt-4">We may also receive your data indirectly from the following sources:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analytics providers such as Google</li>
                  <li>Advertising networks</li>
                  <li>Search information providers</li>
                  <li>Identity and contact data from publicly available sources</li>
                </ul>
              </section>
              
              <section id="section3" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">3. How we will use your data?</h2>
                <p className="mb-4">Presidency Solutions collects your data so that we can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and manage your orders for our products or services</li>
                  <li>Email you with special offers on other products and services we think you might like</li>
                  <li>Improve our website, products, and services</li>
                  <li>Customize our website according to your preferences</li>
                  <li>Contact you regarding job opportunities or recruitment processes</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
                
                <p className="mt-4">When Presidency Solutions processes your order, it may send your data to, and also use the resulting information from, credit reference agencies to prevent fraudulent purchases.</p>
              </section>
              
              <section id="section4" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">4. With whom do we share your data?</h2>
                <p className="mb-4">We may share your personal information with the following categories of recipients:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who provide IT and system administration services</li>
                  <li>Professional advisers including lawyers, bankers, auditors, and insurers</li>
                  <li>Government bodies that require us to report processing activities</li>
                  <li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets</li>
                  <li>Partners or affiliates with whom we work to provide services to you</li>
                </ul>
                
                <p className="mt-4">We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>
              </section>
              
              <section id="section5" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">5. Transfers of data</h2>
                <p className="mb-4">Some of our external third parties are based outside the United States, so their processing of your personal data will involve a transfer of data outside the US.</p>
                
                <p className="mb-4">Whenever we transfer your personal data out of the US, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data</li>
                  <li>Where we use certain service providers, we may use specific contracts approved for use which give personal data the same protection it has in the US</li>
                  <li>Where we use providers based in the EU, we may rely on the EU-US Privacy Shield Framework for transfers of personal data</li>
                </ul>
              </section>
              
              <section id="section6" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">6. How long do we store your data?</h2>
                <p className="mb-4">Presidency Solutions will keep your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                
                <p className="mb-4">To determine the appropriate retention period for personal data, we consider:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The amount, nature, and sensitivity of the personal data</li>
                  <li>The potential risk of harm from unauthorized use or disclosure of your personal data</li>
                  <li>The purposes for which we process your personal data</li>
                  <li>Whether we can achieve those purposes through other means</li>
                  <li>The applicable legal, regulatory, tax, accounting or other requirements</li>
                </ul>
                
                <p className="mt-4">In some circumstances, we will anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</p>
              </section>
              
              <section id="section7" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">7. Marketing</h2>
                <p className="mb-4">Presidency Solutions would like to send you information about products and services of ours that we think you might like.</p>
                
                <p className="mb-4">If you have agreed to receive marketing, you may always opt out at a later date. You have the right at any time to stop Presidency Solutions from contacting you for marketing purposes.</p>
                
                <p className="mb-4">If you no longer wish to be contacted for marketing purposes, please:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Click the unsubscribe button in any marketing email you receive from us</li>
                  <li>Email us at privacy@presidency-solutions.com</li>
                  <li>Contact us through our website contact form</li>
                </ul>
              </section>
              
              <section id="section8" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">8. Protecting your data</h2>
                <p className="mb-4">Presidency Solutions has implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
                
                <p className="mb-4">In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.</p>
                
                <p className="mb-4">We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
                
                <p className="mb-4">Our security measures include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of personal data</li>
                  <li>Ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems</li>
                  <li>Ability to restore access to personal data in a timely manner in the event of a physical or technical incident</li>
                  <li>Regular testing and evaluation of technical and organizational measures for ensuring the security of the processing</li>
                </ul>
              </section>
              
              <section id="section9" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">9. What are your data protection rights?</h2>
                <p className="mb-4">Presidency Solutions would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>The right to access</strong> – You have the right to request copies of your personal data from Presidency Solutions.
                  </li>
                  <li>
                    <strong>The right to rectification</strong> – You have the right to request that Presidency Solutions correct any information you believe is inaccurate. You also have the right to request that Presidency Solutions complete information you believe is incomplete.
                  </li>
                  <li>
                    <strong>The right to erasure</strong> – You have the right to request that Presidency Solutions erase your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to restrict processing</strong> – You have the right to request that Presidency Solutions restrict the processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to object to processing</strong> – You have the right to object to Presidency Solutions's processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to data portability</strong> – You have the right to request that Presidency Solutions transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                  </li>
                </ul>
                
                <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us:</p>
                
                <ul className="list-none space-y-1 mt-4">
                  <li>Email: privacy@presidency-solutions.com</li>
                  <li>Call: (555) 123-4567</li>
                  <li>Or write to us: Presidency Solutions, 123 Tech Drive, San Francisco, CA 94103</li>
                </ul>
              </section>
              
              <section id="cookies" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">10. Cookies</h2>
                <p className="mb-4">Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.</p>
                
                <p className="mb-4">For further information, visit <a href="https://allaboutcookies.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">How do we use cookies?</h3>
                <p className="mb-4">Presidency Solutions uses cookies in a range of ways to improve your experience on our website, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keeping you signed in</li>
                  <li>Understanding how you use our website</li>
                  <li>Personalizing content based on your preferences</li>
                  <li>Analyzing website performance and functionality</li>
                  <li>Remembering your preferences and settings</li>
                  <li>Measuring the effectiveness of our marketing campaigns</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">What types of cookies do we use?</h3>
                <p className="mb-4">There are several different types of cookies our website uses:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Necessary cookies</strong>: These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.
                  </li>
                  <li>
                    <strong>Functionality cookies</strong>: These cookies allow the website to remember choices you make (such as your language or the region you are in) and provide enhanced, more personal features.
                  </li>
                  <li>
                    <strong>Analytics cookies</strong>: These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that identifies a visitor.
                  </li>
                  <li>
                    <strong>Marketing cookies</strong>: These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-2">How to manage cookies</h3>
                <p className="mb-4">You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</p>
              </section>
              
              <section id="changes" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">11. Changes to our privacy policy</h2>
                <p className="mb-4">Presidency Solutions keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on September 6, 2024.</p>
              </section>
              
              <section id="contact" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">12. How to contact us</h2>
                <p className="mb-4">If you have any questions about Presidency Solutions's privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us:</p>
                
                <ul className="list-none space-y-1 mt-4">
                  <li>Email: privacy@presidency-solutions.com</li>
                  <li>Call: (555) 123-4567</li>
                  <li>Or write to us: Presidency Solutions, 123 Tech Drive, San Francisco, CA 94103</li>
                </ul>
              </section>
              
              <section id="complaints">
                <h2 className="text-3xl font-bold mb-6">13. How to contact the appropriate authority</h2>
                <p className="mb-4">Should you wish to report a complaint or if you feel that Presidency Solutions has not addressed your concern in a satisfactory manner, you may contact your local data protection authority.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const navigationItems = [
  { id: "section1", title: "1. What data do we collect?" },
  { id: "section2", title: "2. How do we collect your data?" },
  { id: "section3", title: "3. How we will use your data?" },
  { id: "section4", title: "4. With whom do we share your data?" },
  { id: "section5", title: "5. Transfers of data." },
  { id: "section6", title: "6. How long do we store your data?" },
  { id: "section7", title: "7. Marketing." },
  { id: "section8", title: "8. Protecting your data." },
  { id: "section9", title: "9. What are your data protection rights?" },
  { id: "cookies", title: "10. Cookies" },
  { id: "changes", title: "11. Changes to our privacy policy" },
  { id: "contact", title: "12. How to contact us" },
  { id: "complaints", title: "13. How to contact the appropriate authority" },
];

export default Privacy;

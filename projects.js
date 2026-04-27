// data/projects.js

// TODO: This is where you will manage your project data.
// - To add a new project, copy an existing object and paste it at the end of the array.
// - Update the `id`, `title`, `description`, `image`, `tags`, and `details`.
// - The `image` path should point to your project image in `assets/images/`.
// - The `details` section is what appears in the modal. Use HTML for formatting.

const projects = [
   {
    id: 0,
    title: 'Stockwise - Warehouse & Stock Opname System',
    description: 'Designed an enterprise-level warehouse system to handle large-scale inventory (5,000+ items) with scan-based input and real-time validation.',
    image: 'assets/images/Stockwise Device Mockup.png', // TODO: Ganti dengan gambar kamu
    tags: ['UI/UX Design', 'Mobile App', 'Web App', 'Device Mockup'],
    details: `
    <div class="modal__image-gallery">
      <img src="assets/images/Stockwise Device Mockup.png" alt="Device Mockup">
    </div>

    <h3>The Challenge</h3>
    <p>Warehouse operations often involve thousands of items, making manual stock opname slow, error-prone, and difficult to track. The challenge was to design a system that could handle large datasets efficiently while minimizing human error and improving operational speed.</p>
    
    <h3>My Approach & Role</h3>
    <p>I designed an end-to-end UI/UX solution for both mobile and desktop platforms, focusing on efficiency and usability:</p>
    <ul>
      <li><strong>Mobile-First Experience:</strong> Designed a scan-based interface to enable fast stock input using barcode scanning, supported by manual input as a fallback.</li>
      <li><strong>Large Data Handling:</strong> Implemented lazy loading and infinite scroll to ensure smooth performance when managing 5,000+ inventory items.</li>
      <li><strong>Real-Time Validation:</strong> Designed clear visual indicators for stock differences (overstock, missing, not counted) to reduce input errors.</li>
      <li><strong>Dashboard & Approval Flow:</strong> Created a desktop dashboard for supervisors and admins to monitor progress, analyze mismatches, and manage approval workflows.</li>
    </ul>
    
    <h3>The Outcome</h3>
    <p>The system significantly improves efficiency in warehouse operations by reducing manual input, speeding up stock counting, and providing clear insights for decision-making. The scan-first interaction and structured workflow help minimize errors and streamline the entire stock opname process.</p>

    <div class="modal__links">
        <a href="https://www.figma.com/design/0ACeSnt6WDCBfrfjugrQcW/Stockwise?node-id=0-1&t=21M0U0E8wV67Me2f-1" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">View Case Study</a>
    </div>
  `
  },
  {
    id: 1,
    title: 'Bazarsip - Premium E-Commerce Web Application',
    description: 'Designed and developed an end-to-end luxury e-commerce platform featuring a responsive storefront and a high-efficiency admin dashboard.',
    image: 'assets/images/bazarsip-desktop-mockup-customer.png', // TODO: Ganti gambar ini
    tags: ['UI/UX Design', 'Design System', 'Front-End', 'Web App'],
    details: `
      <div class="modal__image-gallery">
        <img src="assets/images/bazarsip-desktop-mockup-customer.png" alt="Bazarsip Customer Storefront Mockup">
      </div>
      
      <h3>The Challenge</h3>
      <p>Designing a modern, responsive storefront that balances bold streetwear aesthetics with refined presentation, while simultaneously engineering a complex, "Desktop-first" Admin Panel to streamline heavy operational workflows.</p>
      
      <h3>My Approach & Role</h3>
      <p>I took ownership of both the UI/UX design process and the front-end implementation:</p>
      <ul>
        <li><strong>Design System:</strong> Established a comprehensive, WCAG-compliant Design System, standardizing typography, dark/light mode color palettes, and UI components across the entire platform.</li>
        <li><strong>Admin Architecture:</strong> Engineered a complex Admin Panel to streamline operations, featuring nested category mapping, inventory restock alerts, and integrated order and shipping management tables.</li>
        <li><strong>Customer Experience:</strong> Implemented a seamless 3-step checkout flow utilizing dynamic state management and real-time form validation to reduce drop-offs.</li>
      </ul>
      
      <h3>The Outcome</h3>
      <p>The project resulted in a frictionless user journey from product discovery to checkout. The overall experience was significantly optimized through clear visual hierarchies, actionable empty states, and intuitive micro-interactions, proving the effectiveness of bridging solid UX principles with clean front-end execution.</p>
      
      <div class="modal__links">
          <a href="https://www.figma.com/design/MFHnks0RiEcyKCTVfzQG8L/Bazarsip?node-id=734-1514&t=kSyxESAMvfEvZVot-1" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">View Case Study</a>
      </div>
    `
  },
  {
    id: 2,
    title: 'Self-Regulated Learning Dashboard',
    description: 'A UI/UX project aimed at enhancing student motivation for distance learners.',
    image: 'assets/images/project-srl-dashboard.png', // TODO: Replace this image
    tags: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
    details: `
      <img src="assets/images/project-srl-dashboard.png" alt="SRL Dashboard High-Fidelity Mockup">
      <h3>The Challenge</h3>
      <p>Distance learners often struggle with motivation and self-regulation. This project aimed to design a learning dashboard that incorporates Self-Regulated Learning (SRL) principles to support and motivate students.</p>
      
      <h3>My Approach & Role</h3>
      <p>As the sole UI/UX designer, I led the project through a full User-Centered Design (UCD) process:</p>
      <ul>
        <li><strong>Research:</strong> Conducted interviews with 5 students to understand their pain points with online learning.</li>
        <li><strong>Ideation:</strong> Sketched user flows and wireframes to map out the core features like goal setting, progress tracking, and resource management.</li>
        <li><strong>Prototyping:</strong> Developed a high-fidelity, interactive prototype in Figma.</li>
        <li><strong>Testing:</strong> Ran usability testing sessions with 5 participants to gather feedback and iterate on the design.</li>
      </ul>
      
      <h3>The Outcome</h3>
      <p>The final design achieved an average System Usability Scale (SUS) score of <strong>82/100</strong>, indicating an "Excellent" level of user acceptance. The dashboard was praised for its intuitive layout and features that promoted proactive learning habits.</p>

      <div class="modal__links">
          <a href="https://tugasakhirdashboardlms.vercel.app/" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">View Live Demo</a>
      </div>
    `
  },
  {
    id: 3,
    title: 'PT. Jago Talenta Indonesia Internship Project',
    description: 'Led the redesign of the main company website to improve user engagement.',
    image: 'assets/images/project-jago-talenta-1.png', // Main card image
    tags: ['UI/UX Design', 'Wireframing', 'Usability Testing', 'Web Design'],
    details: `
      <div class="modal__image-gallery">
        <img src="assets/images/project-jago-talenta-1.png" alt="Jago Talenta Design">
        <img src="assets/images/project-jago-talenta-4.png" alt="Jago Talenta Design">
        <img src="assets/images/project-jago-talenta-5.png" alt="Jago Talenta Design">
        <img src="assets/images/project-jago-talenta-3.png" alt="Jago Talenta Design">
        <img src="assets/images/project-jago-talenta-2.png" alt="Jago Talenta Design">
      </div>

      <h3>The Challenge</h3>
      <p>The main company website was experiencing low user engagement and a high bounce rate, indicating a frustrating user experience. Simultaneously, a key client, CV. Harapan Baru, needed a new website application designed from the ground up to better serve their customers. The core challenge was to identify the root causes of these usability issues through research and deliver data-driven redesigns that would significantly improve performance for both entities.</p>
      
      <h3>My Approach & Role</h3>
      <p>As the UI/UX Designer Intern, I took a lead role in the end-to-end design process. My approach was centered on a comprehensive, user-focused methodology:</p>
      <ul>
        <li>Led User Research: I initiated and led foundational user research, conducting over 5 in-depth interviews and analyzing more than 20 survey responses to uncover key user pain points and needs.</li>
        <li>Ideation & Prototyping: Based on the research insights, I developed an extensive range of solutions, creating over 30 wireframes and high-fidelity prototypes to visualize the new user journeys.</li>
        <li>Validation & Iteration: I conducted usability testing with 10 users, gathering critical feedback to refine the designs and ensure the final product was both intuitive and efficient.</li>
      </ul>
      
      <h3>The Outcome</h3>
      <p>The data-driven design process led to measurable improvements and successful outcomes across the board<div class="modal__links">
      <ul>
        <li>The designed main website for <strong> PT. Jago Talenta Indonesia </strong> resulted in a projected <strong> 25% increase in user engagement </strong> and a <strong> 15% reduction in bounce rate. </strong></li>
        <li>Usability testing confirmed a <strong> 40% improvement in task efficiency </strong> for users navigating the new site.</li>
        <li>The new website application for <strong> CV. Harapan Baru </strong> was met with positive reception, achieving a <strong> 30% increase in user satisfaction scores </strong> based on post-launch surveys.</li>
      </ul>
      </div>
      `
  },
  {
    id: 4,
    title: 'Igracias University Portal Redesign',
    description: 'A redesign of a university portal to improve navigation and information architecture.',
    image: 'assets/images/project-igraciass.png', // TODO: Replace this image
    tags: ['UI Design', 'Figma', 'Information Architecture'],
    details: `
      <img src="assets/images/project-igraciass.png" alt="Igracias Portal Redesign">
      <h3>The Challenge</h3>
      <p>The Igracias university portal was cluttered and difficult for students to navigate, leading to frequent support requests and frustration. The goal was to simplify the information architecture and create a more intuitive user interface.</p>
      
      <h3>My Approach & Role</h3>
      <p>I focused on restructuring the user flow and visual hierarchy:</p>
      <ul>
        <li>Analyzed user feedback to identify the most common navigation problems.</li>
        <li>Created a new sitemap and user flow diagrams to streamline access to essential information like grades, schedules, and announcements.</li>
        <li>Designed a clean, modern UI in Figma with a consistent visual language.</li>
      </ul>
      
      <h3>The Outcome</h3>
      <p>The redesign led to a <strong>40% decrease in user-reported issues</strong> and a <strong>35% increase in average session duration</strong>, indicating that students found the new portal easier and more engaging to use.</p>
    `
  },
  {
    id: 5,
    title: 'Multiku Application',
    description: 'UI/UX design and copywriting for a mobile application, leading to improved task completion.',
    image: 'assets/images/project-multiku-1.png', // Main card image
    tags: ['Mobile UI/UX', 'Copywriting', 'App Design'],
    details: `
      <div class="modal__image-gallery">
        <img src="assets/images/project-multiku-1.png" alt="Multiku App - Onboarding Screen">
        <img src="assets/images/project-multiku-2.png" alt="Multiku App - Main Dashboard">
      </div>

      <h3>The Challenge</h3>
      <p>The Multiku application needed a complete design overhaul to improve usability and user satisfaction. The existing interface was confusing, and the copy was unclear.</p>
      
      <h3>My Approach & Role</h3>
      <p>I was responsible for both the visual design and the UX copywriting:</p>
      <ul>
        <li>Designed the entire user interface from the ground up, focusing on a cleaner layout and more intuitive interaction patterns.</li>
        <li>Rewrote all in-app copy to be clearer, more concise, and more helpful to the user.</li>
        <li>Delivered a complete set of design assets and copy guidelines to the development team.</li>
      </ul>
      
      <h3>The Outcome</h3>
      <p>The redesign resulted in a <strong>30% improvement in user task completion rates</strong> and a <strong>25% increase in positive app store reviews</strong> after launch.</p>
    `
  },
  {
    id: 6,
    title: 'Bladerunner Web Marketing Project',
    description: 'Created key pages for a marketing website to increase lead generation.',
    image: 'assets/images/project-bladerunner.png', // TODO: Ganti gambar ini
    tags: ['Web Design', 'UI/UX', 'Lead Generation'],
    details: `
      <img src="assets/images/project-bladerunner.png" alt="Bladerunner Website Mockup">
      <h3>The Goal</h3>
      <p>To develop a modern marketing website for Bladerunner, focusing on optimizing the user journey to increase lead generation and reduce bounce rates.</p>
      <h3>My Role & Contribution</h3>
      <ul>
        <li>Designed and developed key pages including the landing page, services overview, portfolio, and a functional contact form.</li>
        <li>Applied modern UI/UX principles to ensure clear navigation and a compelling user experience.</li>
        <li>Focused on creating a strong visual hierarchy to guide users towards call-to-action (CTA) elements.</li>
      </ul>
      <h3>The Outcome</h3>
      <p>The new website pages contributed to a <strong>20% increase in lead generation</strong> and a significant <strong>10% reduction in bounce rate</strong>, proving the effectiveness of the user-centric design approach.</p>
     <a href="https://www.behance.net/gallery/226543509/Bladerunner-Web-Marketing-Project" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">View on Behance</a>
      `
  },
  {
    id: 7,
    title: 'Data Visualization Project',
    description: 'Built an interactive data visualization dashboard using Streamlit.',
    image: 'assets/images/project-dataviz.png', // TODO: Ganti gambar ini
    tags: ['Data Viz', 'Streamlit', 'Python', 'UI Design'],
    details: `
      <img src="assets/images/project-dataviz.png" alt="Data Visualization Dashboard">
      <h3>The Challenge</h3>
      <p>To create a user-friendly and interactive dashboard that allows stakeholders to explore complex datasets and make data-driven decisions efficiently.</p>
      <h3>My Approach</h3>
      <ul>
        <li>Built the dashboard using <strong>Streamlit</strong> and Python, leveraging libraries like Pandas for data manipulation.</li>
        <li>Designed an intuitive user interface with clear charts, graphs, and interactive filters.</li>
        <li>Ensured the dashboard was fully responsive, providing an accessible and seamless experience across different devices.</li>
      </ul>
      <h3>The Impact</h3>
      <p>The dashboard empowered the team to analyze data in real-time, leading to faster and more accurate decision-making. The intuitive design received positive feedback for its ease of use.</p>
      <a href="https://app-visualisasi-data-kwq9wfcwrofrwtjechlxcu.streamlit.app/" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">View Live Demo</a>
    `
  },
  {
    id: 8,
    title: 'Logo Design for PT. Digital Multi Distribusi',
    description: 'Created a professional and visually appealing logo for corporate branding.',
    image: 'assets/images/project-logo-dmd.png', // TODO: Ganti gambar ini
    tags: ['Branding', 'Logo Design', 'Graphic Design'],
    details: `
      <img src="assets/images/project-logo-dmd.png" alt="Logo for PT. Digital Multi Distribusi">
      <h3>The Brief</h3>
      <p>PT. Digital Multi Distribusi required a new logo that was professional, modern, and visually represented their brand identity for use across all official materials.</p>
      <h3>Design Process</h3>
      <ul>
        <li>Conducted research on the company's values and target market to inform the design direction.</li>
        <li>Developed several logo concepts and iterated based on feedback from key internal stakeholders.</li>
        <li>Delivered the final logo in various formats, complete with a basic brand style guide for consistent application.</li>
      </ul>
      <h3>The Result</h3>
      <p>The final logo design was successfully adopted across all company branding materials and received a <strong>90% approval rating</strong> from internal stakeholders, enhancing the company's professional image.</p>
    `
  },
];
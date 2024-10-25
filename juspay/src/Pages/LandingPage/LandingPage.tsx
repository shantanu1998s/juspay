import "./LandingPage.css";
import Video from "@/Components/Video/Video";
import { Link } from "react-router-dom";



const LandingPage = () => {
  return (
    <section className="flex flex-col items-center">
  <div className="max-w-[900px] flex flex-col gap-[100px]">
    <div>
      <h2 className="text-xl font-semibold">Design Overview</h2>
      <br />
      <br />
      <p>
        This page provides an overview of the design decisions I made while
        developing the User Dashboard, the Orders Section, and the Main Page 
        based on the initial Figma files.
      </p>

      <br />
      <br />

      <div className="df-info-card">
        <p>
          If you prefer to skip the Design Overview, feel free to visit the
          Main Page (User Dashboard) and the Orders Section using the links
          below. These links are also accessible via the sidebar on the left.
        </p>

        <div className="flex items-center justify-between gap-[12px]">
          <Link to="/default" className="blue-button">
            Main Page
          </Link>
          <Link to="/orders" className="blue-button">
            Orders Section
          </Link>
        </div>
      </div>
    </div>

    <br />
    <br />

    <div>
      <h2 className="text-xl font-semibold">Technology Stack</h2>
      <br />
      <br />
      <p>
        This project leverages <u>React</u> and <u>TypeScript</u> and is
        hosted on Vercel. Most styling is achieved with vanilla CSS (90%), 
        while Tailwind CSS is utilized for specific components to streamline
        development due to time constraints.
      </p>
      <br />
      <p>
        The application employs <u>Radix Primitives</u> to build accessible
        components with consistent styling across different devices and platforms.
        <br />
        <br />
        Other libraries used include Zustand, Toastify, Motion, and
        ChartJS for various Dashboard components.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-semibold">Accessibility Features</h2>
      <br />
      <br />
      <p>
        My goal was to create an accessible dashboard with intuitive keyboard
        navigation. Radix Primitives such as Accordion, Tabs, and Checkboxes
        facilitate keyboard navigation, ensuring a seamless experience
        while maintaining consistent behavior and styling across devices.
      </p>

      <br />
      <br />
      <Video
        src="/video/Keycontrols.mov"
        className="outline-1 outline-white/20 outline mx-auto w-full"
      />

      <p className="text-sm w-full max-auto text-center">
        Keyboard Navigation Demonstration
      </p>
    </div>

    <div>
      <h2 className="text-xl font-semibold">Responsive Design Approach</h2>
      <br />
      <br />
      <p>
        Although the Figma design did not cater to smaller screens, I devised
        my own strategies to create a responsive dashboard.
        <br />
        <br />
        I focused on identifying essential dashboard components to display on
        smaller screens while abstracting other elements to appear only
        when necessary for the user.
        <br />
        <br />
        To achieve complete responsiveness, I implemented a Drawer
        Component that abstracts the sidebars (Navigation and Info Panel)
        for smaller displays.
        <br />
        <br />
        <Video
          src="/video/ResponsiveDesign1.mov"
          className="outline-1 outline-white/20 outline mx-auto w-full"
        />
        <br />
      </p>
      <div className="df-info-card">
        <h2 className="font-semibold mb-2 shimmer-effect">
          When to Display the Compact Dashboard?
        </h2>
        A significant challenge in achieving a fluid responsive design was
        managing multiple charts within the dashboard. When charts were
        resized below a specific width, they appeared awkward and less 
        readable. Additionally, styling the dashboard with floating drawers 
        using media queries proved challenging.
        <br />
        <br />
        To address this, I implemented a state that checks if the available
        space for charts drops below a certain threshold (700px in this case).
        If it does, a compact version of the dashboard is activated.
        <Video
          src="/video/ResponsiveDesign2.mov"
          className="outline-1 outline-white/20 outline mx-auto w-full"
        />
      </div>
    </div>

    <div>
      <h2 className="text-xl font-semibold">Microinteractions and Animations</h2>
      <br />
      <br />
      <p>
        A well-designed dashboard should prioritize usability, maximizing
        details within the available screen space. Excessive animations and
        interactions can often be counterproductive and frustrating for users.
        <br />
        <br />
        Therefore, I aimed to incorporate meaningful animations and interactions
        that provided feedback for specific actions.
        <br />
        <br />
        Here are some notable interactions and animations:
      </p>
      <br />
      <br />
      <p className="font-semibold mb-4">Theme Switcher</p>

      <Video
        src="/video/ThemeSwithcer.mov"
        className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
      />

      <br />
      <br />

      <p className="font-semibold mb-4">
        Notification and Activity Animations
      </p>

      <Video
        src="/video/NotificationAnimation.mov"
        className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
      />

      <br />
      <br />

      <p className="font-semibold mb-4">
        Chart Interactions and Number Tickers
      </p>

      <Video
        src="/video/Charts.mov"
        className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
      />

      <br />
      <br />
      <p className="font-semibold mb-4">
        Order Details for Mobile and Tablet Screens
      </p>

      <p>
        This interaction closely mimics the iOS Bottom Sheet interaction,
        providing a native-like experience for users.
      </p>
      <Video
        src="/video/Details.mov"
        className="outline-1 outline-white/20 outline mx-auto max-w-[350px]"
      />

      <br />
      <br />
    </div>

    <div>
      <h2 className="text-xl font-semibold">
        Context and State Management
      </h2>
      <br />
      <br />

      <p>
        I am utilizing the React Context API to create two contexts:
        ThemeContext and DashboardContext.
        <br />
        <br />
        <u>ThemeContext</u> maintains the active theme of the dashboard,
        while <u>DashboardContext</u> manages settings such as
        showInfoPanel (toggles the right sidebar), showSidebar (toggles the
        dashboard navigation options), recents (a stack that keeps track of
        the last two visited pages for quick access), and favorites (a
        collection of pages that users can mark as favorites).
        <br />
        <br />
      </p>

      <Video
        src="/video/Context.mov"
        className="outline-1 outline-white/20 outline mx-auto"
      />
    </div>

    <br />
    <br />

    <div>
      <h2 className="text-xl font-semibold">Conclusion</h2>
      <br />
      <br />

      <p className="font-semibold mb-4">Challenges Faced</p>
      <p>
        The most daunting aspect of the project was designing a fluid and
        intuitive dashboard for smaller screens. I sought to avoid the typical
        method of simply altering flex directions, which often results in a
        repetitive layout. Instead, I aimed to create a self-explanatory
        design that prioritizes user-friendliness.
      </p>
      <br />
      <br />

      <p className="font-semibold mb-4">Areas for Improvement</p>
      <p>
        There are aspects I would like to refine given additional time.
        <br />
        This includes implementing fallbacks, skeletons, and suspense states 
        for slow network connections, optimizing the readability of certain
        sections of the codebase, and enhancing the flexibility of chart 
        components.
        <br />
        <br />
        However, I deliberately chose to focus on the overall "feel" of the site 
        over these factors, believing that it would have a greater impact 
        than the others. Furthermore, the requirements outlined in the 
        assignment seemed to be more centered on creating the UI for the 
        specified role.
      </p>

      <br />
      <br />

      <p className="font-semibold mb-4">Key Learnings</p>
      <p>
        My primary takeaway from the project was learning how to manage complex
        layouts using a combination of media queries and JavaScript. It was a 
        valuable experience to follow an industry-standard Figma Design and
        bring it to life.
      </p>
    </div>

    <div className="df-info-card mt-16 flex p-4">
      <h2 className="shimmer-effect text-xl md:text-2xl font-semibold flex-1">
        Want to Connect? Let’s Chat!
      </h2>
      <Link to="/contact" className="blue-button">
        Get in Touch!
      </Link>
    </div>
  </div>
</section>

  );
};

export default LandingPage;

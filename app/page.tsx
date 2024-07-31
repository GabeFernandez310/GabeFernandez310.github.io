import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <main className="flex min-h-screen flex-col items-center p-24 bg-header-background bg-top bg-[length:100%] bg-no-repeat"> */}

      <div className="mb-24 px-4 py-8 grid items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left bg-opacity-50 bg-slate-500 rounded-xl">
        <img className="justify-end" src="../myLogo-GabrielFernandez.png">
        </img>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          href="#about_me"
        >
          <h2 className="text-2xl font-semibold">
            About Me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          href="#work_experience"
        >
          <h2 className="text-2xl font-semibold">
            Experience{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
          href="#projects"
        >
          <h2 className="text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

      </div>

      <div id="contacts" className="mt-4 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-4 bg-opacity-20 bg-slate-500 rounded-xl">
        <h3 className="text-xl font-bold">
          Contacts
        </h3>
        <ul>
          <li>
            Email: gabe.fer2000@gmail.com
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gabriel-antonio-fernandez-2201841a3/" className="text-sky-700 hover:border-blue-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/GabeFernandez310" className="text-sky-700 hover:border-blue-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <img
        className="mt-8 mb-8 size-2/3 center rounded-full"
        src="/GabrielFernandez-Hike.png"
      />


      <section id="about_me" className="mt-8 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-4 bg-opacity-20 bg-slate-500 rounded-xl">
        <h3 className="text-xl font-bold">
          About Me
        </h3>

        <div className="ml-4 mt-4">
          <p className="m-0 text-sm opacity-70">
          Hi! If you&apos;re reading this, welcome to my personal page. My name is Gabriel (although more often I go by Gio), and I&apos;m a Software Developer based around Vancouver B.C., Canada.
If you&apos;re interested, I&apos;d like for you to learn a little bit more about myself and how I decided to enter this industry.
Since my early years, I&apos;ve always been interested in all things related to the STEM fields. As a child, I would often favour watching educational shows like Zoboomafoo, The Magic School Bus, and documentaries over other shows and cartoons. 
Growing up like this, I had believed I would pursue a career working as a researcher in biology or physics. However, I was introduced to computer programming when I entered high school at 13 years old 
and I quickly became interested in the topic. I continued to spend the remainder of my high school education pursuing courses and opportunities where I could continue to learn about programming, computers, and other technology.
Through these experiences, I was able to expand on my knowledge in specific fields such as computer software, hardware, animation and multimedia, 3D printing, and electronics. 
As I pursued these interests, I was especially fascinated with the topics of computer programming and 3D printing. I participated in programming competitions, volunteered as a Peer Tutor for a technology focused class,
and aided the head of the IT department with various tasks around the school. Sometimes I created my own opportunities when exploring these interests.
For example, during one school week, myself and a peer would stay behind for a few extra hours to understand the code on a GitHub repository that allowed people to scan 3D objects with an Xbox Kinect. Of course, after learning a bit about the software, we proceeded to create and print a miniature bust of myself on our school&apos;s 3D printer.
On a separate occasion, I asked the head of the IT department if he would allow me to borrow the 3D printer during my school&apos;s Summer break, and to this day I believe I am the only student who has asked and been allowed to take the printer home.
Both of these are fond memories that have helped shape my interests and hobbies. I still have the 3D printed bust of myself on a shelf at home, and after graduating high school I purchased my own 3D printer which I use to print items that I find online or design myself for other projects.
With these interests, I knew early into my applications for post-secondary education that I wanted to pursue a degree related to technology and programming rather than biology or physics. 
I further polished my skills in University, learning about various Computer Science and Computer Engineering topics, and had the opportunity to apply my gained knowledge working as a Quality Assurance Engineer and Software Developer.
I continued to learn in private as well, taking some time to learn about technology stacks and developing applications. This has resulted in my current self. Someone who has a breadth of knowledge in several technology domains and is constantly wanting to pursue new interests and learn.

Despite the previous life-story, my interests are not limited to technology and academics. Outside of these things, I am someone who greatly enjoys the outdoors. I enjoy hiking and kayaking in the Summer months, and when whether permits I enjoy jogging outside along local trails.
When indoors, I enjoy watching movies and playing single-player story-driven games. Recently, I have also begun to delve into more tabletop games such as Dungeons and Dragons. I also enjoy cooking and doing various DIY projects. That&apos;s just a bit about myself and how I became the Developer I am today. If you&apos;re interested in contacting me for any reason, please feel free to contact me through any of the methods listed at the top of this page. I look forward to meeting you!
          </p>
        </div>
      </section>

      <section id="work_experience" className="mt-8 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-4 bg-opacity-20 bg-slate-500 rounded-xl">
        <h3 className="text-xl font-bold">
          Work Experience
        </h3>

        <div className="mt-4 p-4 bg-opacity-20 bg-slate-500 rounded-xl">
          <h2 className="text-xl">
            Software Developer I
          </h2>
          <p className="m-0 text-sm opacity-50">
            Improving (Formerly Bit Quill Technologies), Vancouver, BC
            <br></br>
            <br></br>

            I worked as a Software Developer on a small team following Agile methodologies. I mainly implemented new features into our project, and was occasionally tasked with other odd jobs such as updating websites, helping other members of the team or preparing presentations. 
            As part of my main duties, I also wrote documentation for my newly implemented feature, wrote several levels of tests, communicated with clients and customers about the projects progress and requirements, investigated and fixed bugs, and estimated task difficulty with my team.

          </p>
          <h3 className="mt-2">Key Responsibilities</h3>
          <ul className="ml-8 mt-2 list-disc">
            <li>
              Implemented new software features by adhering to client requirements to improve software functionality
            </li>
            <li>
              Communicated with customers to inform them about project progress and discuss urgent topics
            </li>
            <li>
              Trained colleagues by helping with development environment setup and tasks to increase team performance.
            </li>
            <li>
              Discussed task progress and blocking issues with my team during daily meetings to receive help and feedback
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-opacity-20 bg-slate-500 rounded-xl">
          <h2 className="text-xl">
            Quality Assurance Engineer
          </h2>
          <p className="m-0 text-sm opacity-50">

            Alpha International, New Westminster, BC

            <br></br>
            <br></br>

            Working as a Quality Assurance Engineer, I was part of a very small team that practiced some Agile methodologies and met twice a week for a standup meeting. My individual tasks were largely decoupled from the tasks of the other members.
            Working independently, I documented, wrote, and automated tests for both front-end and back-end of a web application. This mostly involved creating user stories and workflows to create a suite of tests for the application&apos;s UI and testing the applications API using several testing frameworks.

          </p>
          <h3 className="mt-2">Key Responsibilities</h3>
          <ul className="ml-8 mt-2 list-disc">
            <li>
              Attended daily Stand-up meetings to communicate with my team and identify tasks and blockers

            </li>
            <li>
              Created API tests in Postman to quickly identify bugs in the API and ease application deployment
              list item 2
            </li>
            <li>
              list item 3
              Developed automated tests in Katalon to limit the amount of manual testing needed for the application
            </li>
            <li>
              Created bug tickets in Jira to give detailed descriptions of identified issues that required attention

            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="mt-8 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-4 bg-opacity-20 bg-slate-500 rounded-xl">
        <h3 className="text-xl font-bold">
          Projects
        </h3>

        <div className="mt-4 p-4 bg-opacity-20 bg-slate-500 rounded-xl">
          <h2 className="text-xl">
            OpenSearch SQL Plugin
          </h2>
          <p className="m-0 text-sm opacity-50">

            Open Source Project

            <br></br>
            <br></br>

            OpenSearch, maintained by Amazon, is a fork of the ElasticSearch project. I worked on a part of the OpenSearch SQL plugin which helped users interact and query an OpenSearch instance with SQL queries rather than the usual API.
            
            <br></br>
            <br></br>

            <a className="text-sky-700 hover:border-blue-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="https://github.com/opensearch-project/sql/pulls?q=is%3Apr+is%3Aclosed+author%3AGabeFernandez310">
                Link to merged code
            </a>
          </p>

          <h3 className="mt-2">Key Responsibilities</h3>
          <ul className="ml-8 mt-2 list-disc">
            <li>
              Implemented software features according to community needs to match and improve upon legacy functionality

            </li>
            <li>
              Addressed user issues and bugs by investigating and proposing solutions that satisfied given requirements
            </li>
            <li>
              Used source control to review code, resolve conflicts, and adhere to coding style to maintain software quality
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-opacity-20 bg-slate-500 rounded-xl">
          <h2 className="text-xl">
            MERN Stack Website
          </h2>
          <p className="m-0 text-sm opacity-50">

            MERN Stack Front To Back, Udemy Course

            <br></br>
            <br></br>

            This was a personal project completed as part of a course provided on Udemy. I took this course due to my own desire to learn about fullstack development and better understand the architecture of applications.

          </p>

          <h3 className="mt-2">Key Responsibilities</h3>
          <ul className="ml-8 mt-2 list-disc">
            <li>
              Developed using Express.js and Mongoose.js interacting with MongoDB to create back-end of a web application
            </li>
            <li>
              Utilised Postman to test HTTP request functionality for the back-end
            </li>
            <li>
              Developed front-end of application using React.js, Redux.js, and Axios to create a dynamic UI
            </li>
          </ul>
        </div>
      </section>


    </main>
  );
}

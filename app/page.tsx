import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

        <div className="mb-32 grid items-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
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


      <div id="about_me" className="mt-16 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h3 className="text-xl font-bold">
          About Me
        </h3>

        <div className="ml-4 mt-4">
          <p className="m-0 text-sm opacity-70">
              Hi! If you&apos;re reading this, welcome to my personal page. My name is Gabriel (although more often I go by Gio), and I&apos;m a Software Developer based around Vancouver B.C., Canada.
              This page is still fairly barebones as I&apos;m actively working on it, but more information about me will come soon!
              
              <br>
              </br>
              <br>
              </br>

              Following this is some placeholder text... What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.


          </p>
        </div>
      </div>

      <div id="work_experience" className="mt-16 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h3 className="text-xl font-bold">
          Work Experience
        </h3>

        <div className="ml-4 mt-4">
          <h2 className="text-xl">
            Software Developer I
          </h2>
          <p className="m-0 text-sm opacity-50">
              placeholder description.....Following this is some placeholder text... What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      
              <h3 className="mt-2">Key Responsibilities</h3>
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  list item 1
                </li>
                <li>
                  list item 2
                </li>
                <li>
                  list item 3
                </li>
              </ul>
          </p>
        </div>

        <div className="ml-4 mt-4">
          <h2 className="text-xl">
            Quality Assurance Engineer
          </h2>
          <p className="m-0 text-sm opacity-50">
              placeholder description.....Following this is some placeholder text... What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      
              <h3 className="mt-2">Key Responsibilities</h3>
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  list item 1
                </li>
                <li>
                  list item 2
                </li>
                <li>
                  list item 3
                </li>
              </ul>
          </p>
        </div>
      </div>

      <div id="projects" className="mt-16 mb-32 text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h3 className="text-xl font-bold">
          Projects
        </h3>

        <div className="ml-4 mt-4">
          <h2 className="text-xl">
            OpernSearch SQL Plugin
          </h2>
          <p className="m-0 text-sm opacity-50">
              placeholder description.....Following this is some placeholder text... What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      
              <h3 className="mt-2">Key Responsibilities</h3>
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  list item 1
                </li>
                <li>
                  list item 2
                </li>
                <li>
                  list item 3
                </li>
              </ul>
          </p>
        </div>

        <div className="ml-4 mt-4">
          <h2 className="text-xl">
            MERN Stack Website
          </h2>
          <p className="m-0 text-sm opacity-50">
              placeholder description.....Following this is some placeholder text... What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      
              <h3 className="mt-2">Key Responsibilities</h3>
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  list item 1
                </li>
                <li>
                  list item 2
                </li>
                <li>
                  list item 3
                </li>
              </ul>
          </p>
        </div>
      </div>


    </main>
  );
}

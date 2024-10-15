import { Link as LinkIcon } from "lucide-react";
import CardBtn from "../components/common/cardBtn";
import UrlForm from "../components/urlForm";

const Main = () => {
  return (
    <main className="flex-1">
      <section id="api" className="hero min-h-screen text-base-200 dark:text-base-content dark:bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md p-4 md:p-0">
            <h1 className="text-3xl  md:text-5xl font-bold">Shorten Your URLs with Ease</h1>
            <p className="py-6">
              Our powerful API allows you to create short, memorable links for
              your content in seconds.
            </p>
            <div className="form-control">
            <UrlForm/>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-base-100 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-[#9fafca] text-base-300 dark:text-base-content dark:bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <LinkIcon className="h-12 w-12 mb-2" />
                <h3 className="card-title">Fast & Reliable</h3>
                <p>Generate short links instantly with 99.9% uptime.</p>
              </div>
            </div>
            <div className="card bg-[#9fafca] text-base-300 dark:text-base-content dark:bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <LinkIcon className="h-12 w-12 mb-2" />
                <h3 className="card-title">Custom URLs</h3>
                <p>Create branded short links with your own domain.</p>
              </div>
            </div>
            <div className="card bg-[#9fafca] text-base-300 dark:text-base-content  dark:bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <LinkIcon className="h-12 w-12 mb-2" />
                <h3 className="card-title">Analytics</h3>
                <p>Track clicks and gather insights about your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-12 text-base-200 dark:text-base-content dark:bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-[#9fafca] dark:bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title justify-center">Basic</h3>
                <p className="text-center text-3xl font-bold">
                  $0<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="list-disc list-inside">
                  <li>1,000 short links per month</li>
                  <li>Basic analytics</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                  <CardBtn href='auth/signup' text={'Get Started'}/>
                </div>
              </div>
            </div>
            <div className="card bg-[#9fafca] dark:bg-base-100 dark:text-base-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title justify-center">Pro</h3>
                <p className="text-center text-3xl font-bold">
                  $29<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Unlimited short links</li>
                  <li>Advanced analytics</li>
                  <li>Custom domains</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                <CardBtn href='auth/signup' text={'Get Started'}/>
                </div>
              </div>
            </div>
            <div className="card bg-[#9fafca]  dark:bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title justify-center">Enterprise</h3>
                <p className="text-center text-3xl font-bold">
                  Custom<span className="text-sm font-normal"> pricing</span>
                </p>
                <ul className="list-disc list-inside">
                  <li>Unlimited everything</li>
                  <li>24/7 support</li>
                  <li>API access</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                <CardBtn href='/' text={'Contact Us'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documentation" className="py-12 text-base-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Documentation</h2>
          <article>
            <p className=" text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;

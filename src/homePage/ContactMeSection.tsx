import {
  Button,
  Label,
  List,
  ListItem,
  Textarea,
  TextInput,
} from "flowbite-react";
import { HiMail, HiPhoneIncoming } from "react-icons/hi";
import { HiCheckCircle, HiUserCircle } from "react-icons/hi2";
import HeaderTitle from "../components/HeaderTitle";
import AnimateWhileInView from "../components/AnimateWhileInView";
// import { Field, Label, Switch } from '@headlessui/react'

const ContactMeSection = () => {
  return (
    <AnimateWhileInView transition={1.5} viewport={0.2}>
      <div>
        <div>
          <div className="mb-16">
            <HeaderTitle subTitle="Contact Me" mainTitle="Contact" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="contactus__intro lg:8 flex h-full w-full flex-2/3 flex-col justify-center gap-6 p-4 sm:p-6 dark:bg-gray-800">
              <div>
                <h2 className="text-4xl font-bold text-white sm:text-6xl dark:text-gray-100">
                  100% satisfaction guaranteed
                </h2>
              </div>
              <div>
                <p className="text-xl text-gray-300">
                  Full-stack wizard weaving magic across front and back. I build
                  dynamic, responsive web applications that are as beautiful on
                  the surface as they are powerful under the hood. From
                  pixel-perfect UIs to optimized APIs and databases, I love
                  architecting complete digital products that simply work. Let's
                  build something amazing together.
                </p>
              </div>

              <div className="pl-6 text-gray-700">
                <List>
                  <ListItem icon={HiCheckCircle} className="text-gray-100">
                    React JS
                  </ListItem>
                  <ListItem icon={HiCheckCircle} className="text-gray-100">
                    Node JS
                  </ListItem>
                  <ListItem icon={HiCheckCircle} className="text-gray-100">
                    Express Js for running rhe Back end
                  </ListItem>
                  <ListItem icon={HiCheckCircle} className="text-gray-100">
                    Flowbite for React coponents
                  </ListItem>
                  <ListItem icon={HiCheckCircle} className="text-gray-100">
                    TanStack Query (React-Query)
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="w-full">
              <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-xl sm:mt-20"
              >
                <div className="mb-5 text-center text-4xl font-bold dark:bg-[none] dark:text-gray-200">
                  <h4 className="">Get In Touch</h4>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="">
                    <div className="mb-2 block">
                      <Label htmlFor="firstName">First Name</Label>
                    </div>
                    <TextInput
                      id="firstName"
                      type="text"
                      rightIcon={HiUserCircle}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="LastName">First Name</Label>
                    </div>
                    <TextInput
                      id="LastName"
                      type="text"
                      rightIcon={HiUserCircle}
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mb-2 block">
                      <Label htmlFor="email">Your email</Label>
                    </div>
                    <TextInput
                      id="email"
                      type="email"
                      rightIcon={HiMail}
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mb-2 block">
                      <Label htmlFor="email">Your Pnone Number</Label>
                    </div>
                    <TextInput
                      id="phoneNumber"
                      type="text"
                      rightIcon={HiPhoneIncoming}
                      placeholder="+123 456 7894"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mb-2 block">
                      <Label htmlFor="comment">Your message</Label>
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Leave a comment..."
                      required
                      rows={4}
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    type="submit"
                    color={"dark"}
                    className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold"
                  >
                    Let's talk
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimateWhileInView>
  );
};

export default ContactMeSection;

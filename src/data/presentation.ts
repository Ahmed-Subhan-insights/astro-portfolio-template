type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ehmadsubhan01@gmail.com",
  title: "Hi, I’m Ahmed Subhan 👋",
  // profile: "/profile.webp", // uncomment and set if you add /public/profile.jpg
  description:
    "I’m an ACCA finalist and research analyst interested in financial advisory and portfolio management. Currently exploring opportunities to grow my expertise in a diverse manner.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ahmed-subhan",
    },
    {
      label: "GitHub",
      link: "https://github.com/Ahmed-Subhan-insights",
    }
  ],
};

export default presentation;

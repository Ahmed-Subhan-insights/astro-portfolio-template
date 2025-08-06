export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Projects Coming Soon",
    techs: ["Finance", "Research", "Advisory"],
    link: "#",
    isComingSoon: true,
  },
];

export default projects;

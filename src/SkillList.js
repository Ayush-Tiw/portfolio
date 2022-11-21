import { Skill } from "./Skill";

export function SkillList() {
  const skillList = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      name: "ReactJS",
    },
    {
      image: "https://th.bing.com/th/id/OIP.PHBTJoshbg880IH9z_PB6QHaHa?pid=ImgDet&rs=1",
      name: "Javascript",
    },
    {
      image: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
      name: "HTML",
    },
    {
      image: "https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png",
      name: "CSS",
    },
    {
      image: "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
      name: "NodeJS",
    },
    {
      image: "https://assets.toptal.io/uploads/blog/category/logo/25/express_js.png",
      name: "Express",
    },

    {
      image: "https://mpng.subpng.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg",
      name: "MongoDB",
    },
    {
      image: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-cdb-for-mysql-7.png",
      name: "Mysql",
    },

    {
      image: "https://th.bing.com/th/id/OIP.vz7_8tUPWjssC87owmj88gHaHa?pid=ImgDet&rs=1",
      name: "Netlify",
    },
    {
      image: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg",
      name: "Heroku",
    },
    {
      image: "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
      name: "GitHub",
    },
    {
      image: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
      name: "Bootstrap",
    },
    {
      image: "https://opencollective-production.s3.us-west-1.amazonaws.com/ada636e0-395b-11ea-8ab7-b3f0317bbc7c.png",
      name: "MaterialUI",
    },
    {
      image: "https://images.idgesg.net/images/article/2018/11/aws_logo-100781597-large.jpg",
      name: "AWS",
    },
  ];

  return (
    <div>
      <h2 className="heading">Skills</h2>
      <div className="skill-list-container">
        {skillList.map((skill) => (
          <Skill skill={skill} />
        ))}

      </div>
      <hr></hr>
    </div>

  );
}

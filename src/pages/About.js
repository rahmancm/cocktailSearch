import React from "react";

const About = () => {
  const image = { display: "block" };
  return (
    <section className="section about-section" style={image}>
      <h1 className="section-title"> about page </h1>
      <img
        src="https://res.cloudinary.com/rahmancm/image/upload/v1606332846/Letter_between_friends_f1ohbj.png"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        obcaecati sit, vel voluptatum labore libero numquam id, omnis fuga nulla
        corrupti doloribus in voluptate qui, cum consequatur. Esse, earum ab.
        Lorem ipsum dolor sit <strong>amet</strong> , consectetur adipisicing
        elit. Voluptates qui, nostrum dolores, explicabo quis impedit error
        eligendi non ipsa, ad quasi quidem minus? Corrupti magnam perspiciatis
        cupiditate voluptatibus nesciunt iste?
      </p>
    </section>
  );
};

export default About;

import React from "react";

const Skills = () => {
  return (
    <div class="main-container" id="main-container-skills">
      <div id="heading-container">
        <h1 id="heading-skills">Skills & Technologies</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          et quia modi delectus, sit recusandae esse nostrum. <br></br>
          Dignissimos similique perferendis consequatur non nemo.
        </p>
      </div>
      <div id="list-container">
        <div className="list-column" id="column1">
          <div>
            <span>React</span>
          </div>
          <div>
            <span>Python</span>
          </div>
          <div>
            <span>JavaScript</span>
          </div>
          <div>
            <span>Ipsum</span>
          </div>
        </div>
        <div className="list-column" id="column2">
          <div>
            <span>HTML</span>
          </div>
          <div>
            <span>CSS</span>
          </div>
          <div>
            <span>Lorem</span>
          </div>
          <div>
            <span>Nostrum</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

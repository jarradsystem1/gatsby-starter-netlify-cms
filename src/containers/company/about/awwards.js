import React from "react";
import PropTypes from "prop-types";
import Heading from "../../../components/shared/heading";
import Text from "../../../components/shared/text";
import { AboutSectionWrap, ProjectTypeList } from "./about.stc";

const Awwards = ({ ProjectTypeHeading, ProjectTypeText }) => {
  const featured_work = [
    {
      id: "awwards_work",
      title: "AWWWARDS",
      achivments: ["Winnings 2017-2019", "Nominees 2016-2017"],
    },
    {
      id: "csswinner_work",
      title: "CSSWINNER",
      achivments: ["SOTD - CreativeAgency", "SOTD - TheRNCreative"],
    },
    {
      id: "themeforest_work",
      title: "FEATURES ON ThemeForest",
      achivments: ["Author 2017-2019", "Item 2016-2017"],
    },
    {
      id: "design_awards_work",
      title: "CSS Design Awards",
      achivments: ["Winnings 2015-2016", "Nominees 2016-2017"],
    },
  ];
  const delay = [200];
  return (
    <AboutSectionWrap>
      {featured_work && (
        <div className="row section-pt-md">
          <div className="col-4 offset-1">
            <div className="content row">
              {featured_work.map((work, i) => {
                delay.push(delay[i] + 200);
                return (
                  <div
                    key={work.id}
                    className="col-1 project-type wow fadeInLeft"
                    data-wow-delay={`${delay}ms`}
                    data-wow-duration="1000ms"
                  >
                    {work.title && (
                      <Heading {...ProjectTypeHeading}>{work.title}</Heading>
                    )}
                    {work.achivments && (
                      <ProjectTypeList>
                        {work.achivments.map((achiv, i) => (
                          <li key={`${work.id}-${i}`}>
                            <Text {...ProjectTypeText}>{achiv}</Text>
                          </li>
                        ))}
                      </ProjectTypeList>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </AboutSectionWrap>
  );
};

Awwards.propTypes = {
  HeadingStyle: PropTypes.object,
  TextStyle: PropTypes.object,
};

Awwards.defaultProps = {
  HeadingStyle: {
    fontSize: "40px",
    texttransform: "capitalize",
    lineHeight: "55px",
    color: "primary",
    fontweight: 600,
    responsive: {
      medium: {
        fontSize: "24px",
        lineHeight: "initial",
      },
      small: {
        fontSize: "25px",
        lineHeight: "35px",
      },
    },
  },
  TextStyle: {
    lineHeight: "26px",
  },
  ProjectTypeHeading: {
    as: "h6",
    color: "primary",
    fontSize: "12px",
    fontweight: 700,
    letterspacing: "2px",
    mb: "12px",
  },
  ProjectTypeText: {
    m: 0,
    fontSize: "12px",
    color: "#000000",
    letterspacing: "1px",
  },
};

export default Awwards;

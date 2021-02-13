import { render } from '@testing-library/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProjectData } from '../shared/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faCoffee } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    const [projectId, setId] = useState(0);
    const [projects,setProjects] = useState(ProjectData)

    const RenderProjectDetail = (project) => {
        

        return (
            <div className="ProjectDetail">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <br></br>
                <p>Technologies:{' '}
                    {project.technologies.map(item => <span className="techItem">{item}</span>)}
                </p>
                <br></br>
                <a href={project.link} target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
            </div>
        )
    }

    const RenderProject = projects.map((project, index) => {
        return (
            <li onClick={() => setId(index)} key={index} className="ProjectItem">
                {project.title}
            </li>
        )
    })
    return (
        <ProjectContainer>
            <div className="PageTitle">
                <h1 className="PageTitle">Something I've built: </h1>
            </div>

            <div className="Projects">
                <ProjectList>
                    {RenderProject}
                </ProjectList>
                {RenderProjectDetail(ProjectData[projectId])}
                

            </div>

        </ProjectContainer>
    )
};

export default Projects;

const ProjectContainer = styled.div`
    height:90vh;
    justify-content: center;
    padding-top: 10vh;
    .PageTitle{
        display: flex;
        align-self: start;
        margin-bottom: 3vh;
        color: #3C1874;
    }

    .Projects{
        display: flex;
        div{
            margin-left: 3vw;
            border-radius: 15px;
            padding: 3%;
        }
    }

    .ProjectDetail{
        flex: 2;
        background-color: #EFE6E6;
        height: 45vh;
        overflow: scroll;
        overflow-x: hidden;
        position: relative;
        h1{
            margin-bottom:2vh;
        }
        p{
            line-height: 3vh;
        }

        &::-webkit-scrollbar-thumb
            {
                border-radius: 5px;
                background: #C2BBBB;
            }

        &::-webkit-scrollbar
            {
                position: absolute;
                left: 102px;
                width: 7px;
                max-height: 30vh;
                background-color: none;
            }
        
        &::-webkit-scrollbar-track
        {
            margin-top: 15px;
            margin-bottom: 15px;
            margin-right: 10px;
        }

        .techItem{
            list-style:none;
            margin-right: 10px;
            padding: 3px;
            border-radius: 5%;
            background: #DE354C;
            color: white;
        }
        a{
            text-decoration: none;
        }
    }
`;

const ProjectList = styled.ul`
    flex: 1;

    .ProjectItem {
        background-color: #EFE6E6;
        font-size: 13px;
        font-weight: bold;
        list-style-type: none;
        padding: 3% 7%;
        border-radius: 15px;
        margin-bottom: 6%;
        cursor: pointer;

        .selected{
            color: red;
        }
    }


`;

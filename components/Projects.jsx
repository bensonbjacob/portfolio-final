import React from 'react';
import realtorImg from '../public/assets/projects/property.png';
import restaurantImg from '../public/assets/projects/restaurant.png';
import monstersImg from '../public/assets/projects/monsters.png';
import gutterImg from '../public/assets/projects/gutter.png';
import clientImg from '../public/assets/projects/client.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full px-5'>
      <div className='max-w-[1240px] mx-auto py-16'>
        <p className='text-xl tracking-widest uppercase text-[#4f6d7a]'>
          Projects
        </p>
        <h2 className='py-4'>Things I&#39;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Gutter Estimate Calculator'
            backgroundImg={gutterImg}
            projectUrl='/gutter'
          />
          <ProjectItem
            title='Realtor App'
            backgroundImg={realtorImg}
            projectUrl='/realtor'
          />
          <ProjectItem
            title='Client Management App'
            backgroundImg={clientImg}
            projectUrl='/client'
          />
          <ProjectItem
            title='Restaurant Page'
            backgroundImg={restaurantImg}
            projectUrl='/restaurant'
          />
          <ProjectItem
            title='Monsters Rolodex'
            backgroundImg={monstersImg}
            projectUrl='/monsters'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

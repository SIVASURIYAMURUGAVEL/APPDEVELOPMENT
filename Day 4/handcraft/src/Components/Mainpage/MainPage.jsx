import React from 'react';
import './MainPage.css';
import Project1 from './Project 1.jpg';
import Project2 from './Project 2.jpg';
import Project3 from './Project 3.jpg';
import Project4 from './Project 4.jpg';
import tiptrick1 from './tip&trick1.jpg';
import tiptrick2 from './tip&trick2.jpg';
import tiptrick3 from './tip&trick3.jpg';
import tiptrick4 from './tip&trick4.jpg';
import LoadingPage from '../LoadingPage/LoadingPage';
function MainPage() {
  return (
    <div className="main-page">
        <div className="header">
            <h1>Necessities Optimized for Ultimate Satisfaction</h1>
        </div>
        <div className="featured-projects">
            <h2>Featured Projects</h2>
            <div className='projects'>
              <div className="project-card">
                <img src={Project1} alt="Project 1" />
                <h3>Wall Sconces</h3>
                <p>Easy, fun, and affordable DIY wall sconces with a shelf made out of wood and metal for hanging tea lights by Laci Jane DIY.</p>
              </div>
              <div className="project-card">
                <img src={Project2} alt="Project 2" />
                <h3>TERRACOTTA POT</h3>
                <p>These DIY plant stands are the perfect finishing touch to bring the outside in. Add a bespoke biophilic element to your space with these inspiring ideas.</p>
              </div>
              <div className="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>Terracotta Paint Hack</h3>
                <p>A nifty little trick, via TikTok, to turn mismatched glass, plastic, and ceramic vessels into textural “terracotta” pieces, using just baking soda and paint.</p>
              </div>
              <div className="project-card">
                <img src={Project4} alt="Project 4" />
                <h3>PLANT STAND</h3>
                <p>Build stylish plant stands to hold plant pots of your choice. Saw the legs, put together, stain in shade of your choice.</p>
              </div>
            </div>
        </div>
        <div className="latest-articles">
            <h2>Tips and Tricks</h2>
            <div className='articles'>
              <div className="article-card">
                <img src={tiptrick1}/>
                <h3>When and How to Use Primer</h3>
                <p>Knowing when and how to use primer can be tricky especially if you are a new do it yourself..</p>
              </div>
              <div className="article-card">
                <img src={tiptrick2}/>
                <h3>4 Furniture Cleaning Tips</h3>
                <p>Did you know that a dirty kitchen and a grimy bathroom are the biggest turns-offs for prospective buyers? Right move has revealed that grubby kitchen units,..</p>
              </div>
              <div className="article-card">
                <img src={tiptrick3}/>
                <h3>Top Ten Wood Glues</h3>
                <p>Being a professional Crafter for over ten years now, I have tried several types of wood glue. I thought I’d put tog craft projects. This list also includes helpful . Here we go!</p>
              </div>
              <div className="article-card">
                <img src={tiptrick4}/>
                <h3>Top 7 Tips to Organize Your Bedroom</h3>
                <p>New year new you! It’s time to start fresh and get organized. Here are some top tips your bedroom.</p>
              </div>
            </div>
        </div>
      
    </div>
  );
}
export default LoadingPage(MainPage);
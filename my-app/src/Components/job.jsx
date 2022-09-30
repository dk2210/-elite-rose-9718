import { Link } from 'react-router-dom';

function Job () {
    return (
        <div>

        <div style={{width: '45%', textAlign: 'left',margin: '2% auto auto 5%',display: 'grid', justifyContent: 'flex-start'}}>
            <div>
                    <img src="https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/517/600/resized/fathom_1560285751.png?1640815659" alt="No-Internet logo" />
            </div>
            <h1 style={{margin: '1% 0px 0px 0px'}}>Senior Software Engineer</h1>
            <p style={{margin: '1% 0px 0px 0px'}}>at FATHOM <Link style={{margin: '0px 0px 0px 1%', color: 'blue'}} to='/career'>(view all jobs)</Link></p>
            <div style={{margin: '1% 0px 2% 0px'}}>
                <p>Fathom is on a mission to understand and structure the world’s medical data. We are a venture-backed company with an engineering team out of organizations like Google, Facebook, and Twitch. We are starting by using NLP deep learning to structure the data contained within physician notes to automate medical coding, a process performed by 125,000 FTEs that costs the US healthcare system over $15B annually.</p>
            </div>

            <div style={{ margin: '1% 0px 2% 0px'}}>
                <p>Are you passionate about machine learning and looking for an opportunity to make an impact in healthcare? We are seeking an extraordinary Software Engineer, Machine Learning in the New York area who can not only design machine-based systems, but also think creatively about the human interactions necessary to augment and train those systems. We want to work with teammates excited about taking ground-breaking technologies and techniques to apply to one of the most important and most archaic industries. This is an opportunity to join our team and mission to understand and structure the world’s medical data, starting by making sense of the terabytes of clinician notes contained within the electronic health records of health systems.</p>
            </div>

            <div>
                <h2>Your role and responsibilities will include:</h2>
                <ul>
                    <li>Developing NLP systems that help us structure and understand biomedical information and patient records</li>
                    <li>Using a variety of structured and unstructured data sources</li>
                    <li>Imagining and implementing creative data-acquisition and labeling systems, using tools and techniques like crowdsourcing and novel active learning approaches</li>
                    <li>Working with the latest NLP approaches (BERT, Transformer)</li>
                    <li>Training your models at scale (Horovod, Nvidia v100s)</li>
                    <li>Employing and iterating on scalable and novel machine learning pipelines (Airflow on Kubernetes)</li>
                    <li>Reading and integrating state of the art techniques into Fathom’s ML infrastructure such as Mixed Precision on Transformer networks</li>
                </ul>
            </div>

            <div>
                <h2>We are looking for a teammate with:</h2>
                <ul>
                    <li>2+ years of development experience in a company/production setting</li>
                    <li>Experience with deep learning frameworks like TensorFlow or PyTorch</li>
                    <li>Industry or academic experience working on a range of ML problems, particularly NLP</li>
                    <li>Strong software development skills, with a focus on building sound and scalable ML</li>
                    <li>A real passion for finding, analyzing, and incorporating the latest research, technologies and techniques directly into a production environment</li>
                    <li>Good intuition for understanding what good research looks like, and where we should focus effort to maximize outcomes</li>
                </ul>
            </div>

            <div>
                <h2>Bonus points if you have:</h2>
                <ul>
                    <li>Developed and improved core NLP components and not by just 'grabbing things off the shelf'</li>
                    <li>Led large-scale crowd-sourcing data labeling and acquisition (Amazon Turk, Crowdflower, etc.)</li>
                </ul>
            </div>

            <div style={{ width: '80%', margin: 'auto',backgroundColor: 'whitesmoke', padding: '20px'}}>
                <h2>Apply for this job</h2>
                <form style={{margin: '0px 0px 0px 8%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <label style={{margin: '0px 3% 0px 0px '}}>First Name:</label>
                    <input style={{width:'60%'}} type="text" placeholder='enter your name' /><br></br>

                    <label style={{margin: '0px 3% 0px 0px '}}>Last Name:</label>
                    <input style={{width: '60%'}} type="text" placeholder='enter last name' /><br></br>

                    <label style={{margin: '0px 3% 0px 0px '}}>Email:</label>
                    <input style={{width: '60%'}} type="text" placeholder='enter email' /><br></br>

                    <label style={{margin: '0px 3% 0px 0px '}}>Phone:</label>
                    <input style={{width: '60%'}} type="text" placeholder='enter phone' /><br></br>

                    <label style={{margin: '0px 3% 0px 0px '}}>Resume:</label>
                    <input  type="file" /><br></br>

                    <label style={{margin: '0px 3% 0px 0px '}}>CoverLetter:</label>
                    <input  type="file" /><br></br>
                    
                    <p style={{borderBottom: '0.5px solid lightgray',width: '100%', margin: '0px auto 10px -20px'}}></p>
                
                    <label style={{margin: '0px 3% 0px 0px '}}>Linkdin Profile:</label>
                    <input style={{width: '60%'}} type="text" placeholder='enter profile URL' /><br></br>

                    <label style={{margin: '0px 3% 0px 0px '}}>Website:</label>
                    <input style={{width: '60%'}} type="text" placeholder='enter your website' /><br></br>

                    <input style={{width: '70%',margin: 'auto auto 5% 10%', padding: '15px 25px', border: 'none',color: 'white',borderRadius: '15px',backgroundColor: 'blue'}} type="submit" value={'SUBMIT'} />

                </form>
            </div>


        </div>

            <div style={{height: '120px',backgroundColor: '#eee', width: '100%',margin: '10px 0px 0px 0px', border: '1px solid grey'}}>
                    <div style={{display: 'flex',margin: '5px auto auto auto', width: '30%',height: '50px', justifyContent: 'center', alignItems: 'center'}}>
                        <p style={{fontSize: '20px'}}>Powered by</p>
                        <div style={{width: '100px', height: '20px',display: 'flex', margin: '2% 0px 0px 0px'}}>
                        <img style={{width: '100%', height: '100%'}} src="https://boards.cdn.greenhouse.io/assets/greenhouse-in-app-logo-green-236d994ee39682bb46e214901c264de0df582c97e949e7c854c3531b79f00240.svg" alt="smalllogo" />
                        </div>
                    </div>
                        <p style={{fontSize: '12px', margin: '2% 0px'}}>Read our <span style={{color: 'blue', fontWeight: '550'}}>Privacy Policy</span></p>
            </div>

        </div>
    )
}

export default Job ;
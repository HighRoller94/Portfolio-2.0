
import Image from 'next/image';

import ProjectNewStyles from '../../../styles/components/ProjectNew.module.scss';
import { useInView } from 'react-intersection-observer';

import { ImGithub } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';

function ProjectNew({ data, setModalData, handleModal, title, type, desc, image, gitLink, siteLink, languages, offsetY }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <>
            <div ref={ref} className={inView ? `${ProjectNewStyles.project} showProject` : `${ProjectNewStyles.project} hideProject`}>
                <div className={`${ProjectNewStyles.projectImage} projectImage`} onClick={() => {
                    setModalData(data)
                    handleModal()
                }}>
                    <Image
                        src={`/images/${image}`}
                        alt="Project Image"
                        fill
                    />
                </div>
                {/* <div className={ProjectStyles.projectText}>
                    <h4>{type}</h4>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <div className={ProjectStyles.projectLanguages}>
                        {languages.map((language, index) => (
                            <span key={index}>{language}</span>
                        ))}
                    </div>
                    <div className={ProjectStyles.btns}>
                        <a className="link" href={siteLink} target="_blank" rel="noreferrer">
                            <button className={`${ProjectStyles.siteBtn} focus`}>
                                <BiWorld className={ProjectStyles.icon} />
                                Live Site
                            </button>
                        </a>
                        <a className="link" href={gitLink} target="_blank" rel="noreferrer">
                            <button className={`${ProjectStyles.gitBtn} focus`}>
                                <ImGithub className={ProjectStyles.icon} />
                                View Code
                            </button>
                        </a>
                    </div>
                </div> */}
            </div>

        </>


    )
}

export default ProjectNew

import { Grid } from '@mui/material'
import './Styles/About.css'
import { useState, useEffect } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader';

const About = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    return (
        <>
        {loading ? (
                <div className='loader'>
                    <PacmanLoader
                        loading={loading}
                        size={50}
                        color={'#F8E71C'}>
                    </PacmanLoader>
                </div>
            ) : (
                <div>
                        <h1 style={{ color: "white", fontSize: '50px' }}>ABOUT THE PROJECT</h1>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <div className='about-image'>
                                    <img src='../dionysus_98.png' alt='dionysus-98'></img>
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className='about-text'>
                                    <div>
                                        <q>"I am Dionysus, the son of Zeus,
                                            come back to Thebes, this land where I was born.
                                            My Mother was Cadmus' daughter, Semele by name,
                                            midwived by fire, delivered by the lightning's
                                            blast."</q>
                                    </div>
                                    <div>
                                        <p>Our shop, like the God of creativity, wine and ecstasy, is aimed at those people who want to experience the Dionysian mysteries, get lost in the visceral immanence of the virtual cosmos and venture into inhospitable lands far from concrete jungles and the bleak reality</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                </div>
            )}
        </>
    )
}
export default About
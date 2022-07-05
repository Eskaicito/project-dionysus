import { Grid } from '@mui/material'
import './Styles/About.css'

const About = () => {
    return (
        <>
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
        </>
    )
}
export default About